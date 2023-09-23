<template>
    <nav class="navbar navbar-expand navbar-light fixed-top">
      <div class="container">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <div v-if="this.$route.name === 'Register'">
              <li class="nav-item">
                <a href="/login" class="nav-link">Login</a>
              </li>
            </div>
            <div v-else-if="this.$route.name === 'Login'">
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
  name: 'NavComponent'
}
</script>
