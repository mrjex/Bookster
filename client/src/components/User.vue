<template>
    <form @submit.prevent="handleSubmit">
        <h3>Profile!</h3>
        <button class="btn btn-primary btn-block">Profile</button>
    </form>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'User',
  data() {
    return {
      username: ''
    }
  },
  methods: {
    /*
    async handleSubmit() {
      const result = await axios.get(`http://localhost:3000/api/users/${this.username}`)

      // User account found - Successful login
      if (result.status === 200 && result.data.user != null) {
        console.warn(this.username, this.password)

        localStorage.setItem('logged-in-user', JSON.stringify(result.data)) // NOTE: do 'result.data.user' if we solely want the user-object without HATEOAS links
        this.$router.push('/home')
      }
    }
    */
  }
}
</script>
