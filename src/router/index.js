import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import HomePage from '../views/HomePage'
import Dashboard from '../views/Dashboard'
import BannerDashboard from '../views/BannerDashboard'
import ErrorNotFound from '../views/ErrorNotFound'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/product',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/banner',
    name: 'BannerDashboard',
    component: BannerDashboard
  },
  {
    path: '*',
    name: 'ErrorNotFound',
    component: ErrorNotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if ((to.name === 'LoginPage') && localStorage.token) next({ name: 'HomePage' })
  else if ((to.name === 'Dashboard' || to.name === 'BannerDashboard' || to.name === 'HomePage') && !localStorage.token) next({ name: 'LoginPage' })
  else next()
})

export default router
