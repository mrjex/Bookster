<script utils>
export default {
  name: 'UtilsComponent',
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
    }
  }
}
</script>
