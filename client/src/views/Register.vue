<template>
  <div class="background-forest d-flex align-items-center justify-content-center">
    <div class="outer-container p-2">
      <div class="form-content">
        <img src="../resources/Bookster-Logo3.0.png" class="bookster-logo p-2">
        <div class="d-flex align-items-center justify-content-center">
          <div>
            <h4 class="no-account">Already have an account? <a href="/login">
                Login
              </a>
            </h4>
            <h4 class="welcome-text">WELCOME</h4>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center align-items-center py-2" id="loginDetails">
        <div class="form-frontend">
          <form @submit.prevent="handleRegister">
            <div class="form-group">
              <BIconPersonCircle class="mx-2" />
              <input type="username" class="input-btn" v-model="username" placeholder="Username" />
            </div>
            <div class="form-group">
              <BIconCalendar2Date class="mx-2" />
              <input type="age" class="input-btn" v-model="age" placeholder="Age" />
            </div>
            <div class="form-group">
              <BIconKey class="mx-2" />
              <input type="password" class="input-btn" v-model="password" placeholder="Password" />
            </div>
            <div class="form-group">
              <BIconCheck2Circle class="mx-2" />
              <input type="password" class="input-btn" v-model="password_confirm" placeholder="Confirm Password" />
            </div>
            <button class="input-btn login-btn float-right">SIGN UP</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Api } from '../Api'
import { BIconCalendar2Date, BIconCheck2Circle } from 'bootstrap-vue'
// import NavComponent from '../components/NavComponent.vue'
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
    async handleRegister() {
      await Api.post('/users', {
        username: this.username,
        password: this.password,
        age: this.age
      })

      await Api.post(`/users/${this.user}/progress/`, {
        performanceCharts: null,
        performanceDateLabels: null,
        allocationChartsCurrent: null,
        allocationChartsLastMonth: null,
        allocationCategories: null,
        username: this.username
      })

      const userHATEOASExample = await Api.post(`/users/${this.user}/progress/`, {
        performanceCharts: null,
        performanceDateLabels: null,
        allocationChartsCurrent: null,
        allocationChartsLastMonth: null,
        allocationCategories: null,
        username: this.username,
        links: [
          {
            href: `users/${this.user}`,
            rel: 'users',
            type: 'POST'
          }
        ]
      })

      console.warn(userHATEOASExample)

      this.$router.push('/login')
    }
  },
  components: {
    BIconCalendar2Date,
    BIconCheck2Circle
  }
}
</script>

<style>
#loginDetails {
  background-color: #073438;
  border-radius: 0.8vw;
  box-shadow: 6px 6px 2px 1px rgba(0, 0, 0, 0.2);
}

.outer-container {
  width: 450px;
}

.card0-background2 {
  z-index: 10;
  box-shadow: 6px 6px 2px 1px rgba(0, 0, 0, 0.2);
}

.form-content {
  background-image: url('../resources/LoginCardPicture1.png');
  background-position: center;
  /* Center the image */
  background-repeat: no-repeat;
  /* Do not repeat the image */
  background-size: cover;
  text-align: center;
  border-radius: .8vw;
}

.background-forest {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../resources/LoginCardPicture6.png');
}

.login-form {
  z-index: 20;
}

.input-btn {
  border-radius: 3vh;
  background-image: linear-gradient(to left, #7DCFCB, #9E7CCF);
}

.signup2-btn {
  z-index: 35;
  border-radius: 3vh;
  background-color: #e3e3e3;
  width: 70px;
}

.no-account {
  color: #ffffff;
  font-weight: 420;
  font-size: 15px;
}

.welcome-text {
  color: #ffffff;
  font-weight: 500;
  font-size: 30px;
}

.bookster-logo {
  width: 28vh;
  z-index: 15;
}

.b-icon {
  color: white;
}
</style>
