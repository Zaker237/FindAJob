import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'LoginView',
    component: () => import('../views/auth/LoginView.vue')
  },
  {
    path: '/register',
    name: 'RegisterView',
    component: () => import('../views/auth/RegisterView.vue')
  },
  {
    path: '/dashboard',
    name: 'DashboardView',
    component: () => import('../views/user/DashboardView.vue')
  },
  {
    path: '/feed',
    name: 'FeedView',
    component: () => import('../views/user/FeedView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
