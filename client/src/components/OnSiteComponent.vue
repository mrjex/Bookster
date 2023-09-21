<template>
    <nav class="navbar navbar-expand navbar-light fixed-top">
      <div class="container">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <div v-if="getUsername() != 'null'">
                <b-button variant="outline-primary"
                @click.prevent="logoutButton">Logout</b-button>
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
import UtilsComponent from '../components/UtilsComponent.vue'

export default {
  name: 'OnSiteComponent',
  data() {
    return {
      currentPage: null,
      user: UtilsComponent.methods.getUsername(),
      profilePath: null
    }
  },
  created() {
    if (localStorage.getItem('current-page') === 'Home' && localStorage.getItem('Test') === 'Refreshable') { // NOTE: Refactor this later
      setTimeout(this.testMethod, 10)
      localStorage.setItem('Test', 'DONE')
    }
    this.currentPage = localStorage.getItem('current-page')
  },
  methods: {
    profileButton() {
      this.currentPage = localStorage.getItem('current-page')

      localStorage.setItem('Test', 'Refreshable')
      this.profilePath = `users/${this.user}`
      this.$router.push(`/home/users/${this.user}`)
    },
    testMethod() { // NOTE: Refactor this later
      window.location.reload()
    },
    getUsername() { // Add to utils
      return localStorage.getItem('logged-in-username')
    },
    logoutButton() {
      localStorage.setItem('Test', 'Refreshable')
      this.$router.push('/login')
    }
  }
}
</script>
