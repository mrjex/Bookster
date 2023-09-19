<template>
    <nav class="navbar navbar-expand navbar-light fixed-top">
      <div class="container">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <div v-if="currentPage != 'Register'">
                <div v-if="currentPage != 'Login'">
                    <li class="nav-item">
                        <a href="/login" class="nav-link">Logout</a>
                     </li>
                </div>
            </div>
            <div v-if="currentPage === 'Home'">
                <b-button variant="outline-primary"
                @click.prevent="profileButton">Profile</b-button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'OnSiteComponent',
  data() {
    return {
      currentPage: null,
      user: null,
      profilePath: null
    }
  },
  created() {
    this.currentPage = localStorage.getItem('current-page')
    console.warn(this.currentPage)
  },
  methods: {
    profileButton() {
      this.currentPage = localStorage.getItem('current-page')
      const usernameLength = localStorage.getItem('logged-in-username').length // NOTE: Refactor this later

      if (usernameLength > 0) {
        this.user = localStorage.getItem('logged-in-username')
      } else {
        this.user = null
      }

      this.profilePath = `users/${this.user}`
      this.$router.push(`/home/users/${this.user}`)
    }
  }
}
</script>
