import { createRouter, createWebHistory } from 'vue-router'
import Books from '../views/Books.vue'
import Members from '../views/Members.vue'
import AddBook from '../views/AddBook.vue'
import SearchBook from '../views/SearchBook.vue'
import UpdateBook from '../views/UpdateBook.vue'
import DeleteBook from '../views/DeleteBook.vue'
import IssueBook from '../views/IssueBook.vue'
import ReturnBook from '../views/ReturnBook.vue'
import AddMember from '../views/AddMember.vue'
import SearchMember from '../views/SearchMember.vue'
import UpdateMember from '../views/UpdateMember.vue'
import DeleteMember from '../views/DeleteMember.vue'

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
    },
    {
      path: '/addbook',
      name: 'addbook',
      component: AddBook
    },
    {
      path: '/searchbook',
      name: 'searchbook',
      component: SearchBook
    },
    {
      path: '/updatebook',
      name: 'updatebook',
      component: UpdateBook
    },
    {
      path: '/deletebook',
      name: 'deletebook',
      component: DeleteBook
    },
    {
      path: '/issuebook',
      name: 'issuebook',
      component: IssueBook
    },
    {
      path: '/returnbook',
      name: 'returnbook',
      component: ReturnBook
    },
    {
      path: '/addmember',
      name: 'addmember',
      component: AddMember
    },
    {
      path: '/searchmember',
      name: 'searchmember',
      component: SearchMember
    },
    {
      path: '/updatemember',
      name: 'updatemember',
      component: UpdateMember
    },
    {
      path: '/deletemember',
      name: 'deletemember',
      component: DeleteMember
    }
  ]
})

export default router
