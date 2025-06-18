import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ConstellationDetail from '../components/ConstellationDetail.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/constellation/:id', name: 'ConstellationDetail', component: ConstellationDetail }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
