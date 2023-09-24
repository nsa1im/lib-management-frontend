import { createRouter, createWebHistory } from 'vue-router'
import Books from '../views/Books.vue'
import Members from '../views/Members.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'books',
      component: Books
    },
    {
      path: '/members',
      name: 'members',
      component: Members
    }
  ]
})

export default router
