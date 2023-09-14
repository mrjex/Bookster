<template>
    <form @submit.prevent="handleSubmit">
        <h3>Login</h3>

        <div class="form-group">
            <label>Username</label>
            <input type="username" class="form-control" v-model="username" placeholder="Username"/>
        </div>

        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" v-model="password" placeholder="Password"/>
        </div>

        <button class="btn btn-primary btn-block">Login</button>
    </form>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async handleSubmit() {
      const result = await axios.get(`http://localhost:3000/api/users/${this.username}`)

      // User account found - Successful login
      if (result.status === 200 && result.data.user != null) {
        console.warn(this.username, this.password)

        localStorage.setItem('logged-in-user', JSON.stringify(result.data)) // NOTE: do 'result.data.user' if we solely want the user-object without HATEOAS links
        this.$router.push('/home')
      }
    }
  }
}
</script>
