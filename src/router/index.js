import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import i18n from '@/i18n'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, _from, savedPosition) {
    if (to.query.s) {
      return { el: `#${to.query.s}`, behavior: 'smooth' }
    }
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
  routes: [
    { path: '/', name: 'home', component: HomeView, meta: { titleKey: 'meta.homeTitle' } },
    {
      path: '/about-us',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
      meta: { titleKey: 'meta.aboutTitle' },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue'),
      meta: { titleKey: 'meta.notFoundTitle' },
    },
  ],
})

router.afterEach((to) => {
  document.title = i18n.global.t(to.meta.titleKey || 'meta.homeTitle')
  document.documentElement.lang = i18n.global.locale.value
})

export default router
