import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/HomePage.vue'
import PostScheduler from '../components/PostScheduler.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: PostScheduler
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router 