import { links } from '@/data/content'

function getSettingApiUrl() {
  if (typeof window === 'undefined') return '/api/common/getAllSetting'
  return `${window.location.origin}/api/common/getAllSetting`
}

/** 与交易所 SUPPORT_STAFF_SETTING[0].getUrl 一致：url + 美洽 metadata */
export function buildCustomerServiceUrl(rawUrl, userId = '') {
  if (!rawUrl) return ''
  const name = `UID_${userId || 'temporary_' + +new Date()}`
  return `${rawUrl}&metadata={"name":"${name}"}`
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
