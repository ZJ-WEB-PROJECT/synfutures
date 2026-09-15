<template>
  <footer class="footer">
    <div class="wrap content">
      <div class="top">
        <div class="brand-col">
          <img src="/assets/new_logo.svg" alt="SynFutures" class="logo" />
          <p class="tagline display">Simple, powerful, permissionless trading.</p>
          <a class="btn btn-brand launch" :href="links.trade" target="_blank" rel="noreferrer">Launch App</a>
          <!-- <div class="socials">
            <a v-for="item in socials" :key="item.label" :href="item.href" target="_blank" rel="noreferrer" :aria-label="item.label">
              <SocialIcon :name="item.label" />
            </a>
          </div> -->
          <form class="news" @submit.prevent="subscribe">
            <p>Join our newsletter</p>
            <div class="row">
              <div class="field">
                <input v-model="email" type="email" required placeholder="Enter your email"
                  aria-label="Email address" />
              </div>
              <button class="btn btn-brand" type="submit">{{ sending ? 'Sending...' : 'Subscribe' }}</button>
            </div>
            <p v-if="toast" class="toast">{{ toast }}</p>
          </form>
        </div>
        <div class="cols">
          <ul>
            <li v-for="item in footerPrimary" :key="item.label">
              <RouterLink :to="item.href">{{ item.label }}</RouterLink>
            </li>
          </ul>
          <ul>
            <li v-for="item in footerSecondary" :key="item.label">
              <a v-if="isExternal(item.href) || item.href.endsWith('.pdf')" :href="item.href"
                :target="item.href.startsWith('http') ? '_blank' : undefined" rel="noreferrer">{{ item.label }}</a>
              <RouterLink v-else :to="item.href">{{ item.label }}</RouterLink>
            </li>
          </ul>
        </div>
      </div>
      <p class="copy">Copyrights © 2026 SynFutures. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { footerPrimary, footerSecondary, links, socials } from '@/data/content'
import SocialIcon from '@/components/SocialIcon.vue'

const email = ref('')
const sending = ref(false)
const toast = ref('')

function isExternal(href) {
  return href.startsWith('http')
}

function subscribe() {
  sending.value = true
  setTimeout(() => {
    sending.value = false
    email.value = ''
    toast.value = 'Subscribed successfully!'
    setTimeout(() => (toast.value = ''), 3000)
  }, 400)
}
</script>

<style scoped>
.footer {
  position: relative;
  overflow: hidden;
  background: #000;
  padding: 48px 0 16px;
}

.top {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.logo {
  height: 24px;
  width: auto;
}

.tagline {
  max-width: 474px;
  color: #fff;
  font-size: 24px;
  font-weight: 300;
  line-height: 1.2;
}

.launch {
  width: fit-content;
  padding: 10px 24px;
}

.socials {
  display: flex;
  gap: 12px;
}

.news {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.news p:first-child {
  color: #fff;
  font-size: 14px;
  font-weight: 600;
}

.row {
  display: flex;
  max-width: 360px;
  gap: 8px;
}

.field {
  flex: 1;
  min-width: 0;
  border-radius: 999px;
  padding: 1px;
  background-image: linear-gradient(160deg, var(--color-brand), #666 50%);
}

.field input {
  width: 100%;
  border: 0;
  border-radius: 999px;
  background: var(--color-input);
  color: #fff;
  padding: 10px 16px;
  font-size: 14px;
}

.toast {
  color: var(--color-brand);
  font-size: 13px;
}

.cols {
  display: flex;
  gap: 64px;
}

.cols a {
  display: block;
  margin-bottom: 12px;
  font-size: 14px;
  color: var(--color-text-body);
}

.cols a:hover {
  color: #fff;
}

.copy {
  margin-top: 64px;
  color: #fff;
  font-size: 12px;
}

.brand-col {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

@media (min-width: 640px) {
  .logo {
    height: 28px;
  }

  .tagline {
    font-size: 40px;
  }

  .copy {
    margin-top: 240px;
    font-size: 14px;
  }
}

@media (min-width: 1024px) {
  .top {
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
