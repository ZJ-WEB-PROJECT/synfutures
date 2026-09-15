import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

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
    { path: '/', name: 'home', component: HomeView },
    {
      path: '/about-us',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
      meta: { title: 'About Us | Cervanta' },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue'),
      meta: { title: 'Page Not Found | Cervanta' },
    },
  ],
})

router.afterEach((to) => {
  document.title = to.meta.title || 'Cervanta | Trade Crypto, Stocks, and ETFs on One DEX'
})

export default router
