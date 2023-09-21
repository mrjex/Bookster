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
    registerLogout() {
      localStorage.setItem('logged-in-user', null)
      localStorage.setItem('logged-in-username', null)
    }
  }
}
</script>
