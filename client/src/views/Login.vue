<template>
    <form @submit.prevent="handleSubmit">
        <div>
            <NavComponent />
        </div>
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
import NavComponent from '../components/NavComponent.vue'
import UtilsComponent from '../components/UtilsComponent.vue'
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  created() {
    localStorage.setItem('current-page', 'Login')
    UtilsComponent.methods.updateLoggedInUser(null, null)

    if (localStorage.getItem('Test') === 'Refreshable') { // NOTE: Refactor this later
      setTimeout(this.testMethod, 10)
      localStorage.setItem('Test', 'DONE')
    }
  },
  methods: {
    async handleSubmit() {
      const result = await axios.get(`http://localhost:3000/api/users?username=${this.username}&password=${this.password}`)

      // User account found - Successful login
      if (result.status === 200 && result.data.length > 0) {
        // localStorage.setItem('logged-in-user', JSON.stringify(result.data[0]))
        // localStorage.setItem('logged-in-username', this.username)
        UtilsComponent.methods.updateLoggedInUser(JSON.stringify(result.data[0]), this.username)
        localStorage.setItem('Test', 'Refreshable')

        this.$router.push('/home')
      }
    },
    testMethod() { // NOTE: Refactor this later
      window.location.reload()
    }
  },
  components: {
    NavComponent
  }
}
</script>
