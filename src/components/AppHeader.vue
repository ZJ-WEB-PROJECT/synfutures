<template>
  <header class="header">
    <div class="inner">
      <div class="bar">
        <RouterLink to="/" class="brand">
          <img src="/assets/new_logo.png" alt="Cervanta" />
        </RouterLink>

        <div class="desktop">
          <ul>
            <li v-for="item in nav" :key="item.labelKey">
              <a v-if="isExternal(item.href)" :href="item.href" target="_blank" rel="noreferrer">{{ $t(item.labelKey) }}</a>
              <RouterLink v-else :to="item.href" :class="{ active: isActive(item.href) }">{{ $t(item.labelKey) }}</RouterLink>
            </li>
          </ul>
          <a class="btn btn-brand trade" v-bind="tradeLinkAttrs">{{ $t('common.tradeNow') }}</a>
        </div>

        <div class="mobile-actions">
          <a class="btn btn-brand trade-sm" v-bind="tradeLinkAttrs">{{ $t('common.tradeNow') }}</a>
          <button type="button" :aria-label="$t('nav.toggleMenu')" @click="open = !open">
            <img src="/assets/icon_list.svg" alt="" />
          </button>
        </div>
      </div>

      <div v-if="open" class="drawer">
        <ul>
          <li v-for="item in nav" :key="item.labelKey">
            <a v-if="isExternal(item.href)" :href="item.href" target="_blank" rel="noreferrer" @click="open = false">{{ $t(item.labelKey) }}</a>
            <RouterLink v-else :to="item.href" @click="open = false">{{ $t(item.labelKey) }}</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { nav } from '@/data/content'
import { getTradeLinkAttrs } from '@/utils/tradeUrl'

const tradeLinkAttrs = getTradeLinkAttrs()

const route = useRoute()
const open = ref(false)

function isExternal(href) {
  return href.startsWith('http')
}

function isActive(href) {
  return route.path === (href.split('?')[0] || '/') && href !== '/'
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  z-index: 50;
  width: 100%;
  padding-top: 12px;
}

.inner {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 16px;
}

@media (min-width: 640px) {
  .inner {
    padding: 0 32px;
  }
}

@media (min-width: 1024px) {
  .inner {
    padding: 0 72px;
  }
}

.bar {
  display: flex;
  height: 56px;
  align-items: center;
  justify-content: space-between;
  border-radius: 999px;
  border: 1px solid rgba(83, 230, 212, 0.2);
  background: rgba(3, 6, 7, 0.75);
  padding: 0 16px;
  box-shadow: 0 0 36px rgba(83, 230, 212, 0.07) inset;
  backdrop-filter: blur(12px);
}

@media (min-width: 640px) {
  .bar {
    height: 72px;
    padding: 0 18px;
  }
}

.brand img {
  height: 24px;
  width: auto;
}

@media (min-width: 640px) {
  .brand img {
    height: 32px;
  }
}

.desktop {
  display: none;
  align-items: center;
  gap: 31px;
}

.desktop ul {
  display: flex;
  gap: 31px;
}

.desktop a {
  font-family: var(--font-display);
  font-size: 16px;
}

.desktop a:hover,
.desktop a.active,
.desktop a.router-link-active {
  color: #fff;
}

.trade {
  height: 46px;
  min-width: 125px;
  padding: 0 24px;
  font-size: 17px;
}

.mobile-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.trade-sm {
  height: 32px;
  padding: 4px 14px;
  font-size: 14px;
}

.mobile-actions button {
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
}

.mobile-actions img {
  width: 24px;
  height: 24px;
}

.drawer {
  margin-top: 8px;
  overflow: hidden;
  border-radius: 28px;
  border: 1px solid rgba(83, 230, 212, 0.35);
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(24px);
}

.drawer a {
  display: flex;
  justify-content: center;
  padding: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: #ebebed;
}

.drawer li:last-child a {
  border-bottom: 0;
}

@media (min-width: 1024px) {
  .desktop {
    display: flex;
  }
  .mobile-actions,
  .drawer {
    display: none;
  }
}
</style>
