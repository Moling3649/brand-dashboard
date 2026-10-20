# -*- coding: utf-8 -*-
"""
行业公众号资讯（wechatNews.items）一个月窗口裁剪脚本。

规则（与用户需求 2026-10-20 对齐）：
  「仅保留一个月内内容，超出一个月内容需进行删除处理」：
  以每条资讯的发布日 date（格式 MM-DD，按当前年份 2026 解析）为"新鲜度"信号，
  保留窗口 = [今天-30天, 今天]（含边界）；窗口之外（早于今天-30天）的条目删除。
  无法解析日期者保守保留。
  说明：accounts（9 个监测源清单）属于来源列表、非时间内容，保持不变。

用法：
  python prune_wechat_news.py                 # 以当前 GMT+8 日期为准，原地写回 data.js
  TODAY=10-20 python prune_wechat_news.py     # 指定"今天"（用于历史重放/测试）
  DRY=1 python prune_wechat_news.py           # 仅打印，不写文件
环境变量 DATA_PATH 可选（默认 D:/workbuddy/brand-dashboard/data.js）。
"""
import os, sys, json, re, datetime
from datetime import timezone, timedelta

PREFIX = "var DASH_DATA = "
PATH = os.environ.get("DATA_PATH", "D:/workbuddy/brand-dashboard/data.js")
if not os.path.exists(PATH):
    alt = "/workspace/brand-dashboard/data.js"
    if os.path.exists(alt):
        PATH = alt

WINDOW_DAYS = 30

# ---- 解析"今天" ----
tz8 = timezone(timedelta(hours=8))
today_override = os.environ.get("TODAY", "").strip()
if today_override:
    m = re.match(r"^(\d{1,2})-(\d{1,2})$", today_override)
    TODAY = datetime.datetime(2026, int(m.group(1)), int(m.group(2)), 0, 0, 0, tzinfo=tz8)
else:
    TODAY = datetime.datetime.now(tz8).replace(hour=0, minute=0, second=0, microsecond=0)
CUT = TODAY - timedelta(days=WINDOW_DAYS)


def date_to_date(d):
    if not d:
        return None
    mm = re.match(r"^(\d{1,2})-(\d{1,2})$", str(d).strip())
    if not mm:
        return None
    return datetime.datetime(2026, int(mm.group(1)), int(mm.group(2)), 0, 0, 0, tzinfo=tz8)


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

    wn = data.get("wechatNews", {})
    items = wn.get("items", [])
    keep, drop = [], []
    for it in items:
        dt = date_to_date(it.get("date"))
        if dt is None:
            keep.append(it)  # 无法解析保守保留
        elif dt < CUT:
            drop.append(it)
        else:
            keep.append(it)

    print("今天(基准):", TODAY.strftime("%Y-%m-%d"), " 裁剪起点:", CUT.strftime("%Y-%m-%d"))
    print("wechatNews.items 总数:", len(items), " 保留:", len(keep), " 删除:", len(drop))
    print("accounts(监测源)保持不变:", len(wn.get("accounts", [])))
    if drop:
        print("--- 将被删除 ---")
        for it in sorted(drop, key=lambda x: x.get("date") or ""):
            print("  [%s] %s | %s" % (it.get("date"), it.get("accountName") or it.get("accountId"), it.get("title")))

    if os.environ.get("DRY") == "1":
        print("[DRY] 未写文件")
        return

    wn["items"] = keep
    note = ("[2026-%s 裁剪] 行业公众号资讯仅保留近%d天内容（%s 起），更早条目已删除，"
            "本次保留 %d / 原 %d 条；accounts 监测源清单不变。"
            % (TODAY.strftime("%m-%d"), WINDOW_DAYS, CUT.strftime("%Y-%m-%d"), len(keep), len(items)))
    prev = data.get("dataNote", "")
    if note not in prev:
        data["dataNote"] = note + prev

    out = PREFIX + json.dumps(data, ensure_ascii=False, indent=2) + ";"
    open(PATH, "w", encoding="utf-8").write(out)
    json.loads(out[len(PREFIX):].rstrip(";"))  # 复校验
    print("WROTE", PATH, "| 校验通过 | wechatNews.items=%d" % len(keep))


if __name__ == "__main__":
    main()
