import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BuildingPage from '@/views/BuildingPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BuildingPage
      //component: HomeView,
    }/*,
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },*/
  ],
})

export default router
