import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Galerie from '../views/Galerie.vue'
import MentionsLegales from '../views/MentionsLegales.vue'

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
    {
      path: '/mentions-legales',
      name: 'mentions-legales',
      component: MentionsLegales,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80,
      }
    }
    return { top: 0 }
  }
})

export default router
