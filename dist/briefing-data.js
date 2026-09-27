window.marketBriefing={
  updatedAt:'27 Sep 2026 · 18:30 HKT',
  asOf:'Latest completed sessions through Friday, 25 September 2026',
  headline:'Tech and Japan advanced even as Treasury yields surged and oil reversed.',
  summary:[
    'US equities finished higher, led by the Nasdaq’s 2.1% gain, while the Russell 2000 fell 0.8%. The split points to narrow large-cap technology leadership rather than a broad risk rally.',
    'The US 10-year Treasury yield rose about 17 basis points to 5.17% after strong activity data reinforced higher-rate expectations. Equities absorbed the selloff, but duration-sensitive assets remain exposed.',
    'WTI crude fell 7.9% as hopes for US-Iran progress reduced the immediate supply-risk premium. Japan and Europe gained, Hong Kong fell, and crypto advanced despite the rise in yields.'
  ],
  week:[
    {label:'S&P 500',value:'+1.2%',tone:'up'},
    {label:'Nasdaq',value:'+2.1%',tone:'up'},
    {label:'Dow',value:'+0.3%',tone:'up'},
    {label:'Russell 2000',value:'−0.8%',tone:'down'},
    {label:'STOXX 600',value:'+0.8%',tone:'up'},
    {label:'FTSE 100',value:'+0.3%',tone:'up'},
    {label:'Nikkei 225',value:'+2.1%',tone:'up'},
    {label:'Hang Seng',value:'−1.0%',tone:'down'},
    {label:'US 10Y yield',value:'5.17% · +17 bp',tone:'up'},
    {label:'WTI crude',value:'−7.9%',tone:'down'},
    {label:'Bitcoin',value:'≈ +5.0%',tone:'up'},
    {label:'Ether',value:'≈ +2.0%',tone:'up'}
  ],
  drivers:[
    {asset:'Equities',move:'US tech-led · Japan stronger · Hong Kong weaker',why:'Falling oil prices relieved part of the inflation pressure and semiconductor shares led US and Japanese gains. Small caps lagged as financing costs rose; Hong Kong fell as the Trump-Xi summit produced no clear breakthrough.',watch:'Friday’s US jobs report, whether the 10-year yield holds above 5%, and whether gains broaden beyond large-cap technology.',source:'Reuters global markets wrap',url:'https://www.marketscreener.com/news/stocks-weather-bond-storm-oil-retreats-slightly-ce785adfdd8df527'},
    {asset:'FX',move:'Dollar gained for a second week · yen rebounded Friday',why:'Higher US yields and stronger rate-hike expectations supported the dollar over the week. The yen recovered Friday after US and Japanese officials reiterated the stance behind their July intervention.',watch:'US PCE inflation, payrolls and wages, plus any official response to renewed yen weakness.',source:'Reuters FX close',url:'https://www.kitco.com/news/off-the-wire/2026-09-25/dollar-falls-oil-cools-set-weekly-gain-yen-rallies'},
    {asset:'Commodities',move:'WTI −7.9% week · gold about −2%',why:'Oil’s geopolitical risk premium eased on hopes for US-Iran progress, although physical supply risks remain. Gold faced pressure from a firmer dollar and sharply higher real and nominal yields.',watch:'US-Iran diplomacy, Middle East export flows, US inventories, PCE inflation and whether gold can stabilize near Friday’s close.',source:'Oil weekly close',url:'https://energynow.com/2026/09/oil-ends-week-lower-as-u-s-iran-truce-hopes-hit-wti-while-middle-east-supply-risks-keep-brent-above-100/'},
    {asset:'Fixed income',move:'US 10Y 5.17% · roughly +17 bp',why:'Stronger business activity and persistent inflation risk pushed investors toward a higher-for-longer rate path. The 10-year briefly reached about 5.22%, producing a sharp weekly loss for longer-duration bonds.',watch:'PCE inflation Wednesday, ISM manufacturing Thursday and payrolls, unemployment and wage growth Friday.',source:'Federal Reserve H.15 rates',url:'https://www.federalreserve.gov/releases/h15/'},
    {asset:'Crypto',move:'Bitcoin ≈ +5% · Ether ≈ +2%',why:'Crypto finished higher alongside renewed ETF demand and supportive US regulatory sentiment. Those factors coincided with the gains, but do not prove causation, and rising Treasury yields remain a headwind.',watch:'Weekend follow-through, spot ETF flows, the US jobs report and whether Bitcoin can hold above the week’s breakout area.',source:'Friday crypto market update',url:'https://ng.investing.com/news/cryptocurrency-news/bitcoin-pauses-near-84k-with-focus-on-rate-jitters-bitget-hack-2709156'}
  ],
  calendar:[
    {day:'Tue',event:'US JOLTS job openings',impact:'Labour demand, yields and the dollar'},
    {day:'Wed',event:'US ADP payrolls, PCE inflation and Q2 GDP revision',impact:'Fed expectations across every asset class'},
    {day:'Thu',event:'US ISM manufacturing and jobless claims',impact:'Growth, pricing pressure and cyclical assets'},
    {day:'Fri',event:'US September employment report',impact:'Payrolls, unemployment and wage growth'},
    {day:'All week',event:'US-Iran diplomacy and Middle East supply headlines',impact:'Oil, inflation, bonds and risk appetite'}
  ],
  methodology:'Weekly equity and commodity moves compare the Friday close with the prior Friday. Crypto figures use comparable Friday observations and are approximate because the market trades continuously. Yield changes are in basis points. Values are rounded and may differ slightly by provider or fixing time.',
  sources:[
    {label:'AP · US index closes',url:'https://www.seattlepi.com/business/how-major-us-stock-indexes-fared-friday-9-25-2026-a22449563'},
    {label:'Reuters · Friday global markets',url:'https://www.marketscreener.com/news/stocks-weather-bond-storm-oil-retreats-slightly-ce785adfdd8df527'},
    {label:'Reuters · Europe weekly performance',url:'https://www.boursorama.com/bourse/actualites/le-stoxx-s-apprete-a-cloturer-la-semaine-en-hausse-30f14661b64ed06070865d444f4514af'},
    {label:'Reuters · Hong Kong close',url:'https://www.indopremier.com/module/newsDetail.php?group_news=IPOTNEWS&halaman=1&jdl=Hong_Kong_stocks_fall_amid_thin_trade__Trump_Xi_summit_in_focus&name=&news_id=244255&q=Hong+Kong+stocks%2C+hang+seng%2C&search=y_general&taging_subtype=Indeks_HSI_Hongkong'},
    {label:'Federal Reserve · H.15 daily rates',url:'https://www.federalreserve.gov/releases/h15/'},
    {label:'BLS · September release schedule',url:'https://www.bls.gov/schedule/2026/09_sched.htm'},
    {label:'BEA · release schedule',url:'https://www.bea.gov/news/schedule'}
  ]
};
