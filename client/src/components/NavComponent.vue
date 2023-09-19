<template>
    <nav class="navbar navbar-expand navbar-light fixed-top">
      <div class="container">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <div v-if="currentPage === 'Register'">
              <li class="nav-item">
                <a href="/login" class="nav-link">Login</a>
              </li>
            </div>
            <div v-else-if="currentPage === 'Login'">
            <li class="nav-item">
              <a href="/register" class="nav-link">Sign Up</a>
            </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'NavComponent',
  data() {
    return {
      currentPage: null
    }
  },
  created() {
    this.currentPage = localStorage.getItem('current-page')
  }
}
</script>
