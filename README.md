# Market Room

Free FINA6010 global market dashboard. Dark by default, responsive, with light mode and presentation mode.

## Run
Serve the dist directory with any static web server. No npm dependencies, API keys or build step are required.

## Data
TradingView hosted embeds supply automatic quotes, historical charts and headlines. Forex and crypto stream in real time; exchanges may impose delays. US equity indices and Brent use labelled CFD proxies. Hang Seng and BSE Sensex are end-of-day feeds. IEF and SHY provide delayed Treasury ETF prices because direct Treasury yield embeds were restricted during testing.

The written executive summary, weekly scorecard, daily market drivers and forward calendar live in `dist/briefing-data.js`. They are sourced editorial context, not automatic market quotes. Each driver card links to a supporting source, and the file is refreshed daily.

The five mini charts cover one month. Explorer controls choose chart windows, not cumulative percentage returns. The displayed percent change follows the provider convention. ETF price performance excludes distributions.

## AI process for class
Tool: OpenAI Codex for design, coding, documentation research and checks. TradingView for actual market data and news.
User prompt: create an automated, reliable, easy-to-read app or dashboard with near-live prices, movements and several time periods; clean Silicon Valley minimalism.
Preferences: free data, global instruments, laptop-first and phone-compatible, dark default with optional light mode.
Challenges: free direct Treasury yields were unavailable in embeds; replaced with explicitly labelled bond ETFs. Embedded charts did not render in Codex in-app browser during localhost testing but all ten market quotes loaded in Safari. Use a standard browser for class.
Verification: JavaScript syntax, available assets, 18 quoted instruments, briefing source links, provider delay markers, period selection, theme and responsive layout.
Student should add personal time spent, what was learned and independently verify the market interpretation before presenting.
