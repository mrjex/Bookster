<template>
    <form @submit.prevent="handleSubmit">
        <div>
            <NavComponent />
        </div>
        <h3>Sign Up</h3>

        <div class="form-group">
            <label>Username</label>
            <input type="username" class="form-control" v-model="username" placeholder="Username"/>
        </div>

         <div class="form-group">
            <label>Age</label>
            <input type="age" class="form-control" v-model="age" placeholder="Age"/>
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
import NavComponent from './NavComponent.vue'
import axios from 'axios'
export default {
  name: 'Register',
  created() {
    localStorage.setItem('current-page', 'Register')
  },
  data() {
    return {
      username: '',
      password: '',
      age: '',
      password_confirm: ''
    }
  },
  methods: {
    async handleSubmit() {
      const response = await axios.post('http://localhost:3000/api/register', {
        username: this.username,
        password: this.password,
        age: this.age
      })

      /*
      if (response.status === 201)
      {

      }
      */

      console.log(response)
      this.$router.push('/login')
    }
  },
  components: {
    NavComponent
  }
}
</script>
