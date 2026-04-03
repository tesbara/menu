// テスラ リンク集 定義ファイル
// id:       一意のID (localStorage で使用)
// name:     表示名
// icon:     アイコン画像パス
// url:      通常モードの URL
// category: 種別 ("video", "google", "tesla", "other")
// fs:       全画面有効フラグ ("11"=両方, "10"=全画面のみ, "01"=通常のみ)
var SITES = [
	// ---- 動画 ----
	{ id: "netflix",      name: "NETFLIX",            icon: "icon/NETFLIX.png",            url: "https://www.netflix.com/jp/",                                                                     category: "video", fs: "11" },
	{ id: "prime-video",  name: "Amazon prime video", icon: "icon/Amazon_prime_video.png", url: "https://www.amazon.co.jp/gp/video/storefront/ref=sv_atv_logo?node=2351649051",                    category: "video", fs: "11" },
	{ id: "youtube",      name: "YouTube",            icon: "icon/YouTube.png",            url: "https://www.youtube.com/",                                                                        category: "video", fs: "10" },
	{ id: "newspicks",    name: "NewsPicks",          icon: "icon/NewsPicks.png",          url: "https://newspicks.com/",                                                                          category: "video", fs: "11" },
	{ id: "tver",         name: "TVer",               icon: "icon/TVer.png",               url: "https://tver.jp/",                                                                                category: "video", fs: "10" },
	{ id: "nhk-one",      name: "NHK ONE",            icon: "icon/NHK_ONE.png",            url: "https://www.web.nhk/",                                                                            category: "video", fs: "10" },
	{ id: "u-next",       name: "U-NEXT",             icon: "icon/U-NEXT.png",             url: "https://video.unext.jp/",                                                                         category: "video", fs: "10" },
	{ id: "hulu",         name: "Hulu",               icon: "icon/Hulu.png",               url: "https://www.hulu.jp/",                                                                            category: "video", fs: "10" },
	{ id: "disney-plus",  name: "Disney+",            icon: "icon/Disney_plus.png",        url: "https://disneyplus.disney.co.jp/",                                                                category: "video", fs: "10" },
	{ id: "lemino",       name: "Lemino",             icon: "icon/Lemino.png",             url: "https://teaser.lemino.docomo.ne.jp/",                                                             category: "video", fs: "10" },
	{ id: "fod",          name: "FOD",                icon: "icon/FOD.png",                url: "https://fod.fujitv.co.jp/s/",                                                                     category: "video", fs: "10" },
	{ id: "dazn",         name: "DAZN",               icon: "icon/DAZN.png",               url: "https://www.dazn.com/ja-JP/home",                                                                 category: "video", fs: "10" },
	{ id: "danimestore",  name: "dアニメストア",      icon: "icon/dAnimeStore.png",        url: "https://anime.dmkt-sp.jp/animestore/tp",                                                          category: "video", fs: "10" },
	{ id: "niconico",     name: "ニコニコ",           icon: "icon/niconico.png",           url: "https://www.nicovideo.jp/",                                                                       category: "video", fs: "10" },
	{ id: "dmm-tv",       name: "DMM TV",             icon: "icon/DMM_TV.png",             url: "https://tv.dmm.com/vod/",                                                                         category: "video", fs: "10" },
	{ id: "wowow",        name: "WOWOW",              icon: "icon/WOWOW.png",              url: "https://wod.wowow.co.jp/",                                                                        category: "video", fs: "10" },
	{ id: "abema",        name: "ABEMA",              icon: "icon/Abema-TV.png",           url: "https://abema.tv/",                                                                               category: "video", fs: "10" },
	{ id: "tiktok",       name: "TikTok",             icon: "icon/TikTok.png",             url: "https://www.tiktok.com/ja-JP/",                                                                   category: "video", fs: "10" },
	{ id: "twitch",       name: "Twitch",             icon: "icon/Twitch.png",             url: "https://www.twitch.tv/",                                                                          category: "video", fs: "10" },
	{ id: "rakuten-tv",   name: "楽天TV",             icon: "icon/RakutenTV.png",          url: "https://tv.rakuten.co.jp/",                                                                       category: "video", fs: "10" },

	// ---- Google ----
	{ id: "google-news",     name: "Google ニュース",   icon: "icon/GoogleNews.png",     url: "https://news.google.com/",              category: "google", fs: "01" },
	{ id: "google-calendar", name: "Google カレンダー", icon: "icon/GoogleCalendar.png", url: "https://calendar.google.com/calendar/",  category: "google", fs: "01" },
	{ id: "google-map",      name: "Google マップ",     icon: "icon/GoogleMap.png",      url: "https://www.google.co.jp/maps",          category: "google", fs: "01" },
	{ id: "google-keep",     name: "Google Keep",       icon: "icon/GoogleKeep.png",     url: "https://keep.google.com/",               category: "google", fs: "01" },
	{ id: "google-search",   name: "Google",            icon: "icon/Google.png",         url: "https://www.google.com/?hl=ja",          category: "google", fs: "10" },

	// ---- Tesla ----
	{ id: "tesla-mirror",      name: "TeslaMirror 使用手順",         icon: "icon/TeslaMirror.png",  url: "TeslaMirror.html",                                          category: "tesla", fs: "01" },
	{ id: "tesor",             name: "Tesor 使用手順",               icon: "icon/Tesor.png",        url: "Tesor.html",                                                category: "tesla", fs: "01" },
	{ id: "tesla-access",      name: "アクセス | Tesla",              icon: "icon/TeslaAccess.png",  url: "https://www.tesla.com/ja_JP/findus?v=2&bounds=41.906204413547925%2C141.78113097528475%2C22.618881950094654%2C120.73132628778475&zoom=6&filters=store%2Cservice%2Csupercharger%2Cbodyshop", category: "tesla", fs: "01" },
	{ id: "not-a-tesla-app",   name: "Tesla Software Updates",       icon: "icon/NotATeslaApp.png", url: "https://www.notateslaapp.com/ja/",                          category: "tesla", fs: "01" },
	{ id: "teslafi",           name: "TeslaFi Software Tracker",     icon: "icon/TeslaFi.png",      url: "https://teslafi.com/firmware",                              category: "tesla", fs: "01" },
	{ id: "tesla-top",         name: "テスラ",                        icon: "icon/Tesla.png",        url: "https://www.tesla.com/ja_jp/",                              category: "tesla", fs: "01" },
	{ id: "meet-model3",       name: "Meet Your Model 3",            icon: "icon/Tesla.png",        url: "https://www.tesla.com/jp/support/meet-your-tesla/model-3",  category: "tesla", fs: "10" },
	{ id: "model3-videos",     name: "Model 3 サポート ビデオ",      icon: "icon/Tesla.png",        url: "https://www.tesla.com/jp/support/model-3-videos",           category: "tesla", fs: "10" },
	{ id: "model3-manual",     name: "Model 3 オーナーズマニュアル", icon: "icon/Tesla.png",        url: "https://www.tesla.com/ownersmanual/2017_2023_model3/ja_jp/", category: "tesla", fs: "11" },

	// ---- その他 ----
	{ id: "yahoo-finance",  name: "Tesla | Yahoo! finance", icon: "icon/YahooFinance.png",     url: "https://finance.yahoo.com/quote/TSLA",                      category: "other", fs: "01" },
	{ id: "investing",      name: "Tesla | Investing.com",  icon: "icon/Investing.png",        url: "https://jp.investing.com/equities/tesla-motors",             category: "other", fs: "01" },
	{ id: "yahoo-news",     name: "Yahoo! ニュース",        icon: "icon/YahooNews.png",        url: "https://news.yahoo.co.jp/",                                 category: "other", fs: "01" },
	{ id: "spacex",         name: "SpaceX",                 icon: "icon/SpaceX.png",           url: "https://www.spacex.com/",                                   category: "other", fs: "11" },
	{ id: "tesla-screens",  name: "TESLA SCREENS",          icon: "icon/Back_to_the_Future.png", url: "http://www.kinetic.com/teslascreens/",                   category: "other", fs: "10" },
	{ id: "browser-games",  name: "Browser games",          icon: "icon/Browser_games.png",    url: "http://www.asahi-net.or.jp/~cs8k-cyu/browser.html",         category: "other", fs: "10" },
];
