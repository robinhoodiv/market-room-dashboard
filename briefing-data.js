window.marketBriefing={
  updatedAt:'4 Oct 2026 · 18:30 HKT',
  asOf:'Latest completed sessions through Friday, 2 October 2026 · crypto snapshot Sunday, 4 October',
  headline:'Weak US hiring revived rate relief, but the week still punished bonds, gold and most non-US equities.',
  summary:[
    'US markets ended Friday higher after September payroll growth slowed to 29,000, but the weekly picture stayed mixed: the Nasdaq gained 0.5%, while the S&P 500 fell 0.3% and the Dow lost 1.3%.',
    'The US 10-year Treasury yield finished near 5.28%, about 11 basis points above the prior Friday, after briefly reaching roughly 5.34%. The weak jobs report reduced the market-implied chance of an October Fed hike, but did not erase the weekly bond selloff.',
    'Japan outperformed with a 2.9% gain, while the FTSE 100, Hang Seng and Nifty 50 each fell more than 2%. Gold lost 3.5%, WTI fell 1.2%, and Bitcoin was roughly flat on the Friday weekly fixing before trading near $85,300 by Sunday evening.'
  ],
  week:[
    {label:'S&P 500',value:'−0.3%',tone:'down'},
    {label:'Nasdaq',value:'+0.5%',tone:'up'},
    {label:'Dow',value:'−1.3%',tone:'down'},
    {label:'Russell 2000',value:'−0.2%',tone:'down'},
    {label:'FTSE 100',value:'−2.2%',tone:'down'},
    {label:'Nikkei 225',value:'+2.9%',tone:'up'},
    {label:'Hang Seng',value:'−2.2%',tone:'down'},
    {label:'Nifty 50',value:'−3.1%',tone:'down'},
    {label:'US 10Y yield',value:'5.28% · +11 bp',tone:'up'},
    {label:'WTI crude',value:'−1.2%',tone:'down'},
    {label:'Gold',value:'−3.5%',tone:'down'},
    {label:'Bitcoin',value:'≈ +0.4%',tone:'up'}
  ],
  drivers:[
    {asset:'Equities',move:'Nasdaq +0.5% · S&P 500 −0.3% · Nikkei +2.9%',why:'Large-cap technology held up better than the broader US market, while Friday’s weak payroll report reduced fears of another near-term Fed hike and supported a late rally. Japan benefited from semiconductor strength; Europe and much of Asia lagged.',watch:'ISM services Monday, FOMC minutes Wednesday, jobless claims Thursday and whether gains broaden beyond US megacap technology.',source:'AP and FactSet weekly closes',url:'https://apnews.com/article/48e9066481cba91a5d7c6688aa74a5cd'},
    {asset:'FX',move:'Dollar higher for a third week · yen firmer Friday',why:'Elevated US yields supported the dollar over the week. The yen strengthened on Friday after Tokyo inflation reached 2.7%, reinforcing the case for a Bank of Japan hike, while softer US payrolls reduced Fed-hike expectations.',watch:'FOMC minutes, US services data, Japanese wage and current-account data, and any official reaction to yen weakness.',source:'Reuters global markets wrap',url:'https://ae.marketscreener.com/news/global-shares-gain-bonds-supported-as-oil-drops-jobs-data-misses-expectations-ce785ddad180ff27'},
    {asset:'Commodities',move:'Gold −3.5% · WTI −1.2%',why:'A stronger dollar and elevated Treasury yields weighed on gold. Oil eased as recovering Middle East supply and discussion of an EU diesel-stock release offset continuing geopolitical risk. These factors coincided with the moves and should not be read as sole causes.',watch:'Middle East export flows, US crude inventories, the dollar and yields, plus any signal on strategic-product stock releases.',source:'Reuters gold and oil coverage',url:'https://www.marketscreener.com/news/gold-heads-for-weekly-drop-as-strong-dollar-elevated-treasury-yields-weigh-ce785ddbd98df120'},
    {asset:'Fixed income',move:'US 10Y 5.28% · about +11 bp',why:'Firm inflation concerns and strong manufacturing-price signals pushed yields higher early in the week. Friday’s weak payroll report lowered the perceived probability of an October Fed hike and pulled yields off their highs, but the 10-year still ended above the prior Friday.',watch:'ISM services prices, the September FOMC minutes and weekly jobless claims for confirmation that labour demand is cooling.',source:'Federal Reserve H.15 and FactSet',url:'https://www.federalreserve.gov/releases/h15/'},
    {asset:'Crypto',move:'Fri: BTC ≈ +0.4% week · Sun: BTC ≈ $85.3k, ETH ≈ $2.70k',why:'Bitcoin held roughly flat on the Friday weekly fixing despite higher Treasury yields, while Ether underperformed. Both traded modestly higher over the weekend. Spot-ETF flows were mixed late in the week, so these relationships are observations rather than proven causes.',watch:'Monday spot-ETF flows, the US dollar, ISM services and whether Bitcoin holds above the mid-$84,000 area.',source:'FactSet Friday fixing, InflowScan and live crypto feed',url:'https://inflowscan.com/brief/eod/2026-10-02-btc-closes-84-474-0-4-eth-fails-to-hold-2-700-1-5-sol'}
  ],
  calendar:[
    {day:'Mon',event:'US ISM services for September',impact:'Growth, services inflation, yields and the dollar'},
    {day:'Tue',event:'US trade balance; euro-area retail sales',impact:'Global-demand signals and currency markets'},
    {day:'Wed',event:'September FOMC meeting minutes',impact:'Policy-rate path, bonds, equities and FX'},
    {day:'Thu',event:'US initial jobless claims',impact:'Labour-market confirmation after weak payrolls'},
    {day:'Fri',event:'US Michigan consumer sentiment, preliminary',impact:'Household confidence and inflation expectations'}
  ],
  methodology:'Weekly market moves compare the Friday close with the prior Friday. The 10-year value uses the Friday FactSet close because the Federal Reserve H.15 page available at publication ran through Thursday; the basis-point change is versus the prior Friday. Crypto trades continuously: the scorecard uses the Friday fixing, while the crypto driver also includes a Sunday 18:30 HKT snapshot; figures may differ by provider and fixing time. Values are rounded; displayed market widgets may be delayed or use exchange-traded proxies where direct index data is unavailable.',
  sources:[
    {label:'AP · US index closes and week changes',url:'https://apnews.com/article/48e9066481cba91a5d7c6688aa74a5cd'},
    {label:'Reuters · Friday global markets',url:'https://ae.marketscreener.com/news/global-shares-gain-bonds-supported-as-oil-drops-jobs-data-misses-expectations-ce785ddad180ff27'},
    {label:'Reuters · gold weekly close',url:'https://www.marketscreener.com/news/gold-heads-for-weekly-drop-as-strong-dollar-elevated-treasury-yields-weigh-ce785ddbd98df120'},
    {label:'Reuters · oil market update',url:'https://uk.marketscreener.com/news/oil-rises-slightly-as-market-weighs-mixed-supply-signals-ce785ddadd8ff526'},
    {label:'FactSet · weekly cross-asset closes',url:'https://rubiewealth.com/weekly-market-summary-october-2-2026/'},
    {label:'Federal Reserve · H.15 daily rates',url:'https://www.federalreserve.gov/releases/h15/'},
    {label:'New York Fed · October economic calendar',url:'https://www.newyorkfed.org/research/calendars/i-oct26.html'},
    {label:'Federal Reserve · 2026 FOMC calendar',url:'https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm'},
    {label:'InflowScan · crypto close and ETF flows',url:'https://inflowscan.com/brief/eod/2026-10-02-btc-closes-84-474-0-4-eth-fails-to-hold-2-700-1-5-sol'},
    {label:'TradingView · live BTC/USD reference',url:'https://www.tradingview.com/symbols/BTCUSD/'}
  ]
};
