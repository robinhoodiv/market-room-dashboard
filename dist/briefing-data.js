window.marketBriefing={
  updatedAt:'19 Sep 2026 · 18:40 HKT',
  asOf:'Latest completed sessions through Friday, 18 September 2026',
  headline:'Rates stayed high, oil reversed, and market leadership narrowed.',
  summary:[
    'The Fed raised its target range by 25 basis points to 3.75%–4.00%, while the US 10-year Treasury revisited 5%. Japan also raised rates, keeping global policy firmly restrictive.',
    'US technology and crypto finished the week stronger, but broad equity participation was weak. The Dow, Russell 2000 and European shares lagged.',
    'Oil fell sharply from its midweek highs as immediate Saudi supply fears eased. That reduced some inflation pressure, but geopolitical risk around the Strait of Hormuz remains.'
  ],
  week:[
    {label:'S&P 500',value:'−0.1%',tone:'down'},
    {label:'Nasdaq',value:'+0.7%',tone:'up'},
    {label:'Dow',value:'−1.7%',tone:'down'},
    {label:'Russell 2000',value:'−1.5%',tone:'down'},
    {label:'STOXX 600',value:'−0.6%',tone:'down'},
    {label:'FTSE 100',value:'+0.1%',tone:'up'},
    {label:'Nikkei 225',value:'+1.6%',tone:'up'},
    {label:'Hang Seng',value:'−0.2%',tone:'down'},
    {label:'US 10Y yield',value:'5.00% · +4 bp',tone:'up'},
    {label:'WTI crude',value:'+0.3%',tone:'up'},
    {label:'Bitcoin',value:'+4.8%',tone:'up'},
    {label:'Ether',value:'+3.8%',tone:'up'}
  ],
  drivers:[
    {asset:'Equities',move:'US mixed · Asia resilient · Europe softer',why:'Higher bond yields capped broad risk appetite, while large-cap technology held up better. Japan gained after the BOJ decision and easing oil prices; Europe ended Friday under pressure.',watch:'Flash PMIs, whether the 10-year yield holds 5%, and whether leadership broadens beyond technology.',source:'AP global market close',url:'https://apnews.com/article/wall-street-stocks-dow-nasdaq-1ff3311788bcc4555d00e283a57289fe'},
    {asset:'FX',move:'Dollar steady · yen weaker near ¥158 per US$',why:'The Fed and BOJ both tightened, but US yields remained much higher. The yen weakened despite the BOJ hike as investors focused on the continuing rate differential.',watch:'Central-bank guidance, flash PMIs and any move through ¥158 in USD/JPY.',source:'Global markets wrap',url:'https://www.swissinfo.ch/eng/us-stocks-steady-as-tech-outperforms-and-oil-falls%3A-markets-wrap/92078736'},
    {asset:'Commodities',move:'WTI +0.3% week · gold near its weekly high',why:'Oil surged on supply fears, then reversed as Saudi export workarounds eased the immediate shortage risk. Gold recovered as oil and yields retreated from their peaks.',watch:'Hormuz shipping, Saudi export flows, US inventories and whether gold holds its post-Fed rebound.',source:'Oil weekly close',url:'https://energynow.ca/2026/09/oil-ends-volatile-week-at-100-as-saudi-supply-fears-ease-but-hormuz-risks-persist/'},
    {asset:'Fixed income',move:'US 10Y near 5.00% · IEF −0.5% Friday',why:'The Fed raised rates and kept an inflation-focused stance. Longer-duration bonds remained more sensitive than short Treasuries as yields stayed near multi-year highs.',watch:'The 5% level in the 10-year yield, Fed speakers, PMIs and renewed oil-driven inflation pressure.',source:'Federal Reserve decision',url:'https://www.federalreserve.gov/newsevents/pressreleases/monetary20260916a.htm'},
    {asset:'Crypto',move:'Bitcoin +4.8% week · Ether +3.8%',why:'Digital assets caught a stronger risk bid late in the week as oil retreated, while crypto-positive US regulatory headlines supported sentiment.',watch:'Weekend liquidity, regulatory follow-through and whether higher Treasury yields interrupt the rebound.',source:'Friday market close',url:'https://www.axios.com/newsletters/axios-closer-2686eef3-24e4-4cee-b7c8-d3d173a468cd'}
  ],
  calendar:[
    {day:'Mon–Tue',event:'Global central-bank communication',impact:'Rates, FX and duration'},
    {day:'Wed',event:'Flash manufacturing and services PMIs',impact:'Growth expectations across the US and Europe'},
    {day:'Thu',event:'US jobless claims and new-home sales',impact:'Labour and rate-sensitive demand'},
    {day:'Fri',event:'US durable goods and consumer sentiment',impact:'Capex, inflation expectations and the dollar'},
    {day:'All week',event:'Oil supply and Strait of Hormuz headlines',impact:'Oil, inflation, bonds and global equities'}
  ],
  methodology:'Weekly equity moves compare the Friday close with the prior Friday. Crypto uses comparable UTC closes. Yield changes are in basis points. Values are rounded and may differ slightly by provider or fixing time.',
  sources:[
    {label:'AP · US weekly index performance',url:'https://apnews.com/article/wall-street-stocks-dow-nasdaq-da0dbe004b6f83c36e7d1626a9741a92'},
    {label:'Federal Reserve · September decision',url:'https://www.federalreserve.gov/newsevents/pressreleases/monetary20260916a.htm'},
    {label:'Nikkei · historical closes',url:'https://indexes.nikkei.co.jp/en/nkave/archives/data'},
    {label:'RTHK · Asian market close',url:'https://gbcode.rthk.hk/TuniS/news.rthk.hk/rthk/en/component/k2/1870624-20260918.htm'},
    {label:'Week-ahead calendar',url:'https://www.marketscreener.com/news/week-ahead-for-fx-bonds-u-s-pmi-data-various-central-bank-decisions-in-focus-ce785adadd81f022'}
  ]
};
