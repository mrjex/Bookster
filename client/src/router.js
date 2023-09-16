import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import User from './components/User.vue'
import Books from './components/Books.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      // name: 'home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: `/home/users/${localStorage.getItem('logged-in-username')}`,
      component: User
    },
    {
      path: `/home/users/${localStorage.getItem('logged-in-username')}/books`,
      component: Books
    }
  ]
})
