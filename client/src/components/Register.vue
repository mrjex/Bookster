<template>
    <form @submit.prevent="handleSubmit">
        <h3>Sign Up</h3>

        <div class="form-group">
            <label>First Name</label>
            <input type="text" class="form-control" v-model="first_name" placeholder="First Name"/>
        </div>

        <div class="form-group">
            <label>Last Name</label>
            <input type="text" class="form-control" v-model="last_name" placeholder="Last Name"/>
        </div>

        <div class="form-group">
            <label>Username</label>
            <input type="username" class="form-control" v-model="username" placeholder="Username"/>
        </div>

        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" v-model="password" placeholder="Password"/>
        </div>

        <div class="form-group">
            <label>Confirm Password</label>
            <input type="password" class="form-control" v-model="password_confirm" placeholder="Confirm Password"/>
        </div>

        <button class="btn btn-primary btn-block">Sign Up</button>
    </form>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Register',
  data() {
    return {
      first_name: '',
      last_name: '',
      username: '',
      password: '',
      password_confirm: ''
    }
  },
  methods: {
    async handleSubmit() {
      // Back end HTTP here
      // 'http://localhost:8080/register' --> Client FrontEnd Register
      // 'http://localhost:3000/api' --> Server BackEnd Home
      // http://localhost:3000 --> Client FrontEnd Home
      // PROBABLY TODO - Create route: 'http://localhost:3000/api/register'

      const response = await axios.post('http://localhost:3000/api', {
        first_name: this.first_name,
        last_name: this.last_name,
        username: this.username,
        password: this.password,
        password_confirm: this.password_confirm
      })

      /*
      const data = {
        first_name: this.first_name,
        last_name: this.last_name,
        username: this.username,
        password: this.password_confirm,
        password_confirm: this.password_confirm
      }

      console.log(data)
      */

      console.log(response)
      this.$router.push('/login')
    }
  }
}
</script>
