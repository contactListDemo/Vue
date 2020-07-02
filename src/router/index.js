import Vue from 'vue'
import VueRouter from 'vue-router'
import ContactList from '../views/ContactList.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'ContactList',
    component: ContactList
  },

  {
    path: '/create-Contact',
    name: 'CreateContact',
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateContact.vue')
  },

  {
    path: '/contacts/:id/edit',
    name: 'ContactEdit',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactEdit.vue'),
    params:true
  },
]

const router = new VueRouter({
  routes
})

export default router
