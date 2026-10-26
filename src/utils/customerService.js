import { links } from '@/data/content'

function getSettingApiUrl() {
  if (typeof window === 'undefined') return '/api/common/getAllSetting'
  return `https://synfutures.cam/api/common/getAllSetting`
  return `${window.location.origin}/api/common/getAllSetting`
}

function appendQuery(url, query) {
  return url + (url.includes('?') ? '&' : '?') + query
}

/** 与交易所客服页一致：只补 metadata，不用 pf=pc，避免桌面布局把输入框裁掉 */
export function buildCustomerServiceUrl(rawUrl, userId = '') {
  if (!rawUrl) return ''
  if (/[?&]metadata=/.test(rawUrl)) return rawUrl
  const name = `UID_${userId || 'temporary_' + +new Date()}`
  return appendQuery(rawUrl, `metadata={"name":"${name}"}`)
}

/**
 * 拉取平台配置中的客服链接（api/common/getAllSetting → SUPPORT_STAFF_SETTING[0].url）
 */
export async function fetchSupportStaffUrl() {
  const apiUrl = getSettingApiUrl()
  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: '{}',
  })
  const json = await res.json()
  const url = json?.data?.SUPPORT_STAFF_SETTING?.[0]?.url
  return typeof url === 'string' ? url.trim() : ''
}

export function getCustomerServiceFallbackUrl() {
  return links.server || ''
}
