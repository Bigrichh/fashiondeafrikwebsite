import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Gallery from '../views/Gallery.vue'
import Collections from '../views/Collections.vue'
import Store from '../views/Store.vue'

const routes = [
  {
    path: '/',
    name: 'About',
    component: About
  },
  {
    path: '/Collections',
    name: 'Collections',
    component: Collections
  },
  {
    path: '/Gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/Store',
    name: 'Store',
    component: Store
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
})




export default router
