/** 当前是否为本地或 IP，这类地址不跳转交易站 */
export function isLocalOrIp(host) {
  if (!host || host === 'localhost' || host.endsWith('.localhost')) return true
  if (host.includes(':')) return true
  return /^\d{1,3}(\.\d{1,3}){3}$/.test(host)
}

/**
 * 根据当前官网域名推导交易站地址。
 * www.xxx.cam / syn.xxx.cam → https://xxx.cam/#/trade
 * 本地或 IP 返回空字符串，调用方应阻止跳转。
 */
export function getTradeUrl() {
  if (typeof window === 'undefined') return ''
  const host = window.location.hostname
  if (isLocalOrIp(host)) return ''
  const parts = host.split('.')
  const apex = parts.length > 2 ? parts.slice(1).join('.') : host
  return `https://${apex}/#/trade`
}

export function getTradeLinkAttrs() {
  const href = getTradeUrl()
  if (!href) {
    return {
      href: undefined,
      onClick: (e) => e.preventDefault(),
    }
  }
  return {
    href,
    target: '_blank',
    rel: 'noreferrer',
  }
}
