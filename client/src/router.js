import Vue from 'vue'
import Router from 'vue-router'

// Pages:
// NOTE: Refactor such that only component-vues are in /component and put everything else in /views
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import User from './views/User.vue'
import Books from './views/Books.vue'
import Reviews from './views/Reviews.vue'
import Search from './views/Search.vue'
import Progress from './views/Progress.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      // name: 'Home',
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
    },
    {
      path: `/home/users/${localStorage.getItem('logged-in-username')}/reviews`,
      component: Reviews
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: `/home/users/${localStorage.getItem('logged-in-username')}/progress`,
      component: Progress
    }
  ]
})
