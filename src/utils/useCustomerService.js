import { onMounted, ref } from 'vue'
import {
  buildCustomerServiceUrl,
  fetchSupportStaffUrl,
  getCustomerServiceFallbackUrl,
} from '@/utils/customerService'

export function useCustomerService() {
  const supportStaffUrl = ref('')
  let loading = null

  async function loadSupportStaffUrl() {
    if (supportStaffUrl.value) return supportStaffUrl.value
    if (!loading) {
      loading = fetchSupportStaffUrl()
        .then((url) => {
          supportStaffUrl.value = url || getCustomerServiceFallbackUrl()
          return supportStaffUrl.value
        })
        .catch(() => {
          supportStaffUrl.value = getCustomerServiceFallbackUrl()
          return supportStaffUrl.value
        })
        .finally(() => {
          loading = null
        })
    }
    return loading
  }

  onMounted(() => {
    void loadSupportStaffUrl()
  })

  async function openCustomerService(e) {
    e?.preventDefault?.()
    const raw = (await loadSupportStaffUrl()) || getCustomerServiceFallbackUrl()
    const href = buildCustomerServiceUrl(raw)
    if (!href) return
    window.open(href, '_blank', 'noopener,noreferrer')
  }

  return { openCustomerService }
}
