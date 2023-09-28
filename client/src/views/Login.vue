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
import NavComponent from '../components/NavComponent.vue'
import UtilsComponent from '../components/UtilsComponent.vue'

import { Api } from '../Api'
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
      const result = await Api.get(`/users?username=${this.username}&password=${this.password}`)

      // User account found - Successful login
      if (result.status === 200 && result.data.length > 0) {
        UtilsComponent.methods.updateLoggedInUser(JSON.stringify(result.data[0]), this.username)
        UtilsComponent.methods.setRefreshablePageState()
        this.$router.push('/home')
      }
    }
  },
  components: {
    NavComponent
  }
}
</script>
