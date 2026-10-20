# -*- coding: utf-8 -*-
"""
营销动作监测（campaigns）一个月窗口裁剪脚本。

规则（与用户需求 2026-10-20 对齐）：
  1) 「仅保留一个月内相关讯息」：以每条 campaign 的最后监测刷新日 updatedDate
     （格式 MM-DD，按当前年份 2026 解析）为"新鲜度"信号，保留窗口 = [今天-30天, 今天]。
     - 已结束 且 updatedDate 早于窗口起点  -> 删除（已超过一个月，属历史）。
  2) 「已结束且无大量负面反馈的活动可提前删除」：
     - 已结束 且 在窗口内 且 sentiment 非 {负面,争议} -> 删除（已完结且无异议，提前清理）。
     - 已结束 且 在窗口内 且 sentiment ∈ {负面,争议} -> 保留（有负面/争议反馈，监测值得保留）。
  3) 进行中 -> 始终保留（仍在执行的营销动作即属"当前"相关讯息，不受 30 天限制）。
  4) 状态字段缺失/未知 -> 保守保留。

说明：原始 window 字段格式混乱（至/起/发售中/进行中/缺年份混排），不可靠，故统一以
updatedDate + status + sentiment 三个干净字段判定，结果可解释、可复核。

用法：
  python prune_campaigns.py                 # 以当前 GMT+8 日期为准，原地写回 data.js
  TODAY=10-20 python prune_campaigns.py     # 指定"今天"（用于历史重放/测试）
  DRY=1 python prune_campaigns.py           # 仅打印，不写文件
环境变量 GITHUB_REPO / GITHUB_BRANCH 可选（默认 moling3649/brand-dashboard / main）。
"""
import os, sys, json, datetime
from datetime import timezone, timedelta

PREFIX = "var DASH_DATA = "
PATH = os.environ.get("DATA_PATH", "D:/workbuddy/brand-dashboard/data.js")
# 云端纯运行环境路径（自动化在 /workspace/brand-dashboard 克隆后调用时覆盖 DATA_PATH 即可）
if not os.path.exists(PATH):
    alt = "/workspace/brand-dashboard/data.js"
    if os.path.exists(alt):
        PATH = alt

NOTABLE = {"负面", "争议"}
WINDOW_DAYS = 30

# ---- 解析"今天" ----
tz8 = timezone(timedelta(hours=8))
today_override = os.environ.get("TODAY", "").strip()
if today_override:
    m = __import__("re").match(r"^(\d{1,2})-(\d{1,2})$", today_override)
    TODAY = datetime.datetime(2026, int(m.group(1)), int(m.group(2)), 0, 0, 0, tzinfo=tz8)
else:
    TODAY = datetime.datetime.now(tz8).replace(hour=0, minute=0, second=0, microsecond=0)
CUT = TODAY - timedelta(days=WINDOW_DAYS)


def ud_to_date(u):
    if not u:
        return None
    mm = __import__("re").match(r"^(\d{1,2})-(\d{1,2})$", str(u).strip())
    if not mm:
        return None
    return datetime.datetime(2026, int(mm.group(1)), int(mm.group(2)), 0, 0, 0, tzinfo=tz8)


def decide(c):
    status = (c.get("status") or "").strip()
    if status == "进行中":
        return True, "进行中(始终保留)"
    if status == "已结束":
        ud = ud_to_date(c.get("updatedDate"))
        if ud is None or ud < CUT:
            return False, "已结束-超%d天(历史)" % WINDOW_DAYS
        if c.get("sentiment") in NOTABLE:
            return True, "已结束-窗口内-有负面/争议(保留)"
        return False, "已结束-窗口内-无负面(提前删)"
    return True, "状态未知(保守保留)"


def main():
    if not os.path.exists(PATH):
        print("ERROR: 找不到 data.js:", PATH)
        sys.exit(1)
    raw = open(PATH, encoding="utf-8").read()
    assert raw.startswith(PREFIX), "data.js 格式异常"
    j = raw[len(PREFIX):].rstrip()
    if j.endswith(";"):
        j = j[:-1]
    data = json.loads(j)

    cs = data.get("campaigns", [])
    keep, drop = [], []
    reasons = {}
    for c in cs:
        ok, reason = decide(c)
        reasons[id(c)] = reason
        (keep if ok else drop).append(c)

    print("今天(基准):", TODAY.strftime("%Y-%m-%d"), " 裁剪起点:", CUT.strftime("%Y-%m-%d"))
    print("campaigns 总数:", len(cs), " 保留:", len(keep), " 删除:", len(drop))
    if drop:
        print("--- 将被删除 ---")
        for c in drop:
            print("  [%s] %s | window=%s | updatedDate=%s | sentiment=%s"
                  % (c.get("status"), c.get("name"), c.get("window"), c.get("updatedDate"), c.get("sentiment")))

    if os.environ.get("DRY") == "1":
        print("[DRY] 未写文件")
        return

    data["campaigns"] = keep
    # 记录到 dataNote（保留既有说明，前缀本次裁剪）
    kept_ids = [c.get("id") for c in keep if c.get("id")]
    note = ("[2026-%s 裁剪] 营销动作监测仅保留一个月内相关讯息：进行中活动全部保留；"
            "已结束且超过%d天或无大量负面反馈者已提前清理，本次保留 %d / 原 %d 条。"
            % (TODAY.strftime("%m-%d"), WINDOW_DAYS, len(keep), len(cs)))
    prev = data.get("dataNote", "")
    if note not in prev:
        data["dataNote"] = note + prev

    out = PREFIX + json.dumps(data, ensure_ascii=False, indent=2) + ";"
    open(PATH, "w", encoding="utf-8").write(out)
    # 复校验
    json.loads(out[len(PREFIX):].rstrip(";"))
    print("WROTE", PATH, "| 校验通过 | campaigns=%d" % len(keep))


if __name__ == "__main__":
    main()
