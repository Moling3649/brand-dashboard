// 品牌资讯热度看板 · 数据文件
// 更新方式：由每日定时任务自动搜索更新；也可手动让助手更新
// 字段说明：
//   brands[].soc   社媒声量指数(0-100，基于公开报道/榜单估算)
//   brands[].sales 销售转化指数(0-100，基于财报/榜单/公开数据估算)
//   brands[].news  资讯热度指数(0-100，当日资讯条数与热度)
//   热度指数 = 0.5*soc + 0.3*sales + 0.2*news（由页面自动计算）
//   trend 近7日热度（09-04之前为估算基线，之后逐日累积真实数据）

const DASH_DATA = {
  "version": 2,
  "date": "2026-09-09",
  "updatedAt": "2026-09-09 08:30",
  "trendDates": [
    "09-03",
    "09-04",
    "09-05",
    "09-06",
    "09-07",
    "09-08",
    "09-09"
  ],
  "dataNote": "声量/转化指数基于公开财报、行业榜单与媒体报道估算，非平台官方实时数据；历史趋势为估算基线，自上线日起逐日累积。",
  "categories": [
    {
      "id": "apparel",
      "name": "休闲鞋服",
      "color": "#2563eb"
    },
    {
      "id": "food",
      "name": "茶饮零食糕点",
      "color": "#ea580c"
    },
    {
      "id": "ip",
      "name": "文创",
      "color": "#9333ea"
    },
    {
      "id": "daily",
      "name": "日用",
      "color": "#0d9488"
    },
    {
      "id": "beauty",
      "name": "彩妆护肤",
      "color": "#db2777"
    }
  ],
  "topBrandId": "popmart",
  "brands": [
    {
      "id": "anta",
      "name": "安踏",
      "cat": "apparel",
      "soc": 91,
      "sales": 90,
      "news": 88,
      "delta": 1,
      "trend": [
        86,
        87,
        88,
        89,
        89,
        89,
        90
      ]
    },
    {
      "id": "lululemon",
      "name": "lululemon",
      "cat": "apparel",
      "soc": 86,
      "sales": 68,
      "news": 92,
      "delta": 0,
      "trend": [
        85,
        82,
        82,
        83,
        82,
        82,
        82
      ]
    },
    {
      "id": "lining",
      "name": "李宁",
      "cat": "apparel",
      "soc": 82,
      "sales": 82,
      "news": 82,
      "delta": 0,
      "trend": [
        79,
        79,
        81,
        81,
        81,
        82,
        82
      ]
    },
    {
      "id": "nike",
      "name": "耐克",
      "cat": "apparel",
      "soc": 81,
      "sales": 72,
      "news": 89,
      "delta": 2,
      "trend": [
        77,
        76,
        76,
        77,
        78,
        78,
        80
      ]
    },
    {
      "id": "fila",
      "name": "斐乐 FILA",
      "cat": "apparel",
      "soc": 73,
      "sales": 76,
      "news": 68,
      "delta": 0,
      "trend": [
        71,
        71,
        73,
        73,
        73,
        73,
        73
      ]
    },
    {
      "id": "adidas",
      "name": "阿迪达斯",
      "cat": "apparel",
      "soc": 72,
      "sales": 74,
      "news": 70,
      "delta": 0,
      "trend": [
        69,
        69,
        72,
        72,
        72,
        72,
        72
      ]
    },
    {
      "id": "nb",
      "name": "新百伦",
      "cat": "apparel",
      "soc": 66,
      "sales": 68,
      "news": 56,
      "delta": 0,
      "trend": [
        64,
        64,
        65,
        65,
        65,
        65,
        65
      ]
    },
    {
      "id": "361",
      "name": "361度",
      "cat": "apparel",
      "soc": 62,
      "sales": 68,
      "news": 66,
      "delta": 0,
      "trend": [
        64,
        65,
        65,
        65,
        65,
        65,
        65
      ]
    },
    {
      "id": "xtep",
      "name": "特步",
      "cat": "apparel",
      "soc": 60,
      "sales": 65,
      "news": 64,
      "delta": 0,
      "trend": [
        62,
        62,
        62,
        62,
        62,
        62,
        62
      ]
    },
    {
      "id": "warrior",
      "name": "回力",
      "cat": "apparel",
      "soc": 55,
      "sales": 58,
      "news": 45,
      "delta": 0,
      "trend": [
        53,
        53,
        54,
        54,
        54,
        54,
        54
      ]
    },
    {
      "id": "wanke",
      "name": "顽刻 Ollieskate",
      "cat": "apparel",
      "soc": 58,
      "sales": 64,
      "news": 44,
      "delta": 0,
      "trend": [
        57,
        57,
        58,
        58,
        57,
        57,
        57
      ]
    },
    {
      "id": "ripstar",
      "name": "RIPSTAR 爆炸星",
      "cat": "apparel",
      "soc": 62,
      "sales": 56,
      "news": 55,
      "delta": 1,
      "trend": [
        57,
        57,
        58,
        59,
        58,
        58,
        59
      ]
    },
    {
      "id": "hbd",
      "name": "happybirdsday",
      "cat": "apparel",
      "soc": 57,
      "sales": 54,
      "news": 51,
      "delta": 1,
      "trend": [
        53,
        54,
        55,
        56,
        54,
        54,
        55
      ]
    },
    {
      "id": "kaalixto",
      "name": "kaalixto",
      "cat": "apparel",
      "soc": 48,
      "sales": 46,
      "news": 42,
      "delta": 0,
      "trend": [
        47,
        47,
        47,
        48,
        46,
        46,
        46
      ]
    },
    {
      "id": "weflower",
      "name": "WEFLOWER",
      "cat": "apparel",
      "soc": 46,
      "sales": 44,
      "news": 42,
      "delta": 0,
      "trend": [
        45,
        46,
        46,
        46,
        46,
        45,
        45
      ]
    },
    {
      "id": "matnut",
      "name": "MATNUT",
      "cat": "apparel",
      "soc": 44,
      "sales": 42,
      "news": 44,
      "delta": 0,
      "trend": [
        43,
        44,
        44,
        44,
        44,
        43,
        43
      ]
    },
    {
      "id": "wanderaround",
      "name": "Wander Around 漫行",
      "cat": "apparel",
      "soc": 42,
      "sales": 40,
      "news": 38,
      "delta": 0,
      "trend": [
        41,
        41,
        42,
        42,
        41,
        41,
        41
      ]
    },
    {
      "id": "smilerepublic",
      "name": "SMILEREPUBLIC",
      "cat": "apparel",
      "soc": 51,
      "sales": 48,
      "news": 47,
      "delta": 0,
      "trend": [
        48,
        49,
        49,
        50,
        49,
        49,
        49
      ]
    },
    {
      "id": "mixue",
      "name": "蜜雪冰城",
      "cat": "food",
      "soc": 94,
      "sales": 91,
      "news": 86,
      "delta": -1,
      "trend": [
        92,
        92,
        92,
        92,
        92,
        92,
        92
      ]
    },
    {
      "id": "luckin",
      "name": "瑞幸咖啡",
      "cat": "food",
      "soc": 93,
      "sales": 89,
      "news": 93,
      "delta": 1,
      "trend": [
        88,
        88,
        89,
        89,
        91,
        91,
        92
      ]
    },
    {
      "id": "bawang",
      "name": "霸王茶姬",
      "cat": "food",
      "soc": 87,
      "sales": 75,
      "news": 86,
      "delta": 1,
      "trend": [
        81,
        81,
        82,
        82,
        82,
        82,
        83
      ]
    },
    {
      "id": "starbucks",
      "name": "星巴克",
      "cat": "food",
      "soc": 78,
      "sales": 74,
      "news": 78,
      "delta": 0,
      "trend": [
        77,
        77,
        77,
        77,
        77,
        77,
        77
      ]
    },
    {
      "id": "heytea",
      "name": "喜茶",
      "cat": "food",
      "soc": 76,
      "sales": 70,
      "news": 71,
      "delta": 0,
      "trend": [
        73,
        73,
        73,
        73,
        73,
        73,
        73
      ]
    },
    {
      "id": "guming",
      "name": "古茗",
      "cat": "food",
      "soc": 71,
      "sales": 78,
      "news": 74,
      "delta": 0,
      "trend": [
        72,
        73,
        73,
        73,
        73,
        74,
        74
      ]
    },
    {
      "id": "songsu",
      "name": "三只松鼠",
      "cat": "food",
      "soc": 71,
      "sales": 70,
      "news": 77,
      "delta": 0,
      "trend": [
        72,
        72,
        72,
        72,
        72,
        72,
        72
      ]
    },
    {
      "id": "nayuki",
      "name": "奈雪的茶",
      "cat": "food",
      "soc": 68,
      "sales": 60,
      "news": 72,
      "delta": 0,
      "trend": [
        66,
        66,
        66,
        66,
        66,
        66,
        66
      ]
    },
    {
      "id": "liangpin",
      "name": "良品铺子",
      "cat": "food",
      "soc": 64,
      "sales": 62,
      "news": 66,
      "delta": 0,
      "trend": [
        65,
        65,
        64,
        64,
        64,
        64,
        64
      ]
    },
    {
      "id": "luxihe",
      "name": "泸溪河",
      "cat": "food",
      "soc": 62,
      "sales": 62,
      "news": 64,
      "delta": 0,
      "trend": [
        62,
        62,
        62,
        62,
        62,
        62,
        62
      ]
    },
    {
      "id": "baoshifu",
      "name": "鲍师傅",
      "cat": "food",
      "soc": 58,
      "sales": 60,
      "news": 58,
      "delta": 0,
      "trend": [
        58,
        58,
        59,
        59,
        59,
        59,
        59
      ]
    },
    {
      "id": "cuishengsheng",
      "name": "脆升升",
      "cat": "food",
      "soc": 70,
      "sales": 68,
      "news": 74,
      "delta": 0,
      "trend": [
        64,
        66,
        69,
        71,
        70,
        70,
        70
      ]
    },
    {
      "id": "popmart",
      "name": "泡泡玛特",
      "cat": "ip",
      "soc": 97,
      "sales": 94,
      "news": 98,
      "delta": 0,
      "trend": [
        95,
        97,
        97,
        97,
        96,
        96,
        96
      ]
    },
    {
      "id": "blokees",
      "name": "布鲁可",
      "cat": "ip",
      "soc": 80,
      "sales": 74,
      "news": 80,
      "delta": 1,
      "trend": [
        78,
        77,
        77,
        77,
        76,
        77,
        78
      ]
    },
    {
      "id": "toptoy",
      "name": "TOP TOY",
      "cat": "ip",
      "soc": 75,
      "sales": 72,
      "news": 76,
      "delta": 0,
      "trend": [
        71,
        72,
        74,
        74,
        74,
        74,
        74
      ]
    },
    {
      "id": "kayou",
      "name": "卡游",
      "cat": "ip",
      "soc": 72,
      "sales": 70,
      "news": 74,
      "delta": 0,
      "trend": [
        71,
        71,
        71,
        71,
        72,
        72,
        72
      ]
    },
    {
      "id": "disney",
      "name": "迪士尼(中国)",
      "cat": "ip",
      "soc": 70,
      "sales": 68,
      "news": 50,
      "delta": 0,
      "trend": [
        64,
        64,
        65,
        65,
        65,
        65,
        65
      ]
    },
    {
      "id": "jellycat",
      "name": "Jellycat",
      "cat": "ip",
      "soc": 66,
      "sales": 60,
      "news": 48,
      "delta": 0,
      "trend": [
        59,
        59,
        60,
        61,
        61,
        61,
        61
      ]
    },
    {
      "id": "sanrio",
      "name": "三丽鸥",
      "cat": "ip",
      "soc": 62,
      "sales": 58,
      "news": 46,
      "delta": 0,
      "trend": [
        57,
        57,
        58,
        58,
        58,
        58,
        58
      ]
    },
    {
      "id": "gugong",
      "name": "故宫文创",
      "cat": "ip",
      "soc": 60,
      "sales": 56,
      "news": 44,
      "delta": 0,
      "trend": [
        55,
        55,
        56,
        56,
        56,
        56,
        56
      ]
    },
    {
      "id": "52toys",
      "name": "52TOYS",
      "cat": "ip",
      "soc": 55,
      "sales": 52,
      "news": 52,
      "delta": 0,
      "trend": [
        53,
        53,
        53,
        53,
        54,
        54,
        54
      ]
    },
    {
      "id": "chenguang",
      "name": "晨光文具",
      "cat": "ip",
      "soc": 50,
      "sales": 60,
      "news": 42,
      "delta": 0,
      "trend": [
        51,
        51,
        51,
        51,
        51,
        51,
        51
      ]
    },
    {
      "id": "miniso",
      "name": "名创优品",
      "cat": "daily",
      "soc": 92,
      "sales": 88,
      "news": 91,
      "delta": -1,
      "trend": [
        89,
        90,
        91,
        90,
        90,
        91,
        91
      ]
    },
    {
      "id": "purcotton",
      "name": "全棉时代",
      "cat": "daily",
      "soc": 66,
      "sales": 68,
      "news": 62,
      "delta": 0,
      "trend": [
        65,
        66,
        66,
        66,
        66,
        66,
        66
      ]
    },
    {
      "id": "bluemoon",
      "name": "蓝月亮",
      "cat": "daily",
      "soc": 62,
      "sales": 72,
      "news": 58,
      "delta": 0,
      "trend": [
        62,
        62,
        64,
        64,
        64,
        64,
        64
      ]
    },
    {
      "id": "liby",
      "name": "立白",
      "cat": "daily",
      "soc": 60,
      "sales": 71,
      "news": 58,
      "delta": 0,
      "trend": [
        60,
        60,
        61,
        61,
        61,
        63,
        63
      ]
    },
    {
      "id": "muji",
      "name": "无印良品",
      "cat": "daily",
      "soc": 65,
      "sales": 62,
      "news": 58,
      "delta": 0,
      "trend": [
        59,
        59,
        63,
        63,
        63,
        63,
        63
      ]
    },
    {
      "id": "banain",
      "name": "蕉内",
      "cat": "daily",
      "soc": 58,
      "sales": 60,
      "news": 44,
      "delta": 0,
      "trend": [
        55,
        55,
        56,
        56,
        56,
        56,
        56
      ]
    },
    {
      "id": "vinda",
      "name": "维达",
      "cat": "daily",
      "soc": 48,
      "sales": 60,
      "news": 42,
      "delta": 0,
      "trend": [
        50,
        50,
        50,
        50,
        50,
        50,
        50
      ]
    },
    {
      "id": "mindup",
      "name": "心相印",
      "cat": "daily",
      "soc": 46,
      "sales": 58,
      "news": 40,
      "delta": 0,
      "trend": [
        48,
        48,
        48,
        48,
        48,
        48,
        48
      ]
    },
    {
      "id": "safeguard",
      "name": "舒肤佳",
      "cat": "daily",
      "soc": 52,
      "sales": 62,
      "news": 40,
      "delta": 0,
      "trend": [
        51,
        51,
        53,
        53,
        53,
        53,
        53
      ]
    },
    {
      "id": "chaoneng",
      "name": "超能",
      "cat": "daily",
      "soc": 45,
      "sales": 58,
      "news": 40,
      "delta": 0,
      "trend": [
        47,
        47,
        48,
        48,
        48,
        48,
        48
      ]
    },
    {
      "id": "skii",
      "name": "SK-II",
      "cat": "beauty",
      "soc": 70,
      "sales": 60,
      "news": 82,
      "delta": 0,
      "trend": [
        66,
        67,
        68,
        69,
        70,
        69,
        69
      ]
    },
    {
      "id": "proya",
      "name": "珀莱雅",
      "cat": "beauty",
      "soc": 78,
      "sales": 76,
      "news": 80,
      "delta": 0,
      "trend": [
        73,
        74,
        75,
        76,
        77,
        79,
        78
      ]
    },
    {
      "id": "florasis",
      "name": "花西子",
      "cat": "beauty",
      "soc": 74,
      "sales": 66,
      "news": 76,
      "delta": 0,
      "trend": [
        69,
        70,
        71,
        72,
        73,
        75,
        72
      ]
    },
    {
      "id": "mgp",
      "name": "毛戈平 MAOGEPING",
      "cat": "beauty",
      "soc": 66,
      "sales": 64,
      "news": 70,
      "delta": 0,
      "trend": [
        63,
        64,
        65,
        66,
        66,
        67,
        66
      ]
    },
    {
      "id": "estee",
      "name": "雅诗兰黛",
      "cat": "beauty",
      "soc": 72,
      "sales": 70,
      "news": 78,
      "delta": 0,
      "trend": [
        70,
        71,
        71,
        72,
        72,
        73,
        73
      ]
    },
    {
      "id": "chanel",
      "name": "香奈儿 Chanel",
      "cat": "beauty",
      "soc": 74,
      "sales": 66,
      "news": 74,
      "delta": 0,
      "trend": [
        68,
        69,
        70,
        71,
        72,
        74,
        72
      ]
    },
    {
      "id": "ysl",
      "name": "YSL Beauty",
      "cat": "beauty",
      "soc": 69,
      "sales": 58,
      "news": 66,
      "delta": 2,
      "trend": [
        62,
        63,
        63,
        63,
        64,
        64,
        65
      ]
    },
    {
      "id": "judydoll",
      "name": "橘朵 Judydoll",
      "cat": "beauty",
      "soc": 70,
      "sales": 64,
      "news": 72,
      "delta": 0,
      "trend": [
        65,
        66,
        67,
        68,
        69,
        71,
        69
      ]
    },
    {
      "id": "loreal",
      "name": "巴黎欧莱雅",
      "cat": "beauty",
      "soc": 72,
      "sales": 74,
      "news": 70,
      "delta": 0,
      "trend": [
        70,
        71,
        71,
        72,
        72,
        72,
        72
      ]
    },
    {
      "id": "shiseido",
      "name": "资生堂",
      "cat": "beauty",
      "soc": 68,
      "sales": 66,
      "news": 66,
      "delta": 0,
      "trend": [
        66,
        66,
        67,
        67,
        68,
        68,
        67
      ]
    },
    {
      "id": "kans",
      "name": "韩束",
      "cat": "beauty",
      "soc": 68,
      "sales": 66,
      "news": 66,
      "delta": 0,
      "trend": [
        64,
        65,
        66,
        66,
        67,
        68,
        67
      ]
    },
    {
      "id": "winona",
      "name": "薇诺娜",
      "cat": "beauty",
      "soc": 66,
      "sales": 62,
      "news": 64,
      "delta": 0,
      "trend": [
        61,
        62,
        63,
        63,
        64,
        65,
        64
      ]
    }
  ],
  "news": [
    {
      "brand": "nike",
      "cat": "apparel",
      "heat": 95,
      "date": "09-09",
      "source": "腾讯新闻",
      "url": "https://new.qq.com/rain/a/20260909A0320I00",
      "title": "郑钦文今夜23:30冲击美网四强：七连胜+两轮0-5大逆转后对阵莱巴金娜",
      "summary": "美网女单1/4决赛，从资格赛起步的郑钦文已豪取七连胜、连续两轮0-5落后连赢7局翻盘（凯斯/斯瓦泰克），今晚迎战2号种子莱巴金娜冲击个人首个美网四强（8连胜+145万美元奖金）；此前交手1胜4负、官方预测胜率仅13%。",
      "tags": [
        "郑钦文",
        "美网",
        "耐克"
      ],
      "id": "n001"
    },
    {
      "brand": "ysl",
      "cat": "beauty",
      "heat": 85,
      "date": "09-09",
      "source": "微博·时尚大片讨论",
      "url": "https://weibo.com/1914472533/5341140854243894",
      "title": "YSL一次性释出大量肖战官方大片，“YSL发了好多肖战神图”上热搜",
      "summary": "YSL护肤全球代言人肖战多张官方时尚大片一次性放出：黑色西装极简镜头、清冷与松弛之间切换，高清质感刷屏；网友感叹“品牌太会拍、每一张都堪称神图”，顶奢品牌与代言人双向成就。",
      "tags": [
        "YSL",
        "肖战",
        "代言物料"
      ],
      "id": "n002"
    },
    {
      "brand": "bawang",
      "cat": "food",
      "heat": 84,
      "date": "09-09",
      "source": "都市快报·橙柿互动（网易号）",
      "url": "https://www.163.com/dy/article/L6AGRUGE051492LM.html",
      "title": "霸王茶姬上海7店上线“白雾红尘茶叶蛋”，5元/枚冲上热搜",
      "summary": "9月7日起上海金茂大厦店等7家门店首发：单点5元、搭配正价饮品加购2.5元（限时至9月21日），每日10:30前套餐8折；原叶慢煮一级奇兰拼配水仙，仅堂食不可外卖。业内解读为用国民早餐单品拉动上午低峰时段、延伸全时段消费。",
      "tags": [
        "霸王茶姬",
        "茶叶蛋",
        "早餐场景"
      ],
      "id": "n003"
    },
    {
      "brand": "miniso",
      "cat": "daily",
      "heat": 81,
      "date": "09-09",
      "source": "腾讯新闻",
      "url": "https://new.qq.com/rain/a/20260908A0CES300",
      "title": "名创优品“长公主”YOYO半年狂卖5亿：与瑞幸联名走向大众消费场景",
      "summary": "名创优品首个自有艺术家IP YOYO（王涌泉创作）2026上半年相关收入近5亿元，6-7月中国区单月销售额连续破亿，帮助集团提前完成自有IP全年10亿元销售目标；上市第一年全渠道销量突破200万件、进入53个国家和地区。",
      "tags": [
        "名创优品",
        "YOYO",
        "自有IP"
      ],
      "id": "n004"
    },
    {
      "brand": "blokees",
      "cat": "ip",
      "heat": 80,
      "date": "09-09",
      "source": "网易（163号外）",
      "url": "https://www.163.com/dy/article/L6BF1M1J0526HOKN.html",
      "title": "布鲁可超越版漫威争锋“裂隙蜘蛛侠”9月8日发售：99元/14.7cm可动人偶",
      "summary": "换色版可动人偶高14.7cm、附带6只替换手型与蛛丝特效件、蛛丝重拳配件，可还原战斗造型；同期WF上海潮流手办展上布鲁可首展全新品类“积木车”及“自然集/奇迹Q版/绮遇版”三大系列40余款新品。",
      "tags": [
        "布鲁可",
        "漫威",
        "新品发售"
      ],
      "id": "n005"
    },
    {
      "brand": "popmart",
      "cat": "ip",
      "heat": 80,
      "date": "09-09",
      "source": "北京市人民政府门户网站",
      "url": "https://www.beijing.gov.cn/fuwu/bmfw/sy/jrts/202609/t20260908_4854751.html",
      "title": "服贸会今日开幕：泡泡玛特“SPACE MOLLY景泰蓝”大型国家级展会首展",
      "summary": "9月9日-13日服贸会朝阳展区：泡泡玛特与景泰蓝技艺北京代表性传承人徐嘉爽联合打造MEGA系列最新力作“SPACE MOLLY景泰蓝”，融合天干地支与星宿元素、把宇航服化作流动星图，“非遗+潮玩”特展成展区主打。",
      "tags": [
        "泡泡玛特",
        "服贸会",
        "非遗联名"
      ],
      "id": "n006"
    },
    {
      "brand": "miniso",
      "cat": "daily",
      "heat": 79,
      "date": "09-09",
      "source": "腾讯新闻·观点网",
      "url": "https://news.qq.com/rain/a/20260908A07H9R00",
      "title": "星展下调名创优品核心利润预测23%-32%，ADR目标价降至12美元",
      "summary": "星展研报指名创优品2026-2027年核心利润承压：海外销售增长慢于预期、直营店利润率稀释超预期；欧洲计划关闭100-110家业绩不佳分销商门店；维持买入评级。上半年海外MINISO品牌收入增14.9%，低于“高双位数”指引。",
      "tags": [
        "名创优品",
        "券商评级",
        "海外业务"
      ],
      "id": "n007"
    },
    {
      "brand": "lululemon",
      "cat": "apparel",
      "heat": 77,
      "date": "09-09",
      "source": "TipRanks",
      "url": "https://www.tipranks.com/news/lululemon-stock-lulu-rises-as-new-ceo-takes-the-helm",
      "title": "lululemon新CEO奥尼尔9月8日履新，上任首日股价涨近2%",
      "summary": "前耐克高管Heidi O’Neill正式接掌lululemon，市场寄望其扭转颓势（股价2026年内累计下跌52%、五年跌76%）；创始人Chip Wilson已同意保持沉默给新CEO机会；分析师共识评级Hold、平均目标价122美元。",
      "tags": [
        "lululemon",
        "新CEO",
        "股价"
      ],
      "id": "n008"
    },
    {
      "brand": "popmart",
      "cat": "ip",
      "heat": 76,
      "date": "09-09",
      "source": "新浪财经（网易号转载）",
      "url": "https://www.163.com/dy/article/L6B20CCS05568W0A.html",
      "title": "国信证券维持泡泡玛特“优于大市”：IP运营能力持续验证",
      "summary": "研报指2026H1中国市场收入122亿元同比+47.3%、毛绒品类收入98.25亿元同比+60%、11个艺术家IP收入超1亿元；全球注册会员破1亿、期末现金124亿元无借款；预计2026-2028年归母净利润170.4/208.9/250.6亿元。",
      "tags": [
        "泡泡玛特",
        "券商研报",
        "半年报"
      ],
      "id": "n009"
    },
    {
      "brand": "anta",
      "cat": "apparel",
      "heat": 75,
      "date": "09-09",
      "source": "安踏官网",
      "url": "https://www.anta.cn/news/detail?id_news=880",
      "title": "安踏联席CEO吴永华鼓浪屿论坛演讲：全球化不是选答题而是必答题",
      "summary": "在投洽会配套的2026鼓浪屿论坛上，吴永华分享安踏“全球化思维、本地化经营”三步走路径：上半年集团营收435.1亿元同比+12.9%、含亚玛芬总收入679.8亿元；以东南亚为桥头堡逐步布局中东、北非、欧美市场。",
      "tags": [
        "安踏",
        "全球化",
        "鼓浪屿论坛"
      ],
      "id": "n010"
    },
    {
      "brand": "mixue",
      "cat": "food",
      "heat": 73,
      "date": "09-09",
      "source": "腾讯新闻",
      "url": "https://new.qq.com/rain/a/20260908A0BR7R00",
      "title": "茶饮六小龙半年报：门店还在扩张，单店销售额未能同步增长",
      "summary": "六家上市茶饮上半年合计营收约367.8亿元同比+9%、归母净利润约53.4亿元同比-2%；蜜雪集团CEO张渊承认店均营业额双位数下滑（外卖大战高基数+竞争加剧），行业整体增速回落至个位数、加盟商回本周期拉长至18-24个月。",
      "tags": [
        "蜜雪冰城",
        "茶饮半年报",
        "行业分化"
      ],
      "id": "n011"
    },
    {
      "brand": "ip-industry",
      "cat": "ip",
      "heat": 72,
      "date": "09-09",
      "source": "什么值得买社区",
      "url": "https://post.smzdm.com/p/az86pkdp/",
      "title": "一周三场快餐×游戏联名：肯德基×重返未来1999（9.11）、×仙逆（9.14）、麦当劳×燕云十六声（9.19）",
      "summary": "9月11日-19日三场快餐×游戏IP联名接连上线：肯德基×《重返未来:1999》官宣帖小红书获1.02万赞（套餐送游戏皮肤CDK+全国9家主题店）；肯德基×《仙逆》排期官宣；麦当劳×《燕云十六声》强爆料指向9.19；“这个月简直就是金钱收割机”成双厨圈热议。",
      "tags": [
        "谷子经济",
        "快餐联名",
        "游戏IP"
      ],
      "id": "n012"
    },
    {
      "brand": "ip-industry",
      "cat": "ip",
      "heat": 72,
      "date": "09-09",
      "source": "娱乐资本论（今日头条）",
      "url": "https://www.toutiao.com/article/7683062132568572459",
      "title": "老凤祥×仙剑、潮宏基谈“IP痛金”：黄金品牌比2年前更懂年轻人了吗",
      "summary": "金价自高点最大回撤约30%背景下IP联名金饰成亮色：老凤祥ChinaJoy官宣《仙剑奇侠传》深度联名（李逍遥/赵灵儿金像+五灵珠首饰）；品牌从“找IP贴形象”进化到“先理解粉丝为什么爱它”——IP联名已成黄金珠宝行业体系化表达。",
      "tags": [
        "IP联名",
        "黄金珠宝",
        "痛金"
      ],
      "id": "n013"
    },
    {
      "brand": "ip-industry",
      "cat": "ip",
      "heat": 71,
      "date": "09-09",
      "source": "证券日报（每日热点转载）",
      "url": "http://gzylhyzx.com/detail.html?newsId=42580935",
      "title": "“吃谷”让老商场再出圈：谷子经济重塑线下商业生存法则",
      "summary": "北京中关村领展广场“粉红兔子×插画小人”快闪引爆打卡；崇文门搜秀城六层谷店成最具吸引力楼层；低租金“死角”铺位因二次元消费强目的性焕活——快闪店、主题策展、应援互动等沉浸式业态正把逛街转化为互动体验。",
      "tags": [
        "谷子经济",
        "老商场改造",
        "二次元"
      ],
      "id": "n014"
    },
    {
      "brand": "ripstar",
      "cat": "apparel",
      "heat": 62,
      "date": "09-09",
      "source": "新浪新闻（微博转载）",
      "url": "https://www.sina.cn/news/detail/5339501639505320.html",
      "title": "RIPSTAR品牌代言人林高远亮相宁波飘移赛，展示新款GR.S赛车主题板鞋",
      "summary": "ROYAL DRIFT汽车飘移系列赛宁波站：DKS远剑飘移车队319号车手林高远携新款GR.S赛车主题板鞋亮相；另闫玉晨上脚Revival“柔和蓝”千禧风复古慢跑鞋，明星同款矩阵持续扩容。",
      "tags": [
        "RIPSTAR",
        "林高远",
        "赛车主题"
      ],
      "id": "n015"
    },
    {
      "brand": "smilerepublic",
      "cat": "apparel",
      "heat": 56,
      "date": "09-09",
      "source": "新浪新闻（微博转载）",
      "url": "http://www.sina.cn/news/detail/5338398304765314.html",
      "title": "SMILEREPUBLIC 26AW秋冬新品剧透：廓形碰撞利落内搭，动态镜头呈现剪裁与面料质感",
      "summary": "品牌释出26AW秋冬新品剧透物料：廓形碰撞利落内搭、冷暖版型对照，以动态镜头直观呈现本季剪裁与面料质感；此前“斑点狂想曲”系列与石家庄万象城新店持续在售。",
      "tags": [
        "SMILEREPUBLIC",
        "秋冬新品",
        "26AW"
      ],
      "id": "n016"
    },
    {
      "brand": "hbd",
      "cat": "apparel",
      "heat": 54,
      "date": "09-09",
      "source": "微博",
      "url": "https://weibo.com/1791384410/5338741947499203",
      "title": "happybirdsday全球品牌代言人云旗晒同款：德训博肯“奶茶棕”+HIHBD101德训鞋",
      "summary": "云旗“运动打卡”第五天晒合作款德训博肯奶茶棕与全网独家周边，HIHBD101德训鞋“软糯复古、走两步就是氛围感大片”物料持续传播；“快乐的鸟日子”红鞋被粉丝戏称“晴天神器”。",
      "tags": [
        "happybirdsday",
        "云旗",
        "明星同款"
      ],
      "id": "n017"
    },
    {
      "brand": "miniso",
      "cat": "daily",
      "heat": 90,
      "date": "09-08",
      "source": "凤凰网财经",
      "url": "https://finance.ifeng.com/c/8wBsjUwbkDZ",
      "title": "名创优品叶国富：同一商圈必须干掉泡泡玛特",
      "summary": "中期业绩会上叶国富公开喊话：“只要商圈里同时有名创乐园店和泡泡玛特，名创乐园店的业绩就要超过对方。”上半年名创营收115亿同比+22.4%，乐园系门店全国破100家；并预告“接下来有个重大IP合作，会超越迪士尼”。",
      "tags": [
        "叶国富",
        "竞争",
        "大店战略"
      ],
      "id": "n018"
    },
    {
      "id": "n019",
      "brand": "luckin",
      "cat": "food",
      "heat": 90,
      "date": "09-08",
      "source": "luckin coffee 瑞幸咖啡官方微博",
      "url": "https://weibo.com/u/5690222800",
      "title": "瑞幸×名创优品YOYO联名首日热度登顶抖音热点 #2",
      "summary": "瑞幸×名创优品YOYO联名9月7日全国上线当日热度登顶：小奶酪拿铁/抹茶奶酪拿铁+瑰夏白冷萃4款主题杯，纸袋/杯套/吧唧/转转徽章/冰箱贴随套餐解锁。#送你一口秋天味道 同步登抖音热点第二（热度约1132万），「奶酪自由」抽奖+晒单攻略笔记在小红书持续刷屏。",
      "tags": [
        "瑞幸",
        "名创优品",
        "YOYO",
        "联名"
      ]
    },
    {
      "brand": "lululemon",
      "cat": "apparel",
      "heat": 89,
      "date": "09-08",
      "source": "南方+",
      "url": "https://www.nfnews.com/content/1y0lYNAnyB.html",
      "title": "lululemon新帅今日履新：北美可比销售-12%、中国-8%双失速",
      "summary": "前耐克高管Heidi O’Neill于9月8日正式出任CEO并加入董事会；最新年度指引下调后股价跌18%至约100美元的八年低点，leggings销量下滑约20%、athleisure份额缩水10个百分点至43.9%；创始人Chip Wilson“Gap化”质疑与婚变消息叠加，耐克系高管能否完成品牌修复成最大悬念。",
      "tags": [
        "新CEO",
        "业绩危机",
        "换帅"
      ],
      "id": "n020"
    },
    {
      "brand": "popmart",
      "cat": "ip",
      "heat": 88,
      "date": "09-08",
      "source": "腾讯新闻·腾讯财经",
      "url": "https://news.qq.com/rain/a/20260907A0CSQS00",
      "title": "泡泡玛特“闯美”对了，段永平“抄底”错了吗？",
      "summary": "THE MONSTERS十周年世界巡展美国首站纽约闭幕：6000平方英尺、9个沉浸式展厅，龙家升首次亲赴美国；段永平世界杯决赛期间晒与王宁合影并已买入股票；股价自340港元高位回落至156港元，摩根大通、摩根士丹利下调评级，海外能否再增长与“下一个爆款IP”成关键命题。",
      "tags": [
        "出海",
        "LABUBU",
        "资本市场"
      ],
      "id": "n021"
    },
    {
      "id": "n022",
      "brand": "bawang",
      "cat": "food",
      "heat": 88,
      "date": "09-08",
      "source": "霸王茶姬官方微博",
      "url": "https://weibo.com/u/6507307680",
      "title": "霸王茶姬「茶叶蛋」玩梗登热搜 #4 · 热度525万",
      "summary": "9月8日 #霸王茶姬茶叶蛋 微博热搜第4位（热度525万）。网友将霸王茶姬经典伯牙绝弦与中秋场景结合玩梗，东方茶饮文化借势社交话题再次出圈，门店端同步上线「轻因·桂馥兰香」秋季节令新品。",
      "tags": [
        "霸王茶姬",
        "茶叶蛋",
        "热搜",
        "中秋"
      ]
    },
    {
      "id": "n023",
      "brand": "popmart",
      "cat": "ip",
      "heat": 86,
      "date": "09-08",
      "source": "凤凰网财经",
      "url": "https://finance.ifeng.com/c/8wBsjUwbkDZ",
      "title": "名创优品叶国富喊话「干掉泡泡玛特」持续发酵",
      "summary": "9月8日名创优品叶国富中期业绩会喊话「同一商圈必须干掉泡泡玛特」随财经媒体披露持续在社交平台发酵，泡泡玛特被列为最大竞争对手的话题在微博/小红书/抖音同步扩散——IP 行业两大头部品牌的同商圈对垒话题从业绩会延伸到消费端讨论。",
      "tags": [
        "泡泡玛特",
        "名创优品",
        "叶国富",
        "业绩会"
      ]
    },
    {
      "id": "n024",
      "brand": "huawei",
      "cat": "daily",
      "heat": 85,
      "date": "09-08",
      "source": "百度新闻聚合",
      "url": "https://www.baidu.com/s?tn=news&wd=%E5%8D%8E%E4%B8%BA%E6%96%B0%E4%B8%89%E6%8A%98%E5%8F%A0%E4%BB%B7%E6%A0%BC19999%E5%85%83%E8%B5%B7",
      "title": "华为新三折叠价格19999元起登抖音热榜 · 秋季全场景发布会热度延续",
      "summary": "9月8日「华为新三折叠价格19999元起」登抖音热点榜第48位（热度约1760万）；微博端华为秋季发布会主题口号「向新之翼」仍为早间榜霸榜首位。华为终端秋季全场景发布会带动折叠屏/手机/平板多品类声量集中爆发，数码垂类内容创作者密集跟进。",
      "tags": [
        "华为",
        "折叠屏",
        "19999",
        "秋季发布会"
      ]
    },
    {
      "brand": "songsu",
      "cat": "food",
      "heat": 82,
      "date": "09-08",
      "source": "橙柿互动·都市快报（网易）",
      "url": "https://www.163.com/dy/article/L691GSDU051492LM.html",
      "title": "三只松鼠终止港股IPO，零食“铁王座”谁坐都烫",
      "summary": "历时约17个月的港股冲刺画上句号；上半年三只松鼠国民零食店剩193家、净减少105家，良品铺子门店两年多净减近800家；另一边鸣鸣很忙签约门店破3万家、好想来近2.4万家，量贩零食“缺斤短两”专项整治下，赵一鸣好想来9月7日致歉承诺“称错赔十倍”。",
      "tags": [
        "IPO终止",
        "量贩零食",
        "行业变局"
      ],
      "id": "n025"
    },
    {
      "id": "n026",
      "brand": "anta",
      "cat": "apparel",
      "heat": 82,
      "date": "09-08",
      "source": "抖音热点榜",
      "url": "https://www.douyin.com/search/%E6%88%91%E6%89%BF%E8%AE%A4%E8%A2%AB%E9%B9%BF%E6%99%97%E5%B0%91%E5%B9%B4%E6%84%9F%E7%A9%BF%E6%90%AD%E5%B8%85%E5%88%B0%E4%BA%86",
      "title": "鹿晗少年感穿搭登抖音热榜（安踏代言人鹿晗抖音 #40位）",
      "summary": "9月8日「我承认被鹿晗少年感穿搭帅到了」登抖音热搜榜第40位（热度约2376万）。安踏全球代言人鹿晗以燕麦系/丹宁系单品示范秋季运动穿搭，「运动少年感」关键词在抖音/小红书形成穿搭种草内容矩阵。",
      "tags": [
        "安踏",
        "鹿晗",
        "穿搭",
        "运动少年感"
      ]
    },
    {
      "brand": "nike",
      "cat": "apparel",
      "heat": 80,
      "date": "09-08",
      "source": "大象网（河南广电）",
      "url": "https://www.hntv.tv/news/0/2096879414135177218",
      "title": "耐克出局标普100：大中华区连续8个季度下滑，输给了“安踏们”",
      "summary": "耐克被剔除出标普100指数；大中华区营收连续8个季度下滑，欧睿数据显示安踏集团国内市占率22%连续四年第一、本土品牌合计份额突破52%反超耐克阿迪总和；激进DTC后遗症叠加7月宣布2027年起收回滔搏宝胜线上经销权限，渠道修复仍在途。",
      "tags": [
        "市场份额",
        "DTC",
        "竞争格局"
      ],
      "id": "n027"
    },
    {
      "brand": "guming",
      "cat": "food",
      "heat": 78,
      "date": "09-08",
      "source": "中国蓝新闻（微博）",
      "url": "https://weibo.com/2286092114/Rh17M3QA7",
      "title": "古茗奶茶店开卖啤酒：全国首家杭州湖滨店上线现打啤酒",
      "summary": "9月5日起杭州湖滨店开卖“经典生啤”（15元/500ml）与“三重柚拉格”（18元/500ml），清晰区分常规度数与低醇微醺两款；行业存量竞争下新茶饮品类扩张再进一步，“奶茶店啥都卖”与“透支主业”两种声音并存。",
      "tags": [
        "品类扩张",
        "啤酒",
        "存量竞争"
      ],
      "id": "n028"
    },
    {
      "id": "n029",
      "brand": "estee",
      "cat": "beauty",
      "heat": 72,
      "date": "09-08",
      "source": "亿邦动力",
      "url": "https://m.ebrun.com/706516.html",
      "title": "雅诗兰黛设奢华美容全球总裁：中国区净销售额30.58亿美元、增速居首",
      "summary": "Justin Boxford任奢华美容全球总裁统管海蓝之谜/雅诗兰黛/雅芮/朵梵/朗仕五大品牌；2026财年净销售额150.49亿美元增5%扭亏，中国内地有机增长9%为集团最高；线上占中国业务超50%、抖音成撬动新客核心阵地。",
      "tags": [
        "组织调整",
        "财报",
        "高端美妆"
      ]
    },
    {
      "id": "n030",
      "brand": "luckin",
      "cat": "food",
      "heat": 88,
      "date": "09-07",
      "source": "微博@瑞幸咖啡",
      "url": "https://weibo.com/7588142961/5339117560529303",
      "title": "瑞幸×名创优品YOYO联名今日全国上线：小奶酪拿铁+全套软萌周边开抢",
      "summary": "9月7日-13日全国门店上线：小奶酪拿铁、抹茶奶酪拿铁两款新品，瑰夏白冷萃同步登场；单杯套餐得软软发泡贴纸、双杯套餐得砰砰鱼眼吧唧/举杯转转徽章/可翻转冰箱贴（三选二）；配套4款PP材质超大杯、冰杯、热杯与杯套手提袋；上线首日点单攻略、PP杯获取攻略与晒单笔记刷屏，“已经准备好蹲上线冲两杯”成高频评论；公众号“奶酪自由”1万张0元饮品券限时抽奖（9.7-9.8），闲鱼已现鱼眼吧唧等周边挂单。",
      "tags": [
        "联名",
        "社媒热议"
      ]
    },
    {
      "brand": "nike",
      "cat": "apparel",
      "heat": 86,
      "date": "09-07",
      "source": "新浪体育",
      "url": "https://sports.sina.cn/2026-09-07/detail-iniqyriw9635877.d.html",
      "title": "郑钦文今晚23:30硬地再战斯瓦泰克：冲击生涯第三个美网八强",
      "summary": "美网女单第四轮，从资格赛六连胜杀入16强的郑钦文（16强中唯一资格赛选手）今晚23:30在阿瑟阿什球场对阵斯瓦泰克，双方第9次交手；郑钦文硬地此前6战全负、唯一胜利来自2024巴黎奥运红土；斯瓦泰克第三轮双抢七险胜布兹科娃、连续六年跻身美网16强；“郑钦文今晚对战斯瓦泰克”登抖音热点榜第4。",
      "tags": [
        "体育营销",
        "社媒热议"
      ],
      "id": "n031"
    },
    {
      "brand": "mixue",
      "cat": "food",
      "heat": 84,
      "date": "09-07",
      "source": "联商网",
      "url": "https://www.linkshop.com/news/2026551912.shtml",
      "title": "六万家店之后，蜜雪冰城的规模生意失灵了？",
      "summary": "上半年营收152.2亿仅增2.3%、净利润23.2亿同比下滑14.7%，为上市以来首个利润负增长半年度；海外门店4378家同比减少7.5%，第二增长曲线（幸运咖、鲜啤福鹿家、雪王IP）尚未提供独立可验证的利润数据；“规模-采购-成本”正循环首次出现裂缝。",
      "tags": [
        "财报",
        "规模失灵",
        "海外收缩"
      ],
      "id": "n032"
    },
    {
      "brand": "popmart",
      "cat": "ip",
      "heat": 82,
      "date": "09-07",
      "source": "智通财经（腾讯新闻）",
      "url": "https://news.qq.com/rain/a/20260907A0BI1I00",
      "title": "花旗：中国IP玩具板块后续走势分化，偏好泡泡玛特及布鲁可",
      "summary": "花旗研报：布鲁可上半年业绩后获上调盈利预测（海外扩张及利润率超预期），泡泡玛特、名创优品因海外动能转弱遭下调；偏好次序泡泡玛特（买入，目标价198港元）＞布鲁可（买入，82港元）＞名创优品（中性）；预计泡泡玛特2026年集团收入按年跌8%、2027年重回增长。",
      "tags": [
        "券商研报",
        "潮玩",
        "布鲁可"
      ],
      "id": "n033"
    },
    {
      "brand": "liby",
      "cat": "daily",
      "heat": 80,
      "date": "09-07",
      "source": "新浪新闻",
      "url": "https://news.sina.cn/2026-09-07/detail-iniqyzxs9576991.d.html",
      "title": "立白9月9感恩欢购节：迪丽热巴亲临直播间，天猫超品日斩获洗护TOP1",
      "summary": "第五届欢购节总曝光超100亿人次，TVC首登央视核心时段获超63亿曝光；迪丽热巴（7月升级为立白史上首位品牌全球代言人）亲临天猫超品日直播间，#迪丽热巴直播#阅读量2300万，全场销售超额突破100%斩获洗护品类TOP1，新增会员超120万人。",
      "tags": [
        "品牌节日IP",
        "代言",
        "超品日"
      ],
      "id": "n034"
    },
    {
      "brand": "ip-industry",
      "cat": "ip",
      "heat": 78,
      "date": "09-07",
      "source": "同花顺·中文在线半年报",
      "url": "https://search.10jqka.com.cn/yike/detail/auid/ea5874163f77c7be",
      "title": "谷子经济2026年市场规模预计达2265亿，国产IP谷子交易额首超日系IP",
      "summary": "中文在线半年报援引第三方数据：2026年中国谷子经济市场规模预计2265亿元、潮玩市场1264亿元、动漫周边1842亿元；上半年国产IP谷子交易额首次实现对日系IP反超，智能屏幕徽章等硬件破圈，“为IP买单”取代“为功能买单”成消费底层逻辑。",
      "tags": [
        "谷子经济",
        "国谷反超",
        "产业数据"
      ],
      "id": "n035"
    },
    {
      "brand": "miniso",
      "cat": "daily",
      "heat": 78,
      "date": "09-07",
      "source": "澎湃新闻/经济观察报",
      "url": "https://www.thepaper.cn/newsDetail_forward_34020680",
      "title": "净利大增199%后又单季转亏：名创优品的变量与TOP TOY独立上市",
      "summary": "上半年营收114.99亿元增22.4%、净利润9.57亿元增5.6%，但经调整净利10.79亿元降15.7%（2022年以来同期首次下滑）；Q1净利12.48亿元创单季新高（对MiniMax的AI投资公允价值收益8.75亿元贡献约七成）、Q2转亏2.92亿元（该项录得5.97亿元公允价值亏损），投资贡献超三成净利；澎湃/经济观察报披露孵化的TOP TOY已启动独立上市，另据彭博消息人士称拟港股IPO筹资约3亿美元。",
      "tags": [
        "财报",
        "资本动态"
      ],
      "id": "n036"
    },
    {
      "id": "n037",
      "brand": "mixue",
      "cat": "food",
      "heat": 76,
      "date": "09-07",
      "source": "大河网",
      "url": "https://news.dahe.cn/2026/09-07/2129335.html",
      "title": "“雪王老家”成现象级消费地标：郑州总部旗舰店年营业额超9800万元",
      "summary": "蜜雪冰城郑州总部旗舰店2025年总人流量超570万人次、总订单量超240万单、总营业额超9800万元，雪王IP与文创周边营收占比超八成，“没有人能空着手走出雪王老家”刷屏；旗舰店已进驻全国26城、2026年国内目标35家；另据官方披露，中国大区会员总量8月30日突破5亿。",
      "tags": [
        "社媒热议",
        "新业态"
      ]
    },
    {
      "brand": "miniso",
      "cat": "daily",
      "heat": 74,
      "date": "09-07",
      "source": "证券时报网",
      "url": "https://www.stcn.com/article/detail/4175456.html",
      "title": "名创优品连续6日回购，累计斥资1.32亿港元",
      "summary": "9月7日回购331.76万股、涉资6186万港元，连续6日累计回购1.32亿港元；管理层以真金白银回应股价低迷，YOYO×玩具总动员5联名首月全球GMV破亿、6-7月连续两月销售额破亿。",
      "tags": [
        "回购",
        "资本市场"
      ],
      "id": "n038"
    },
    {
      "brand": "anta",
      "cat": "apparel",
      "heat": 72,
      "date": "09-07",
      "source": "海西晨报（新浪）",
      "url": "https://cj.sina.com.cn/articles/view/1692079024/64db13b0020018x86",
      "title": "安踏联席CEO吴永华：全球化“三步走”，上半年营收435.1亿",
      "summary": "2026鼓浪屿论坛上吴永华分享“单聚焦、多品牌、全球化”实践：FILA中国区培育为年营收超300亿品牌、亚玛芬纽交所上市、主品牌出海提速；上半年集团营收435.1亿元同比+12.9%。",
      "tags": [
        "高管发声",
        "全球化"
      ],
      "id": "n039"
    },
    {
      "brand": "popmart",
      "cat": "ip",
      "heat": 72,
      "date": "09-07",
      "source": "京报网/北京日报",
      "url": "https://news.bjd.com.cn/2026/09/07/11949274.shtml",
      "title": "泡泡玛特携“SPACE MOLLY景泰蓝”亮相服贸会：非遗+潮玩首次登陆国家级展会",
      "summary": "2026服贸会文旅服务专题展朝阳展区（首钢园7号馆）9月7日召开发布会：泡泡玛特MEGA系列最新力作“SPACE MOLLY景泰蓝”由国家级非遗景泰蓝技艺北京代表性传承人徐嘉爽与泡泡玛特联合打造，融合三十六天干地支与星宿元素、把宇航服化作流动星图，系首次在大型国家级展会展览展示；展区另设游戏电竞板块。",
      "tags": [
        "线下活动",
        "非遗联名"
      ],
      "id": "n040"
    },
    {
      "brand": "toptoy",
      "cat": "ip",
      "heat": 68,
      "date": "09-07",
      "source": "证券之星（浙商证券研报）",
      "url": "https://hk.stockstar.com/IG2026090700013765.shtml",
      "title": "浙商证券：TOP TOY二季度收入4.7亿元增16.9%，增速明显放缓",
      "summary": "截至Q2门店365家（环比净增10家），当前更注重运营质量和自有IP打造；名创Q2毛利率45.3%同比提升1pct、销售费用率27.1%提升3.7pct（海外直营拓展及IP战略投入所致）；浙商证券维持名创优品“买入”评级、指国内增长具韧性；YOYO与《玩具总动员5》联名首月全球GMV破亿并带动该IP连续两月销售额破亿。",
      "tags": [
        "财报",
        "券商观点"
      ],
      "id": "n041"
    },
    {
      "brand": "anta",
      "cat": "apparel",
      "heat": 66,
      "date": "09-07",
      "source": "新浪财经（格隆汇）",
      "url": "https://cj.sina.com.cn/articles/view/5115326071/130e5ae77020030p78",
      "title": "野村：lululemon中国业务转弱，中国运动鞋服首选安踏",
      "summary": "野村报告指lululemon次季固定汇率收入按年跌5%至24.2亿美元、低于市场预期并下调全年指引；管理层称社交媒体对其在华促销活动的负面评论伤害品牌情绪、未参与618后续促销致电商疲软，未来在中国将聚焦正价提升并正常参与双11；野村在中国运动鞋服覆盖范围内首选安踏，因其长期受惠户外及新兴运动增长、多品牌策略有助应对行业竞争。",
      "tags": [
        "资本市场",
        "行业趋势"
      ],
      "id": "n042"
    },
    {
      "brand": "heytea",
      "cat": "food",
      "heat": 62,
      "date": "09-07",
      "source": "廣告狂人（网易号）",
      "url": "https://www.163.com/dy/article/L6357G5C0525APMK.html",
      "title": "喜茶应届设计师“云南采风”笔记出圈：“这就是喜茶做到这个位置的原因”",
      "summary": "一名刚入职喜茶的应届设计师在小红书分享被公司安排前往云南、与当地小朋友一起绘画采风寻找灵感的工作日常，迅速引发热议：“好有人文气息”“这就是喜茶做到这个位置的原因”；在“996”常态的当下，喜茶愿意保持朴拙设计初衷的反差戳中打工人，“回归本真”的设计哲学被更多人熟知。",
      "tags": [
        "社媒热议",
        "品牌观察"
      ],
      "id": "n043"
    },
    {
      "brand": "52toys",
      "cat": "ip",
      "heat": 56,
      "date": "09-07",
      "source": "京报网/中服网",
      "url": "https://so.html5.qq.com/page/real/search_news?docid=70000021_0816a9e655860852",
      "title": "52TOYS服贸会将首发NOOK&SEEK双子星盲盒，同日亮相798时尚潮玩产业趋势发布会",
      "summary": "服贸会朝阳展区现场首发“NOOK&SEEK双子星系列盲盒”，为NOOK和SEEK首次以双子CP互动形态亮相；9月7日，2026时尚潮玩产业趋势发布会登陆北京798艺术区97罐（中国国际时装周），52TOYS、JOYTOY欢乐模玩、奇梦岛等共探时尚服饰与潮玩IP跨界融合，活动由中国服装设计师协会、北京市商业联合会联合主办。",
      "tags": [
        "线下活动",
        "新品发售"
      ],
      "id": "n044"
    },
    {
      "id": "n045",
      "brand": "nike",
      "cat": "apparel",
      "heat": 90,
      "date": "09-06",
      "source": "央视网体育/新华社",
      "url": "https://sports.cctv.cn/2026/09/06/ARTIs8ckF2rIeFAAjPNG0EuA260906.shtml",
      "title": "郑钦文美网决胜盘0-5落后连赢7局惊天逆转，晋级16强",
      "summary": "美网女单第三轮2-1逆转22号种子凯斯（1-6/7-6(3)/7-5），决胜盘0-5落后挽救赛点连赢七局，资格赛起豪取六连胜，即时排名升至世界第80；“除了惊天逆转郑钦文还有高情商发言”“美网认证郑钦文Queen”等话题登热搜，下轮挑战斯瓦泰克（交手1胜7负）。",
      "tags": [
        "体育营销",
        "社媒热议"
      ]
    },
    {
      "brand": "anta",
      "cat": "apparel",
      "heat": 86,
      "date": "09-06",
      "source": "北晚在线（网易号）",
      "url": "https://www.163.com/dy/article/L65P4ADC0514TTKN.html",
      "title": "安踏代言人严子怡夺钻石联赛总决赛冠军，68.42米破赛会纪录",
      "summary": "18岁严子怡布鲁塞尔总决赛68.42米摘金并实现钻石联赛五连冠，赛前安踏官宣其为品牌代言人；5月厦门站她曾穿安踏标枪战靴以71.74米刷新亚洲纪录，安踏田径新生代矩阵（陈妤颉、刘俊茜、吴洪娇等）再添一员，并为名古屋亚运“冠军龙服”预热。",
      "tags": [
        "代言官宣",
        "田径",
        "亚运备战"
      ],
      "id": "n046"
    },
    {
      "brand": "lining",
      "cat": "apparel",
      "heat": 85,
      "date": "09-06",
      "source": "Sports Illustrated",
      "url": "https://www.si.com/fannation/sneakers/news/predicting-next-10-nba-players-to-get-signature-sneakers",
      "title": "库里与Under Armour分手后，签下李宁10年签名鞋大合同",
      "summary": "SI报道：斯蒂芬·库里结束与UA的长期合作后，与李宁签下10年期重磅签名鞋合约，首款个人签名鞋已在推进中；这是中国品牌签下的最具分量NBA历史级球星之一，李宁篮球线国际化再进一步。",
      "tags": [
        "签名鞋",
        "NBA",
        "国际化"
      ],
      "id": "n047"
    },
    {
      "id": "n048",
      "brand": "lululemon",
      "cat": "apparel",
      "heat": 82,
      "date": "09-06",
      "source": "中国新闻网（中新经纬）",
      "url": "https://m.chinanews.com/wap/detail/cht/zw/jw686284.shtml",
      "title": "lululemon新CEO明日上任：40年扭亏经验的耐克老将接下烫手山芋",
      "summary": "Heidi O'Neill（耐克25年履历、四十年扭亏经验）9月8日正式履新并加入董事会；8月lululemon运动休闲服饰市场份额同比下降10个百分点至43.9%，Alo、Vuori分别增长5.9和2.2个百分点；分析师称重振产品创新与设计、重新激发消费者兴趣是最紧迫任务；创始人Chip Wilson“Gap化”批评与管理层反驳同步发酵。",
      "tags": [
        "高管变动",
        "竞争"
      ]
    },
    {
      "brand": "blokees",
      "cat": "ip",
      "heat": 76,
      "date": "09-06",
      "source": "积木圈子（网易号）",
      "url": "https://dy.163.com/article/L64MHNS70526HOKN.html",
      "title": "布鲁可三款超越版新品曝光：星球大战暗影暴风兵、变形金刚龙焱王",
      "summary": "外网公布布鲁可超越版三款拼装模型新品：星球大战暗影暴风兵、变形金刚龙焱王与EX配色紫龙，预计2026年内发货；叠加上半年海外收入3.66亿同比+228.5%、花旗上调盈利预测，IP多元化+出海双引擎获得资本市场认可。",
      "tags": [
        "新品",
        "变形金刚",
        "出海"
      ],
      "id": "n049"
    },
    {
      "id": "n050",
      "brand": "proya",
      "cat": "beauty",
      "heat": 74,
      "date": "09-06",
      "source": "新浪·珀莱雅官微",
      "url": "https://www.sina.cn/news/detail/5339033742085812.html",
      "title": "珀莱雅×孟子义护肤代言加码：第四代红宝石面霜上市、8城大屏9/9点亮",
      "summary": "8/26官宣孟子义为护肤代言人并绑定第四代红宝石面霜（双环肽Pro、皮骨双修）；官微官宣14.7万赞、3.7万评论、12.6万转发；9/9起上海、南京、成都等8城大屏打卡地图依次点亮，周边窗口已收、二手小卡成硬通货。",
      "tags": [
        "代言",
        "新品",
        "面霜"
      ]
    },
    {
      "id": "n051",
      "brand": "lining",
      "cat": "apparel",
      "heat": 73,
      "date": "09-06",
      "source": "腾讯新闻·行业盘点",
      "url": "https://so.html5.qq.com/page/real/search_news?docid=70000021_2266a99132917552",
      "title": "国产运动“四强”半年报盘点：服装成增长引擎，四家走出四条路",
      "summary": "运动穿搭从单一场景向户外、综训、日常休闲延伸：李宁服装收入+11.8%、FILA运动套装增速超50%、361度“城市轻户外”带动功能服装需求上升；李宁广告及推广投入从13.36亿增至17.13亿（超过毛利润增量），安踏靠“其他品牌”+44.2%贡献集团近四分之一收入；四强毛利率全部上行，行业进入存量博弈。",
      "tags": [
        "行业趋势",
        "财报"
      ]
    },
    {
      "id": "n052",
      "brand": "ip-industry",
      "cat": "ip",
      "heat": 70,
      "date": "09-06",
      "source": "千瓜数据（三个皮匠报告）",
      "url": "https://www.sgpjbg.com/info/c841121afaf04487327aeb3763bb8d90.html",
      "title": "千瓜发布2026小红书「十大热词」：抽象力450亿浏览量，痛文化成消费主场",
      "summary": "抽象浏览量450亿+、预估互动增长588%+，瑞幸“抽象霸总文学”短剧破圈；痛文化从圈地自萌走向消费主场，海底捞×明日方舟联名半月话题浏览1800万+；国谷交易额已达日谷1.2倍；品牌种草逻辑从功能卖点转向情绪共鸣，IP衍生与圈层消费成种草核心杠杆。",
      "tags": [
        "行业趋势",
        "圈层消费"
      ]
    },
    {
      "id": "n053",
      "brand": "mixue",
      "cat": "food",
      "heat": 68,
      "date": "09-06",
      "source": "网易财经（微博）",
      "url": "https://weibo.com/1974561081/OwmKdCLCC",
      "title": "蜜雪冰城天津/福建泉州门店被指饮品中喝出苍蝇，品牌回应“开封后飞入”",
      "summary": "9月6日多名网友反映在天津/福建泉州蜜雪冰城门店饮品中发现苍蝇，涉事门店查看监控后表示“流程无异常、不排除系开封后飞入或人为因素”，并在被拒只退款后拒绝现金赔偿；事件经网易财经、东方财经等报道传播上热搜，话题 #网友称蜜雪冰城喝出苍蝇# 阅读量短时冲千万级别；与同期公司8月内部文件“两名恶意投放苍蝇敲诈者被刑事拘留”话题并存，正反叙述并存引发食安信任讨论。",
      "tags": [
        "食安",
        "舆情"
      ]
    },
    {
      "id": "n054",
      "brand": "popmart",
      "cat": "ip",
      "heat": 92,
      "date": "09-05",
      "source": "大洋网/每日经济新闻",
      "url": "https://news.dayoo.com/finance/202609/05/171077_55000308.htm",
      "title": "泡泡玛特王宁到访LVMH法国总部，向阿尔诺赠送LABUBU",
      "summary": "王宁与LVMH主席兼CEO贝尔纳·阿尔诺在巴黎会面，迪奥CEO德尔菲娜·阿尔诺、LV CEO贝卡里等核心高管参与；系继LABUBU创作者龙家升会面、LVMH大中华区总裁吴越出任泡泡玛特非执行董事后，双方接触首次延伸至公司最高管理层；泡泡玛特市值约2051亿港元，LVMH约为其十倍。",
      "tags": [
        "高管动态",
        "IP出海"
      ]
    },
    {
      "id": "n055",
      "brand": "lululemon",
      "cat": "apparel",
      "heat": 88,
      "date": "09-05",
      "source": "腾讯新闻",
      "url": "https://news.qq.com/rain/a/20260905A000UA00",
      "title": "lululemon Q2财报爆雷：中国同店固定汇率首次负增长，股价盘中暴跌近20%",
      "summary": "Q2净营收24亿美元同比降4%、净利润3.292亿美元降11.2%，美洲同店-12%、中国同店固定汇率-8%（入华以来首次）；紧身裤销量降约20%，全年指引下调至103.5亿-105亿美元；美股开盘暴跌近20%、最低下探98美元。",
      "tags": [
        "财报",
        "高管变动"
      ]
    },
    {
      "id": "n056",
      "brand": "popmart",
      "cat": "ip",
      "heat": 86,
      "date": "09-05",
      "source": "腾讯新闻",
      "url": "https://news.qq.com/rain/a/20260905A08UGK00",
      "title": "泡泡玛特长沙IFS湖南首家旗舰店开业：600人排队、婆婆凌晨5点帮儿媳占位",
      "summary": "总面积超600㎡的湖南最大双层门店，以长沙“星城”美誉为灵感打造“星星人在星城美梦漂流”主题；开业前超600名消费者排队，设有NPC对暗号领限定贴纸、摇铃解锁惊喜礼品等互动；泡泡玛特上半年线下门店仅净增10家、收入却增38.2%，进入“开大店重体验”的单店情绪力阶段。",
      "tags": [
        "社媒热议",
        "线下活动"
      ]
    },
    {
      "id": "n057",
      "brand": "lululemon",
      "cat": "apparel",
      "heat": 84,
      "date": "09-05",
      "source": "中国商报（今日头条）",
      "url": "https://www.toutiao.com/w/1875467060575235",
      "title": "lululemon遭遇业绩危机：股价大跌17.38%，诉国产瑜伽服品牌JU ACTIVE一审败诉",
      "summary": "Q2净营收24.2亿美元同比降4%、净利润3.3亿美元降11%，中国内地净营收仅增4%、同店固定汇率-8%为入华以来首次负增长，全年指引下调，9月4日收盘暴跌17.38%报100.61美元；南京中院一审判决驳回lululemon诉JU ACTIVE商标侵权全部诉求；“最强劲敌”Alo Yoga已开天猫旗舰店、合作赵露思并将落地香港K11 MUSEA。",
      "tags": [
        "财报",
        "竞争"
      ]
    },
    {
      "id": "n058",
      "brand": "mixue",
      "cat": "food",
      "heat": 82,
      "date": "09-05",
      "source": "新浪财经港股一线（搜狐）",
      "url": "https://www.sohu.com/a/1071945262_122014422",
      "title": "蜜雪海外“大撤退”追踪：越南缩水15%、日本千店目标完成率0.4%，外资下调盈利预测20%",
      "summary": "2025年海外净关店428家、2026上半年再净减355家；越南从巅峰1304家回落至约1100家，印尼由2667家缩至约2500家；日本仅剩4家、距“2028年千店”完成率0.4%；香港由9店收缩至5店；外资机构下调盈利预测约20%，称“2026是至暗之年”。",
      "tags": [
        "财报",
        "行业趋势"
      ]
    },
    {
      "id": "n059",
      "brand": "miniso",
      "cat": "daily",
      "heat": 78,
      "date": "09-05",
      "source": "经济观察报（网易）",
      "url": "https://www.163.com/dy/article/L62BQUNL05199DKK.html",
      "title": "名创优品的隐藏变量：三成利润来自投资，海外从规模优先转向质量优先",
      "summary": "上半年MINISO中国内地收入增26.2%创三年最好水平，海外增速放缓至14.9%；叶国富宣布放缓海外直营扩张，把精力用于改善近800家直营门店单店模型；已成立新IP事业部、国内净增59家乐园系门店同时净减少121家常规门店，“腾笼换鸟”式调改；首个自有IP YOYO上半年收入近5亿元。",
      "tags": [
        "战略调整",
        "财报"
      ]
    },
    {
      "id": "n060",
      "brand": "anta",
      "cat": "apparel",
      "heat": 74,
      "date": "09-05",
      "source": "36氪财经（今日头条）",
      "url": "https://www.toutiao.com/article/7681851032808194600/",
      "title": "安踏半年报市场反应：股价大涨9.53%市值重回2200亿，还被曝“做AI了”",
      "summary": "半年报发布当天安踏体育收涨9.53%报78.75港元；联席CEO赖世贤称各品牌全面超越指引；主品牌门店净减81家、渠道改革纠偏激进实验；日经中文网/36氪聚焦安踏的AI应用与“决不为短期利益透支品牌未来”的多品牌经营思路。",
      "tags": [
        "财报",
        "资本市场"
      ]
    },
    {
      "id": "n061",
      "brand": "adidas",
      "cat": "apparel",
      "heat": 72,
      "date": "09-05",
      "source": "腾讯新闻",
      "url": "https://news.qq.com/rain/a/20260905A000UA00",
      "title": "adidas Originals by JENNIE系列中国发售引发抢购，女性运动赛道“三国杀”",
      "summary": "9月1日与韩国顶流JENNIE的联名系列正式发售，社交媒体引爆发酵、引发抢购热潮；同期ALO开出天猫旗舰店并招聘门店岗位，NikeSKIMS在上海兴业太古汇围挡中国首家独立门店，围攻lululemon所在的女性运动赛道。",
      "tags": [
        "联名",
        "行业趋势"
      ]
    },
    {
      "id": "n062",
      "brand": "florasis",
      "cat": "beauty",
      "heat": 70,
      "date": "09-05",
      "source": "网易订阅",
      "url": "https://dy.163.com/article/L618S4LG0547NJA7.html",
      "title": "花西子七夕「不送礼物送信物」：AI漫剧《花朝录》播放破1000万",
      "summary": "以宋代并蒂莲为核推限定信物系列（玉雕×纳米光刻、防晒粉饼PDRN修护光损伤）；全民信物故事征集投至10城公共大屏；定制AI漫剧《花朝录》七夕上线播放破1000万，把东方定情叙事做成公共叙事。",
      "tags": [
        "节日营销",
        "AI漫剧",
        "东方美学"
      ]
    },
    {
      "id": "n063",
      "brand": "ip-industry",
      "cat": "ip",
      "heat": 66,
      "date": "09-05",
      "source": "同花顺投顾平台",
      "url": "https://t.10jqka.com.cn/pid_687936367.shtml",
      "title": "IP文创产业4大增长点：AI漫剧明年预估400亿，谷子经济洗牌加速",
      "summary": "AI漫剧市场从2024年50.4亿飙升至2025年189.8亿元（+276%），2026年预估400亿元，但破亿率仅0.47%、同质化严重；谷子经济2025年规模2021亿元、2026年预计2265亿元，2025上半年全国至少155家谷子店闭店，头部“潮玩星球”由148家缩至99家，冷热分化明显。",
      "tags": [
        "行业趋势",
        "谷子经济"
      ]
    },
    {
      "id": "n064",
      "brand": "bluemoon",
      "cat": "daily",
      "heat": 58,
      "date": "09-05",
      "source": "腾讯新闻",
      "url": "https://so.html5.qq.com/page/real/search_news?docid=70000021_3686a9bfc4a17452",
      "title": "央视新闻携手蓝月亮开启“超级品牌日”直播：发布至尊“浓缩+”洗衣液",
      "summary": "9月5日撒贝宁、月亮姐姐与蓝月亮艺术顾问孟庆旸齐聚直播间，以“浓缩，让洗衣更省心”为主题发布至尊“浓缩+”洗衣液：超浓缩47%、水感低粘、低泡易漂、72小时留香，以科普式营销传递“省水省电省时省心”。",
      "tags": [
        "平台营销",
        "新品"
      ]
    },
    {
      "id": "n065",
      "brand": "ripstar",
      "cat": "apparel",
      "heat": 52,
      "date": "09-05",
      "source": "微博 @RIPSTAR爆炸星",
      "url": "https://weibo.com/7697459086/5332116915099192",
      "title": "RIPSTAR发布林高远上脚Bullet「液态银」配色及Clouds Bag新品",
      "summary": "品牌代言人林高远上脚全新 Bullet 系列「液态银」配色，同步释出 Clouds Bag 大号云朵包；抖音官方旗舰店直播间开启新品首发专场。此前 RIPSTAR 刚获 2026 天猫华服奖「年度潮流趋势品牌」。",
      "tags": [
        "代言人营销",
        "新品发售"
      ]
    },
    {
      "id": "n066",
      "brand": "popmart",
      "cat": "ip",
      "heat": 92,
      "date": "09-04",
      "source": "SnapScope",
      "url": "https://snapscope.news/story/Labubu_Dolls_Get_Their_Own_Movie_as_Toy_Crossover_Trend_Surges",
      "title": "泡泡玛特×索尼影业官宣LABUBU大电影",
      "summary": "泡泡玛特与索尼影业宣布将LABUBU搬上大银幕，采用真人+CG动画形式，《旺卡》《帕丁顿熊》导演Paul King执导，IP十周年全球巡展巴黎站官宣，处于早期开发阶段。",
      "tags": [
        "IP出海",
        "影视联动"
      ]
    },
    {
      "id": "n067",
      "brand": "popmart",
      "cat": "ip",
      "heat": 90,
      "date": "09-04",
      "source": "第一财经",
      "url": "https://www.toutiao.com/article/7681675911602749994",
      "title": "LABUBU空降东方明珠：城市乐园嘉年华巡展上海站举行盛大开幕式",
      "summary": "9月4日晚开幕式在东方明珠塔城市广场举行，为东方明珠新媒体与泡泡玛特两大上市公司首次深度合作、上海旅游节重要组成部分；复刻乐园标志性场景“LABUBU勇士峡湾”，9款互动游乐项目，POP BAKERY限时快闪与定制裱花蛋糕同步登陆，活动持续至11月1日。",
      "tags": [
        "社媒热议",
        "线下活动"
      ]
    },
    {
      "id": "n068",
      "brand": "miniso",
      "cat": "daily",
      "heat": 88,
      "date": "09-04",
      "source": "中华网财经",
      "url": "https://finance.china.com/xiaofei/13004691/20260904/49719302.html",
      "title": "叶国富业绩会“硬刚”泡泡玛特：同商圈乐园店店效必须超越",
      "summary": "“他一个月卖300万，我们也要卖300万”——名创优品乐园系大店已突破100家、年底目标200家，YOYO被视作对标LABUBU的核心武器；自有IP销售额破10亿元的年度目标7月底已提前完成；哈尔滨百盛两店相隔10米，名创日均销售已超隔壁泡泡玛特。",
      "tags": [
        "竞争",
        "社媒热议"
      ]
    },
    {
      "id": "n069",
      "brand": "popmart",
      "cat": "ip",
      "heat": 84,
      "date": "09-04",
      "source": "中新经纬",
      "url": "https://m.chinanews.com/wap/detail/cht/zw/jw686309.shtml",
      "title": "泡泡玛特净利增10.1%：王宁称2026是“调整年”，更关注经营健康度",
      "summary": "上半年营收171.73亿元增23.8%、归母净利50.38亿元增10.1%；国内营收大涨47.3%，海外收入49.72亿元上市后首次下滑（-11.1%）；王宁称2026年销售额增长不是最主要目标，更关注公司治理与经营健康；计划未来6个月启动20亿-50亿元回购。",
      "tags": [
        "财报",
        "高管发声"
      ]
    },
    {
      "id": "n070",
      "brand": "luckin",
      "cat": "food",
      "heat": 84,
      "date": "09-04",
      "source": "新华网/胖鲸",
      "url": "http://www.news.cn/tech/20260804/cf17e12b886546aab27dfdafcba2a952/c.html",
      "title": "瑞幸咖啡液销量破10亿杯，一口气联动30个品牌喊出“万物皆可咖啡液”",
      "summary": "8月26日抖音直播间“史上最快过期海报”现场改数；金典、OATLY、卫龙、厨邦、白象等30个品牌参与配方共创；4月28日王一博代言后120天内销量从4亿杯增至10亿杯；咖啡液复购率45%远超速溶20%。",
      "tags": [
        "联名",
        "社媒热议"
      ]
    },
    {
      "id": "n071",
      "brand": "starbucks",
      "cat": "food",
      "heat": 80,
      "date": "09-04",
      "source": "新浪科技",
      "url": "https://tech.sina.cn/2026-09-04/detail-iniqryew1321382.d.html",
      "title": "星巴克中国出表后首份财报：全球净利大涨87.2%",
      "summary": "中国约8000家门店转为合资特许经营后，Q3国际分部营收大降34%，但净利率大幅攀升；星巴克在华份额已从2017年42%峰值跌至14%，本土品牌围堵加剧。",
      "tags": [
        "财报",
        "行业趋势"
      ]
    },
    {
      "id": "n072",
      "brand": "skii",
      "cat": "beauty",
      "heat": 80,
      "date": "09-04",
      "source": "网易·刀法研究所",
      "url": "https://www.163.com/dy/article/L60DEGH50553TWRO.html",
      "title": "SK-II发布全新神仙锁精华：张子枫、林允代言，45年抗老巅峰之作",
      "summary": "9月1日上海发布会以LOCK IN YOUTH为主题，推出SK-II首瓶精华——全新神仙锁精华，浓缩PITERA先渗后锁、一瓶锁线条/嘭弹/嫩亮；全球品牌代言人张子枫、品牌大使林允及文佳煐等现身，9月3日首尔Seongsu快闪同步开幕。",
      "tags": [
        "新品",
        "代言",
        "抗老"
      ]
    },
    {
      "id": "n073",
      "brand": "bawang",
      "cat": "food",
      "heat": 78,
      "date": "09-04",
      "source": "快科技",
      "url": "https://news.mydrivers.com/1/1148/1148753.htm",
      "title": "霸王茶姬创始人张俊杰卸任全部核心职务，公司更名茶姬企业管理集团",
      "summary": "茶姬(上海)商业管理有限公司更名并完成工商变更，张俊杰卸任董事长、法定代表人、经理，COO尹登峰接任；官方称正常工商登记变更、不涉及业务与架构调整；Q2总GMV76.6亿元、经调整净利4.89亿元，海外GMV同比大增114.3%至5.04亿元。",
      "tags": [
        "高管变动",
        "财报"
      ]
    },
    {
      "id": "n074",
      "brand": "bawang",
      "cat": "food",
      "heat": 76,
      "date": "09-04",
      "source": "新黄河（今日头条）",
      "url": "https://www.toutiao.com/article/7681653744236315188/",
      "title": "霸王茶姬直营店一年增加644家、单店GMV降16%，官方澄清张俊杰“仅卸任境内主体”",
      "summary": "截至6月底全球7639家门店中直营店从239家增至883家（海外直营259家），加盟店减少43家；直营收入17.43亿元为去年同期三倍多；上半年全球门店GMV同比降4.6%、营收增3.5%；公司澄清张俊杰仍为纳斯达克上市公司董事长兼CEO，变更仅为境内运营主体工商登记。",
      "tags": [
        "高管变动",
        "财报"
      ]
    },
    {
      "id": "n075",
      "brand": "ip-industry",
      "cat": "ip",
      "heat": 76,
      "date": "09-04",
      "source": "虎嗅",
      "url": "https://www.huxiu.com/article/4888435.html",
      "title": "潮玩“情绪消费”资本退潮：泡泡玛特、布鲁可、卡游被装进同一个筐，数据却天差地别",
      "summary": "泡泡玛特6个IP收入超10亿，布鲁可增收不增毛利，卡游过聆讯难上市——二级市场用PE逐个戳破一级市场用PS吹起的泡泡，潮玩赛道进入分化验证期。",
      "tags": [
        "行业趋势",
        "资本动态"
      ]
    },
    {
      "id": "n076",
      "brand": "mixue",
      "cat": "food",
      "heat": 75,
      "date": "09-04",
      "source": "中国经济网",
      "url": "https://www.ce.cn/cysc/newmain/yc/jsxw/202609/t20260904_3192084.shtml",
      "title": "新茶饮“六小龙”半年收入368亿：行业增速腰斩再腰斩",
      "summary": "六大茶饮品牌上半年合计营收约367.8亿元、同比增9.0%，增速较此前20%-30%明显回落；头部品牌转向县域下沉与海外市场寻找增量。",
      "tags": [
        "行业趋势"
      ]
    },
    {
      "id": "n077",
      "brand": "bawang",
      "cat": "food",
      "heat": 74,
      "date": "09-04",
      "source": "美通社/经济通",
      "url": "https://www.etnet.com.hk/www/tc/news/news-article.php?category=prnewswire&newsid=5040910_XG40910_2&section=index",
      "title": "霸王茶姬携手文学IP《小王子》登陆港澳：三款抹茶新品+主题体验店9月10日亮相",
      "summary": "品牌首次在港澳市场与经典文学IP联名：抹茶拿铁、茉见青、星尘绿意三款新品+限定周边，澳门威尼斯人及香港MOKO门店打造B-612星球、玫瑰与狐狸主题体验空间；以“纯粹”为联名核心，抹茶采用低温超微研磨（60%粉体达1000目）；背景为Q2海外GMV同比增114.3%、连续四季度环比提升。",
      "tags": [
        "联名",
        "出海"
      ]
    },
    {
      "id": "n078",
      "brand": "ip-industry",
      "cat": "ip",
      "heat": 74,
      "date": "09-04",
      "source": "中新经纬",
      "url": "https://m.chinanews.com/wap/detail/cht/zw/jw686309.shtml",
      "title": "A股潮玩公司半年报悉数披露：赛道分化，奥飞净利暴增370%、元隆雅图仍亏损",
      "summary": "奥飞娱乐净利1.74亿元同比增370.7%，完成从“叠叠乐”向“小颗粒潮流衍生品平台”的品牌升级；元隆雅图IP文创收入增134.5%但整体仍亏367.8万元——潮玩IP赛道呈明显分化格局。",
      "tags": [
        "行业趋势",
        "财报"
      ]
    },
    {
      "id": "n079",
      "brand": "bawang",
      "cat": "food",
      "heat": 72,
      "date": "09-04",
      "source": "搜狐财经",
      "url": "https://www.sohu.com/a/1071425363_120619691",
      "title": "单季17个新品、会员仍流失近300万：霸王茶姬进入“改革深水区”",
      "summary": "Q2新品矩阵连发但活跃会员从5000万回落至4710万；加盟费用改革统一收取GMV的17%作为品牌服务费、原料降价20-40%，总部收入与门店GMV直接挂钩，从“供应商”向“合伙人”转型。",
      "tags": [
        "财报",
        "行业趋势"
      ]
    },
    {
      "id": "n080",
      "brand": "fila",
      "cat": "apparel",
      "heat": 70,
      "date": "09-04",
      "source": "搜狐",
      "url": "https://www.sohu.com/a/1071778061_121119580",
      "title": "FILA代言人布云朝克特美网横扫12号种子：中国男网大满贯正赛首胜",
      "summary": "9月3日凌晨美网男单首轮，布云朝克特以6-2/6-1/6-1直落三盘击败世界第13的霍达尔，职业生涯首夺大满贯正赛胜利，再度刷新中国男网历史印记。",
      "tags": [
        "体育营销"
      ]
    },
    {
      "id": "n081",
      "brand": "toptoy",
      "cat": "ip",
      "heat": 70,
      "date": "09-04",
      "source": "21世纪经济报道",
      "url": "https://gu.qq.com/resources/shy/news/detail-v2/index.html?t=1#/index?_tentrees_trans=0&id=SN20260904093442a4ceccca",
      "title": "TOP TOY营收增32.7%却首次由盈转亏",
      "summary": "上半年营收9.85亿元、同比增速32.7%领跑名创集团各业务线，但录得7234万元经营亏损——自有IP“yuy玉”杭州快闪单月GMV超1500万元，海外直营扩张仍在烧钱；今年6月美国首店入驻纽约时代广场，为中国潮玩品牌首次；完成约4.27亿元A轮融资后已正式递表港交所。",
      "tags": [
        "财报",
        "资本动态"
      ]
    },
    {
      "id": "n082",
      "brand": "chanel",
      "cat": "beauty",
      "heat": 70,
      "date": "09-04",
      "source": "品牌星球",
      "url": "https://www.brandstar.com.cn/news/8285",
      "title": "香奈儿可可小姐心动香水限时活动登陆上海iapm，Gracie Abrams任新代言",
      "summary": "9/4-13上海环贸iapm「绝对心动」限时空间：电影院/心动吧台/咖啡馆/彩妆站多感官体验；新品馥郁琥珀调由调香师奥利维耶·波巨创作；格莱美提名歌手Gracie Abrams出任可可小姐香水系列全新代言人。",
      "tags": [
        "新品",
        "线下体验",
        "代言"
      ]
    },
    {
      "id": "n083",
      "brand": "anta",
      "cat": "apparel",
      "heat": 68,
      "date": "09-04",
      "source": "搜狐",
      "url": "https://www.sohu.com/a/1071778061_121119580",
      "title": "安踏入选福布斯2026中国企业跨国经营30强：榜单中唯一体育用品企业",
      "summary": "榜单综合经营业绩、海外市场竞争力、海外实体布局等指标；安踏深耕东南亚、拓展中东非洲欧美，联动96家高校科研机构、近1200名国际研发专家，从产品出海迈向能力出海。",
      "tags": [
        "行业荣誉"
      ]
    },
    {
      "id": "n084",
      "brand": "toptoy",
      "cat": "ip",
      "heat": 68,
      "date": "09-04",
      "source": "SocialBeta",
      "url": "https://socialbeta.com/article/111338",
      "title": "最火“素人”小玉yuy成今年IP联名王，背后有TOP TOY系统化支撑",
      "summary": "小红书素人IP小玉yuy半年完成十余场跨界合作：牵手MEDM、CASETiFY、华为、美图，出任麦当劳“东南亚美味领队”，官宣“入职”奈雪的茶；商场快闪成“排队王”：杭州快闪日均销售破20万、北京朝阳合生汇快闪开业不到一月业绩破千万。",
      "tags": [
        "IP",
        "联名"
      ]
    },
    {
      "id": "n085",
      "brand": "lining",
      "cat": "apparel",
      "heat": 66,
      "date": "09-04",
      "source": "搜狐",
      "url": "https://www.sohu.com/a/1071778061_121119580",
      "title": "非凡领越再度增持李宁：5个交易日购入2961.95万股，持股升至16.91%",
      "summary": "非凡中国8月28日至9月1日在港交所公开市场完成新一轮收购，持股由15.77%升至16.91%；交易以公开市场市价完成、资金来自外部融资，未取得李宁控制权，释放长期看好运动资产信号。",
      "tags": [
        "资本动态"
      ]
    },
    {
      "id": "n086",
      "brand": "shiseido",
      "cat": "beauty",
      "heat": 64,
      "date": "09-04",
      "source": "钱江晚报·今日头条",
      "url": "https://www.toutiao.com/article/7681239945930883590/",
      "title": "银泰秋季美妆节开节：资生堂全新悦薇抗老家族等多款新品集中发布",
      "summary": "9/4-6、9/11-13两档期满千返百；SK-II神仙锁精华、资生堂悦薇抗老家族、莱珀妮冰川修护仪典、CT嘭感定妆粉饼小银盘首发等重磅新品集中亮相；空瓶回收换20元券+咖啡渣冰箱贴，把可持续嵌入美妆节。",
      "tags": [
        "新品",
        "渠道",
        "抗老"
      ]
    },
    {
      "id": "n087",
      "brand": "ip-industry",
      "cat": "ip",
      "heat": 60,
      "date": "09-04",
      "source": "SnapScope",
      "url": "https://snapscope.news/story/Labubu_Dolls_Get_Their_Own_Movie_as_Toy_Crossover_Trend_Surges",
      "title": "玩具跨界成全球趋势：Labubu大电影之外，IP“内容化”成变现新路径",
      "summary": "Labubu助推泡泡玛特市值逼近400亿美元、超越美泰；名创、卡游、布鲁可均在加码“IP+内容/乐园/影视”，玩具公司正集体转型娱乐品牌。",
      "tags": [
        "IP出海",
        "行业趋势"
      ]
    },
    {
      "id": "n088",
      "brand": "muji",
      "cat": "daily",
      "heat": 58,
      "date": "09-04",
      "source": "中国商报",
      "url": "https://www.toutiao.com/article/7681598105363431971/",
      "title": "MUJI推出ReMUJI资源循环项目：瑕疵衣物、积存面料重新走向货架",
      "summary": "以“再入生活”为主题设旧物回收、衣物循环、惜物市集、余料成材、家具翻新五大板块，8月27日落地上海新六百YOUNG城市旗舰店与张园体验店；回收瑕疵衣物翻新拼接成桶包，微瑕商品进“惜物市集”实惠出售。",
      "tags": [
        "可持续",
        "新业态"
      ]
    },
    {
      "id": "n089",
      "brand": "anta",
      "cat": "apparel",
      "heat": 82,
      "date": "09-03",
      "source": "中国产业经济信息网",
      "url": "https://www.cinic.org.cn/zgzz/qy/1651430.html",
      "title": "安踏半年报：营收435亿增12.9%，“其他品牌”暴增44.2%",
      "summary": "主品牌增4.8%、FILA增6.1%，迪桑特、可隆、狼爪、MAIA等贡献106.9亿元收入；毛利率63.9%行业领先，摩根大通维持增持评级、目标价130港元；上半年研发投入11.1亿元推进“AI 365”战略，自研“灵龙”设计大模型、“灵犀”穿搭大模型全面融入商品创意。",
      "tags": [
        "财报"
      ]
    },
    {
      "id": "n090",
      "brand": "songsu",
      "cat": "food",
      "heat": 76,
      "date": "09-03",
      "source": "腾讯新闻",
      "url": "https://news.qq.com/rain/a/20260903A080OK00",
      "title": "三只松鼠半年报：净利大增79.9%，“零食店的尽头是卖菜”",
      "summary": "上半年营收52.8亿元微降3.6%，归母净利2.49亿元增79.9%；生活馆社区超市新开33家，引入生鲜提高到店频率——用卖菜买回消费者的到店频次。",
      "tags": [
        "财报",
        "新业态"
      ]
    },
    {
      "id": "n091",
      "brand": "guming",
      "cat": "food",
      "heat": 74,
      "date": "09-03",
      "source": "时代财经",
      "url": "https://so.html5.qq.com/page/real/search_news?docid=70000021_3856a9a870092752",
      "title": "古茗半年报净利增44.4%，加盟新政：9.88万加盟费改为按年收",
      "summary": "上半年营收74.7亿元增31.9%，净利润15.68亿元；针对9月1日后签约新店，加盟费调整为按年收取以减轻加盟商前期资金压力；单店日均GMV升至7800元。",
      "tags": [
        "财报"
      ]
    },
    {
      "id": "n092",
      "brand": "lining",
      "cat": "apparel",
      "heat": 74,
      "date": "09-03",
      "source": "新浪财经",
      "url": "https://finance.sina.cn/2026-09-03/detail-iniqpqxy2153695.d.html",
      "title": "李宁半年报：营收152.35亿增2.8%，服装增长跑赢鞋类",
      "summary": "服装收入同比增11.8%，专业跑鞋销量突破1480万双；篮球品类仍在调整（上半年篮球流水下滑13%）。摩根大通将评级由增持下调至中性，安踏为其行业首选。",
      "tags": [
        "财报"
      ]
    },
    {
      "id": "n093",
      "brand": "361",
      "cat": "apparel",
      "heat": 70,
      "date": "09-03",
      "source": "每日经济新闻",
      "url": "https://news.qq.com/rain/a/20260903A03HYL00",
      "title": "361度半年报：营收增8%，主品牌增速国产第一",
      "summary": "营收61.6亿元、净利9.26亿元均增8%，电商收入增9.5%，存货周转天数降至102天、为四强中改善最显著；“性价比+下沉+儿童+海外”组合拳逼近特步；连续五届护航亚运会（名古屋亚运火炬手服装亮相）。",
      "tags": [
        "财报"
      ]
    },
    {
      "id": "n094",
      "brand": "blokees",
      "cat": "ip",
      "heat": 70,
      "date": "09-03",
      "source": "36氪",
      "url": "https://www.36kr.com/p/3964644914912768",
      "title": "9.9元卖爆的“中国版乐高”能跑多远：低价产品收入增61%，授权IP仅2个自有",
      "summary": "上半年9.9元价格带销量7750万件占总销量47.6%、收入同比增61%；毛利率降至44.3%创2023年以来新低，426个新SKU致模具折旧激增、销售成本增43.3%；最畅销六大系列中五个为外部授权（授权IP共75个 vs 自有IP仅2个），结构性隐忧凸显。",
      "tags": [
        "财报",
        "行业趋势"
      ]
    },
    {
      "id": "n095",
      "brand": "ip-industry",
      "cat": "ip",
      "heat": 68,
      "date": "09-03",
      "source": "搜狐财经",
      "url": "https://www.sohu.com/a/1071489176_122369250",
      "title": "盲盒监管收紧：中消协重申不得向未满8周岁未成年人销售盲盒",
      "summary": "2026年“六一”前中消协发布盲盒消费提示，盲盒消费投诉平均涉诉金额高达4427元、单起最高30万元；“类博彩”争议下，卡牌/盲盒品类合规成本持续抬升。",
      "tags": [
        "监管",
        "行业趋势"
      ]
    },
    {
      "id": "n096",
      "brand": "miniso",
      "cat": "daily",
      "heat": 66,
      "date": "09-03",
      "source": "腾讯新闻",
      "url": "https://news.qq.com/rain/a/20260903A09UTA00",
      "title": "港股消费板块掀起“回购潮”：名创优品连续4日回购",
      "summary": "9月2日奈雪、名创优品、华润饮料、蒙牛、燕之屋同日回购合计逾4197万港元；截至9月3日名创优品连续4日回购累计284.86万股、耗资5349.87万港元，为板块回购潮中力度最大之一；国信证券维持“优于大市”评级。",
      "tags": [
        "资本动态"
      ]
    },
    {
      "id": "n097",
      "brand": "mgp",
      "cat": "beauty",
      "heat": 66,
      "date": "09-03",
      "source": "今日头条·变美咖",
      "url": "https://www.toutiao.com/article/7681223638263022120",
      "title": "毛戈平凭东方美学抢占高端彩妆：香氛「闻道东方」、熊猫花花联名扩版图",
      "summary": "2024年成为中国高端美妆TOP20唯一国货；2025年进军香氛推「闻道东方」13香型；2026年与熊猫花花联名「幻花御境」8单品+光影塑颜高光液，从故宫文创到国家队美妆供应商构建东方美学叙事。",
      "tags": [
        "高端化",
        "香氛",
        "联名"
      ]
    },
    {
      "id": "n098",
      "brand": "xtep",
      "cat": "apparel",
      "heat": 62,
      "date": "09-03",
      "source": "中国产业经济信息网",
      "url": "https://www.cinic.org.cn/zgzz/qy/1651430.html",
      "title": "特步半年报：营收微降0.6%，下调全年收入指引",
      "summary": "主品牌收入59.2亿元下降2.2%，索康尼、迈乐组成的专业运动分部增11.4%、毛利率升至55.5%；索康尼推进高端化2.0战略、国内门店达180家，海外业务翻倍增长；首席财务官表示宏观环境不确定、第三季销售表现受压。",
      "tags": [
        "财报"
      ]
    }
  ],
  "hotlists": {
    "note": "微博/抖音已接入真实完整 Top30 全榜单（微博·话题页 / 抖音·话题搜索，2026-09-09 07:50 实时快照，可跳转核验；本次八爪鱼模板523任务正常完成但返回0行——微博账号仍未在云配置登录，榜单改用聚合站toupage实时快照）；小红书热点为人工核实聚合（10条），热门话题榜 Top20 为千瓜数据公开报告整理（覆盖近90日热点，千瓜官网资讯列表近90日最新一篇仍为09-01「农场热」、无更新故保留上期条目）——千瓜实时榜单为付费登录产品无法直接抓取，uapis.cn 聚合源经实测已改为文档页（API路径失效）彻底弃用。wbEntertainment 微博文娱榜 + dySeeding 抖音种草榜：从热搜总榜中筛 剧集/综艺/音乐/电影/明星动态/演出（微博）+ 穿搭/时尚/护肤/美妆/美食/好物/生活技巧/季节情绪（抖音）等标签化话题，url 严格直连话题页/话题搜索页、reportUrl 真实报道优先+百度新闻聚合兜底；今日文娱/种草标签话题较少，分别收录15条/10条。",
    "weibo": [
      {
        "rank": 1,
        "topic": "香港首任特首董建华逝世",
        "note": "热搜榜Top1 · 时政要闻 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "微博·话题页",
        "url": "https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E9%A6%96%E4%BB%BB%E7%89%B9%E9%A6%96%E8%91%A3%E5%BB%BA%E5%8D%8E%E9%80%9D%E4%B8%96%23",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E9%A6%99%E6%B8%AF%E9%A6%96%E4%BB%BB%E7%89%B9%E9%A6%96%E8%91%A3%E5%BB%BA%E5%8D%8E%E9%80%9D%E4%B8%96"
      },
      {
        "rank": 2,
        "topic": "美股 光通信",
        "note": "热搜榜Top2 · 财经行情 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "微博·话题页",
        "url": "https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%20%E5%85%89%E9%80%9A%E4%BF%A1%23",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E7%BE%8E%E8%82%A1%20%E5%85%89%E9%80%9A%E4%BF%A1"
      },
      {
        "rank": 3,
        "topic": "从瑞金到延安的初心奔赴",
        "note": "热搜榜Top3 · 时政话题 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "微博·话题页",
        "url": "https://s.weibo.com/weibo?q=%23%E4%BB%8E%E7%91%9E%E9%87%91%E5%88%B0%E5%BB%B6%E5%AE%89%E7%9A%84%E5%88%9D%E5%BF%83%E5%A5%94%E8%B5%B4%23",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E4%BB%8E%E7%91%9E%E9%87%91%E5%88%B0%E5%BB%B6%E5%AE%89%E7%9A%84%E5%88%9D%E5%BF%83%E5%A5%94%E8%B5%B4"
      },
      {
        "rank": 4,
        "topic": "这段话杀死了内耗型人格",
        "note": "热搜榜Top4 · 情绪话题 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "微博·话题页",
        "url": "https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%AE%B5%E8%AF%9D%E6%9D%80%E6%AD%BB%E4%BA%86%E5%86%85%E8%80%97%E5%9E%8B%E4%BA%BA%E6%A0%BC%23",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E8%BF%99%E6%AE%B5%E8%AF%9D%E6%9D%80%E6%AD%BB%E4%BA%86%E5%86%85%E8%80%97%E5%9E%8B%E4%BA%BA%E6%A0%BC"
      },
      {
        "rank": 5,
        "topic": "这样的吃播该全面叫停了",
        "note": "热搜榜Top5 · 社会讨论 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "微博·话题页",
        "url": "https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%A0%B7%E7%9A%84%E5%90%83%E6%92%AD%E8%AF%A5%E5%85%A8%E9%9D%A2%E5%8F%AB%E5%81%9C%E4%BA%86%23",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E8%BF%99%E6%A0%B7%E7%9A%84%E5%90%83%E6%92%AD%E8%AF%A5%E5%85%A8%E9%9D%A2%E5%8F%AB%E5%81%9C%E4%BA%86"
      },
      {
        "rank": 6,
        "topic": "毛泽东逝世50周年",
        "note": "热搜榜Top6 · 时政纪念日 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "微博·话题页",
        "url": "https://s.weibo.com/weibo?q=%23%E6%AF%9B%E6%B3%BD%E4%B8%9C%E9%80%9D%E4%B8%9650%E5%91%A8%E5%B9%B4%23",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E6%AF%9B%E6%B3%BD%E4%B8%9C%E9%80%9D%E4%B8%9650%E5%91%A8%E5%B9%B4"
      },
      {
        "rank": 7,
        "topic": "医生眼里让大脑休息最好的方法",
        "note": "热搜榜Top7 · 科普健康 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "微博·话题页",
        "url": "https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E7%9C%BC%E9%87%8C%E8%AE%A9%E5%A4%A7%E8%84%91%E4%BC%91%E6%81%AF%E6%9C%80%E5%A5%BD%E7%9A%84%E6%96%B9%E6%B3%95%23",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E5%8C%BB%E7%94%9F%E7%9C%BC%E9%87%8C%E8%AE%A9%E5%A4%A7%E8%84%91%E4%BC%91%E6%81%AF%E6%9C%80%E5%A5%BD%E7%9A%84%E6%96%B9%E6%B3%95"
      },
      {
        "rank": 8,
        "topic": "金球奖",
        "note": "热搜榜Top8 · 体育奖项 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "微博·话题页",
        "url": "https://s.weibo.com/weibo?q=%23%E9%87%91%E7%90%83%E5%A5%96%23",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E9%87%91%E7%90%83%E5%A5%96"
      },
      {
        "rank": 9,
        "topic": "我的前半生",
        "note": "热搜榜Top9 · 剧集话题 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "微博·话题页",
        "url": "https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E5%89%8D%E5%8D%8A%E7%94%9F%23",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E6%88%91%E7%9A%84%E5%89%8D%E5%8D%8A%E7%94%9F"
      },
      {
        "rank": 10,
        "topic": "栾念尚之桃重逢擦肩而过",
        "note": "热搜榜Top10 · 剧集角色 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "微博·话题页",
        "url": "https://s.weibo.com/weibo?q=%23%E6%A0%BE%E5%BF%B5%E5%B0%9A%E4%B9%8B%E6%A1%83%E9%87%8D%E9%80%A2%E6%93%A6%E8%82%A9%E8%80%8C%E8%BF%87%23",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E6%A0%BE%E5%BF%B5%E5%B0%9A%E4%B9%8B%E6%A1%83%E9%87%8D%E9%80%A2%E6%93%A6%E8%82%A9%E8%80%8C%E8%BF%87"
      },
      {
        "rank": 11,
        "topic": "双休不一定是休周六周日",
        "note": "热搜榜Top11 · 职场讨论 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "微博·话题页",
        "url": "https://s.weibo.com/weibo?q=%23%E5%8F%8C%E4%BC%91%E4%B8%8D%E4%B8%80%E5%AE%9A%E6%98%AF%E4%BC%91%E5%91%A8%E5%85%AD%E5%91%A8%E6%97%A5%23",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E5%8F%8C%E4%BC%91%E4%B8%8D%E4%B8%80%E5%AE%9A%E6%98%AF%E4%BC%91%E5%91%A8%E5%85%AD%E5%91%A8%E6%97%A5"
      },
      {
        "rank": 12,
        "topic": "张婧仪 宋威龙",
        "note": "热搜榜Top12 · 明星动态 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "微博·话题页",
        "url": "https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%20%E5%AE%8B%E5%A8%81%E9%BE%99%23",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E5%BC%A0%E5%A9%A7%E4%BB%AA%20%E5%AE%8B%E5%A8%81%E9%BE%99"
      },
      {
        "rank": 13,
        "topic": "女子趁49岁男友午睡将其杀害分尸",
        "note": "热搜榜Top13 · 社会案件 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "微博·话题页",
        "url": "https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%B6%8149%E5%B2%81%E7%94%B7%E5%8F%8B%E5%8D%88%E7%9D%A1%E5%B0%86%E5%85%B6%E6%9D%80%E5%AE%B3%E5%88%86%E5%B0%B8%23",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E5%A5%B3%E5%AD%90%E8%B6%8149%E5%B2%81%E7%94%B7%E5%8F%8B%E5%8D%88%E7%9D%A1%E5%B0%86%E5%85%B6%E6%9D%80%E5%AE%B3%E5%88%86%E5%B0%B8"
      },
      {
        "rank": 14,
        "topic": "差点没认出杨洋",
        "note": "热搜榜Top14 · 明星动态 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "微博·话题页",
        "url": "https://s.weibo.com/weibo?q=%23%E5%B7%AE%E7%82%B9%E6%B2%A1%E8%AE%A4%E5%87%BA%E6%9D%A8%E6%B4%8B%23",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E5%B7%AE%E7%82%B9%E6%B2%A1%E8%AE%A4%E5%87%BA%E6%9D%A8%E6%B4%8B"
      },
      {
        "rank": 15,
        "topic": "皇马2比1国际米兰",
        "note": "热搜榜Top15 · 体育赛事 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "微博·话题页",
        "url": "https://s.weibo.com/weibo?q=%23%E7%9A%87%E9%A9%AC2%E6%AF%941%E5%9B%BD%E9%99%85%E7%B1%B3%E5%85%B0%23",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E7%9A%87%E9%A9%AC2%E6%AF%941%E5%9B%BD%E9%99%85%E7%B1%B3%E5%85%B0"
      },
      {
        "rank": 16,
        "topic": "iPhone18Pro发布会倒计时",
        "note": "热搜榜Top16 · 科技数码 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "微博·话题页",
        "url": "https://s.weibo.com/weibo?q=%23iPhone18Pro%E5%8F%91%E5%B8%83%E4%BC%9A%E5%80%92%E8%AE%A1%E6%97%B6%23",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=iPhone18Pro%E5%8F%91%E5%B8%83%E4%BC%9A%E5%80%92%E8%AE%A1%E6%97%B6"
      },
      {
        "rank": 17,
        "topic": "耐克给郑钦文写的文案",
        "note": "热搜榜Top17 · 品牌营销 · 09-09 07:50 实时快照",
        "brand": "nike",
        "source": "微博·话题页",
        "url": "https://s.weibo.com/weibo?q=%23%E8%80%90%E5%85%8B%E7%BB%99%E9%83%91%E9%92%A6%E6%96%87%E5%86%99%E7%9A%84%E6%96%87%E6%A1%88%23",
        "reportSource": "腾讯新闻",
        "reportUrl": "https://new.qq.com/rain/a/20260909A0320I00"
      },
      {
        "rank": 18,
        "topic": "印度21岁女运动员因外貌走红",
        "note": "热搜榜Top18 · 体育人物 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "微博·话题页",
        "url": "https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A621%E5%B2%81%E5%A5%B3%E8%BF%90%E5%8A%A8%E5%91%98%E5%9B%A0%E5%A4%96%E8%B2%8C%E8%B5%B0%E7%BA%A2%23",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E5%8D%B0%E5%BA%A621%E5%B2%81%E5%A5%B3%E8%BF%90%E5%8A%A8%E5%91%98%E5%9B%A0%E5%A4%96%E8%B2%8C%E8%B5%B0%E7%BA%A2"
      },
      {
        "rank": 19,
        "topic": "夜旅人换脸后是倪妮付辛博",
        "note": "热搜榜Top19 · 剧集选角 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "微博·话题页",
        "url": "https://s.weibo.com/weibo?q=%23%E5%A4%9C%E6%97%85%E4%BA%BA%E6%8D%A2%E8%84%B8%E5%90%8E%E6%98%AF%E5%80%AA%E5%A6%AE%E4%BB%98%E8%BE%9B%E5%8D%9A%23",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E5%A4%9C%E6%97%85%E4%BA%BA%E6%8D%A2%E8%84%B8%E5%90%8E%E6%98%AF%E5%80%AA%E5%A6%AE%E4%BB%98%E8%BE%9B%E5%8D%9A"
      },
      {
        "rank": 20,
        "topic": "刘畅邓恩熙有牵手戏份",
        "note": "热搜榜Top20 · 剧集话题 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "微博·话题页",
        "url": "https://s.weibo.com/weibo?q=%23%E5%88%98%E7%95%85%E9%82%93%E6%81%A9%E7%86%99%E6%9C%89%E7%89%B5%E6%89%8B%E6%88%8F%E4%BB%BD%23",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E5%88%98%E7%95%85%E9%82%93%E6%81%A9%E7%86%99%E6%9C%89%E7%89%B5%E6%89%8B%E6%88%8F%E4%BB%BD"
      },
      {
        "rank": 21,
        "topic": "小米澎程首撞",
        "note": "热搜榜Top21 · 汽车安全 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "微博·话题页",
        "url": "https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%E9%A6%96%E6%92%9E%23",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%E9%A6%96%E6%92%9E"
      },
      {
        "rank": 22,
        "topic": "什么是人生最顶级的享受",
        "note": "热搜榜Top22 · 情绪话题 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "微博·话题页",
        "url": "https://s.weibo.com/weibo?q=%23%E4%BB%80%E4%B9%88%E6%98%AF%E4%BA%BA%E7%94%9F%E6%9C%80%E9%A1%B6%E7%BA%A7%E7%9A%84%E4%BA%AB%E5%8F%97%23",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E4%BB%80%E4%B9%88%E6%98%AF%E4%BA%BA%E7%94%9F%E6%9C%80%E9%A1%B6%E7%BA%A7%E7%9A%84%E4%BA%AB%E5%8F%97"
      },
      {
        "rank": 23,
        "topic": "特朗普一次惹了20国",
        "note": "热搜榜Top23 · 国际时政 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "微博·话题页",
        "url": "https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E4%B8%80%E6%AC%A1%E6%83%B9%E4%BA%8620%E5%9B%BD%23",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E7%89%B9%E6%9C%97%E6%99%AE%E4%B8%80%E6%AC%A1%E6%83%B9%E4%BA%8620%E5%9B%BD"
      },
      {
        "rank": 24,
        "topic": "井柏然 倪妮",
        "note": "热搜榜Top24 · 明星动态 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "微博·话题页",
        "url": "https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%20%E5%80%AA%E5%A6%AE%23",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E4%BA%95%E6%9F%8F%E7%84%B6%20%E5%80%AA%E5%A6%AE"
      },
      {
        "rank": 25,
        "topic": "受资助女孩质问为何没打生活费",
        "note": "热搜榜Top25 · 社会事件 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "微博·话题页",
        "url": "https://s.weibo.com/weibo?q=%23%E5%8F%97%E8%B5%84%E5%8A%A9%E5%A5%B3%E5%AD%A9%E8%B4%A8%E9%97%AE%E4%B8%BA%E4%BD%95%E6%B2%A1%E6%89%93%E7%94%9F%E6%B4%BB%E8%B4%B9%23",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E5%8F%97%E8%B5%84%E5%8A%A9%E5%A5%B3%E5%AD%A9%E8%B4%A8%E9%97%AE%E4%B8%BA%E4%BD%95%E6%B2%A1%E6%89%93%E7%94%9F%E6%B4%BB%E8%B4%B9"
      },
      {
        "rank": 26,
        "topic": "整个英语体系没有比这个更完整的了",
        "note": "热搜榜Top26 · 知识科普 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "微博·话题页",
        "url": "https://s.weibo.com/weibo?q=%23%E6%95%B4%E4%B8%AA%E8%8B%B1%E8%AF%AD%E4%BD%93%E7%B3%BB%E6%B2%A1%E6%9C%89%E6%AF%94%E8%BF%99%E4%B8%AA%E6%9B%B4%E5%AE%8C%E6%95%B4%E7%9A%84%E4%BA%86%23",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E6%95%B4%E4%B8%AA%E8%8B%B1%E8%AF%AD%E4%BD%93%E7%B3%BB%E6%B2%A1%E6%9C%89%E6%AF%94%E8%BF%99%E4%B8%AA%E6%9B%B4%E5%AE%8C%E6%95%B4%E7%9A%84%E4%BA%86"
      },
      {
        "rank": 27,
        "topic": "欧冠",
        "note": "热搜榜Top27 · 体育赛事 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "微博·话题页",
        "url": "https://s.weibo.com/weibo?q=%23%E6%AC%A7%E5%86%A0%23",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E6%AC%A7%E5%86%A0"
      },
      {
        "rank": 28,
        "topic": "小学生梦游从7楼坠下砸烂宝马车",
        "note": "热搜榜Top28 · 社会事件 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "微博·话题页",
        "url": "https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%AD%A6%E7%94%9F%E6%A2%A6%E6%B8%B8%E4%BB%8E7%E6%A5%BC%E5%9D%A0%E4%B8%8B%E7%A0%B8%E7%83%82%E5%AE%9D%E9%A9%AC%E8%BD%A6%23",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E5%B0%8F%E5%AD%A6%E7%94%9F%E6%A2%A6%E6%B8%B8%E4%BB%8E7%E6%A5%BC%E5%9D%A0%E4%B8%8B%E7%A0%B8%E7%83%82%E5%AE%9D%E9%A9%AC%E8%BD%A6"
      },
      {
        "rank": 29,
        "topic": "张婧仪宋威龙情侣演久了会有夫妻相",
        "note": "热搜榜Top29 · 剧集话题 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "微博·话题页",
        "url": "https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E5%AE%8B%E5%A8%81%E9%BE%99%E6%83%85%E4%BE%A3%E6%BC%94%E4%B9%85%E4%BA%86%E4%BC%9A%E6%9C%89%E5%A4%AB%E5%A6%BB%E7%9B%B8%23",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E5%BC%A0%E5%A9%A7%E4%BB%AA%E5%AE%8B%E5%A8%81%E9%BE%99%E6%83%85%E4%BE%A3%E6%BC%94%E4%B9%85%E4%BA%86%E4%BC%9A%E6%9C%89%E5%A4%AB%E5%A6%BB%E7%9B%B8"
      },
      {
        "rank": 30,
        "topic": "女子吃墨鱼吃出剧毒红斑斗蟹",
        "note": "热搜榜Top30 · 食品安全 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "微博·话题页",
        "url": "https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%90%83%E5%A2%A8%E9%B1%BC%E5%90%83%E5%87%BA%E5%89%A7%E6%AF%92%E7%BA%A2%E6%96%91%E6%96%97%E8%9F%B9%23",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E5%A5%B3%E5%AD%90%E5%90%83%E5%A2%A8%E9%B1%BC%E5%90%83%E5%87%BA%E5%89%A7%E6%AF%92%E7%BA%A2%E6%96%91%E6%96%97%E8%9F%B9"
      }
    ],
    "douyin": [
      {
        "rank": 1,
        "topic": "送你一口秋天味道",
        "note": "抖音热榜Top1 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "抖音·话题搜索",
        "url": "https://www.douyin.com/search/%E9%80%81%E4%BD%A0%E4%B8%80%E5%8F%A3%E7%A7%8B%E5%A4%A9%E5%91%B3%E9%81%93",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E9%80%81%E4%BD%A0%E4%B8%80%E5%8F%A3%E7%A7%8B%E5%A4%A9%E5%91%B3%E9%81%93"
      },
      {
        "rank": 2,
        "topic": "跑步可以治愈一切",
        "note": "抖音热榜Top2 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "抖音·话题搜索",
        "url": "https://www.douyin.com/search/%E8%B7%91%E6%AD%A5%E5%8F%AF%E4%BB%A5%E6%B2%BB%E6%84%88%E4%B8%80%E5%88%87",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E8%B7%91%E6%AD%A5%E5%8F%AF%E4%BB%A5%E6%B2%BB%E6%84%88%E4%B8%80%E5%88%87"
      },
      {
        "rank": 3,
        "topic": "平陆运河抢先看",
        "note": "抖音热榜Top3 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "抖音·话题搜索",
        "url": "https://www.douyin.com/search/%E5%B9%B3%E9%99%86%E8%BF%90%E6%B2%B3%E6%8A%A2%E5%85%88%E7%9C%8B",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E5%B9%B3%E9%99%86%E8%BF%90%E6%B2%B3%E6%8A%A2%E5%85%88%E7%9C%8B"
      },
      {
        "rank": 4,
        "topic": "初代神图全靠手抖出片",
        "note": "抖音热榜Top4 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "抖音·话题搜索",
        "url": "https://www.douyin.com/search/%E5%88%9D%E4%BB%A3%E7%A5%9E%E5%9B%BE%E5%85%A8%E9%9D%A0%E6%89%8B%E6%8A%96%E5%87%BA%E7%89%87",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E5%88%9D%E4%BB%A3%E7%A5%9E%E5%9B%BE%E5%85%A8%E9%9D%A0%E6%89%8B%E6%8A%96%E5%87%BA%E7%89%87"
      },
      {
        "rank": 5,
        "topic": "香港首任特首董建华逝世",
        "note": "抖音热榜Top5 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "抖音·话题搜索",
        "url": "https://www.douyin.com/search/%E9%A6%99%E6%B8%AF%E9%A6%96%E4%BB%BB%E7%89%B9%E9%A6%96%E8%91%A3%E5%BB%BA%E5%8D%8E%E9%80%9D%E4%B8%96",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E9%A6%99%E6%B8%AF%E9%A6%96%E4%BB%BB%E7%89%B9%E9%A6%96%E8%91%A3%E5%BB%BA%E5%8D%8E%E9%80%9D%E4%B8%96"
      },
      {
        "rank": 6,
        "topic": "秋一下才对味",
        "note": "抖音热榜Top6 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "抖音·话题搜索",
        "url": "https://www.douyin.com/search/%E7%A7%8B%E4%B8%80%E4%B8%8B%E6%89%8D%E5%AF%B9%E5%91%B3",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E7%A7%8B%E4%B8%80%E4%B8%8B%E6%89%8D%E5%AF%B9%E5%91%B3"
      },
      {
        "rank": 7,
        "topic": "IG 3:0战胜LGD",
        "note": "抖音热榜Top7 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "抖音·话题搜索",
        "url": "https://www.douyin.com/search/IG%203%3A0%E6%88%98%E8%83%9CLGD",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=IG%203%3A0%E6%88%98%E8%83%9CLGD"
      },
      {
        "rank": 8,
        "topic": "写给老师的教师节贺卡",
        "note": "抖音热榜Top8 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "抖音·话题搜索",
        "url": "https://www.douyin.com/search/%E5%86%99%E7%BB%99%E8%80%81%E5%B8%88%E7%9A%84%E6%95%99%E5%B8%88%E8%8A%82%E8%B4%BA%E5%8D%A1",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E5%86%99%E7%BB%99%E8%80%81%E5%B8%88%E7%9A%84%E6%95%99%E5%B8%88%E8%8A%82%E8%B4%BA%E5%8D%A1"
      },
      {
        "rank": 9,
        "topic": "觉醒吧我的厨艺天赋",
        "note": "抖音热榜Top9 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "抖音·话题搜索",
        "url": "https://www.douyin.com/search/%E8%A7%89%E9%86%92%E5%90%A7%E6%88%91%E7%9A%84%E5%8E%A8%E8%89%BA%E5%A4%A9%E8%B5%8B",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E8%A7%89%E9%86%92%E5%90%A7%E6%88%91%E7%9A%84%E5%8E%A8%E8%89%BA%E5%A4%A9%E8%B5%8B"
      },
      {
        "rank": 10,
        "topic": "国足公布新一期集训名单",
        "note": "抖音热榜Top10 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "抖音·话题搜索",
        "url": "https://www.douyin.com/search/%E5%9B%BD%E8%B6%B3%E5%85%AC%E5%B8%83%E6%96%B0%E4%B8%80%E6%9C%9F%E9%9B%86%E8%AE%AD%E5%90%8D%E5%8D%95",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E5%9B%BD%E8%B6%B3%E5%85%AC%E5%B8%83%E6%96%B0%E4%B8%80%E6%9C%9F%E9%9B%86%E8%AE%AD%E5%90%8D%E5%8D%95"
      },
      {
        "rank": 11,
        "topic": "伊朗公布一款新型导弹",
        "note": "抖音热榜Top11 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "抖音·话题搜索",
        "url": "https://www.douyin.com/search/%E4%BC%8A%E6%9C%97%E5%85%AC%E5%B8%83%E4%B8%80%E6%AC%BE%E6%96%B0%E5%9E%8B%E5%AF%BC%E5%BC%B9",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E4%BC%8A%E6%9C%97%E5%85%AC%E5%B8%83%E4%B8%80%E6%AC%BE%E6%96%B0%E5%9E%8B%E5%AF%BC%E5%BC%B9"
      },
      {
        "rank": 12,
        "topic": "应急管理部原部长王祥喜被双开",
        "note": "抖音热榜Top12 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "抖音·话题搜索",
        "url": "https://www.douyin.com/search/%E5%BA%94%E6%80%A5%E7%AE%A1%E7%90%86%E9%83%A8%E5%8E%9F%E9%83%A8%E9%95%BF%E7%8E%8B%E7%A5%A5%E5%96%9C%E8%A2%AB%E5%8F%8C%E5%BC%80",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E5%BA%94%E6%80%A5%E7%AE%A1%E7%90%86%E9%83%A8%E5%8E%9F%E9%83%A8%E9%95%BF%E7%8E%8B%E7%A5%A5%E5%96%9C%E8%A2%AB%E5%8F%8C%E5%BC%80"
      },
      {
        "rank": 13,
        "topic": "首届柚子形象设计大赛",
        "note": "抖音热榜Top13 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "抖音·话题搜索",
        "url": "https://www.douyin.com/search/%E9%A6%96%E5%B1%8A%E6%9F%9A%E5%AD%90%E5%BD%A2%E8%B1%A1%E8%AE%BE%E8%AE%A1%E5%A4%A7%E8%B5%9B",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E9%A6%96%E5%B1%8A%E6%9F%9A%E5%AD%90%E5%BD%A2%E8%B1%A1%E8%AE%BE%E8%AE%A1%E5%A4%A7%E8%B5%9B"
      },
      {
        "rank": 14,
        "topic": "栾念尚之桃终于分手",
        "note": "抖音热榜Top14 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "抖音·话题搜索",
        "url": "https://www.douyin.com/search/%E6%A0%BE%E5%BF%B5%E5%B0%9A%E4%B9%8B%E6%A1%83%E7%BB%88%E4%BA%8E%E5%88%86%E6%89%8B",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E6%A0%BE%E5%BF%B5%E5%B0%9A%E4%B9%8B%E6%A1%83%E7%BB%88%E4%BA%8E%E5%88%86%E6%89%8B"
      },
      {
        "rank": 15,
        "topic": "皇马2:1击败国米",
        "note": "抖音热榜Top15 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "抖音·话题搜索",
        "url": "https://www.douyin.com/search/%E7%9A%87%E9%A9%AC2%3A1%E5%87%BB%E8%B4%A5%E5%9B%BD%E7%B1%B3",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E7%9A%87%E9%A9%AC2%3A1%E5%87%BB%E8%B4%A5%E5%9B%BD%E7%B1%B3"
      },
      {
        "rank": 16,
        "topic": "太子奶创始人李途纯去世",
        "note": "抖音热榜Top16 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "抖音·话题搜索",
        "url": "https://www.douyin.com/search/%E5%A4%AA%E5%AD%90%E5%A5%B6%E5%88%9B%E5%A7%8B%E4%BA%BA%E6%9D%8E%E9%80%94%E7%BA%AF%E5%8E%BB%E4%B8%96",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E5%A4%AA%E5%AD%90%E5%A5%B6%E5%88%9B%E5%A7%8B%E4%BA%BA%E6%9D%8E%E9%80%94%E7%BA%AF%E5%8E%BB%E4%B8%96"
      },
      {
        "rank": 17,
        "topic": "尚雯婕公司起诉曾舜晞",
        "note": "抖音热榜Top17 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "抖音·话题搜索",
        "url": "https://www.douyin.com/search/%E5%B0%9A%E9%9B%AF%E5%A9%95%E5%85%AC%E5%8F%B8%E8%B5%B7%E8%AF%89%E6%9B%BE%E8%88%9C%E6%99%9E",
        "reportSource": "新浪新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E5%B0%9A%E9%9B%AF%E5%A9%95%E5%85%AC%E5%8F%B8%E8%B5%B7%E8%AF%89%E6%9B%BE%E8%88%9C%E6%99%9E"
      },
      {
        "rank": 18,
        "topic": "江西遂川泥石流已致12人遇难",
        "note": "抖音热榜Top18 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "抖音·话题搜索",
        "url": "https://www.douyin.com/search/%E6%B1%9F%E8%A5%BF%E9%81%82%E5%B7%9D%E6%B3%A5%E7%9F%B3%E6%B5%81%E5%B7%B2%E8%87%B412%E4%BA%BA%E9%81%87%E9%9A%BE",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E6%B1%9F%E8%A5%BF%E9%81%82%E5%B7%9D%E6%B3%A5%E7%9F%B3%E6%B5%81%E5%B7%B2%E8%87%B412%E4%BA%BA%E9%81%87%E9%9A%BE"
      },
      {
        "rank": 19,
        "topic": "山西省原省长金湘军被判死缓",
        "note": "抖音热榜Top19 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "抖音·话题搜索",
        "url": "https://www.douyin.com/search/%E5%B1%B1%E8%A5%BF%E7%9C%81%E5%8E%9F%E7%9C%81%E9%95%BF%E9%87%91%E6%B9%98%E5%86%9B%E8%A2%AB%E5%88%A4%E6%AD%BB%E7%BC%93",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E5%B1%B1%E8%A5%BF%E7%9C%81%E5%8E%9F%E7%9C%81%E9%95%BF%E9%87%91%E6%B9%98%E5%86%9B%E8%A2%AB%E5%88%A4%E6%AD%BB%E7%BC%93"
      },
      {
        "rank": 20,
        "topic": "小米18 Fold首发评测",
        "note": "抖音热榜Top20 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "抖音·话题搜索",
        "url": "https://www.douyin.com/search/%E5%B0%8F%E7%B1%B318%20Fold%E9%A6%96%E5%8F%91%E8%AF%84%E6%B5%8B",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E5%B0%8F%E7%B1%B318%20Fold%E9%A6%96%E5%8F%91%E8%AF%84%E6%B5%8B"
      },
      {
        "rank": 21,
        "topic": "伊朗罕见用韩语警告韩国",
        "note": "抖音热榜Top21 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "抖音·话题搜索",
        "url": "https://www.douyin.com/search/%E4%BC%8A%E6%9C%97%E7%BD%95%E8%A7%81%E7%94%A8%E9%9F%A9%E8%AF%AD%E8%AD%A6%E5%91%8A%E9%9F%A9%E5%9B%BD",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E4%BC%8A%E6%9C%97%E7%BD%95%E8%A7%81%E7%94%A8%E9%9F%A9%E8%AF%AD%E8%AD%A6%E5%91%8A%E9%9F%A9%E5%9B%BD"
      },
      {
        "rank": 22,
        "topic": "莱巴金娜称郑钦文是危险对手",
        "note": "抖音热榜Top22 · 09-09 07:50 实时快照",
        "brand": "nike",
        "source": "抖音·话题搜索",
        "url": "https://www.douyin.com/search/%E8%8E%B1%E5%B7%B4%E9%87%91%E5%A8%9C%E7%A7%B0%E9%83%91%E9%92%A6%E6%96%87%E6%98%AF%E5%8D%B1%E9%99%A9%E5%AF%B9%E6%89%8B",
        "reportSource": "新蓝网（浙江广电）",
        "reportUrl": "https://www.cztv.com/newsDetail/901226"
      },
      {
        "rank": 23,
        "topic": "我的世界出现一位姑娘",
        "note": "抖音热榜Top23 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "抖音·话题搜索",
        "url": "https://www.douyin.com/search/%E6%88%91%E7%9A%84%E4%B8%96%E7%95%8C%E5%87%BA%E7%8E%B0%E4%B8%80%E4%BD%8D%E5%A7%91%E5%A8%98",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E6%88%91%E7%9A%84%E4%B8%96%E7%95%8C%E5%87%BA%E7%8E%B0%E4%B8%80%E4%BD%8D%E5%A7%91%E5%A8%98"
      },
      {
        "rank": 24,
        "topic": "白鹿穿燕麦系小跳一下",
        "note": "抖音热榜Top24 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "抖音·话题搜索",
        "url": "https://www.douyin.com/search/%E7%99%BD%E9%B9%BF%E7%A9%BF%E7%87%95%E9%BA%A6%E7%B3%BB%E5%B0%8F%E8%B7%B3%E4%B8%80%E4%B8%8B",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E7%99%BD%E9%B9%BF%E7%A9%BF%E7%87%95%E9%BA%A6%E7%B3%BB%E5%B0%8F%E8%B7%B3%E4%B8%80%E4%B8%8B"
      },
      {
        "rank": 25,
        "topic": "小米18 Fold首次拆解",
        "note": "抖音热榜Top25 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "抖音·话题搜索",
        "url": "https://www.douyin.com/search/%E5%B0%8F%E7%B1%B318%20Fold%E9%A6%96%E6%AC%A1%E6%8B%86%E8%A7%A3",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E5%B0%8F%E7%B1%B318%20Fold%E9%A6%96%E6%AC%A1%E6%8B%86%E8%A7%A3"
      },
      {
        "rank": 26,
        "topic": "周冬雨马思纯花少再合体",
        "note": "抖音热榜Top26 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "抖音·话题搜索",
        "url": "https://www.douyin.com/search/%E5%91%A8%E5%86%AC%E9%9B%A8%E9%A9%AC%E6%80%9D%E7%BA%AF%E8%8A%B1%E5%B0%91%E5%86%8D%E5%90%88%E4%BD%93",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E5%91%A8%E5%86%AC%E9%9B%A8%E9%A9%AC%E6%80%9D%E7%BA%AF%E8%8A%B1%E5%B0%91%E5%86%8D%E5%90%88%E4%BD%93"
      },
      {
        "rank": 27,
        "topic": "足球小将吕孟洋签约变动引热议",
        "note": "抖音热榜Top27 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "抖音·话题搜索",
        "url": "https://www.douyin.com/search/%E8%B6%B3%E7%90%83%E5%B0%8F%E5%B0%86%E5%90%95%E5%AD%9F%E6%B4%8B%E7%AD%BE%E7%BA%A6%E5%8F%98%E5%8A%A8%E5%BC%95%E7%83%AD%E8%AE%AE",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E8%B6%B3%E7%90%83%E5%B0%8F%E5%B0%86%E5%90%95%E5%AD%9F%E6%B4%8B%E7%AD%BE%E7%BA%A6%E5%8F%98%E5%8A%A8%E5%BC%95%E7%83%AD%E8%AE%AE"
      },
      {
        "rank": 28,
        "topic": "花小龙带孙艺洲自律的一天",
        "note": "抖音热榜Top28 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "抖音·话题搜索",
        "url": "https://www.douyin.com/search/%E8%8A%B1%E5%B0%8F%E9%BE%99%E5%B8%A6%E5%AD%99%E8%89%BA%E6%B4%B2%E8%87%AA%E5%BE%8B%E7%9A%84%E4%B8%80%E5%A4%A9",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E8%8A%B1%E5%B0%8F%E9%BE%99%E5%B8%A6%E5%AD%99%E8%89%BA%E6%B4%B2%E8%87%AA%E5%BE%8B%E7%9A%84%E4%B8%80%E5%A4%A9"
      },
      {
        "rank": 29,
        "topic": "人类幼崽版格格有多可爱",
        "note": "抖音热榜Top29 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "抖音·话题搜索",
        "url": "https://www.douyin.com/search/%E4%BA%BA%E7%B1%BB%E5%B9%BC%E5%B4%BD%E7%89%88%E6%A0%BC%E6%A0%BC%E6%9C%89%E5%A4%9A%E5%8F%AF%E7%88%B1",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E4%BA%BA%E7%B1%BB%E5%B9%BC%E5%B4%BD%E7%89%88%E6%A0%BC%E6%A0%BC%E6%9C%89%E5%A4%9A%E5%8F%AF%E7%88%B1"
      },
      {
        "rank": 30,
        "topic": "首款韬定律逻辑折叠芯片有多厉害",
        "note": "抖音热榜Top30 · 09-09 07:50 实时快照",
        "brand": "",
        "source": "抖音·话题搜索",
        "url": "https://www.douyin.com/search/%E9%A6%96%E6%AC%BE%E9%9F%AC%E5%AE%9A%E5%BE%8B%E9%80%BB%E8%BE%91%E6%8A%98%E5%8F%A0%E8%8A%AF%E7%89%87%E6%9C%89%E5%A4%9A%E5%8E%89%E5%AE%B3",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E9%A6%96%E6%AC%BE%E9%9F%AC%E5%AE%9A%E5%BE%8B%E9%80%BB%E8%BE%91%E6%8A%98%E5%8F%A0%E8%8A%AF%E7%89%87%E6%9C%89%E5%A4%9A%E5%8E%89%E5%AE%B3"
      }
    ],
    "xiaohongshu": [
      {
        "rank": 1,
        "topic": "瑞幸×名创优品YOYO联名晒单攻略",
        "note": "联名进行中（9月7日-13日）：小奶酪拿铁/抹茶奶酪拿铁+瑰夏白冷萃；周边全走“指定套餐随单送”，集齐全套成本账攻略笔记刷屏，预售按门店库存开放",
        "brand": "luckin",
        "source": "小红书·话题搜索",
        "url": "https://www.xiaohongshu.com/search_result/?keyword=%E7%91%9E%E5%B9%B8%20YOYO",
        "reportSource": "什么值得买（集齐成本账）",
        "reportUrl": "https://post.smzdm.com/p/a03dlz20"
      },
      {
        "rank": 2,
        "topic": "郑钦文今夜冲击美网四强",
        "note": "9月9日23:30美网1/4决赛对阵2号种子莱巴金娜：从资格赛七连胜+连续两轮0-5落后大逆转，复盘与助威笔记井喷（耐克赞助运动员；官方预测胜率13%仍被看好创造奇迹）",
        "brand": "nike",
        "source": "小红书·话题搜索",
        "url": "https://www.xiaohongshu.com/search_result/?keyword=%E9%83%91%E9%92%A6%E6%96%87",
        "reportSource": "腾讯新闻",
        "reportUrl": "https://new.qq.com/rain/a/20260909A0320I00"
      },
      {
        "rank": 3,
        "topic": "LABUBU城市乐园嘉年华上海站（持续至11.1）",
        "note": "东方明珠塔城市广场巡展开幕：巨型冒险船+ZIMOMO船长雕塑、9款互动游乐项目；POP BAKERY“复古理发店”裱花发型蛋糕与下午茶套餐登陆陆家嘴，集章攻略与限定周边笔记持续产出",
        "brand": "popmart",
        "source": "小红书·话题搜索",
        "url": "https://www.xiaohongshu.com/search_result/?keyword=LABUBU%20%E5%9F%8E%E5%B8%82%E4%B9%90%E5%9B%AD",
        "reportSource": "上海证券报·中国证券网",
        "reportUrl": "https://www.cnstock.com/commonDetail/786341"
      },
      {
        "rank": 4,
        "topic": "鹿晗×拓路者同款冲锋衣",
        "note": "官宣次日同款“朱雀2.0”“灵鹿”冲锋衣多色断码，晒单与山系穿搭笔记集中爆发；“国货户外品牌23年首位全球代言人”讨论度延续",
        "brand": "",
        "source": "小红书·话题搜索",
        "url": "https://www.xiaohongshu.com/search_result/?keyword=%E9%B9%BF%E6%99%97%20%E6%8B%93%E8%B7%AF%E8%80%85",
        "reportSource": "微博官宣博文",
        "reportUrl": "https://weibo.com/6897606002/5340505682215940"
      },
      {
        "rank": 5,
        "topic": "霸王茶姬×小王子港澳联名（9月10日上线）",
        "note": "明日（9月10日）港澳上线：抹茶拿铁/茉见青/星尘绿意3款新品+限定周边，B-612星球主题体验店亮相澳门威尼斯人与香港MOKO，倒计时攻略与代购提问帖持续增多",
        "brand": "bawang",
        "source": "小红书·话题搜索",
        "url": "https://www.xiaohongshu.com/search_result/?keyword=%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%20%E5%B0%8F%E7%8E%8B%E5%AD%90",
        "reportSource": "澳门莲花卫视",
        "reportUrl": "https://news.macaulotustv.com/home/index/detail/id/8251.html"
      },
      {
        "rank": 6,
        "topic": "霸王茶姬开始卖茶叶蛋了",
        "note": "上海7店9月7日首发“白雾红尘茶叶蛋”：单点5元、搭配正价饮品加购2.5元（限时至9.21），原叶慢煮奇兰拼配水仙、仅堂食；#霸王茶姬茶叶蛋# 登热搜，晒单与吐槽笔记齐飞",
        "brand": "bawang",
        "source": "小红书·话题搜索",
        "url": "https://www.xiaohongshu.com/search_result/?keyword=%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%20%E8%8C%B6%E5%8F%B6%E8%9B%8B",
        "reportSource": "都市快报·橙柿互动（网易号）",
        "reportUrl": "https://www.163.com/dy/article/L6AGRUGE051492LM.html"
      },
      {
        "rank": 7,
        "topic": "安踏严子怡夺冠同款标枪战靴",
        "note": "18岁严子怡布鲁塞尔钻石联赛总决赛68.42米夺冠并破赛会纪录、实现五连冠，赛前安踏官宣其为品牌代言人；定制标枪战靴新配色上脚图与“安踏押注田径新生代”讨论走高",
        "brand": "anta",
        "source": "小红书·话题搜索",
        "url": "https://www.xiaohongshu.com/search_result/?keyword=%E4%B8%A5%E5%AD%90%E6%80%A1%20%E5%AE%89%E8%B8%8F",
        "reportSource": "北晚在线（网易号）",
        "reportUrl": "https://www.163.com/dy/article/L65P4ADC0514TTKN.html"
      },
      {
        "rank": 8,
        "topic": "古茗奶茶店开卖啤酒",
        "note": "全国首家：杭州湖滨店9月5日上线“经典生啤”（15元）与“三重柚拉格”（18元）两款500ml现打啤酒，“奶茶店真的啥都卖”引围观，尝鲜测评与争议讨论同步发酵",
        "brand": "guming",
        "source": "小红书·话题搜索",
        "url": "https://www.xiaohongshu.com/search_result/?keyword=%E5%8F%A4%E8%8C%97%20%E5%95%A4%E9%85%92",
        "reportSource": "中国蓝新闻（微博）",
        "reportUrl": "https://weibo.com/2286092114/Rh17M3QA7"
      },
      {
        "rank": 9,
        "topic": "茶百道×天官赐福联名（9.12上线）",
        "note": "9月12日10:00上线：花怜双面单杯纸袋、夜光银蝶双杯纸袋、取景相框杯套等周边工艺获赞“美商无敌”，12天小票预热玩法被夸懂粉丝心理",
        "brand": "",
        "source": "小红书·话题搜索",
        "url": "https://www.xiaohongshu.com/search_result/?keyword=%E8%8C%B6%E7%99%BE%E9%81%93%20%E5%A4%A9%E5%AE%98%E8%B5%90%E7%A6%8F",
        "reportSource": "4A广告网",
        "reportUrl": "https://www.4anet.com/p/01m1n7mf3d4x8sdxgvsbf5fva0"
      },
      {
        "rank": 10,
        "topic": "千瓜「农场热」：当农民笔记+148%",
        "note": "千瓜数据：近90天“农场/种地”相关笔记同比增长148%+；#胡闹厨房笔记数+347%、#farmgirlstyle上线30天热度超千万；“工位水培豆芽”“共享菜园”成品牌种草新场景",
        "brand": "",
        "source": "小红书·话题搜索",
        "url": "https://www.xiaohongshu.com/search_result/?keyword=%E5%86%9C%E5%9C%BA%E7%83%AD",
        "reportSource": "千瓜数据·重生之我在小红书当农民",
        "reportUrl": "https://www.qian-gua.com/information/detail/3364"
      }
    ],
    "xhsActivities": [
      {
        "name": "第三届小红书「身边写作大赛」",
        "note": "9月1日开启，非虚构+“生活观察计划”双单元；全球45城设110个线下观察点与征稿入口（11个国家），全民写作从线上走到线下；两届大赛已有50多位参赛者出版成书",
        "date": "09-09",
        "url": "https://www.xiaohongshu.com/search_result/?keyword=%E8%BA%AB%E8%BE%B9%E5%86%99%E4%BD%9C%E5%A4%A7%E8%B5%9B",
        "source": "小红书·话题搜索",
        "reportSource": "新浪新闻（微博转载）",
        "reportUrl": "https://weibo.com/1406510824/5340545740450140"
      },
      {
        "name": "「小红村丰收节」金秋助农行动",
        "note": "9月4日起随2026金秋消费季（上海）启动并持续至11月：线下“小红村丰收市集”展售云南/四川/新疆百余款助农好物与乡村工匠手工艺品，线上话题征集提供千万级流量扶持；9月8日六大平台惠农举措集中落地",
        "date": "09-09",
        "url": "https://www.xiaohongshu.com/search_result/?keyword=%E5%B0%8F%E7%BA%A2%E6%9D%91%E4%B8%B0%E6%94%B6%E8%8A%82",
        "source": "小红书·话题搜索",
        "reportSource": "中国新闻网上海",
        "reportUrl": "https://www.sh.chinanews.com.cn/chanjing/2026-09-08/149049.shtml"
      },
      {
        "name": "天目里×小红书「上什么班」2.0（杭州）",
        "note": "职场情绪生活节回归：把“班味”议题做成市集、演出与互动展，品牌借“职场人设”场景种草",
        "date": "09-09",
        "url": "https://www.xiaohongshu.com/search_result/?keyword=%E4%B8%8A%E4%BB%80%E4%B9%88%E7%8F%AD%20%E5%A4%A9%E7%9B%AE%E9%87%8C",
        "source": "小红书·话题搜索",
        "reportSource": "SocialBeta",
        "reportUrl": "https://socialbeta.com/campaign/28424"
      },
      {
        "name": "NBA与小红书版权纠纷达成和解",
        "note": "9月8日上海高院披露：NBA运营方因用户盗播赛事诉至黄浦法院，经调解双方握手言和并就未来规则共建达成合作意向，平台版权治理与商业拓展并行",
        "date": "09-09",
        "url": "https://www.xiaohongshu.com/search_result/?keyword=NBA%20%E5%B0%8F%E7%BA%A2%E4%B9%A6",
        "source": "小红书·话题搜索",
        "reportSource": "上观新闻（腾讯新闻转载）",
        "reportUrl": "https://view.inews.qq.com/a/20260908A0AKDG00"
      },
      {
        "name": "2026小红书商业合作伙伴大会（景德镇）",
        "note": "官宣落地景德镇：围绕“种草生意”发布年度商业化产品与行业解决方案",
        "date": "09-09",
        "url": "https://www.xiaohongshu.com/search_result/?keyword=%E5%B0%8F%E7%BA%A2%E4%B9%A6%20%E5%90%88%E4%BD%9C%E4%BC%99%E4%BC%B4%E5%A4%A7%E4%BC%9A",
        "source": "小红书·话题搜索",
        "reportSource": "新浪看点",
        "reportUrl": "https://k.sina.cn/article_5115326071_130e5ae7702003043k.html"
      }
    ],
    "xhsTrending": [
      {
        "rank": 1,
        "topic": "#适我的家居住提案",
        "heat": "21亿+",
        "note": "「适我主义」年度关键词在家居住宅场景延续爆发，家居品牌种草主阵地",
        "source": "千瓜数据·话题分析",
        "url": "https://www.xiaohongshu.com/search_result/?keyword=%E9%80%82%E6%88%91%E7%9A%84%E5%AE%B6%E5%B1%85%E4%BD%8F%E6%8F%90%E6%A1%88",
        "reportSource": "千瓜数据·2026「种草关键词」适我主义报告",
        "reportUrl": "https://wap.qian-gua.com/information/detail/3360"
      },
      {
        "rank": 2,
        "topic": "#不为打卡的旅行",
        "heat": "18亿+",
        "note": "反打卡式旅行成主流叙事，目的地与酒店品牌转向“体验感”种草",
        "source": "千瓜数据·话题分析",
        "url": "https://www.xiaohongshu.com/search_result/?keyword=%E4%B8%8D%E4%B8%BA%E6%89%93%E5%8D%A1%E7%9A%84%E6%97%85%E8%A1%8C",
        "reportSource": "千瓜数据·2026「种草关键词」适我主义报告",
        "reportUrl": "https://wap.qian-gua.com/information/detail/3360"
      },
      {
        "rank": 3,
        "topic": "#爱你老己",
        "heat": "17亿+",
        "note": "年度热词：把“爱自己”落成具体消费行动，美妆个护情绪营销核心词",
        "source": "千瓜数据·话题分析",
        "url": "https://www.xiaohongshu.com/search_result/?keyword=%E7%88%B1%E4%BD%A0%E8%80%81%E5%B7%B1",
        "reportSource": "千瓜数据·2026「十大热词」洞察数据报告",
        "reportUrl": "https://www.qian-gua.com/information/detail/3318"
      },
      {
        "rank": 4,
        "topic": "#给阿嬷的情书",
        "heat": "10亿+",
        "note": "镌刻「地域美」的亲情叙事爆款话题，非遗与地域品牌借势",
        "source": "千瓜数据·话题分析",
        "url": "https://www.xiaohongshu.com/search_result/?keyword=%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6",
        "reportSource": "千瓜数据·小红书热点内容解读（2026年第2季度）",
        "reportUrl": "https://www.qian-gua.com/information/detail/3348"
      },
      {
        "rank": 5,
        "topic": "#世界杯",
        "heat": "曝光27亿+",
        "note": "小红书拿下转播权：世界杯与足球内容曝光27亿次，直播在线人数破历史峰值",
        "source": "千瓜数据·话题分析",
        "url": "https://www.xiaohongshu.com/search_result/?keyword=%E4%B8%96%E7%95%8C%E6%9D%AF",
        "reportSource": "千瓜数据·「世界杯」全场景种草解码",
        "reportUrl": "https://www.qian-gua.com/information/detail/3344"
      },
      {
        "rank": 6,
        "topic": "#农场热",
        "heat": "笔记数+148%",
        "note": "近90天农场/种地相关笔记同比增长148%+：云种田、工位水培、共享菜园，品牌“田园叙事”新入口",
        "source": "千瓜数据·话题分析",
        "url": "https://www.xiaohongshu.com/search_result/?keyword=%E5%86%9C%E5%9C%BA%E7%83%AD",
        "reportSource": "千瓜数据·重生之我在小红书当农民",
        "reportUrl": "https://www.qian-gua.com/information/detail/3364"
      },
      {
        "rank": 7,
        "topic": "#适我化设计",
        "heat": "5亿+",
        "note": "“适我主义”延伸到产品设计与穿搭场景，柔性定制内容增长显著",
        "source": "千瓜数据·话题分析",
        "url": "https://www.xiaohongshu.com/search_result/?keyword=%E9%80%82%E6%88%91%E5%8C%96%E8%AE%BE%E8%AE%A1",
        "reportSource": "千瓜数据·2026「种草关键词」适我主义报告",
        "reportUrl": "https://wap.qian-gua.com/information/detail/3360"
      },
      {
        "rank": 8,
        "topic": "#住进一种很我的生活",
        "heat": "4亿+",
        "note": "生活方式叙事话题：租房改造、一人居场景内容带动家居品类种草",
        "source": "千瓜数据·话题分析",
        "url": "https://www.xiaohongshu.com/search_result/?keyword=%E4%BD%8F%E8%BF%9B%E4%B8%80%E7%A7%8D%E5%BE%88%E6%88%91%E7%9A%84%E7%94%9F%E6%B4%BB",
        "reportSource": "千瓜数据·2026「种草关键词」适我主义报告",
        "reportUrl": "https://wap.qian-gua.com/information/detail/3360"
      },
      {
        "rank": 9,
        "topic": "#主体性",
        "heat": "4亿+",
        "note": "女性成长与自我决策叙事热度持续，个护与知识类品牌借势",
        "source": "千瓜数据·话题分析",
        "url": "https://www.xiaohongshu.com/search_result/?keyword=%E4%B8%BB%E4%BD%93%E6%80%A7",
        "reportSource": "千瓜数据·2026女性种草关键词「少女野心」报告",
        "reportUrl": "https://www.qian-gua.com/information/detail/3338"
      },
      {
        "rank": 10,
        "topic": "#本命穿搭",
        "heat": "3亿+",
        "note": "“本命”式个人风格穿搭方法论，服饰品牌场景化种草热词",
        "source": "千瓜数据·话题分析",
        "url": "https://www.xiaohongshu.com/search_result/?keyword=%E6%9C%AC%E5%91%BD%E7%A9%BF%E6%90%AD",
        "reportSource": "千瓜数据·2026「种草关键词」适我主义报告",
        "reportUrl": "https://wap.qian-gua.com/information/detail/3360"
      },
      {
        "rank": 11,
        "topic": "#高雅人士 企鹅舞",
        "heat": "2.5亿+",
        "note": "反差感社交货币：🐧式“高雅”玩梗，品牌玩梗营销的参考样本",
        "source": "千瓜数据·话题分析",
        "url": "https://www.xiaohongshu.com/search_result/?keyword=%E9%AB%98%E9%9B%85%E4%BA%BA%E5%A3%AB%20%E4%BC%81%E9%B9%85%E8%88%9E",
        "reportSource": "千瓜数据·2026「十大热词」洞察数据报告",
        "reportUrl": "https://www.qian-gua.com/information/detail/3318"
      },
      {
        "rank": 12,
        "topic": "#负鼠表情包",
        "heat": "2亿+",
        "note": "从卡皮巴拉到负鼠：借“动物嘴替”袒露精神状态，情绪IP营销新载体",
        "source": "千瓜数据·话题分析",
        "url": "https://www.xiaohongshu.com/search_result/?keyword=%E8%B4%9F%E9%BC%A0",
        "reportSource": "千瓜数据·“负鼠”爆火，新世代用户「精神状态」解读",
        "reportUrl": "https://www.qian-gua.com/information/detail/3352"
      },
      {
        "rank": 13,
        "topic": "#不吃压力",
        "heat": "互动+220%",
        "note": "最令人羡慕的体质：近2个月笔记互动上升220%+且仍在增长，情绪种草新入口",
        "source": "千瓜数据·话题分析",
        "url": "https://www.xiaohongshu.com/search_result/?keyword=%E4%B8%8D%E5%90%83%E5%8E%8B%E5%8A%9B",
        "reportSource": "千瓜数据·情绪种草新风｜不吃压力",
        "reportUrl": "https://www.qian-gua.com/information/detail/3354"
      },
      {
        "rank": 14,
        "topic": "#维纳斯带",
        "heat": "1.2亿+",
        "note": "天文景观打卡话题，相机与文旅品牌季节性种草场景",
        "source": "千瓜数据·话题分析",
        "url": "https://www.xiaohongshu.com/search_result/?keyword=%E7%BB%B4%E7%BA%B3%E6%96%AF%E5%B8%A6",
        "reportSource": "千瓜数据·2026上半年热门行业数据洞察",
        "reportUrl": "https://wap.qian-gua.com/information/detail/3350"
      },
      {
        "rank": 15,
        "topic": "#farmgirlstyle",
        "heat": "热度超千万",
        "note": "农场美学穿搭：上线30天热度超千万、评论数增长109%+，蔬果元素设计成时尚灵感",
        "source": "千瓜数据·话题分析",
        "url": "https://www.xiaohongshu.com/search_result/?keyword=farmgirlstyle",
        "reportSource": "千瓜数据·重生之我在小红书当农民",
        "reportUrl": "https://www.qian-gua.com/information/detail/3364"
      },
      {
        "rank": 16,
        "topic": "#howto适我消费",
        "heat": "9000万+",
        "note": "“适我”消费决策方法论内容，测评与攻略型笔记聚集地",
        "source": "千瓜数据·话题分析",
        "url": "https://www.xiaohongshu.com/search_result/?keyword=%E9%80%82%E6%88%91%E6%B6%88%E8%B4%B9",
        "reportSource": "千瓜数据·2026「种草关键词」适我主义报告",
        "reportUrl": "https://wap.qian-gua.com/information/detail/3360"
      },
      {
        "rank": 17,
        "topic": "#草台就是最好的班子",
        "heat": "8700万+",
        "note": "“草台班子”自嘲式职场叙事，办公与提神类品牌情绪借势词",
        "source": "千瓜数据·话题分析",
        "url": "https://www.xiaohongshu.com/search_result/?keyword=%E8%8D%89%E5%8F%B0%E7%8F%AD%E5%AD%90",
        "reportSource": "千瓜数据·2026「十大热词」洞察数据报告",
        "reportUrl": "https://www.qian-gua.com/information/detail/3318"
      },
      {
        "rank": 18,
        "topic": "#前额叶",
        "heat": "8600万+",
        "note": "脑科学热词年轻化：理性决策、自律话题的科普型种草切口",
        "source": "千瓜数据·话题分析",
        "url": "https://www.xiaohongshu.com/search_result/?keyword=%E5%89%8D%E9%A2%9D%E5%8F%B6",
        "reportSource": "千瓜数据·2026「十大热词」洞察数据报告",
        "reportUrl": "https://www.qian-gua.com/information/detail/3318"
      },
      {
        "rank": 19,
        "topic": "#最废技能大赛",
        "heat": "5000万+",
        "note": "民间无厘头赛事代表：护手霜挤鱼赛、草莓选美等“野生玩法”席卷社区",
        "source": "千瓜数据·话题分析",
        "url": "https://www.xiaohongshu.com/search_result/?keyword=%E6%9C%80%E5%BA%9F%E6%8A%80%E8%83%BD%E5%A4%A7%E8%B5%9B",
        "reportSource": "千瓜数据·“小赛”掀“大浪”，小红书种草野生玩法",
        "reportUrl": "https://www.qian-gua.com/information/detail/3334"
      },
      {
        "rank": 20,
        "topic": "#胡闹厨房",
        "heat": "笔记数+347%",
        "note": "真人版“胡闹厨房”风靡：头顶母鸡拍照、大铁锅炒菜，田园野趣体验式种草",
        "source": "千瓜数据·话题分析",
        "url": "https://www.xiaohongshu.com/search_result/?keyword=%E8%83%A1%E9%97%B9%E5%8E%A8%E6%88%BF",
        "reportSource": "千瓜数据·重生之我在小红书当农民",
        "reportUrl": "https://www.qian-gua.com/information/detail/3364"
      }
    ],
    "wbEntertainment": [
      {
        "rank": 1,
        "topic": "我的前半生",
        "note": "微博文娱榜第1位 · 剧集 · 经典剧集话题重回热搜（今日文娱标签话题较少，自热搜总榜筛取）",
        "brand": "",
        "source": "微博·话题页",
        "url": "https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E5%89%8D%E5%8D%8A%E7%94%9F%23",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E6%88%91%E7%9A%84%E5%89%8D%E5%8D%8A%E7%94%9F"
      },
      {
        "rank": 2,
        "topic": "栾念尚之桃重逢擦肩而过",
        "note": "微博文娱榜第2位 · 剧集 · 热播剧角色话题（今日文娱标签话题较少，自热搜总榜筛取）",
        "brand": "",
        "source": "微博·话题页",
        "url": "https://s.weibo.com/weibo?q=%23%E6%A0%BE%E5%BF%B5%E5%B0%9A%E4%B9%8B%E6%A1%83%E9%87%8D%E9%80%A2%E6%93%A6%E8%82%A9%E8%80%8C%E8%BF%87%23",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E6%A0%BE%E5%BF%B5%E5%B0%9A%E4%B9%8B%E6%A1%83%E9%87%8D%E9%80%A2%E6%93%A6%E8%82%A9%E8%80%8C%E8%BF%87"
      },
      {
        "rank": 3,
        "topic": "张婧仪 宋威龙",
        "note": "微博文娱榜第3位 · 明星动态/剧集 · 二位主演同框宣传期（今日文娱标签话题较少，自热搜总榜筛取）",
        "brand": "",
        "source": "微博·话题页",
        "url": "https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%20%E5%AE%8B%E5%A8%81%E9%BE%99%23",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E5%BC%A0%E5%A9%A7%E4%BB%AA%20%E5%AE%8B%E5%A8%81%E9%BE%99"
      },
      {
        "rank": 4,
        "topic": "差点没认出杨洋",
        "note": "微博文娱榜第4位 · 明星动态 · 造型变化引发讨论（今日文娱标签话题较少，自热搜总榜筛取）",
        "brand": "",
        "source": "微博·话题页",
        "url": "https://s.weibo.com/weibo?q=%23%E5%B7%AE%E7%82%B9%E6%B2%A1%E8%AE%A4%E5%87%BA%E6%9D%A8%E6%B4%8B%23",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E5%B7%AE%E7%82%B9%E6%B2%A1%E8%AE%A4%E5%87%BA%E6%9D%A8%E6%B4%8B"
      },
      {
        "rank": 5,
        "topic": "夜旅人换脸后是倪妮付辛博",
        "note": "微博文娱榜第5位 · 剧集选角 · 新剧选角话题（今日文娱标签话题较少，自热搜总榜筛取）",
        "brand": "",
        "source": "微博·话题页",
        "url": "https://s.weibo.com/weibo?q=%23%E5%A4%9C%E6%97%85%E4%BA%BA%E6%8D%A2%E8%84%B8%E5%90%8E%E6%98%AF%E5%80%AA%E5%A6%AE%E4%BB%98%E8%BE%9B%E5%8D%9A%23",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E5%A4%9C%E6%97%85%E4%BA%BA%E6%8D%A2%E8%84%B8%E5%90%8E%E6%98%AF%E5%80%AA%E5%A6%AE%E4%BB%98%E8%BE%9B%E5%8D%9A"
      },
      {
        "rank": 6,
        "topic": "刘畅邓恩熙有牵手戏份",
        "note": "微博文娱榜第6位 · 剧集 · 新剧路透话题（今日文娱标签话题较少，自热搜总榜筛取）",
        "brand": "",
        "source": "微博·话题页",
        "url": "https://s.weibo.com/weibo?q=%23%E5%88%98%E7%95%85%E9%82%93%E6%81%A9%E7%86%99%E6%9C%89%E7%89%B5%E6%89%8B%E6%88%8F%E4%BB%BD%23",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E5%88%98%E7%95%85%E9%82%93%E6%81%A9%E7%86%99%E6%9C%89%E7%89%B5%E6%89%8B%E6%88%8F%E4%BB%BD"
      },
      {
        "rank": 7,
        "topic": "井柏然 倪妮",
        "note": "微博文娱榜第7位 · 明星动态 · 旧恋情CP话题重燃（今日文娱标签话题较少，自热搜总榜筛取）",
        "brand": "",
        "source": "微博·话题页",
        "url": "https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%20%E5%80%AA%E5%A6%AE%23",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E4%BA%95%E6%9F%8F%E7%84%B6%20%E5%80%AA%E5%A6%AE"
      },
      {
        "rank": 8,
        "topic": "张婧仪宋威龙情侣演久了会有夫妻相",
        "note": "微博文娱榜第8位 · 剧集 · 宣传期花絮话题（今日文娱标签话题较少，自热搜总榜筛取）",
        "brand": "",
        "source": "微博·话题页",
        "url": "https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E5%AE%8B%E5%A8%81%E9%BE%99%E6%83%85%E4%BE%A3%E6%BC%94%E4%B9%85%E4%BA%86%E4%BC%9A%E6%9C%89%E5%A4%AB%E5%A6%BB%E7%9B%B8%23",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E5%BC%A0%E5%A9%A7%E4%BB%AA%E5%AE%8B%E5%A8%81%E9%BE%99%E6%83%85%E4%BE%A3%E6%BC%94%E4%B9%85%E4%BA%86%E4%BC%9A%E6%9C%89%E5%A4%AB%E5%A6%BB%E7%9B%B8"
      },
      {
        "rank": 9,
        "topic": "汪苏泷阿信新歌预告",
        "note": "微博文娱榜第9位 · 音乐 · 新歌合作预告（今日文娱标签话题较少，自热搜总榜筛取）",
        "brand": "",
        "source": "微博·话题页",
        "url": "https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E9%98%BF%E4%BF%A1%E6%96%B0%E6%AD%8C%E9%A2%84%E5%91%8A%23",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E6%B1%AA%E8%8B%8F%E6%B3%B7%20%E9%98%BF%E4%BF%A1%20%E6%96%B0%E6%AD%8C"
      },
      {
        "rank": 10,
        "topic": "YSL发了好多肖战神图",
        "note": "微博文娱榜第10位 · 明星动态/品牌 · YSL一次性释出代言人肖战多张官方大片（今日文娱标签话题较少，自热搜总榜筛取）",
        "brand": "ysl",
        "source": "微博·话题页",
        "url": "https://s.weibo.com/weibo?q=%23YSL%E5%8F%91%E4%BA%86%E5%A5%BD%E5%A4%9A%E8%82%96%E6%88%98%E7%A5%9E%E5%9B%BE%23",
        "reportSource": "微博·时尚大片讨论",
        "reportUrl": "https://weibo.com/1914472533/5341140854243894"
      },
      {
        "rank": 11,
        "topic": "低保香港演唱会事件 命运捉弄人",
        "note": "微博文娱榜第11位 · 演出 · 演唱会购票话题（今日文娱标签话题较少，自热搜总榜筛取）",
        "brand": "",
        "source": "微博·话题页",
        "url": "https://s.weibo.com/weibo?q=%23%E4%BD%8E%E4%BF%9D%E9%A6%99%E6%B8%AF%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BA%8B%E4%BB%B6%20%E5%91%BD%E8%BF%90%E6%8D%89%E5%BC%84%E4%BA%BA%23",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E4%BD%8E%E4%BF%9D%E9%A6%99%E6%B8%AF%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BA%8B%E4%BB%B6%20%E5%91%BD%E8%BF%90%E6%8D%89%E5%BC%84%E4%BA%BA"
      },
      {
        "rank": 12,
        "topic": "丁禹兮工作室发声明",
        "note": "微博文娱榜第12位 · 明星动态 · 工作室维权声明（今日文娱标签话题较少，自热搜总榜筛取）",
        "brand": "",
        "source": "微博·话题页",
        "url": "https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%8F%91%E5%A3%B0%E6%98%8E%23",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E4%B8%81%E7%A6%B9%E5%85%AE%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%8F%91%E5%A3%B0%E6%98%8E"
      },
      {
        "rank": 13,
        "topic": "演唱会大屏是歌手的法天象地",
        "note": "微博文娱榜第13位 · 演出 · 演唱会现场视觉话题（今日文娱标签话题较少，自热搜总榜筛取）",
        "brand": "",
        "source": "微博·话题页",
        "url": "https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%94%B1%E4%BC%9A%E5%A4%A7%E5%B1%8F%E6%98%AF%E6%AD%8C%E6%89%8B%E7%9A%84%E6%B3%95%E5%A4%A9%E8%B1%A1%E5%9C%B0%23",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E6%BC%94%E5%94%B1%E4%BC%9A%E5%A4%A7%E5%B1%8F%E6%98%AF%E6%AD%8C%E6%89%8B%E7%9A%84%E6%B3%95%E5%A4%A9%E8%B1%A1%E5%9C%B0"
      },
      {
        "rank": 14,
        "topic": "成毅待播剧角色热度第一",
        "note": "微博文娱榜第14位 · 剧集 · 待播剧角色榜话题（今日文娱标签话题较少，自热搜总榜筛取）",
        "brand": "",
        "source": "微博·话题页",
        "url": "https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E5%BE%85%E6%92%AD%E5%89%A7%E8%A7%92%E8%89%B2%E7%83%AD%E5%BA%A6%E7%AC%AC%E4%B8%80%23",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E6%88%90%E6%AF%85%E5%BE%85%E6%92%AD%E5%89%A7%E8%A7%92%E8%89%B2%E7%83%AD%E5%BA%A6%E7%AC%AC%E4%B8%80"
      },
      {
        "rank": 15,
        "topic": "张雪机车把打工人尊严焊死合同里",
        "note": "微博文娱榜第15位 · 剧集 · 热播剧台词话题（今日文娱标签话题较少，自热搜总榜筛取）",
        "brand": "",
        "source": "微博·话题页",
        "url": "https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E6%8A%8A%E6%89%93%E5%B7%A5%E4%BA%BA%E5%B0%8A%E4%B8%A5%E7%84%8A%E6%AD%BB%E5%90%88%E5%90%8C%E9%87%8C%23",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E6%8A%8A%E6%89%93%E5%B7%A5%E4%BA%BA%E5%B0%8A%E4%B8%A5%E7%84%8A%E6%AD%BB%E5%90%88%E5%90%8C%E9%87%8C"
      }
    ],
    "dySeeding": [
      {
        "rank": 1,
        "topic": "送你一口秋天味道",
        "note": "抖音种草榜第1位 · 季节情绪/美食 · 秋季限定口味种草（今日种草标签话题较少，自热点总榜筛取）",
        "brand": "",
        "source": "抖音·话题搜索",
        "url": "https://www.douyin.com/search/%E9%80%81%E4%BD%A0%E4%B8%80%E5%8F%A3%E7%A7%8B%E5%A4%A9%E5%91%B3%E9%81%93",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E9%80%81%E4%BD%A0%E4%B8%80%E5%8F%A3%E7%A7%8B%E5%A4%A9%E5%91%B3%E9%81%93"
      },
      {
        "rank": 2,
        "topic": "跑步可以治愈一切",
        "note": "抖音种草榜第2位 · 生活技巧 · 运动情绪类内容（今日种草标签话题较少，自热点总榜筛取）",
        "brand": "",
        "source": "抖音·话题搜索",
        "url": "https://www.douyin.com/search/%E8%B7%91%E6%AD%A5%E5%8F%AF%E4%BB%A5%E6%B2%BB%E6%84%88%E4%B8%80%E5%88%87",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E8%B7%91%E6%AD%A5%E5%8F%AF%E4%BB%A5%E6%B2%BB%E6%84%88%E4%B8%80%E5%88%87"
      },
      {
        "rank": 3,
        "topic": "秋一下才对味",
        "note": "抖音种草榜第3位 · 季节情绪 · 秋日氛围感内容（今日种草标签话题较少，自热点总榜筛取）",
        "brand": "",
        "source": "抖音·话题搜索",
        "url": "https://www.douyin.com/search/%E7%A7%8B%E4%B8%80%E4%B8%8B%E6%89%8D%E5%AF%B9%E5%91%B3",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E7%A7%8B%E4%B8%80%E4%B8%8B%E6%89%8D%E5%AF%B9%E5%91%B3"
      },
      {
        "rank": 4,
        "topic": "写给老师的教师节贺卡",
        "note": "抖音种草榜第4位 · 好物/生活技巧 · 教师节手作贺卡教程（今日种草标签话题较少，自热点总榜筛取）",
        "brand": "",
        "source": "抖音·话题搜索",
        "url": "https://www.douyin.com/search/%E5%86%99%E7%BB%99%E8%80%81%E5%B8%88%E7%9A%84%E6%95%99%E5%B8%88%E8%8A%82%E8%B4%BA%E5%8D%A1",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E5%86%99%E7%BB%99%E8%80%81%E5%B8%88%E7%9A%84%E6%95%99%E5%B8%88%E8%8A%82%E8%B4%BA%E5%8D%A1"
      },
      {
        "rank": 5,
        "topic": "觉醒吧我的厨艺天赋",
        "note": "抖音种草榜第5位 · 美食 · 家常美食制作内容（今日种草标签话题较少，自热点总榜筛取）",
        "brand": "",
        "source": "抖音·话题搜索",
        "url": "https://www.douyin.com/search/%E8%A7%89%E9%86%92%E5%90%A7%E6%88%91%E7%9A%84%E5%8E%A8%E8%89%BA%E5%A4%A9%E8%B5%8B",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E8%A7%89%E9%86%92%E5%90%A7%E6%88%91%E7%9A%84%E5%8E%A8%E8%89%BA%E5%A4%A9%E8%B5%8B"
      },
      {
        "rank": 6,
        "topic": "首届柚子形象设计大赛",
        "note": "抖音种草榜第6位 · 好物/文创 · 柚子文创设计大赛（今日种草标签话题较少，自热点总榜筛取）",
        "brand": "",
        "source": "抖音·话题搜索",
        "url": "https://www.douyin.com/search/%E9%A6%96%E5%B1%8A%E6%9F%9A%E5%AD%90%E5%BD%A2%E8%B1%A1%E8%AE%BE%E8%AE%A1%E5%A4%A7%E8%B5%9B",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E9%A6%96%E5%B1%8A%E6%9F%9A%E5%AD%90%E5%BD%A2%E8%B1%A1%E8%AE%BE%E8%AE%A1%E5%A4%A7%E8%B5%9B"
      },
      {
        "rank": 7,
        "topic": "白鹿穿燕麦系小跳一下",
        "note": "抖音种草榜第7位 · 穿搭/时尚 · 明星同款燕麦色系穿搭（今日种草标签话题较少，自热点总榜筛取）",
        "brand": "",
        "source": "抖音·话题搜索",
        "url": "https://www.douyin.com/search/%E7%99%BD%E9%B9%BF%E7%A9%BF%E7%87%95%E9%BA%A6%E7%B3%BB%E5%B0%8F%E8%B7%B3%E4%B8%80%E4%B8%8B",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E7%99%BD%E9%B9%BF%E7%A9%BF%E7%87%95%E9%BA%A6%E7%B3%BB%E5%B0%8F%E8%B7%B3%E4%B8%80%E4%B8%8B"
      },
      {
        "rank": 8,
        "topic": "花小龙带孙艺洲自律的一天",
        "note": "抖音种草榜第8位 · 生活技巧 · 自律生活方式vlog（今日种草标签话题较少，自热点总榜筛取）",
        "brand": "",
        "source": "抖音·话题搜索",
        "url": "https://www.douyin.com/search/%E8%8A%B1%E5%B0%8F%E9%BE%99%E5%B8%A6%E5%AD%99%E8%89%BA%E6%B4%B2%E8%87%AA%E5%BE%8B%E7%9A%84%E4%B8%80%E5%A4%A9",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E8%8A%B1%E5%B0%8F%E9%BE%99%E5%B8%A6%E5%AD%99%E8%89%BA%E6%B4%B2%E8%87%AA%E5%BE%8B%E7%9A%84%E4%B8%80%E5%A4%A9"
      },
      {
        "rank": 9,
        "topic": "人类幼崽版格格有多可爱",
        "note": "抖音种草榜第9位 · IP二创/好物 · 还珠格格萌娃二创（今日种草标签话题较少，自热点总榜筛取）",
        "brand": "",
        "source": "抖音·话题搜索",
        "url": "https://www.douyin.com/search/%E4%BA%BA%E7%B1%BB%E5%B9%BC%E5%B4%BD%E7%89%88%E6%A0%BC%E6%A0%BC%E6%9C%89%E5%A4%9A%E5%8F%AF%E7%88%B1",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E4%BA%BA%E7%B1%BB%E5%B9%BC%E5%B4%BD%E7%89%88%E6%A0%BC%E6%A0%BC%E6%9C%89%E5%A4%9A%E5%8F%AF%E7%88%B1"
      },
      {
        "rank": 10,
        "topic": "我的世界出现一位姑娘",
        "note": "抖音种草榜第10位 · IP/游戏 · Minecraft游戏内容（今日种草标签话题较少，自热点总榜筛取）",
        "brand": "",
        "source": "抖音·话题搜索",
        "url": "https://www.douyin.com/search/%E6%88%91%E7%9A%84%E4%B8%96%E7%95%8C%E5%87%BA%E7%8E%B0%E4%B8%80%E4%BD%8D%E5%A7%91%E5%A8%98",
        "reportSource": "新闻报道聚合·百度新闻",
        "reportUrl": "https://www.baidu.com/s?tn=news&wd=%E6%88%91%E7%9A%84%E4%B8%96%E7%95%8C%E5%87%BA%E7%8E%B0%E4%B8%80%E4%BD%8D%E5%A7%91%E5%A8%98"
      }
    ]
  },
  "campaigns": [
    {
      "brand": "blokees",
      "cat": "ip",
      "name": "超越版漫威争锋“裂隙蜘蛛侠”发售 + WF上海展“积木车”首展",
      "window": "9月8日发售（进行中）",
      "type": "新品发售+展会",
      "action": "换色版可动人偶9月8日发售：99元、高14.7cm、6只替换手型+蛛丝特效件与蛛丝重拳配件；同期WF上海潮流手办展首展全新品类“积木车”及“自然集/奇迹Q版/绮遇版”三大系列40余款新品。",
      "volume": "漫威粉与拼搭圈关注度高；WF展上国产原创模型品牌集体亮相，布鲁可展现中国拼搭玩具创新能力。",
      "volumeIndex": 75,
      "sale": "官方渠道99元/个。",
      "topVoice": "“换色版也要冲”的收藏党声量最大；业内关注其“平价+SKU高速扩容”策略。",
      "sentiment": "正面",
      "source": "网易（163号外）",
      "url": "https://www.163.com/dy/article/L6BF1M1J0526HOKN.html",
      "topVoiceSource": "时代周报（Bricksite转载）",
      "topVoiceUrl": "https://m.bricksite.com/kjdata/nyhedsbrev?live-blog-21688970-2026-08-14-ben-wen-lai-yuan-shi-dai-zhou-bao-zuo-zhe-zhang-yi-jing-yang-chun-xia-ji-qian-yi",
      "updatedDate": "09-09"
    },
    {
      "brand": "popmart",
      "cat": "ip",
      "name": "服贸会「非遗+潮玩」特展：SPACE MOLLY景泰蓝",
      "window": "9月9日-13日（首钢园朝阳展区）",
      "type": "展会特展",
      "action": "MEGA系列最新力作“SPACE MOLLY景泰蓝”首次在大型国家级展会公开展出：由景泰蓝技艺北京代表性传承人徐嘉爽与泡泡玛特联合打造，景泰蓝勾勒“三十六天干地支”与星宿元素，把宇航服化作流动星图。",
      "volume": "北京市政府门户与北京日报等官方媒体重点报道，“非遗+潮玩”成朝阳展区主打叙事；服贸会现场每日限量发售相关潮玩新品。",
      "volumeIndex": 78,
      "sale": "展会展期销售数据未披露。",
      "topVoice": "“未来科技感与东方艺术魅力结合”获官方媒体定调好评。",
      "sentiment": "正面",
      "source": "北京市人民政府门户网站",
      "url": "https://www.beijing.gov.cn/fuwu/bmfw/sy/jrts/202609/t20260908_4854751.html",
      "topVoiceSource": "北京市人民政府门户网站",
      "topVoiceUrl": "https://www.beijing.gov.cn/fuwu/bmfw/sy/jrts/202609/t20260908_4854751.html",
      "updatedDate": "09-09"
    },
    {
      "brand": "bawang",
      "cat": "food",
      "name": "“白雾红尘茶叶蛋”上海7店试点（早餐场景延伸）",
      "window": "9月7日-9月21日（上海7店堂食）",
      "type": "新品试点",
      "action": "上海金茂大厦店等7家门店首发“白雾红尘茶叶蛋”：一级奇兰拼配水仙原叶慢煮；单点5元、任意正价饮品+2.5元加购（限时），每日10:30前指定早餐套餐8折；仅堂食、不可外卖，未来是否推广至其他城市未定。",
      "volume": "上线即登热搜#霸王茶姬茶叶蛋#：网友热议“奶茶店卖茶叶蛋很新奇”“包装比蛋贵”，实测“味道中规中矩”；业内解读为用国民早餐单品拉动上午低峰时段的“坪效革命”。",
      "volumeIndex": 82,
      "sale": "测试期两周（至9月21日）；背景：2026H1营收69.61亿元同比+3.5%、归母净利润9.18亿元同比+22%。",
      "topVoice": "“奶茶+茶叶蛋凑配送费刚好”与“5元一个略贵”两种声音并存，尝鲜晒单笔记热度最高。",
      "sentiment": "中性偏正面",
      "source": "都市快报·橙柿互动（网易号）",
      "url": "https://www.163.com/dy/article/L6AGRUGE051492LM.html",
      "topVoiceSource": "都市快报·橙柿互动",
      "topVoiceUrl": "https://www.163.com/dy/article/L6AGRUGE051492LM.html",
      "updatedDate": "09-09"
    },
    {
      "brand": "mgp",
      "cat": "beauty",
      "name": "东方美学高端化×香氛闻道东方+熊猫花花联名",
      "window": "9月持续·5月香氛上新",
      "type": "品牌叙事+品类扩展",
      "action": "2024年成为中国高端美妆TOP20唯一国货；2025年5月进军香氛推「闻道东方」13香型（王国维三重境界论）；2026年与熊猫花花联名「幻花御境」8单品+光影塑颜高光液；自2018年起与故宫文创「气蕴东方」系列连续六季，2023年成为中国国家队官方美妆服务供应商。",
      "volume": "中国高端美妆TOP20唯一国货；故宫文创×国家队×熊猫基地文创立体文化叙事。",
      "volumeIndex": 66,
      "sale": "「幻花御境」系列8单品及光影塑颜高光液上新。",
      "topVoice": "「东方美学叙事」——从竞技能量、宫廷典雅到日常松弛的立体品牌资产。",
      "sentiment": "正面",
      "source": "今日头条·变美咖",
      "url": "https://www.toutiao.com/article/7681223638263022120",
      "topVoiceSource": "今日头条·变美咖",
      "topVoiceUrl": "https://www.toutiao.com/article/7681223638263022120",
      "updatedDate": "09-09"
    },
    {
      "brand": "ysl",
      "cat": "beauty",
      "name": "Libre Le Parfum×Dua Lipa迪拜机场激活",
      "window": "9/15起迪拜机场",
      "type": "线下激活+代言",
      "action": "YSL与迪拜免税合作推全新Libre campaign starring Dua Lipa，Concourse D Circle 2 podium设香水塔+大理石空间；巴黎艺术家金/黑/银叶镌刻瓶身定制服务；新campaign由女导演Jenn Nkiru拍摄，Dua Lipa翻唱George Michael《Freedom》，呼应女性自由主题。",
      "volume": "迪拜机场高规格podium激活；专属镌刻瓶定制。",
      "volumeIndex": 58,
      "sale": "机场免税限定镌刻版Libre Le Parfum。",
      "topVoice": "「自由不羁的Libre女性」——自由是YSL品牌内核。",
      "sentiment": "正面",
      "source": "Fashion Coached",
      "url": "https://fashioncoached.com/article/ysl-beauty-activates-libre-campaign-starring-dua-lipa-at-dubai-duty-free/1337",
      "topVoiceSource": "Fashion Coached",
      "topVoiceUrl": "https://fashioncoached.com/article/ysl-beauty-activates-libre-campaign-starring-dua-lipa-at-dubai-duty-free/1337",
      "updatedDate": "09-09"
    },
    {
      "brand": "judydoll",
      "cat": "beauty",
      "name": "×Angelababy全球代言+秋冬四新品",
      "window": "9/2官宣起",
      "type": "代言官宣+新品",
      "action": "9/2官宣杨颖Angelababy为全球代言人，演绎秋冬四新品：缎光唇粉霜（80%养肤精华、12h持色、4款秋冬特调色）、水缎光腮红、好皮霜、好气色面综盘；缎光可可礼盒限量1180份+亲选星品套组预约爆满。",
      "volume": "官宣话题#橘朵Angelababy全球代言人#传播；缎光唇粉霜4款特调色成彩妆区讨论热点。",
      "volumeIndex": 68,
      "sale": "缎光可可礼盒限量1180份+亲选星品套组上线即预约爆满。",
      "topVoice": "「秋冬氛围感妆容」——从产品热度向氛围感妆容扩散。",
      "sentiment": "正面",
      "source": "亿邦动力",
      "url": "https://www.ebrun.com/20260902/704157.shtml",
      "topVoiceSource": "亿邦动力",
      "topVoiceUrl": "https://www.ebrun.com/20260902/704157.shtml",
      "updatedDate": "09-09"
    },
    {
      "brand": "estee",
      "cat": "beauty",
      "name": "设奢华美容全球总裁+中国区业绩单列",
      "window": "9月组织调整·2026财年业绩",
      "type": "组织调整+业绩",
      "action": "Justin Boxford任奢华美容全球总裁统管海蓝之谜/雅诗兰黛/雅芮/朵梵/朗仕五大高端品牌；2026财年净销售额150.49亿美元增5%扭亏为盈、中国内地有机增长9%为集团最高；中国区净销售额30.58亿美元增速居首，线上占比超50%、抖音成撬动新客核心阵地。",
      "volume": "中国区净销售额30.58亿美元增速居首；连续六个季度跑赢高端美妆大盘。",
      "volumeIndex": 70,
      "sale": "抖音成撬动中国新客核心阵地，双11/618表现领先行业。",
      "topVoice": "「中国区业绩单列、增速居首」——集团强化中国区战略地位。",
      "sentiment": "正面",
      "source": "亿邦动力",
      "url": "https://m.ebrun.com/706516.html",
      "topVoiceSource": "亿邦动力",
      "topVoiceUrl": "https://m.ebrun.com/706516.html",
      "updatedDate": "09-09"
    },
    {
      "brand": "chanel",
      "cat": "beauty",
      "name": "可可小姐心动香水限时活动×Gracie Abrams代言",
      "window": "9/4-9/13上海iapm·NYC pop-up 9/11-20",
      "type": "新品+线下体验",
      "action": "9/4-13上海环贸iapm「绝对心动」限时空间（电影院/心动吧台/咖啡馆/心动热线/彩妆站）；新品馥郁琥珀调由调香师奥利维耶·波巨创作，荔枝葡萄柚开场+玫瑰茉莉+广藿香琥珀；Gracie Abrams出任可可小姐香水系列全新代言人；NYC Meatpacking同步pop-up。",
      "volume": "上海iapm+纽约Meatpacking双城限时空间；可可小姐系列25周年新篇。",
      "volumeIndex": 74,
      "sale": "现场可购可可小姐香水系列及限定彩妆。",
      "topVoice": "「绝对心动」——把香水从一款产品延伸为可看可闻可聆听的体验。",
      "sentiment": "正面",
      "source": "品牌星球",
      "url": "https://www.brandstar.com.cn/news/8285",
      "topVoiceSource": "品牌星球",
      "topVoiceUrl": "https://www.brandstar.com.cn/news/8285",
      "updatedDate": "09-09"
    },
    {
      "brand": "florasis",
      "cat": "beauty",
      "name": "七夕「不送礼物送信物」×AI漫剧《花朝录》",
      "window": "七夕起（8/29前后）·漫剧持续",
      "type": "节日营销+AI内容",
      "action": "以宋代并蒂莲为核推限定信物系列（玉雕×纳米光刻、同心环结构、防晒粉饼PDRN修护光损伤）；全民信物故事征集投至10城公共大屏；定制AI漫剧《花朝录》七夕上线播放破1000万，现代博主穿越「东方妆衣」逆袭。",
      "volume": "AI漫剧《花朝录》播放破1000万；10城大屏信物故事征集数千份投稿。",
      "volumeIndex": 72,
      "sale": "限定防晒粉饼、信物系列礼盒随七夕节点销售。",
      "topVoice": "「不送礼物送信物」——把东方定情叙事从产品升维到公共叙事。",
      "sentiment": "正面",
      "source": "网易订阅",
      "url": "https://dy.163.com/article/L618S4LG0547NJA7.html",
      "topVoiceSource": "网易订阅",
      "topVoiceUrl": "https://dy.163.com/article/L618S4LG0547NJA7.html",
      "updatedDate": "09-09"
    },
    {
      "brand": "skii",
      "cat": "beauty",
      "name": "全新神仙锁精华发布×张子枫/林允/文佳煐代言矩阵",
      "window": "9/1上海发布会起·首尔快闪9/3",
      "type": "新品发布+代言",
      "action": "9/1上海西岸种子馆「LOCK IN YOUTH」发布会推SK-II首瓶精华——全新神仙锁精华（浓缩PITERA先渗后锁、14锁线条/嘭弹/嫩亮）；全球代言人张子枫、品牌大使林允现身；9/3首尔Seongsu快闪由全球大使文佳煐及TWICE Mina等助阵。",
      "volume": "上海+首尔双城快闪；45年革新抗老巅峰之作；银泰秋季美妆节首发。",
      "volumeIndex": 80,
      "sale": "银泰百货秋季美妆节9/4开节首发，满千返百。",
      "topVoice": "「一瓶锁护青春」——SK-II研究发现约80%肌肤老化源自压力，压力大人群肌肤如衰老5.5岁。",
      "sentiment": "正面",
      "source": "网易·刀法研究所",
      "url": "https://www.163.com/dy/article/L60DEGH50553TWRO.html",
      "topVoiceSource": "新浪·首尔快闪",
      "topVoiceUrl": "https://www.sina.cn/news/detail/5339124334069703.html",
      "updatedDate": "09-09"
    },
    {
      "brand": "proya",
      "cat": "beauty",
      "name": "×孟子义护肤代言+第四代红宝石面霜",
      "window": "8/26官宣起·8城大屏9/9-9/22",
      "type": "代言官宣+新品",
      "action": "8/26官宣孟子义为护肤代言人并绑定第四代红宝石面霜（双环肽Pro、皮骨双修）；官微官宣14.7万赞/3.7万评论/12.6万转发；9/9起上海、南京、成都等8城大屏打卡地图依次点亮，9/5放第二轮限定壁纸。",
      "volume": "官宣微博14.7万赞/12.6万转发；红宝石面霜累计热销超2000万瓶；8城大屏打卡+二手小卡成硬通货。",
      "volumeIndex": 78,
      "sale": "同款红宝石面霜50g多平台热销，官旗280元价签成粉圈玩梗，大促机制价88节201元到手再送同量；周边随单赠数量有限赠完即止。",
      "topVoice": "「没有不支持美丽小卡的义务」——粉丝晒单支持刷屏，评论区最高频动作是晒单。",
      "sentiment": "正面",
      "source": "什么值得买·新浪",
      "url": "https://post.m.smzdm.com/p/anvx03qv",
      "topVoiceSource": "微博@珀莱雅官宣",
      "topVoiceUrl": "https://www.sina.cn/news/detail/5339033742085812.html",
      "updatedDate": "09-09"
    },
    {
      "brand": "muji",
      "cat": "daily",
      "name": "ReMUJI 资源循环项目",
      "window": "08-27 起（上海首站，逐步拓展）",
      "updatedDate": "09-09",
      "type": "可持续/资源循环营销",
      "action": "以“再入生活”为主题推出ReMUJI资源循环项目，设旧物回收、衣物循环（瑕疵品翻新拼接成桶包/服饰）、惜物市集（微瑕商品实惠价）、余料成材（余料再造托特包）、家具翻新五大板块，首阶段落地上海新六百YOUNG城市旗舰店与张园体验店。",
      "volume": "可持续消费赛道加速升温，品牌争推旧衣回收、再生材料、修补工坊；ReMUJI“拼接设计每件都不一样”成社交平台传播点；SocialBeta同步评述MUJI「这样就好」的品牌叙事。",
      "volumeIndex": 62,
      "sale": "惜物市集微瑕商品以实惠价格转化；未披露整体销售数据。",
      "topVoice": "“拼接包和拼接服装都设计得很有巧思和质感，而且每一件都不完全一样，有一种‘挖宝’的感觉”——消费者“挖宝”式探店分享是最大声量。",
      "sentiment": "正面",
      "source": "中国商报",
      "url": "https://www.toutiao.com/article/7681598105363431971/",
      "topVoiceSource": "中国商报",
      "topVoiceUrl": "https://www.toutiao.com/article/7681598105363431971/"
    },
    {
      "brand": "songsu",
      "cat": "food",
      "name": "生活馆社区超市（零食店卖菜）",
      "window": "进行中",
      "updatedDate": "09-09",
      "type": "新业态试验",
      "action": "生活馆引入生鲜、粮油等非零食品类，新开33家同时关闭7家，35家门店中29家集中在安徽，用卖菜提高到店频率。",
      "volume": "“零食店的尽头是卖菜”成为行业热词，引发跨品类经营讨论。",
      "volumeIndex": 66,
      "sale": "生活馆贡献收入1.32亿元；上半年整体营收52.8亿元微降3.6%，归母净利2.49亿元大增79.9%。",
      "topVoice": "“消费者并不排斥去三只松鼠买菜，但还没证明优惠退去后模式还能赚钱”——最大声量是对模式可持续性的讨论；消费者侧好评集中在“早餐水果蔬菜顺手买”的便利性。",
      "sentiment": "争议",
      "source": "腾讯新闻",
      "url": "https://news.qq.com/rain/a/20260903A080OK00",
      "topVoiceSource": "腾讯新闻",
      "topVoiceUrl": "https://news.qq.com/rain/a/20260903A080OK00"
    },
    {
      "brand": "nike",
      "cat": "apparel",
      "name": "匡威上海 X-ING 概念店",
      "window": "08-28 起",
      "updatedDate": "09-09",
      "type": "在地文化共创/渠道升级",
      "action": "中国首个品牌创意空间落地愚园路，CHUCK 70 X 全球首发并为亚洲脚型定制鞋楦，提供沪语“侬好”“哈嗲”热印、串珠鞋带、驻店艺术家刺绣等城市定制服务。",
      "volume": "“一城一策”携手本地艺术家打造城市专属艺术装置，南京/长沙/重庆“星”概念店同步推进；上海首发经济报道口径下曝光显著。",
      "volumeIndex": 68,
      "sale": "未披露；背景为匡威收入连续13个季度下滑、2026财年营收约12亿美元同比降31%。",
      "topVoice": "“把潮玩场景/在地文化做成可参与的城市限定”——城市定制与DIY体验是打卡分享的最大声量点；争议点仍在“匡威是否还够酷”。",
      "sentiment": "正面",
      "source": "YOHO潮流志/新浪",
      "url": "https://www.sina.cn/news/detail/5338040450942191.html",
      "topVoiceSource": "YOHO潮流志/新浪",
      "topVoiceUrl": "https://www.sina.cn/news/detail/5338040450942191.html"
    },
    {
      "brand": "nayuki",
      "cat": "food",
      "name": "小玉yuy「入职」奈雪联名 + 秋日漂亮水双热点",
      "window": "09月初（进行中）",
      "updatedDate": "09-09",
      "type": "素人IP联名+秋季新品",
      "action": "奈雪×yuy“秋日松弛公式”持续热卖（酸奶昔+主题杯袋+星星发夹/毛绒小包/随行杯周边）；剁椒Spicy IP联名周讯披露 F426×YUY小玉限定联名将于9月10日上线（编织袋/毛毯/挂件等），素人IP商业价值进一步外溢。",
      "volume": "小玉yuy为今年最火素人IP（背后有名创优品旗下TOP TOY系统化支撑），半年完成十余场跨界合作；商场快闪成“排队王”：杭州快闪日均销售额破20万元，北京朝阳合生汇快闪开业不到一个月业绩破千万元；#被奈雪这杯酸奶昔治愈了# 话题晒单刷屏。",
      "volumeIndex": 72,
      "sale": "“漂亮水”首发单品上市首日登顶门店销量TOP1；奈雪上半年营收18.93亿元同比降13.1%，正加码咖啡（单店日均销量半年翻倍至26.5杯）与海外市场寻找增量。",
      "topVoice": "“上班路上碰到同一个‘女孩’八百次了”——背包挂件、T恤印花的“偶遇式晒单”是最大声量；“这杯酸奶昔把秋天具象化了”的治愈系测评与快闪排队晒图热度高。",
      "sentiment": "正面",
      "source": "新浪新闻",
      "url": "https://k.sina.com.cn/article_1406911561_53dbc44902001b2se.html",
      "topVoiceSource": "微博@奈雪的茶联名晒单",
      "topVoiceUrl": "https://weibo.com/5204913536/5339353394186136"
    },
    {
      "brand": "adidas",
      "cat": "apparel",
      "name": "adidas Originals by JENNIE 联名系列",
      "window": "09-01 起",
      "updatedDate": "09-09",
      "type": "顶流联名",
      "action": "adidas Originals与韩国顶流JENNIE的联名系列9月1日正式发售；同期女性运动赛道竞争白热化——ALO开出天猫旗舰店并招聘门店岗位，NikeSKIMS在上海兴业太古汇围挡中国首家独立门店。",
      "volume": "联名发售即在社交媒体引爆发酵、引发抢购热潮；“女性运动赛道三国杀”成行业话题，与lululemon业绩暴跌形成话题共振。",
      "volumeIndex": 74,
      "sale": "未披露；阿迪达斯上半年整体增势稳健，儿童线“户外探行”等品类同步推进。",
      "topVoice": "“与韩国顶流联名的系列随即在社交媒体引爆发酵，引发抢购热潮”——JENNIE同款晒单与抢购攻略是最大声量；“JENNIE带货能力 vs 顶流联名性价比”讨论度走高。",
      "sentiment": "正面",
      "source": "腾讯新闻",
      "url": "https://news.qq.com/rain/a/20260905A000UA00",
      "topVoiceSource": "腾讯新闻",
      "topVoiceUrl": "https://news.qq.com/rain/a/20260905A000UA00"
    },
    {
      "brand": "starbucks",
      "cat": "food",
      "name": "“咖啡体验创新季”秋季新品",
      "window": "09-01 ~ 09-15",
      "updatedDate": "09-09",
      "type": "产品创新/视觉营销",
      "action": "熔岩维也纳咖啡（摩卡酱挂壁动态熔岩纹理）9月1日上新，金渐层美式（注汽工艺）9月15日登场，同步推出法式香草、百香果“真味无糖”风味。",
      "volume": "新品视觉（熔岩纹理、金色瀑布渐层）为社交平台主要传播素材。",
      "volumeIndex": 72,
      "sale": "未披露新品转化；Q3中国合资公司单季贡献净收入6870万美元，在华份额已从2017年42%峰值跌至14%。",
      "topVoice": "“每一杯都是一幅流动的抽象画”——视觉呈现与口感层次是测评笔记的最大声量点；其次为“咖啡体验的边界不止于好喝”的讨论。",
      "sentiment": "正面",
      "source": "搜狐/小食代",
      "url": "https://www.sohu.com/a/1070359879_120327735",
      "topVoiceSource": "搜狐/小食代",
      "topVoiceUrl": "https://www.sohu.com/a/1070359879_120327735"
    },
    {
      "brand": "mixue",
      "cat": "food",
      "name": "城市旗舰店“超市级”业态 + 1元零食/9元雪王玩偶",
      "window": "进行中（26城，2026年目标35家）",
      "updatedDate": "09-09",
      "type": "新店态/品类扩容",
      "action": "开出超市级旗舰店，1元零食、9元雪王玩偶、挂耳咖啡、分装花茶填满货架，把门店闲逛客流二次转化；郑州总部旗舰店成为“现象级消费地标”，2025年总人流量超570万人次、订单超240万单、营业额超9800万元；会员总量8月30日突破5亿。",
      "volume": "全国已落地30余家城市旗舰店（进驻26城），“雪王老家”打卡与“没有人能空着手走出雪王老家”热梗持续；大河网评述“特色饮品+雪王IP文创”成中原消费新活力样本。；联商网9月7日分析：门店总量增20.7%而收入仅增2.3%，“规模正循环”首次出现明显裂缝。",
      "volumeIndex": 80,
      "sale": "郑州总部旗舰店文创周边销售额占比超过80%；但上半年净利润23.19亿元、同比下滑14.7%，主业仍承压，“中年危机下靠幸运咖续命”的讨论持续。",
      "topVoice": "“没有人能空着手走出雪王老家”——旗舰店文创周边“空手出不了门”的晒单是最大分享点；同时有“奶茶店为何不务正业”与海外收缩的质疑声。",
      "sentiment": "正面",
      "source": "大河网",
      "url": "https://news.dahe.cn/2026/09-07/2129335.html",
      "topVoiceSource": "大河网",
      "topVoiceUrl": "https://news.dahe.cn/2026/09-07/2129335.html"
    },
    {
      "brand": "bawang",
      "cat": "food",
      "name": "×《小王子》文学IP联名（港澳）",
      "window": "9月10日港澳上线（明日）",
      "updatedDate": "09-09",
      "type": "文学IP联名/出海营销",
      "action": "明日上线：三款抹茶新品+限定周边，B-612星球主题体验店将亮相澳门威尼斯人与香港MOKO；内地社媒攻略与“港澳代购”提问帖升温。",
      "volume": "以“纯粹”为联名核心的官宣通稿在港澳与内地营销圈传播；为霸王茶姬首次在港澳与经典文学IP联名，出海叙事与Q2海外GMV同比增114.3%、连续四季度环比提升的数据形成呼应。",
      "volumeIndex": 66,
      "sale": "未开售；港澳门店总数399家（同比+191家），海外市场为其当前最确定增量。",
      "topVoice": "“《小王子》和茶有一个相似的地方——越简单、越纯粹的东西，反而越能陪伴人很久”（港澳子公司总经理陈沛东）——联名预告以“纯粹”叙事引发文艺向讨论，等待9月10日开售验证。",
      "sentiment": "正面（预热期）",
      "source": "美通社/经济通",
      "url": "https://www.etnet.com.hk/www/tc/news/news-article.php?category=prnewswire&newsid=5040910_XG40910_2&section=index",
      "topVoiceSource": "美通社/经济通",
      "topVoiceUrl": "https://www.etnet.com.hk/www/tc/news/news-article.php?category=prnewswire&newsid=5040910_XG40910_2&section=index"
    },
    {
      "brand": "bawang",
      "cat": "food",
      "name": "BACHI FASHION 国风服饰跨界",
      "window": "进行中（官方旗舰店已下架服装品类）",
      "updatedDate": "09-09",
      "type": "品类跨界",
      "action": "从墨镜、方巾、帆布包延伸到国风服饰，成为新茶饮首个入局服饰领域的品牌，牛仔外套599元、牛仔裤499元。",
      "volume": "“奶茶店集体不务正业”成为2026新茶饮最显眼关键词，话题度高但口碑分化；叠加创始人卸任境内主体工商职务、直营店一年+644家、单店GMV降16%等话题持续发酵。",
      "volumeIndex": 76,
      "sale": "遇冷——踏花归来系列上线不久，官方旗舰店已下架服装品类，仅剩帽子、挎包等周边；同期Q2活跃会员净流失约290万。",
      "topVoice": "“定价已经脱离茶饮消费的逻辑”——最大声量为价格质疑与“为何不专注主业”；行业评论指出“卖衣服复用的只有品牌认知，热闹过后难沉淀复购”。",
      "sentiment": "争议/负面",
      "source": "搜狐财经/虎嗅",
      "url": "https://www.sohu.com/a/1069158216_100291653",
      "topVoiceSource": "搜狐财经",
      "topVoiceUrl": "https://www.sohu.com/a/1069158216_100291653"
    },
    {
      "brand": "lululemon",
      "cat": "apparel",
      "name": "新CEO奥尼尔正式上任 + Q2业绩危机处置",
      "window": "新CEO 9月8日已上任（进行中）",
      "updatedDate": "09-09",
      "type": "危机舆情/品牌信任修复",
      "action": "Heidi O’Neill（耐克27年履历、前消费者/产品与品牌总裁）9月8日正式出任CEO并加入董事会；此前股价因年度指引下调单日跌18%至约100美元的八年低点，Q2 leggings销量约-20%、athleisure份额缩水至43.9%；创始人Chip Wilson“Gap化”路线之争5月和解后又被曝婚变；临时管理层已启动压缩开发周期、精简SKU、加大爆款补单。；9月8日Heidi O’Neill正式履新并加入董事会，上任首日股价涨近2%；创始人Chip Wilson同意保持沉默给新CEO翻身机会。",
      "volume": "“耐克系救火”与“新帅能否止跌”讨论达到峰值，全球媒体聚焦；竞争对手Alo、Vuori份额上升，NikeSKIMS上海围挡、Vuori中国扩店计划加剧围剿叙事。；上任首日股价反弹约2%，但2026年内仍累跌52%、五年跌76%；分析师共识Hold、平均目标价122美元。",
      "volumeIndex": 82,
      "sale": "未披露；竞品围攻加剧——ALO开出天猫旗舰店、NikeSKIMS围挡上海兴业太古汇中国首店；Vuori计划2027年底前将中国门店从8家扩至20家。",
      "topVoice": "最大声量为“股价八年新低+两大核心市场同失速”的焦虑讨论；正面声音聚焦“O’Neill在耐克女性业务的产品与品牌积累正是lululemon最缺的能力”。",
      "sentiment": "负面",
      "source": "中国商报（今日头条）",
      "url": "https://www.toutiao.com/w/1875467060575235",
      "topVoiceSource": "中国商报（今日头条）",
      "topVoiceUrl": "https://www.toutiao.com/w/1875467060575235"
    },
    {
      "brand": "lululemon",
      "cat": "apparel",
      "name": "2026天猫超级品牌日 × 陶身体剧场《wunder puff 的冬天》",
      "window": "09-01 ~ 09-10（9月10日沈阳动态剧场落地）",
      "updatedDate": "09-09",
      "type": "平台超品日/艺术营销",
      "action": "连续第八年开启天猫超级品牌日，与中国现代舞团陶身体剧场联合创作主题短片《wunder puff 的冬天，不止一个调》，讲述音乐变幻中的音调、身体律动中的步调与个性表达的腔调；9月10日将在沈阳举行wunder puff动态剧场线下活动，邀请社区伙伴走进沉浸式体验。",
      "volume": "超品日大片在社交平台传播，与Q2业绩爆雷、股价大跌17.38%形成强烈话题反差，“业绩失速时更要做品牌”的讨论升温；9月8日新CEO上任在即，“新帅能不能救lululemon”成全网最大声量议题。；野村9月7日报告指lululemon中国业务转弱并下调全年指引，新CEO Heidi O’Neill 9月8日（明日）正式履新。",
      "volumeIndex": 72,
      "sale": "未披露转化；背景为中国同店固定汇率-8%（入华首次负增长）、紧身裤销量降约20%、全年指引下调。",
      "topVoice": "“股价都跌成这样了还请陶身体拍大片？”——股民吐槽与创意圈好评并存；8月运动休闲服饰市场份额同比降10个百分点至43.9%（Alo、Vuori分别增5.9/2.2个百分点）被广泛引用。",
      "sentiment": "两极",
      "source": "腾讯新闻（营销人的灵感库247期）",
      "url": "https://news.qq.com/rain/a/20260905A098Y100",
      "topVoiceSource": "中国新闻网（中新经纬）",
      "topVoiceUrl": "https://m.chinanews.com/wap/detail/cht/zw/jw686284.shtml"
    },
    {
      "brand": "luckin",
      "cat": "food",
      "name": "瑞幸 × 名创优品 YOYO 联名（进行中）",
      "window": "9月7日-9月13日全国门店",
      "updatedDate": "09-09",
      "type": "IP联名+周边套餐",
      "action": "9月7日正式上线：小奶酪拿铁、抹茶奶酪拿铁（新西兰进口奶酪）+瑰夏白冷萃；4款主题杯（含2款PP材质超大杯）、联名纸袋/杯套随机发放；单杯套餐得软发泡贴纸、双杯套餐得砰砰鱼眼吧唧/举杯转转徽章/瑞的都对冰箱贴（后两款随机二选一）；公众号“奶酪自由”1万张0元饮品券抽奖（9.7-9.8）。",
      "volume": "上线两日全网晒单刷屏，“好萌”“挺治愈的”“为了冰箱贴冲了”成主流反响；集齐成本账攻略（贴纸需指定单杯套餐、两款冰箱贴需四杯）引发“喝六杯”自嘲式讨论；YOYO上半年相关收入近5亿元，帮助名创提前完成自有IP全年10亿目标。",
      "volumeIndex": 90,
      "sale": "上线首日周边随套餐赠送、不单独售卖；背景为咖啡液累计销量120天内从4亿杯增至10亿杯（王一博代言+全场景共创驱动）、Q2总净收入158.86亿元增28.5%。",
      "topVoice": "“好萌”“为了冰箱贴冲了”为最大声量；争议集中在“贴纸不是任意单杯送、集齐两款冰箱贴要买四杯、预售按门店库存开放”等规则细节，海南/吉林部分门店无PP超大杯。",
      "sentiment": "正面（上线首日）",
      "source": "微博@瑞幸咖啡",
      "url": "https://weibo.com/7588142961/5339117560529303",
      "topVoiceSource": "什么值得买（集齐成本账）",
      "topVoiceUrl": "https://post.smzdm.com/p/a03dlz20"
    },
    {
      "brand": "miniso",
      "cat": "daily",
      "name": "MINISO LAND 乐园系大店 + 自有IP YOYO",
      "window": "全年推进，年底目标200店",
      "updatedDate": "09-09",
      "type": "大店战略/自有IP孵化",
      "action": "乐园系大店从0扩至100家（年底目标200家、远期1200-1500家），1200㎡/8000+SKU/IP占比90%；自有IP YOYO对标LABUBU，8月新IP CHOUCHOU全国11店首发当日全线售罄；SUPER MINISO店型月销售额保持100万元以上；国内“腾笼换鸟”：净增59家乐园店同时净减少121家常规门店。",
      "volume": "YOYO 2026上半年相关收入近5亿元、6-7月中国区单月销售额连续破亿；上市第一年全渠道销量突破200万件、进入53个国家和地区；与瑞幸联名进一步走向大众消费场景。",
      "volumeIndex": 90,
      "sale": "YOYO 6-7月单月销售额连续破亿、上半年相关收入近5亿元，与《玩具总动员5》联名首月全球GMV破亿；乐园系坪效约为普通门店2倍，平均回本周期1年内、部分早期门店最快6个月回本；9月7日起YOYO又作为联名主角进入瑞幸全国门店。",
      "topVoice": "“半年狂卖5亿、名创长公主还能火多久”引发行业讨论；“好萌、挺治愈的”为用户侧主流反馈。",
      "sentiment": "正面",
      "source": "中华网财经/经济观察报",
      "url": "https://finance.china.com/xiaofei/13004691/20260904/49719302.html",
      "topVoiceSource": "腾讯新闻",
      "topVoiceUrl": "https://new.qq.com/rain/a/20260908A0CES300"
    },
    {
      "brand": "guming",
      "cat": "food",
      "name": "时代少年团·古茗咖啡全球代言人",
      "window": "08-26 预热 ~ 08-29 开售，合作期1年",
      "updatedDate": "09-09",
      "type": "顶流代言+联名周边",
      "action": "官宣时代少年团为古茗咖啡首位全球代言人，同步上线四款新品与单/双/四/七杯四档周边套餐，23城地标大屏+200+商场大屏+5城海外大屏+32家主题痛店+5000+氛围店应援。",
      "volume": "#时代少年团古茗咖啡全球代言人# 话题阅读量4242.3万、讨论量25万并登微博热搜；小程序排队峰值超60万人（部分门店显示63万+），系统一度崩溃；待制作订单高达两三千杯。",
      "volumeIndex": 92,
      "sale": "开售3小时按最低档套餐估算保底销售额突破2000万元；七杯套餐（111.9元）短时售罄，限定周边多店开售即罄。",
      "topVoice": "“别印带人脸的袋子行吗？”“我就关心一个问题：包装袋会印代言人肖像吗？”——延续2025年“阿祖袋”吐槽，包装设计成为最大讨论点，网友调侃品牌“主打一个听劝”；其次为排队60万+与周边缺货的抱怨。",
      "sentiment": "正面（含包装争议）",
      "source": "新浪财经/饮品报",
      "url": "https://www.sina.cn/gc/article/nipzanp8947745.html",
      "topVoiceSource": "新浪财经/饮品报",
      "topVoiceUrl": "https://www.sina.cn/gc/article/nipzanp8947745.html"
    },
    {
      "brand": "popmart",
      "cat": "ip",
      "name": "SKULLPANDA「永恒一季」限量藏品发售",
      "window": "09-11 ~ 09-12（本周发售，预约进行中）",
      "updatedDate": "09-09",
      "type": "限量藏品/周年企划",
      "action": "SKULLPANDA八周年企划「永恒一季」藏品9月11日-12日在成都IFS国金中心旗舰店、上海世茂旗舰店限量发售：全球限量199体、本次发售100体（每店每日25体），定价1280元/体，以四季轮转定格“瞬时永恒”为概念。",
      "volume": "官宣微博带#SKULLPANDA八周年# #SKULLPANDA永恒一季# 话题，预约提醒与发售规则讨论升温。",
      "volumeIndex": 64,
      "sale": "未开售；每店每日25体的稀缺设定预计将再现排队与秒罄。",
      "topVoice": "“全球限量199体、每店每天只有25体”——蹲点攻略与“能不能摇到号”的讨论是主要声量，粉丝晒八周年收藏回顾为情感向内容主力。",
      "sentiment": "正面",
      "source": "微博@泡泡玛特",
      "url": "https://weibo.com/1726303567/5339817652787936",
      "topVoiceSource": "微博@泡泡玛特",
      "topVoiceUrl": "https://weibo.com/1726303567/5339817652787936"
    },
    {
      "brand": "popmart",
      "cat": "ip",
      "name": "LABUBU城市乐园嘉年华·上海首站",
      "window": "上海站即日起持续至11月1日（2026上海旅游节组成部分）",
      "updatedDate": "09-09",
      "type": "IP场景体验/巡展",
      "action": "东方明珠塔城市广场开幕：巨型冒险船+ZIMOMO船长雕塑、“弹射夺宝洞/舵轮飞帽/峡湾竞速”9款互动游乐项目；POP BAKERY×东方滨江大酒店“复古理发店”裱花发型蛋糕与下午茶套餐登陆陆家嘴；联动“嘉年华+陈列馆/自助餐/酒店度假”多款组合套票，9.15-10.15另办线下市集与“明珠C位星推官”赛事。",
      "volume": "东方明珠新媒体×泡泡玛特两大上市公司首次深度合作，探索“地标IP×潮玩IP×文旅消费”协同运营；集章攻略、限定周边与裱花蛋糕晒图持续产出。",
      "volumeIndex": 94,
      "sale": "限定商品与甜品热销；百联1元盲袋等联动促销覆盖美妆/餐饮/数码；限定周边（玉米抱枕、PVC挂件、马口铁徽章）构成主要转化。",
      "topVoice": "“可吃可玩的城市漫游”与“拆盲盒式随机裱花蛋糕”成为打卡最大记忆点；部分游客反馈周末互动项目排队时间较长。",
      "sentiment": "正面",
      "source": "第一财经",
      "url": "https://www.toutiao.com/article/7681675911602749994",
      "topVoiceSource": "第一财经",
      "topVoiceUrl": "https://www.toutiao.com/article/7681675911602749994"
    },
    {
      "brand": "popmart",
      "cat": "ip",
      "name": "泡泡玛特长沙IFS旗舰店开业（星星人在星城）",
      "window": "09-05 起（长期门店）",
      "updatedDate": "09-09",
      "type": "大店战略/城市限定",
      "action": "9月5日湖南首家旗舰店在长沙国金中心开业，总面积超600㎡、为湖南最大双层门店；以长沙“星城”美誉为灵感打造“星星人在星城美梦漂流”主题，一层星星人/THE MONSTERS/CRYBABY新品、二层DIMOO/小野/MOLLY/SKULLPANDA错落分布；设NPC对暗号领长沙限定贴纸、“海岛度假区”摇铃解锁限量惊喜礼品等互动。",
      "volume": "开业前门店前聚集超600名消费者排队（有婆婆凌晨5点来帮儿媳排队），现场保安加设围栏；湖南日报侃财邦专题评述“在实体零售感叹流量枯竭时投下一枚信号弹”；开业后打卡笔记持续产出。",
      "volumeIndex": 86,
      "sale": "限定贴纸与热销款（哭娃、不想不想毛绒挂件等）为主要转化；长沙门店布局将达近10家；上半年泡泡玛特线下门店仅净增10家、收入却增38.2%，大店模式验证单店情绪力溢价。",
      "topVoice": "“其实我并不太清楚这家店是卖什么的”——凌晨5点帮儿媳排队的婆婆被大量转引为“盲盒消费热潮”注脚；NPC对暗号攻略与“摇铃铛解锁惊喜礼品”晒图是打卡分享最大声量。",
      "sentiment": "正面",
      "source": "腾讯新闻",
      "url": "https://news.qq.com/rain/a/20260905A08UGK00",
      "topVoiceSource": "腾讯新闻",
      "topVoiceUrl": "https://news.qq.com/rain/a/20260905A08UGK00"
    },
    {
      "brand": "wanderaround",
      "cat": "apparel",
      "name": "Wander Around 秋款上新 + 明星同款厚底增高板鞋走热",
      "window": "08 月下旬起（秋冬新款发售中）",
      "updatedDate": "09-09",
      "type": "秋冬上新/明星同款营销",
      "action": "Wander Around（漫行）2026 秋款释出复古芭蕾德训鞋（蓝/银灰/粉色厚底增高3cm）、「拾光系列」厚底魔术贴玛丽珍鞋等新品；孙燕姿同款复古厚底增高休闲板鞋、白鹿同款美拉德棕厚底板鞋在天猫持续走热，参与官方立减/88VIP 券等平台促销。",
      "volume": "天猫多款秋款销量40-400+件/近期；「孙燕姿同款」标签商品200+人领券，明星同款是主要社媒搜索词；淘宝内容场有《朱墨色秋日私语》等长文种草笔记。",
      "volumeIndex": 42,
      "sale": "厚底增高休闲板鞋/德训鞋（¥314-424 券后）为主力转化；孙燕姿、白鹿同款款带动搜索转化；抖音/内容渠道优惠券（满500减146）刺激凑单。",
      "topVoice": "“5cm厚底踩下去像踩进一块晒过太阳的云朵，悄悄长高的童话”——淘宝内容场对厚底脚感与复古配色的诗意种草是最大声量；“明星同款”搜素热度持续带动进店。",
      "sentiment": "正面",
      "source": "淘优券（天猫商品聚合）",
      "url": "https://www.taouq.com/w-around2026",
      "topVoiceSource": "淘宝服装网",
      "topVoiceUrl": "https://clothing.taobao.com/topic/xiuxianbanxie_47/6073fae96546c7951b4ec21a00d51234.html"
    },
    {
      "brand": "weflower",
      "cat": "apparel",
      "name": "WEFLOWER×HBD 联名小花鞋德训鞋热销 + 获第三方质量奖背书",
      "window": "2026 秋季（在售）",
      "updatedDate": "09-09",
      "type": "联名运营/口碑背书",
      "action": "WEFLOWER 与 happybirdsday 联名的德训鞋小花鞋（WFDAWN101 等）持续在售，联名款经中联品检（福建）检测获「通勤舒适缓震德训鞋质量奖」（帮面透气性456mm/s、高耐磨生胶外底）；品牌延续与公益项目「NST发芽计划」等联名方法论，主打明星上脚（林允、翟潇闻等曾上脚联名板鞋）+ 电商渠道种草。",
      "volume": "联名款检测报告获多地方媒体转载，形成「颜值+质量」双重口碑；天猫/得物渠道「小花鞋」穿搭内容稳定产出；此前泡泡花园洞洞鞋经得物「有点东西大会」线上+直播首秀的运营打法延续到秋季款。",
      "volumeIndex": 46,
      "sale": "WEFLOWER×HBD 联名德训鞋为当期转化主力；薄底德训鞋优势产品线+洞洞鞋厚底线构成价格带；天猫旗舰店为主渠道，海外买手渠道（日本/中东）同步分销。",
      "topVoice": "“整鞋减震效果出色、久走不累，透气不闷脚”——联名款质量检测报告的客观指标被媒体与用户作为「买得放心」依据传播，是当期最大声量内容。",
      "sentiment": "正面",
      "source": "沸腾质量奖（第三方检测公示）",
      "url": "https://q.ftzlj.com/product/detail/3262",
      "topVoiceSource": "周口网",
      "topVoiceUrl": "http://www.zkxww.com/news/zhzx/2026-08-28/406655.html"
    },
    {
      "brand": "matnut",
      "cat": "apparel",
      "name": "MATNUT × MELOMELA「DreamWing」联名玛丽珍板鞋发售",
      "window": "08-06 20:00 发售（持续销售中）",
      "updatedDate": "09-09",
      "type": "IP联名发售",
      "action": "MATNUT 携手韩国治愈系 IP 品牌 MELOMELA 打造非传统玛丽珍板鞋「DreamWing Mary Jane Shoes」，8月6日20:00上线，线上经 MATNUT 官方淘宝/天猫店、小红书、抖音、得物发售，线下覆盖 MELOMELA 全国门店，线上首发价499元（原价568元）。",
      "volume": "微博/小红书联名预热倒计时与开箱内容持续释出；品牌同期还有 × VAITOW「MHS-FG」穆勒半拖阿甘鞋联名款全平台在售，联名矩阵化运营维持声量。",
      "volumeIndex": 44,
      "sale": "DreamWing 玛丽珍联名款为当期主力转化（499元首发价）；VAITOW×MATNUT 阿甘鞋、帆布鞋等联名款持续补量；线上线下双渠道同步。",
      "topVoice": "“致敬《阿甘正传》经典鞋型，又可一脚蹬轻松出行”——VAITOW 联名阿甘鞋的实用设计讨论与 MELOMELA 治愈系 IP 粉丝的联名款晒单是主要声量来源。",
      "sentiment": "正面",
      "source": "新浪新闻",
      "url": "https://www.sina.cn/news/detail/5328644822273053.html",
      "topVoiceSource": "微博 @MATNUT",
      "topVoiceUrl": "https://m.weibo.cn/detail/5276798662476644"
    },
    {
      "brand": "kaalixto",
      "cat": "apparel",
      "name": "kaalixto × G.E.D 贝壳星星联名鞋「夜幕落星」发布",
      "window": "2026 秋季款（发售中）",
      "updatedDate": "09-09",
      "type": "联名新品",
      "action": "本土国潮鞋履品牌 kaalixto 联合自媒体创作者「老白不喝酒 G.E.D」推出2026秋季新款贝壳星星联名鞋：黑色鞋身缀亮黄/宝蓝/紫/浅粉/橙红色五角星贴片，白色贝壳鞋头+升级 EVA 发泡大底，主打「群星派对」创作主题，兼顾街头潮流与日常实穿。",
      "volume": "潮男网等潮流媒体专题报道释出全鞋细节图；小红书/得物穿搭内容围绕「星星鞋」持续种草；海外渠道（PSYLOS1 等）同步在售 Aniparty、老白联名水钻款与银杏叶限定款。",
      "volumeIndex": 48,
      "sale": "贝壳星星联名款为当期主推；水晶星星厚底鞋（Lao Bai Collab）、银杏叶限定款、Aniparty 联名等海外在售款构成价格带补充；得物/天猫旗舰店为主要转化渠道。",
      "topVoice": "“色彩跳跃却不显杂乱，层次丰富而保有秩序感，像一场自由热闹的群星派对”——联名鞋设计语言的媒体解读与「小众星星鞋」穿搭笔记是最大声量。",
      "sentiment": "正面",
      "source": "潮男网",
      "url": "http://www.chaonanclub.com/banxie/11686.html",
      "topVoiceSource": "潮男网",
      "topVoiceUrl": "http://www.chaonanclub.com/banxie/11686.html"
    },
    {
      "brand": "smilerepublic",
      "cat": "apparel",
      "name": "SMILEREPUBLIC 秋冬「斑点狂想曲」上新 + 石家庄万象城新店开业",
      "window": "08-11 ~ 09 月（进行中）",
      "updatedDate": "09-09",
      "type": "秋冬上新/渠道扩张",
      "action": "释出26AW秋冬新品剧透：廓形碰撞利落内搭、冷暖版型对照，动态镜头呈现剪裁与面料质感；“斑点狂想曲”系列与石家庄万象城新店持续在售。",
      "volume": "#SMILEREPUBLIC# #斑点狗歪头鞋# 新品预告帖互动走高，“鞋上趴了只乖乖的斑点小狗”成记忆点；夏末初秋换季上新节奏踩点精准。",
      "volumeIndex": 50,
      "sale": "斑点狗歪头休闲鞋、Fair Isle 提花厚底鞋（可更换 Smile Toe）为当期转化款；新店开业礼遇引流线下转化；海外 SIXTYPERCENT 等渠道限定折扣促销。",
      "topVoice": "“歪头小狗是整套look的punchline”是晒单主流声音；少数用户关注白色鞋面打理难度。",
      "sentiment": "正面",
      "source": "新浪新闻（SMILEREPUBLIC新品预告）",
      "url": "http://www.sina.cn/news/detail/5336223972593784.html",
      "topVoiceSource": "新浪新闻",
      "topVoiceUrl": "http://www.sina.cn/news/detail/5336223972593784.html"
    },
    {
      "brand": "wanke",
      "cat": "apparel",
      "name": "顽刻 Ollieskate 得物开学季周周上新 + W 系列新配色发售",
      "window": "09 月起（开学季持续）",
      "updatedDate": "09-09",
      "type": "上新节奏/平台运营",
      "action": "2021年起步的国产滑板鞋品牌顽刻以「做出一双最适合亚洲人的休闲板鞋」为定位，主打150-200元平价面包板鞋；近期持续「周周上新」并在得物新品发售日历开放预约，W 系列释出冰蓝、豹纹、酒红美拉德、牛仔蓝、星星等多配色，配合开学季校园穿搭内容投放（识货社区用户笔记、得物13万+篇开箱精选）。",
      "volume": "得物官方店铺关注113万+人，累计售出超663万双、Black经典款「黑白熊猫」43万人下单；「百元穿出千元质感」的UGC穿搭晒单在得物/识货社区持续产出，形成校园自传播。",
      "volumeIndex": 58,
      "sale": "W系列/BAKE系列板鞋（¥170-189）为绝对主力转化款；天猫/抖音/京东/得物四渠道同价销售，得物次日达物流提升转化效率；新品发售日历预约锁定复购。",
      "topVoice": "“百元穿出千元质感”“周周上新、颜值超高、设计感满满”——得物用户开箱精选是最大声量来源；“顽刻鞋款偏大半码”的尺码讨论与商详尺码建议形成真实选购参考，买家自发分享穿搭晒单一双比一双好看。",
      "sentiment": "正面",
      "source": "今日头条",
      "url": "https://m.toutiao.com/article/7666098527445058111",
      "topVoiceSource": "识货社区",
      "topVoiceUrl": "https://m.shihuo.cn/page/findCommunityDetail?id=6007209"
    },
    {
      "brand": "hbd",
      "cat": "apparel",
      "name": "happybirdsday×云旗全球品牌代言人官宣 + 得物全网同步发售",
      "window": "08-25 官宣起（进行中）",
      "updatedDate": "09-09",
      "type": "代言人官宣/新品发售",
      "action": "全球品牌代言人云旗“运动打卡”第五天晒合作款德训博肯奶茶棕+全网独家周边；HIHBD101德训鞋“氛围感大片”物料传播；“快乐的鸟日子”红鞋被称“晴天神器”。",
      "volume": "代言人官宣微博转发4.2万+、点赞33万+，成为品牌社媒近期峰值；宋祖儿、苏新皓、朱正廷、刘旸、邓佳鑫、焦迈奇等明星「星look」上脚内容持续铺量；8月28日 HiHBD101 德训鞋获第三方检测「耐折缓震牛皮革德训鞋质量奖」（四项有害物质未检出、四万次耐折无异常）为口碑背书。",
      "volumeIndex": 56,
      "sale": "得物为本次发售主阵地：BANGS180 奶砖板鞋、DAWN90 慢跑德训鞋、HIHBD101 诠真系列、轻赤足系列构成转化矩阵；礼盒+挂件+亲签抽奖组合拉升客单与晒单率。",
      "topVoice": "“很高兴成为 happy birds day 全球品牌代言人，把每一步，都走成快乐的仪式感”——云旗官宣视频（转发1.7万、点赞4.2万）是声量最大内容；粉丝二创表情包与「上班云搭子」立牌抽奖互动刷屏评论区。",
      "sentiment": "正面",
      "source": "淡蓝天空时尚男鞋网",
      "url": "https://news.43nx.cn/n/113098.html",
      "topVoiceSource": "微博 @HAPPYBIRDSDAY品牌",
      "topVoiceUrl": "https://weibo.com/u/4042735006?refer_flag=1005050010_"
    },
    {
      "brand": "ripstar",
      "cat": "apparel",
      "name": "RIPSTAR Bullet「液态银」新品发布 + 天猫华服奖年度潮流趋势品牌",
      "window": "09 月上旬（新品发售中）",
      "updatedDate": "09-09",
      "type": "新品发售/代言人营销",
      "action": "品牌代言人林高远亮相ROYAL DRIFT宁波飘移赛展示新款GR.S赛车主题板鞋（DKS远剑飘移车队319号）；闫玉晨上脚Revival“柔和蓝”千禧风复古慢跑鞋；Bullet“液态银”新品持续发售。",
      "volume": "明星同款矩阵（曾可妮/颜安/闫玉晨/林高远等）社媒曝光持续，赛车主题板鞋成新卖点。",
      "volumeIndex": 60,
      "sale": "Bullet「液态银」配色与 Clouds Bag 云朵包为当期主推转化款；Slow Runner「金属芭比」、马年限定系列、SC系列 KB-43 赛车鞋构成新品矩阵；全平台旗舰店联动开学季（#RIPSTAR开学爆到#）促销。",
      "topVoice": "“颜色命名美學+复古慢跑鞋轮廓”是用户晒单最大共鸣点；部分用户反馈热门配色断码快。",
      "sentiment": "正面",
      "source": "新浪新闻（RIPSTAR艺人上脚展示）",
      "url": "https://www.sina.cn/news/detail/5337220699654881.html",
      "topVoiceSource": "新浪新闻",
      "topVoiceUrl": "https://www.sina.cn/news/detail/5338800087893658.html"
    },
    {
      "brand": "cuishengsheng",
      "cat": "food",
      "name": "脆升升官宣云旗、郝熠然为青春代言人「星笺专递」限定礼盒",
      "window": "09-01 官宣起（进行中）",
      "updatedDate": "09-09",
      "type": "代言人官宣+限定周边礼盒",
      "action": "9月1日11:12官宣云旗、郝熠然为脆升升青春代言人（双人共同title，正式代言层级），同步在天猫两家官方旗舰店发售「星笺专递」限定礼盒三档（¥99.9/¥169.9/¥299.9），含艺人亲笔手绘小卡、水晶小卡、吧唧、帆布包等周边；预热短片+双人TVC+主KV海报+联名礼盒四件套同步释放，10城12屏地标广告投放，官方直播间抽奖送亲签。",
      "volume": "#脆升升青春代言人云旗郝熠然# #一旗咸甜刚郝酥脆# 全网刷屏，开售口号“别让黄牛抢走”热传，“肯德基和脆升升是竞品”等粉圈梗与“拎一袋脆升升走亲戚”梗视频出圈；路人侧“克价、礼盒溢价与战报水分”拆账帖引发热议；云旗同月亦为happybirdsday全球代言，“云旗商务宇宙”成讨论点；剁椒Spicy代言人周讯收录。",
      "volumeIndex": 78,
      "sale": "品牌战报（9月2日）：官宣1小时全平台销售额1777万+、24小时（剔除退货）2167万+，限定礼盒售出9.1万+套，直播间峰值在线2.2万+，全域曝光5500万+，登顶天猫品牌零食总榜TOP1。",
      "topVoice": "粉丝侧声量最大内容为晒开箱战报与限定周边二创；路人侧声量最大为“一个零食路人把克价、礼盒溢价和战报拆开算了算”的什么值得买热帖——指出零食本体克价5-6分、礼盒差额实为小卡与吧唧溢价，“要零食按零食规则买、要周边按粉丝规则买”。",
      "sentiment": "两极（粉丝抢购狂热 vs 路人吐槽周边溢价）",
      "source": "新浪新闻",
      "url": "https://k.sina.com.cn/article_1922407515_72959c5b04001kjeu.html",
      "topVoiceSource": "什么值得买",
      "topVoiceUrl": "https://post.m.smzdm.com/p/a6zd9vmg"
    },
    {
      "brand": "anta",
      "cat": "apparel",
      "name": "田径新生代代言矩阵 + 名古屋亚运「冠军龙服」备战",
      "window": "9月官宣推进中（名古屋亚运开幕倒计时）",
      "type": "体育营销/代言矩阵",
      "action": "9月5日官宣严子怡（布鲁塞尔钻石联赛总决赛68.42米夺冠、破赛会纪录并实现五连冠）为品牌代言人，其名古屋亚运定制标枪战靴新配色已上脚；田径新生代矩阵已集齐严子怡、陈妤颉、刘俊茜、吴洪娇，覆盖短跑/跨栏/中长跑/投掷；安踏将为20支中国国家队打造亚运比赛及训练装备“冠军龙服”。",
      "volume": "严子怡“赛前官宣-夺冠-破纪录”三连事件链获体育媒体集中报道；中期报告同步披露PG7跑鞋获《Runner’s World》2026年度“最佳性价比跑鞋”、四大跑鞋系列半年销量560万双。",
      "volumeIndex": 85,
      "sale": "严子怡同款标枪战靴关注度高（限量配色未公开发售数据）",
      "topVoice": "“安踏押注中国田径新生代的眼光”获普遍好评，“18岁五连冠+亚洲纪录”成励志叙事核心；未见显著负面。",
      "sentiment": "正面",
      "source": "北晚在线（网易号）",
      "url": "https://www.163.com/dy/article/L65P4ADC0514TTKN.html",
      "topVoiceSource": "网易·安踏代言人严子怡夺冠报道",
      "topVoiceUrl": "https://www.163.com/dy/article/L65P4ADC0514TTKN.html",
      "updatedDate": "09-09"
    },
    {
      "brand": "liby",
      "cat": "daily",
      "name": "第五届「9月9感恩欢购节」×迪丽热巴全球代言",
      "window": "9月9日节点（全域预热进行中）",
      "type": "品牌节日IP/全域大促",
      "action": "总曝光超100亿人次，TVC首次登陆央视核心时段获超63亿曝光；联合补贴总额超亿元、联动全国15万家核心门店；迪丽热巴亲临天猫超品日直播间（7月已升级为立白史上首位品牌全球代言人），京东/天猫/抖音/拼多多四平台协同，抖音短剧男主张翅内容种草。",
      "volume": "#迪丽热巴直播#阅读量2300万、五大话题登微博热搜与文娱榜；活动新增会员超120万人、会员销售额同比+18%。",
      "volumeIndex": 82,
      "sale": "天猫超品日全场销售超额突破100%、斩获洗护品类TOP1",
      "topVoice": "“从产品出海到品牌出海，全球代言人+品牌节日IP双轮”的营销范式获行业媒体好评；正面声量集中在央视权威背书与补贴力度。",
      "sentiment": "正面",
      "source": "新浪新闻",
      "url": "https://news.sina.cn/2026-09-07/detail-iniqyzxs9576991.d.html",
      "topVoiceSource": "广州日报（今日头条）",
      "topVoiceUrl": "https://www.toutiao.com/article/7682687277239370281",
      "updatedDate": "09-09"
    },
    {
      "brand": "guming",
      "cat": "food",
      "name": "奶茶店卖啤酒：杭州湖滨店全国首店试点",
      "window": "9月5日起（杭州湖滨店）",
      "type": "品类扩张",
      "action": "“经典生啤”15元、“三重柚拉格”18元（均500ml现打），原麦汁浓度10.9°P/10°P区分常规与低醇微醺场景；系头部茶饮品牌首次将现打啤酒引入门店，配合瓶装红颜石榴汁等零售线同步铺开。",
      "volume": "“古茗居然在奶茶店卖啤酒”话题微博发酵，行业聚焦“新茶饮啥都卖”的品类扩张边界；上半年超90%门店（约13500家）已配咖啡机、咖啡销售占比稳定20%+之后的又一跨品类动作。",
      "volumeIndex": 76,
      "sale": "试点门店啤酒上新首周末尝鲜排队明显（具体销量未披露）",
      "topVoice": "“奶茶店真的啥都卖”的围观式讨论声量最大；支持者认为拉长经营时段是存量竞争必选项，质疑者担心透支主业。",
      "sentiment": "中性偏正",
      "source": "中国蓝新闻（微博）",
      "url": "https://weibo.com/2286092114/Rh17M3QA7",
      "topVoiceSource": "中国蓝新闻",
      "topVoiceUrl": "https://weibo.com/2286092114/Rh17M3QA7",
      "updatedDate": "09-09"
    },
    {
      "brand": "bawang",
      "cat": "food",
      "name": "×迪士尼公主系列联名（第一波已上线）",
      "window": "9月4日起全国（系列持续上新）",
      "type": "IP联名",
      "action": "霸王茶姬×迪士尼公主第一波联名周边、主题杯、主题门店9月4日全国上线，“轻因·桂馥兰香”“轻因·折桂令”两款轻因新品同步登场，主打更低咖啡因的“轻因不扰眠”概念；叠加9月10日《小王子》港澳联名，形成双IP矩阵。",
      "volume": "剁椒Spicy IP联名周讯本期收录事件；迪士尼公主+小王子双文学/童话IP联动在茶饮圈形成声量叠加，“一起推开世界的门”主题物料传播度良好。",
      "volumeIndex": 78,
      "sale": "主题门店周边首波售罄速度较快（官方未披露具体战报）",
      "topVoice": "“轻因系列解决下午喝茶睡不着痛点”是产品向最大好评；部分IP粉讨论迪士尼公主与品牌调性的匹配度。",
      "sentiment": "正面",
      "source": "剁椒Spicy IP联名周讯（网易转载）",
      "url": "https://www.163.com/dy/article/L668VL3405198DT6.html",
      "topVoiceSource": "网易·营销周报",
      "topVoiceUrl": "https://www.163.com/dy/article/L68JIKDS05502ZGU.html",
      "updatedDate": "09-09"
    }
  ],
  "wechatNews": {
    "note": "聚合 SocialBeta、梅花网、36氪、剁椒Spicy、数英DIGITALING、廣告狂人、广告头条、顶尖文案TOPYS、亿邦动力 九个公众号的每日发布内容；保留行业资讯与广告创意类内容（剔除推广/软文），来源链接均可跳转原文。",
    "accounts": [
      {
        "id": "socialbeta",
        "name": "SocialBeta",
        "handle": "公众号-Social beta",
        "status": "estimated",
        "current": "公开报道聚合估算"
      },
      {
        "id": "meihua",
        "name": "梅花网",
        "handle": "公众号-梅花网",
        "status": "estimated",
        "current": "公开报道聚合估算"
      },
      {
        "id": "kr36",
        "name": "36氪",
        "handle": "公众号-36氪",
        "status": "estimated",
        "current": "公开报道聚合估算"
      },
      {
        "id": "duojiao",
        "name": "剁椒Spicy",
        "handle": "公众号-剁椒Spicy",
        "status": "estimated",
        "current": "公开报道聚合估算"
      },
      {
        "id": "digitaling",
        "name": "数英DIGITALING",
        "handle": "公众号-数英DIGITALING",
        "status": "estimated",
        "current": "公开报道聚合估算"
      },
      {
        "id": "adman",
        "name": "廣告狂人",
        "handle": "公众号-廣告狂人",
        "status": "estimated",
        "current": "公开报道聚合估算"
      },
      {
        "id": "adheadline",
        "name": "广告头条",
        "handle": "公众号-广告头条",
        "status": "estimated",
        "current": "公开报道聚合估算"
      },
      {
        "id": "topys",
        "name": "顶尖文案TOPYS",
        "handle": "公众号-顶尖文案TOPYS",
        "status": "estimated",
        "current": "公开报道聚合估算"
      },
      {
        "id": "ebrun",
        "name": "亿邦动力",
        "handle": "公众号-亿邦动力",
        "status": "estimated",
        "current": "公开报道聚合估算"
      }
    ],
    "items": [
      {
        "accountId": "meihua",
        "accountName": "梅花网",
        "title": "寿司郎店内家长接小便上热搜，宝珀联动《王者荣耀》｜一周热门",
        "summary": "梅花网「一周热门」：寿司郎店内不文明行为事件登上热搜、品牌危机公关处置受关注；宝珀联名《王者荣耀》探索奢侈品牌×国民游戏的新组合；本周热门案例与舆情事件一网打尽。",
        "date": "09-08",
        "url": "https://www.meihua.info/article/6995817134851072",
        "source": "梅花网",
        "tags": [
          "一周热门",
          "案例"
        ],
        "id": "w001"
      },
      {
        "accountId": "socialbeta",
        "accountName": "SocialBeta",
        "title": "本周值得关注的7个品牌营销案例：亚朵星球《睡觉第一名》、宜家×Xbox",
        "summary": "亚朵星球邀请导演邵艺辉编剧执导品牌短片《睡觉第一名》（齐溪、邱天主演），以“冠军妈妈王苗苗”的成长故事照见成年人内卷压力，把“深睡”升维成对抗竞争的生活选择；宜家携手Xbox 25周年推出「YXSTABY 西斯塔比」系列，摇杆造型凳调用原始3D模型、复刻动态逻辑，亮相科隆游戏展。",
        "date": "09-08",
        "url": "https://socialbeta.com/article/111340",
        "source": "SocialBeta",
        "tags": [
          "案例",
          "广告创意"
        ],
        "id": "w002"
      },
      {
        "accountId": "socialbeta",
        "accountName": "SocialBeta",
        "title": "Agency of the Month：作品出圈，财报也出圈",
        "summary": "本期聚焦FF佛海佛瑞（多邻国×跳海酒馆“国际象棋臭棋节”、YSL七夕短片）与胜加（淘宝七夕“好巧，在淘宝”乞巧节叙事）等近期作品与经营双优的代理商，附在招职位。",
        "date": "09-08",
        "url": "https://socialbeta.com/article/111343",
        "source": "SocialBeta",
        "tags": [
          "代理商",
          "行业动态"
        ],
        "id": "w003"
      },
      {
        "accountId": "ebrun",
        "accountName": "亿邦动力",
        "title": "雅诗兰黛设奢华美容总裁 统管五大高端品牌",
        "summary": "Justin Boxford任奢华美容全球总裁统管海蓝之谜/雅诗兰黛/雅芮/朵梵/朗仕；2026财年净销售额150.49亿美元增5%扭亏，中国内地有机增长9%为集团最高、抖音成撬动新客核心阵地。",
        "date": "09-08",
        "url": "https://m.ebrun.com/706478.html",
        "source": "亿邦动力",
        "tags": [
          "组织调整",
          "美妆"
        ],
        "id": "w004"
      },
      {
        "accountId": "ebrun",
        "accountName": "亿邦动力",
        "title": "雅诗兰黛一周动向：中国区净销售额30.58亿美元增速居首",
        "summary": "集团CEO称中国内地护肤品/彩妆/香水全面增长；线上占中国业务超50%且两位数增长，抖音为撬动新客核心阵地；中国创新研发中心贡献约三成本土创新。",
        "date": "09-08",
        "url": "https://m.ebrun.com/706516.html",
        "source": "亿邦动力",
        "tags": [
          "财报",
          "美妆"
        ],
        "id": "w005"
      },
      {
        "date": "09-08",
        "accountId": "digitaling", "accountName": "数英DIGITALING",
        "title": "AI低俗广告盛行，国货美妆批量翻车",
        "source": "数英DIGITALING",
        "url": "https://www.digitaling.com/articles/1576280.html",
        "summary": "WPP裁员1000人背景下复盘“低俗AI广告”对品牌的破坏：授权账号用“纵欲过度”类AI短视频带货，与品牌二十多年积累的理念背道而驰；AI是工具、价值观才是方向盘——越是AI时代，公关“人”的价值越凸显，内容审核与价值判断不能交给算法。",
        "id": "w006"
      },
      {
        "date": "09-08",
        "accountId": "kr36", "accountName": "36氪",
        "title": "渠道为王还是品牌至上？新茶饮走向两种命运",
        "source": "36氪（首席消费官）",
        "url": "https://36kr.com/p/3974585974993160",
        "summary": "六份财报证明新茶饮没有放之四海皆准的公式：蜜雪的困境与古茗的增长说明“渠道为王”各有利弊，奈雪与霸王茶姬证实“品牌至上”的喜与忧；霸王茶姬2026年为“海外筑基年”、计划海外新增约200家门店，古茗93.7%门店已配备咖啡机。",
        "id": "w007"
      },
      {
        "accountId": "kr36",
        "accountName": "36氪",
        "title": "厌倦了「标准答案」的年轻人，开始「野性」消费",
        "summary": "零下20度“流放宁古塔”、洛阳应天门“男贵妃”爆改、Cityboat、Hyrox、KKV手账水彩——2025年中国情绪经济市场规模已达2.72万亿元，年轻人从“悦人”转向“悦己”，为跳脱日常的出格体验与心流专注付费。",
        "date": "09-07",
        "url": "https://36kr.com/p/3972948614918657",
        "source": "36氪",
        "tags": [
          "消费趋势",
          "情绪经济"
        ],
        "id": "w008"
      },
      {
        "accountId": "adman",
        "accountName": "廣告狂人",
        "title": "一周营销案例速读VOL.497：DQ机器人“小Sha”上工、喜茶应届生采风出圈、快手光合嘉年华",
        "summary": "八个新鲜案例：DQ联合Sharpa的机器人“小Sha”正式进驻上海吴江路门店，无固定站位完成抓勺子、撒小料等精细操作；喜茶应届设计师云南采风笔记引发“人文关怀”热议；快手光合嘉年华2.2万人打卡五大主题村——“最耐看的营销都是不像广告的广告”。",
        "date": "09-07",
        "url": "https://www.163.com/dy/article/L6357G5C0525APMK.html",
        "source": "廣告狂人 / 网易号",
        "tags": [
          "广告创意",
          "案例"
        ],
        "id": "w009"
      },
      {
        "id": "w010",
        "accountId": "socialbeta",
        "accountName": "SocialBeta",
        "title": "肯德基联名奥利奥：你俩胆子可真是“肥嘟嘟”",
        "summary": "肯德基与奥利奥联名新品开卖即引玩梗狂欢，“肯德基味奥利奥还是奥利奥味肯德基”成社交话题；SocialBeta 本周案例榜同时收录 MUJI「这样就好」、Marshall「守住现场」等品牌叙事向案例。",
        "date": "09-06",
        "url": "https://socialbeta.com/article/111294",
        "source": "SocialBeta",
        "tags": [
          "案例",
          "跨界联名"
        ]
      },
      {
        "id": "w011",
        "accountId": "duojiao",
        "accountName": "剁椒Spicy",
        "title": "云旗&郝熠然脆升升官宣24H销售额2167万+;王俊凯蜂花官宣全渠道销售额1800万+;王一博代言云南白药|一周代言人盘点",
        "summary": "剁椒Spicy【代言人周讯·一周大事件】（2026-08-31 至 09-06）本期收录22起官宣事件：王俊凯蜂花全渠道销售额1800万+/总曝光3.6亿、脆升升×云旗&郝熠然24H销售额2167万+/全域曝光5500万+、锅圈食汇×黄子弘凡全渠道GMV9.4亿+、于适KIMTRUE且初、王一博云南白药牙膏全球代言人、杨幂StuartWeitzman、Angelababy橘朵全球代言人、李宇春三生花、刘昊然DR.WU达尔肤、华晨宇网易云音乐首位代言人。",
        "date": "09-06",
        "url": "https://weixin.sogou.com/link?url=dn9a_-gY295K0Rci_xozVXfdMkSQTLW6cwJThYulHEtVjXrGTiVgSwhtXwx_nmkI6lS5ynIJuMUx3A6gnvBUrlqXa8Fplpd91YVid7PrCbb3lhZLzFi73xmkAYHD1vXReNiH1TjrsC4GGgfGH_J0-ebjfLs8Y1AdSgFpIgfoxgvRrLwCQowxTyihpFUGJ9ibsCR4Wci88-90KzQNBjdH6IW6Kwj1OMc8jjt3bGaKYI0NxIrmKiiobEWFfT8XJizdafYtKSkae0CjotuuiAmOIg..",
        "source": "剁椒Spicy公众号·代言人周讯一周大事件",
        "tags": [
          "一周大事件",
          "明星代言",
          "代言战报"
        ]
      },
      {
        "id": "w012",
        "accountId": "digitaling",
        "accountName": "数英DIGITALING",
        "title": "汉堡王“火焰让一切史诗般壮丽”、小米汽车门店爆改巨型手办盒",
        "summary": "数英最新收录：汉堡王回归标志性品牌符号“火”，以史诗感广告主张明火烤制的风味与力量；小米汽车门店爆改巨型手办盒制造打卡奇观；还有香港Uber“保持你的节奏”、Netflix活人广告牌等海外创意。",
        "date": "09-06",
        "url": "https://www.digitaling.com/projects/375717.html",
        "source": "数英DIGITALING",
        "tags": [
          "广告创意",
          "案例"
        ]
      },
      {
        "id": "w013",
        "accountId": "topys",
        "accountName": "顶尖文案TOPYS",
        "title": "Fotografiska即将亮相深圳湾：首展《TOILETPAPER》与摄影师Ferrari对谈",
        "summary": "TOPYS专访《TOILETPAPER》联合创始人、摄影师Pierpaolo Ferrari：这本没有任何文字、只有离奇照片的“厕所读物”如何以“不完美”内在驱动在图像时代独树一帜——“当你创作出一个可以有多种含义的影像时，你就赢了”。",
        "date": "09-06",
        "url": "https://m.topys.cn/article/34736",
        "source": "顶尖文案TOPYS",
        "tags": [
          "广告创意",
          "艺术访谈"
        ]
      },
      {
        "accountId": "digitaling",
        "accountName": "数英DIGITALING",
        "title": "2026中秋礼盒大赏征集启动：创意礼盒大盘点即将开幕",
        "summary": "数英年度中秋礼盒大赏再启：征集各企业定制中秋礼盒实拍（截止9月18日），历年礼盒从月饼进化到公仔、零食、电子产品与玩具——“中秋的创意到底能有多大”成为品牌周边创意的集中检阅场。",
        "date": "09-05",
        "url": "https://www.digitaling.com/articles/1572108.html",
        "source": "数英DIGITALING",
        "tags": [
          "征集",
          "包装创意"
        ],
        "id": "w014"
      },
      {
        "id": "w015",
        "accountId": "socialbeta",
        "accountName": "SocialBeta",
        "title": "案例一周 Vol.413：若来×赛百味“开”出自己的小店",
        "summary": "本周7个案例：若来×赛百味把“自定义”理念与DIY基因结合成消费者共创体验；HUMAN MADE×CUP NOODLE 55周年联名杯面在日本全家限量发售；QQ飞车×徐良“重回十七岁”；亚朵星球×邵艺辉重新定义“第一名”；日丰公益十年《世界上最美的名字》等。",
        "date": "09-05",
        "url": "https://socialbeta.com/article/111340",
        "source": "SocialBeta",
        "tags": [
          "案例"
        ]
      },
      {
        "id": "w016",
        "accountId": "kr36",
        "accountName": "36氪",
        "title": "之禾、PANE们突围，离“中国奢侈品”又近一步",
        "summary": "之禾把门店开到巴黎香榭丽舍圆点广场（邻居是爱马仕），PANE、裘真、山下有松批量占据上海核心商圈黄金点位；沥金追踪15个国产中高端服饰品牌搜索热度全部跑赢行业均值，“国产无高端”共识正被打破。",
        "date": "09-05",
        "url": "https://www.36kr.com/p/3970605943927040",
        "source": "36氪",
        "tags": [
          "品牌"
        ]
      },
      {
        "id": "w017",
        "accountId": "adheadline",
        "accountName": "广告头条",
        "title": "营销人的灵感库247期：麦当劳新包装“撞脸”LV，瑞幸×YOYO联名预热",
        "summary": "本周灵感库盘点：麦当劳新包装被指“撞脸”LV；瑞幸与名创优品YOYO联名进入倒计时；黄景瑜海报惊现“三只耳朵”翻车；lululemon×陶身体剧场超品日大片、DQ×Sharpa全球首个机器人餐厅、汉堡王“火焰让一切史诗般壮丽”等案例。",
        "date": "09-05",
        "url": "https://news.qq.com/rain/a/20260905A098Y100",
        "source": "广告头条 / 腾讯新闻",
        "tags": [
          "案例"
        ]
      },
      {
        "id": "w018",
        "accountId": "socialbeta",
        "accountName": "SocialBeta",
        "title": "最火「素人」小玉yuy，成为今年 IP 联名王？",
        "summary": "拆解从小红书手绘走出的素人IP小玉yuy的联名扩张路径：从MEDM、CASETiFY到华为、美图，再到麦当劳、奈雪的茶，背后有名创优品旗下TOP TOY的系统化支撑；商场快闪成“排队王”。",
        "date": "09-04",
        "url": "https://socialbeta.com/article/111338",
        "source": "SocialBeta",
        "tags": [
          "IP",
          "联名"
        ]
      },
      {
        "id": "w019",
        "accountId": "kr36",
        "accountName": "36氪",
        "title": "瑜伽服江湖变局：Alo入华、MAIA ACTIVE突围与lululemon的守成之战",
        "summary": "Alo以“Studio to Street”时尚路线切入并由MiuMiu前高管执掌国际业务；安踏收购后的MAIA ACTIVE提价150%对标中高端引发老用户争议；拆解lululemon真正的护城河——用户群体、生活方式绑定与社群运营的复杂体系。",
        "date": "09-04",
        "url": "https://www.36kr.com/p/3968461247492608",
        "source": "36氪",
        "tags": [
          "行业洞察"
        ]
      },
      {
        "id": "w020",
        "accountId": "duojiao",
        "accountName": "剁椒Spicy",
        "title": "比音勒芬电商收入翻倍：关闭小红书，重做抖音+得物",
        "summary": "剁椒Spicy拆解比音勒芬半年报：电商收入4.33亿元同比翻倍、毛利率79.61%高于整体；按“守价格/清库存/拉新客”拆分平台功能，但费用与收入同步翻倍，增长仍处投入驱动阶段。",
        "date": "09-04",
        "url": "https://www.huxiu.com/article/4887716.html",
        "source": "虎嗅（摘编自剁椒Spicy）",
        "tags": [
          "电商",
          "复盘"
        ]
      },
      {
        "id": "w021",
        "accountId": "socialbeta",
        "accountName": "SocialBeta",
        "title": "天目里「上什么班」2.0 回归：联合小红书把职场情绪做成生活节",
        "summary": "9 月 3 日至 6 日杭州天目里联合小红书「笑薯」推出 2.0 版本，设拯救班味市集、最废技能大赛、下班派对等板块，把打工情绪转为可参与的活动 IP。",
        "date": "09-03",
        "url": "https://socialbeta.com/campaign/28424",
        "source": "SocialBeta",
        "tags": [
          "线下活动"
        ]
      },
      {
        "accountId": "ebrun",
        "accountName": "亿邦动力",
        "title": "Lazada印尼高端品牌销售额同比增长3倍 护肤引领美妆增长",
        "summary": "2026上半年高端服饰增4倍/家居3倍/电子2.1倍/美妆1.5倍；女性护肤/沐浴身体护理/彩妆/香水全线增长，护肤为最突出品类，与印尼消费信心走弱形成反差。",
        "date": "09-03",
        "url": "https://www.ebrun.com/ebrungo/zb/704215.shtml",
        "source": "亿邦动力",
        "tags": [
          "跨境电商",
          "美妆"
        ],
        "id": "w022"
      },
      {
        "id": "w023",
        "accountId": "adheadline",
        "accountName": "广告头条",
        "title": "苏泊尔纯钛炒锅「6C 爆品涌现」实战：从 AI 隐形到品类第一的 GEO 营销",
        "summary": "以「线下造问题、线上接答案」双闭环打法，1 万元 GEO 内容+一场快闪将品牌首推率从不足 30% 推至 80%，斩获 Future Marketing 未来营销大奖。",
        "date": "09-02",
        "url": "https://www.toutiao.com/article/7680846497696645682/",
        "source": "广告头条 / 美通社",
        "tags": [
          "GEO营销"
        ]
      },
      {
        "accountId": "ebrun",
        "accountName": "亿邦动力",
        "title": "橘朵官宣杨颖Angelababy担任品牌全球代言人",
        "summary": "9/2官宣，Angelababy演绎秋冬四新品缎光唇粉霜/水缎光腮红/好皮霜/好气色面综盘；缎光可可礼盒限量1180份+亲选星品套组预约爆满。",
        "date": "09-02",
        "url": "https://www.ebrun.com/20260902/704157.shtml",
        "source": "亿邦动力",
        "tags": [
          "代言",
          "美妆"
        ],
        "id": "w024"
      }
    ]
  },
  "celebrityEndorsements": [
    {
      "id": "e001",
      "brand": "Alo（美国高端运动生活方式品牌）",
      "celeb": "王一博",
      "region": "内地",
      "title": "全球品牌大使（Alo入华后首位艺人）",
      "date": "09-08",
      "action": "9月8日无预热直接官宣：官宣前已为其85号GT3赛车定制专属涂装与独立P房；官宣大片演绎棒球帽、Alpha Shell夹克、Co-Op长裤及Voyage Duffle手袋等单品；品牌副总裁与创意总监8月底专程赴上海对接。",
      "volume": "王一博商务总数刷新至34个且全部为顶格title（22个全球代言人、4个首席代言人）；官宣当天国内外同步报道，WWD等国际时尚媒体跟进；China GT上海站期间嘉定9家重点商业体营收9900万元同比+22.32%。",
      "posVoice": "“34个全高title、续约率约90%（行业平均30%）”被视为商务标杆；赛车手身份与wellness理念契合度获好评。",
      "posVoiceSource": "腾讯新闻",
      "posVoiceUrl": "https://new.qq.com/rain/a/20260909A02YE500",
      "negVoice": "本期未见显著负面。",
      "negVoiceSource": "腾讯新闻",
      "negVoiceUrl": "https://news.qq.com/rain/a/20260908A05KKA00",
      "source": "腾讯新闻·营销日报",
      "url": "https://news.qq.com/rain/a/20260908A05KKA00"
    },
    {
      "id": "e002",
      "brand": "COS（伦敦时装品牌）",
      "celeb": "蔡徐坤",
      "region": "内地",
      "title": "全球品牌代言人（COS中国市场首位全球级代言人）",
      "date": "09-08",
      "action": "9月8日宣布出任品牌最新全球代言人，官宣大片身着COS 2026秋冬系列，以利落廓形、精准剪裁与克制色彩语言诠释品牌现代风格；2026年以来其已先后拿下TASAKI、索康尼、丸美、起亚、GROTTO等十余个品牌代言。",
      "volume": "时尚日报（商派ShopeX）、SocialBeta等多家营销媒体当日收录；COS首次在中国市场启用全球级别品牌代言人。",
      "posVoice": "“风格并不来自某个既定答案，而是在持续探索与创作中逐渐形成”（本人声明）获时尚圈好评。",
      "posVoiceSource": "商派ShopeX·时尚日报",
      "posVoiceUrl": "https://www.shopex.cn/news/36226",
      "negVoice": "本期未见显著负面（部分讨论聚焦其今年代言密度较高）。",
      "negVoiceSource": "商派ShopeX·时尚日报",
      "negVoiceUrl": "https://www.shopex.cn/news/36226",
      "source": "商派ShopeX·时尚日报",
      "url": "https://www.shopex.cn/news/36226"
    },
    {
      "id": "e003",
      "brand": "Dolce&Gabbana",
      "celeb": "崔秀彬 Soobin（TXT队长）",
      "region": "海外",
      "title": "全球品牌大使",
      "date": "09-08",
      "action": "9月8日官宣：品牌发布其演绎D&G 2026秋冬男装系列的形象大片；其6月曾受邀出席米兰时装周D&G 2027春夏男装秀，合作早有铺垫。",
      "volume": "品牌官方声明称“基于创造力、个性与自我表达的共同价值观”；K-pop粉丝圈层扩散迅速，时尚媒体报道跟进。",
      "posVoice": "“He possesses the talent, individuality, and global appeal that align with the brand’s identity”（品牌官方声明）。",
      "posVoiceSource": "Shining Awards",
      "posVoiceUrl": "https://shiningawards.com/txts-soobin-named-global-ambassador-for-dolcegabbana-showcases-2026-fall-winter",
      "negVoice": "本期未见显著负面。",
      "negVoiceSource": "Shining Awards",
      "negVoiceUrl": "https://shiningawards.com/txts-soobin-named-global-ambassador-for-dolcegabbana-showcases-2026-fall-winter",
      "source": "Shining Awards",
      "url": "https://shiningawards.com/txts-soobin-named-global-ambassador-for-dolcegabbana-showcases-2026-fall-winter"
    },
    {
      "id": "e004",
      "brand": "TRIP（英国气泡饮品牌）",
      "celeb": "Kendall Jenner",
      "region": "海外",
      "title": "全球品牌大使 + 少数股权持有人",
      "date": "09-08",
      "action": "9月8日宣布出任全球品牌大使并持有 undisclosed 少数股权；将主导野草莓口味新品全球campaign；TRIP为英国增长最快碳酸软饮、美国增长最快气泡饮品牌，2026年营收预计达2亿美元。",
      "volume": "HELLO!等欧美名人媒体广泛报道；TRIP已有Joe Jonas、Ashley Graham、Paul Wesley、Alessandra Ambrosio等大使阵容，Kendall入股为最高级别合作。",
      "posVoice": "“I’ve been obsessed with TRIP for a while… my favourite way to stay grounded”（本人声明）。",
      "posVoiceSource": "HELLO! Magazine",
      "posVoiceUrl": "https://www.hellomagazine.com/celebrities/922240/kendall-jenner-trip-drinks",
      "negVoice": "本期未见显著负面。",
      "negVoiceSource": "HELLO! Magazine",
      "negVoiceUrl": "https://www.hellomagazine.com/celebrities/922240/kendall-jenner-trip-drinks",
      "source": "HELLO! Magazine",
      "url": "https://www.hellomagazine.com/celebrities/922240/kendall-jenner-trip-drinks"
    },
    {
      "id": "e005",
      "brand": "蕾蒙威 Raymond Weil",
      "celeb": "姜文、周韵",
      "region": "内地",
      "title": "品牌大中华地区形象代言人（双代言）",
      "date": "09-08",
      "action": "9月8日上海浦东丽思卡尔顿举行“全新广告形象揭幕仪式暨佳茗系列上市庆典”：官宣姜文、周韵担任品牌大中华地区形象代言人，同步推出佳茗系列腕表与经典大师月相腕表，共庆品牌创立三十五周年（1976年日内瓦创立）。",
      "volume": "瑞士驻沪总领事、品牌全球总裁Olivier Bernheim及捷成洋行高管出席；钟表与生活方式媒体报道跟进。",
      "posVoice": "“从来佳茗似佳人——周韵与佳茗系列腕表相映生辉”获现场媒体好评；姜文夫妇首次以双代言形式合体代言腕表品牌被赞“调性匹配”。",
      "posVoiceSource": "手表网",
      "posVoiceUrl": "https://www.sbiao.net/a44998",
      "negVoice": "本期未见显著负面。",
      "negVoiceSource": "手表网",
      "negVoiceUrl": "https://www.sbiao.net/a44998",
      "source": "手表网",
      "url": "https://www.sbiao.net/a44998"
    },
    {
      "id": "e006",
      "brand": "立白",
      "celeb": "迪丽热巴",
      "region": "内地",
      "title": "品牌全球代言人（品牌史上首位）",
      "date": "09-07",
      "action": "迪丽热巴7月由品牌代言人升级为立白发展史上首位“品牌全球代言人”；9月9感恩欢购节期间亲临天猫超品日直播间，五大话题登微博热搜与文娱榜，TVC首登央视核心时段，全域总曝光超100亿人次。",
      "volume": "#迪丽热巴直播#话题阅读量2300万；欢购节天猫超品日全场销售超额突破100%、斩获洗护品类TOP1、新增会员超120万。",
      "posVoice": "“家清品牌首个全球代言人给到顶流，从产品出海走向品牌出海的关键拼图”获营销圈好评。",
      "posVoiceSource": "广州日报（今日头条）",
      "posVoiceUrl": "https://www.toutiao.com/article/7682687277239370281",
      "negVoice": "本期未见显著负面。",
      "negVoiceSource": "新浪新闻",
      "negVoiceUrl": "https://news.sina.cn/2026-09-07/detail-iniqyzxs9576991.d.html",
      "source": "新浪新闻",
      "url": "https://news.sina.cn/2026-09-07/detail-iniqyzxs9576991.d.html"
    },
    {
      "id": "e007",
      "brand": "拓路者 PioneerCamp",
      "celeb": "鹿晗",
      "region": "内地",
      "title": "品牌全球代言人（品牌23年来首位）",
      "date": "09-07",
      "action": "官宣同款“朱雀2.0”“灵鹿”冲锋衣多色断码；晒单与山系穿搭笔记集中爆发，社媒声量延续。",
      "volume": "官宣次日小红书同款穿搭笔记井喷；“国货户外品牌23年首位全球代言人”讨论度延续。",
      "posVoice": "“国货户外迎来顶流时代”获行业好评。",
      "posVoiceSource": "微博官宣博文",
      "posVoiceUrl": "https://weibo.com/6897606002/5340505682215940",
      "negVoice": "本期未见显著负面。",
      "negVoiceSource": "微博官宣博文",
      "negVoiceUrl": "https://weibo.com/6897606002/5340505682215940",
      "source": "微博",
      "url": "https://weibo.com/6897606002/5340505682215940"
    },
    {
      "id": "e008",
      "brand": "Burberry 博柏利",
      "celeb": "全智贤 Jun Ji-hyun",
      "region": "海外",
      "title": "全球品牌大使（韩国首位女性大使）",
      "date": "09-07",
      "action": "Burberry官宣全智贤为全球品牌大使，为品牌在韩国的首位女性大使；官宣形象物料同步释出。",
      "volume": "时尚媒体与韩流圈层广泛报道，被视为Burberry深耕韩国市场信号。",
      "posVoice": "“气质与英伦 heritage 完美契合”获粉丝与时尚媒体好评。",
      "posVoiceSource": "搜狐时尚",
      "posVoiceUrl": "https://m.sohu.com/a/1072156001_467279",
      "negVoice": "本期未见显著负面。",
      "negVoiceSource": "搜狐时尚",
      "negVoiceUrl": "https://m.sohu.com/a/1072156001_467279",
      "source": "搜狐时尚",
      "url": "https://m.sohu.com/a/1072156001_467279"
    },
    {
      "id": "e009",
      "brand": "李宁",
      "celeb": "斯蒂芬·库里 Stephen Curry",
      "region": "海外",
      "title": "10年签名鞋长约（与Under Armour分手后转投）",
      "date": "09-06",
      "action": "据SI报道，库里与李宁签下10年签名鞋长约，成为其离开Under Armour后最重要的球鞋合约；李宁加速全球化篮球资源布局。",
      "volume": "海外球鞋媒体与国内体育圈高度关注；被视为中国品牌签下的最高规格NBA现役球星长约之一。",
      "posVoice": "“李宁全球化里程碑”获行业好评。",
      "posVoiceSource": "Sports Illustrated（SI）",
      "posVoiceUrl": "https://www.si.com/fannation/sneakers/news/predicting-next-10-nba-players-to-get-signature-sneakers",
      "negVoice": "本期未见显著负面。",
      "negVoiceSource": "Sports Illustrated（SI）",
      "negVoiceUrl": "https://www.si.com/fannation/sneakers/news/predicting-next-10-nba-players-to-get-signature-sneakers",
      "source": "Sports Illustrated（SI）",
      "url": "https://www.si.com/fannation/sneakers/news/predicting-next-10-nba-players-to-get-signature-sneakers"
    },
    {
      "id": "e010",
      "brand": "安踏",
      "celeb": "严子怡",
      "region": "内地",
      "title": "安踏品牌代言人（赛前官宣）",
      "date": "09-05",
      "action": "18岁标枪新星严子怡布鲁塞尔钻石联赛总决赛68.42米夺冠并破赛会纪录、实现五连冠；赛前安踏官宣其为品牌代言人并发布定制标枪战靴新配色。",
      "volume": "夺冠话题带动代言物料传播；“新生代运动员矩阵”打法获行业关注。",
      "posVoice": "“田径新生代+专业装备叙事”获体育营销圈好评。",
      "posVoiceSource": "北晚在线（网易号）",
      "posVoiceUrl": "https://www.163.com/dy/article/L65P4ADC0514TTKN.html",
      "negVoice": "本期未见显著负面。",
      "negVoiceSource": "北晚在线（网易号）",
      "negVoiceUrl": "https://www.163.com/dy/article/L65P4ADC0514TTKN.html",
      "source": "北晚在线（网易号）",
      "url": "https://www.163.com/dy/article/L65P4ADC0514TTKN.html"
    },
    {
      "id": "e011",
      "brand": "FILA斐乐",
      "celeb": "王安宇",
      "region": "内地",
      "title": "FILA品牌代言人（WAY!你好!）",
      "date": "09-04",
      "action": "官宣王安宇为FILA品牌代言人，物料以“WAY!你好!”为主题展开。",
      "volume": "官宣当日微博开屏与热搜联动，粉丝向传播为主。",
      "posVoice": "“运动时尚调性适配”获粉丝好评。",
      "posVoiceSource": "网易（163号外）",
      "posVoiceUrl": "https://www.163.com/dy/article/L68JIKDS05502ZGU.html",
      "negVoice": "本期未见显著负面。",
      "negVoiceSource": "网易（163号外）",
      "negVoiceUrl": "https://www.163.com/dy/article/L68JIKDS05502ZGU.html",
      "source": "网易（163号外）",
      "url": "https://www.163.com/dy/article/L68JIKDS05502ZGU.html"
    },
    {
      "id": "e012",
      "brand": "三生花（百雀羚旗下）",
      "celeb": "李宇春",
      "region": "内地",
      "title": "品牌全球代言人（万物逢春，我自成花）",
      "date": "09-04",
      "action": "官宣“万物逢春，我自成花”主题，李宇春出任三生花品牌全球代言人。",
      "volume": "国货美妆+顶流歌手组合获行业媒体复盘；另有李宇春×名创优品CHOUCHOU新IP共创（自然收集册系列盲盒，主话题1.8亿浏览量、8城11店售罄）。",
      "posVoice": "“明星深度共创品牌自有IP”被视为头部消费品牌与顶流合作的新方向。",
      "posVoiceSource": "广告门",
      "posVoiceUrl": "https://www.adquan.com/article/363306",
      "negVoice": "本期未见显著负面。",
      "negVoiceSource": "网易（163号外）",
      "negVoiceUrl": "https://www.163.com/dy/article/L68JIKDS05502ZGU.html",
      "source": "网易（163号外）",
      "url": "https://www.163.com/dy/article/L68JIKDS05502ZGU.html"
    }
  ],
  "dataSources": [
    {
      "platform": "微博",
      "icon": "🔴",
      "metric": "热搜榜单 / 品牌声量",
      "status": "partial",
      "current": "八爪鱼已连接，模板523任务运行完成但返回0行（微博账号未在云配置登录）",
      "target": "在八爪鱼云账号配置微博登录后即可取真实榜",
      "connected": true,
      "note": "9月9日实测：八爪鱼连接器已连接，模板523（微博-热搜榜）任务 weibo-hot-20260909 正常运行至 completed 但采集0行——需在八爪鱼云账号配置微博登录后才能取真实榜；已按预案改用聚合站 toupage.com 实时快照（09-09 07:50）获取微博Top50/抖音Top30，话题页直链 s.weibo.com / douyin.com/search 均可跳转核验。"
    },
    {
      "platform": "抖音",
      "icon": "🎵",
      "metric": "热点榜单 / 品牌声量",
      "status": "estimated",
      "current": "八爪鱼已连接，但模板库暂无抖音云端热榜模板",
      "target": "八爪鱼客户端自建抖音热榜模板 + 抖音登录 / 巨量算数",
      "connected": true,
      "note": "9月7日复查模板库：仍无抖音云端热榜模板（仅有快手/百度/微博等榜单模板），需在八爪鱼客户端自建并配置登录；当前为公开报道聚合"
    },
    {
      "platform": "小红书",
      "icon": "📕",
      "metric": "热点榜单 / 品牌声量",
      "status": "estimated",
      "current": "八爪鱼已连接，但模板库暂无小红书云端热榜模板",
      "target": "八爪鱼客户端自建小红书热榜模板 + 小红书登录",
      "connected": true,
      "note": "9月7日复查模板库：仍无小红书云端热榜模板，需在八爪鱼客户端自建并配置登录；当前为公开报道聚合"
    },
    {
      "platform": "天猫/淘宝",
      "icon": "🛒",
      "metric": "销售转化 / GMV",
      "status": "missing",
      "current": "财报与行业榜单估算（看板已明确标注，非平台官方数据）",
      "target": "淘宝开放平台TOP（需商家API Key）/ 生意参谋",
      "connected": false,
      "note": "销售转化需商家授权，无公开数据源；按用户要求暂保持「财报/榜单估算」并明确标注"
    }
  ]
};
