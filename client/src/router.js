import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import User from './views/User.vue'
import Books from './views/Books.vue'
import Reviews from './views/Reviews.vue'
import Search from './views/Search.vue'
import Progress from './views/Progress.vue'
import About from './views/About.vue'
import Book from './views/Book.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'Login',
      path: '/login',
      component: Login
    },
    {
      name: 'Register',
      path: '/register',
      component: Register
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/',
      // name: 'Home',
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: '/users/:username',
      component: User,
      meta: { requiresAuth: true }
    },
    {
      path: '/users/:username/books',
      component: Books,
      meta: { requiresAuth: true }
    },
    {
      path: '/users/:username/reviews',
      component: Reviews,
      meta: { requiresAuth: true }
    },
    {
      path: '/users/:username/progress',
      component: Progress,
      meta: { requiresAuth: true }
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      meta: { requiresAuth: true }
    },
    {
      path: '/books/:isbn',
      name: 'book',
      component: Book,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!localStorage.getItem('logged-in-username')) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
