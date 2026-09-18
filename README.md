# Market Room

Free FINA6010 market dashboard. Dark by default, responsive, with light mode and presentation mode.

## Run
Serve the dist directory with any static web server. No npm dependencies, API keys or build step are required.

## Data
TradingView hosted embeds supply automatic quotes, historical charts and headlines. Forex and crypto stream in real time; exchanges may impose delays. S&P 500, Nasdaq-100 and Brent use labelled CFD proxies. IEF and SHY provide delayed Treasury ETF prices because direct Treasury yield embeds were restricted during testing. No synthetic or hard-coded prices are used.

The five mini charts cover one month. Explorer controls choose chart windows, not cumulative percentage returns. The displayed percent change follows the provider convention. ETF price performance excludes distributions.

## AI process for class
Tool: OpenAI Codex for design, coding, documentation research and checks. TradingView for actual market data and news.
User prompt: create an automated, reliable, easy-to-read app or dashboard with near-live prices, movements and several time periods; clean Silicon Valley minimalism.
Preferences: free data, global instruments, laptop-first and phone-compatible, dark default with optional light mode.
Challenges: free direct Treasury yields were unavailable in embeds; replaced with explicitly labelled bond ETFs. Embedded charts did not render in Codex in-app browser during localhost testing but all ten market quotes loaded in Safari. Use a standard browser for class.
Verification: JavaScript syntax, available assets, ten quoted instruments, price updates across observations, provider delay markers, period selection, theme and responsive layout.
Student should add personal time spent, what was learned and independently verify the market interpretation before presenting.
