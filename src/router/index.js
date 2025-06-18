import { createRouter, createWebHistory } from 'vue-router'
import Home from '../App.vue' // ou un fichier Home.vue si tu l'as
import ConstellationDetail from '../components/constellationDetail.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/constellation/:id', name: 'ConstellationDetail', component: ConstellationDetail }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
