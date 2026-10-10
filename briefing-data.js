window.marketBriefing={
  updatedAt:'10 Oct 2026 · 18:30 HKT',
  asOf:'Latest completed sessions through Friday, 9 October 2026',
  headline:'US large caps reached records, but high yields, volatile oil and crypto weakness kept the risk picture uneven.',
  summary:[
    'The S&P 500 gained 1.2% for the week, the Dow rose 0.9% and the Nasdaq added 0.6%, while the Russell 2000 fell 0.9%. The S&P 500 set a record during the week even as technology shares and bond yields swung sharply.',
    'International equities were mixed but mostly positive: the FTSE 100 rose 0.9%, the Nikkei 225 gained 1.1%, the Hang Seng added 1.0% and the Nifty 50 advanced 0.4%. Germany and France lagged as European fiscal concerns remained in focus.',
    'The US 10-year yield ended near 5.24%, about 5 basis points below the prior Friday after reaching a multi-decade high midweek. Gold rebounded 1.3%, WTI gained about 0.5%, while Bitcoin fell 2.8% and Ether lost 6.8%.'
  ],
  week:[
    {label:'S&P 500',value:'+1.2%',tone:'up'},
    {label:'Nasdaq',value:'+0.6%',tone:'up'},
    {label:'Dow',value:'+0.9%',tone:'up'},
    {label:'Russell 2000',value:'−0.9%',tone:'down'},
    {label:'FTSE 100',value:'+0.9%',tone:'up'},
    {label:'Nikkei 225',value:'+1.1%',tone:'up'},
    {label:'Hang Seng',value:'+1.0%',tone:'up'},
    {label:'Nifty 50',value:'+0.4%',tone:'up'},
    {label:'US 10Y yield',value:'5.24% · −5 bp',tone:'down'},
    {label:'WTI crude',value:'≈ +0.5%',tone:'up'},
    {label:'Gold',value:'+1.3%',tone:'up'},
    {label:'Bitcoin',value:'−2.8%',tone:'down'}
  ],
  drivers:[
    {asset:'Equities',move:'S&P 500 +1.2% · Nasdaq +0.6% · Russell 2000 −0.9%',why:'US large caps finished a record-setting week higher, but the fall in small caps and sharp midweek technology reversal showed narrow and volatile risk appetite. Oil and Treasury yields repeatedly changed direction, while company-specific gains helped the major indexes recover Friday.',watch:'US CPI Wednesday, retail sales and PPI Thursday, industrial production Friday, and earnings from the largest US banks.',source:'AP and FactSet weekly closes',url:'https://apnews.com/article/dafbd0c4037ee10e2a9e305f3cfa8e70'},
    {asset:'FX',move:'Dollar index ≈ +0.3% · EUR/USD ≈ −0.5% · USD/JPY near 158',why:'The dollar advanced for a fourth week as high US yields and resilient economic signals outweighed reduced expectations for an October Fed hike. The euro recorded a fifth weekly decline amid French fiscal concerns, while the yen also weakened over the week.',watch:'US CPI and retail sales, European fiscal headlines, oil prices and any Japanese official response to yen weakness.',source:'Reuters currency-market wrap',url:'https://ca.marketscreener.com/news/euro-falls-set-for-fifth-straight-weekly-drop-as-oil-prices-rise-ce785ddcdb8cff22'},
    {asset:'Commodities',move:'Gold +1.3% · WTI ≈ +0.5% · Brent ≈ +1.6%',why:'Gold recovered from a two-month low as bargain buying and softer late-week yields offset the stronger dollar. Oil finished higher after large swings: threats to Gulf shipping and hurricane-related US production shut-ins supported prices, while signs of Iran talks and renewed Chinese fuel exports limited gains. These factors coincided with the moves and are not proven sole causes.',watch:'Iran and Strait of Hormuz developments, Gulf of Mexico production restoration, US inventories, inflation data and the dollar.',source:'Reuters gold and oil coverage',url:'https://www.marketscreener.com/news/oil-falls-as-trump-comments-on-iran-talks-ease-supply-concerns-ce785ddfdf8af722'},
    {asset:'Fixed income',move:'US 10Y 5.24% · about −5 bp on week',why:'The 10-year yield touched its highest level since 2002 as investors weighed persistent inflation, government borrowing and continued growth. It then retreated from the peak as oil eased and investors reassessed the near-term Fed path, ending modestly below the prior Friday.',watch:'Wednesday CPI, Thursday PPI and retail sales, Treasury supply, and whether inflation expectations rise with energy costs.',source:'AP and weekly yield summary',url:'https://apnews.com/article/5d0f953dbf96febb0690c1aef23fa8a9'},
    {asset:'Crypto',move:'BTC −2.8% to ≈ $82.1k · ETH −6.8% to ≈ $2.49k',why:'Crypto weakened as elevated yields, geopolitical risk and profit-taking reduced demand for higher-risk assets. Two days of heavy US spot-Bitcoin ETF withdrawals and more than $1 billion of leveraged liquidations accompanied the decline, while Ether underperformed.',watch:'US inflation data, spot-ETF flows, Treasury yields and whether Bitcoin holds the $80,000 area.',source:'CoinDesk and Friday crypto close',url:'https://www.coindesk.com/business/2026/10/09/live-updates-xrp-etfs-the-only-ones-in-green-as-btc-eth-zec-funds-post-outflows'}
  ],
  calendar:[
    {day:'Mon',event:'Bank earnings week begins; oil headlines remain live',impact:'Credit quality, trading revenue, inflation risk and market sentiment'},
    {day:'Tue',event:'US existing-home sales for September',impact:'Housing demand under higher mortgage rates'},
    {day:'Wed',event:'US consumer price index for September',impact:'Fed expectations, Treasury yields, the dollar and equities'},
    {day:'Thu',event:'US retail sales, PPI, jobless claims and regional Fed surveys',impact:'Consumer demand, pipeline inflation and growth expectations'},
    {day:'Fri',event:'US industrial production and capacity utilisation',impact:'Manufacturing momentum and rate-sensitive cyclicals'}
  ],
  methodology:'Weekly market moves compare the Friday close with the prior Friday. The US 10-year basis-point move is calculated from rounded weekly closing yields. WTI and Brent percentages use provider five-day changes and are approximate because futures, spot and CFD fixing times differ. Crypto uses a Friday close and trades continuously, so values may differ by venue and cutoff. Figures are rounded; displayed market widgets may be delayed or use exchange-traded proxies where direct index data is unavailable.',
  sources:[
    {label:'AP · US index closes and week changes',url:'https://apnews.com/article/dafbd0c4037ee10e2a9e305f3cfa8e70'},
    {label:'AP · Friday market drivers and Treasury yield',url:'https://apnews.com/article/5d0f953dbf96febb0690c1aef23fa8a9'},
    {label:'Weekly cross-asset closes · 9 October',url:'https://rubiewealth.com/5119-2/'},
    {label:'Reuters · currency-market wrap',url:'https://ca.marketscreener.com/news/euro-falls-set-for-fifth-straight-weekly-drop-as-oil-prices-rise-ce785ddcdb8cff22'},
    {label:'Reuters · gold weekly close',url:'https://www.marketscreener.com/news/gold-hits-one-week-high-heads-for-weekly-gain-on-bargain-hunting-ce785ddcd881f024'},
    {label:'Reuters · oil settlement and weekly direction',url:'https://www.marketscreener.com/news/oil-falls-as-trump-comments-on-iran-talks-ease-supply-concerns-ce785ddfdf8af722'},
    {label:'CoinDesk · crypto prices, ETF flows and liquidations',url:'https://www.coindesk.com/business/2026/10/09/live-updates-xrp-etfs-the-only-ones-in-green-as-btc-eth-zec-funds-post-outflows'},
    {label:'Friday crypto close · BTC and ETH weekly changes',url:'https://www.riotimesonline.com/crypto-markets-bitcoin-majors-friday-october-9-2026'},
    {label:'New York Fed · October economic calendar',url:'https://www.newyorkfed.org/research/calendars/i-oct26.html'},
    {label:'AP · week-ahead inflation, housing and bank earnings',url:'https://apnews.com/article/75c52cd60818e6c8957edfe8f8f535a9'}
  ]
};
