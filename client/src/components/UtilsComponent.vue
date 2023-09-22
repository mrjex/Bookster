<script utils>
export default {
  name: 'UtilsComponent',
  data() {
    return {
      refreshDelay: 10
    }
  },
  methods: {
    getUsername() {
      const usernameLength = localStorage.getItem('logged-in-username').length

      if (usernameLength > 0) {
        return localStorage.getItem('logged-in-username')
      } else {
        return null
      }
    },
    updateLoggedInUser(userData, username) {
      localStorage.setItem('logged-in-user', userData)
      localStorage.setItem('logged-in-username', username)
    },
    refreshPage(conditionalPage) {
      let correctPage = null
      if (conditionalPage != null) {
        correctPage = conditionalPage === localStorage.getItem('current-page')
      }

      if (correctPage == null || correctPage === true) {
        if (localStorage.getItem('Test') === 'Refreshable') { // Replace 'Test' with something more appropriate
          setTimeout(this.refreshX, this.refreshDelay)
          localStorage.setItem('Test', 'DONE')
        }
      }
    },
    refreshX() {
      window.location.reload()
    }
  }
}
</script>
