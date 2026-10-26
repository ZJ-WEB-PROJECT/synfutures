<template>
  <div class="app-shell">
    <AppHeader />
    <main>
      <RouterView />
    </main>
    <AppFooter />
    <a
      class="cs-float"
      href="#"
      :aria-label="$t('common.customerService')"
      :title="$t('common.customerService')"
      @click="openCustomerService"
    >
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" aria-hidden="true">
        <path
          d="M12 3a8 8 0 0 0-8 8v1.2A2.8 2.8 0 0 0 6.8 15H8v-4a4 4 0 1 1 8 0v4h1.2A2.8 2.8 0 0 0 20 12.2V11a8 8 0 0 0-8-8Z"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linejoin="round"
        />
        <path
          d="M8 15v2.2A2.8 2.8 0 0 0 10.8 20h2.4"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
        />
      </svg>
    </a>
    <div v-if="customerServiceUrl" class="cs-page">
      <iframe
        ref="csFrame"
        class="cs-frame"
        :src="customerServiceUrl"
        :title="$t('common.customerService')"
        @load="focusCustomerService"
      ></iframe>
      <div class="back" @click="closeCustomerService">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
          <path d="M15 6 9 12l6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <!-- <button type="button" class="cs-back" @click="closeCustomerService">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
          <path d="M15 6 9 12l6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        {{ $t('common.back') }}
      </button> -->
    </div>
  </div>
</template>

<script setup>
import { onUnmounted, ref, watch } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import { useCustomerService } from '@/utils/useCustomerService'

const { openCustomerService, closeCustomerService, customerServiceUrl } = useCustomerService()
const csFrame = ref(null)

function focusCustomerService() {
  csFrame.value?.focus()
}

watch(customerServiceUrl, (url) => {
  document.documentElement.classList.toggle('cs-lock', Boolean(url))
  if (url) focusCustomerService()
})

onUnmounted(() => {
  document.documentElement.classList.remove('cs-lock')
})
</script>

<style scoped>
.cs-float {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 80;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  color: #111;
  background: var(--color-accent);
  box-shadow: 0 8px 24px rgba(241, 244, 52, 0.35);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.cs-float:hover {
  transform: scale(1.06);
  box-shadow: 0 10px 28px rgba(241, 244, 52, 0.5);
}

@media (min-width: 640px) {
  .cs-float {
    right: 28px;
    bottom: 28px;
    width: 60px;
    height: 60px;
  }
}

.cs-page {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: #fff;
}

.cs-frame {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: block;
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  border: 0;
  background: #fff;
}

.back {
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 210;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  color: #000;
  background-color: #fff;
  cursor: pointer;
}

.cs-back {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  height: 32px;
  padding: 0 12px 0 8px;
  border: 0;
  border-radius: 16px;
  background: var(--color-accent);
  color: #111;
  font: inherit;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  pointer-events: auto;
}
</style>

<style>
html.cs-lock,
html.cs-lock body {
  overflow: visible !important;
}
</style>
