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
import { Api } from '../Api'
import NavComponent from '../components/NavComponent.vue'
export default {
  name: 'Register',
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
      await Api.post('/register', {
        username: this.username,
        password: this.password,
        age: this.age
      })

      await Api.post(`/users/${this.user}/progress/add`, {
        performanceCharts: null,
        performanceDateLabels: null,
        allocationChartsCurrent: null,
        allocationChartsLastMonth: null,
        allocationChartPie: null,
        allocationCategories: null,
        username: this.username
      })

      this.$router.push('/login')
    }
  },
  components: {
    NavComponent
  }
}
</script>
