import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Galerie from '../views/Galerie.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil,
    },
    {
      path: '/galerie',
      name: 'galerie',
      component: Galerie,
    },
  ],
})

export default router
