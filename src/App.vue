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
      target="_blank"
      rel="noreferrer"
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
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import { useCustomerService } from '@/utils/useCustomerService'

const { openCustomerService } = useCustomerService()
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
</style>
