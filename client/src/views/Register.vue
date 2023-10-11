<template>
<!-- REGISTER TEMPLATE -->
<!--
  <div>
    <a href="/about">
      <img src="../resources/Bookster-Logo3.0.png" class="bookster-logo">
    </a>

        <img src="../resources/LoginCardPicture1.png" class="card0-background">

        <a href="/login">
          <button class="login2-btn">Login</button>
        </a>

        <h4 class="welcome2-text">WELCOME</h4>
        <h4 class="have-account">Already have an account?</h4>

    <div class="card-background-elements">

      <div id="card-background">
          <form @submit.prevent="handleSubmit" class="signup-form">
            <div class="form-group">
              <svg xmlns="http://www.w3.org/2000/svg" class="user2-icon" height="1em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                <input type="username" class="input-btn" v-model="username" placeholder="Username"/>
            </div>

            <div class="form-group">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" class="age-icon"><path d="M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V287.8L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V384H144z"/></svg>
                <input type="age" class="input-btn" v-model="age" placeholder="Age"/>
            </div>

            <div class="form-group">
              <svg xmlns="http://www.w3.org/2000/svg" class="password2-icon" height="1em" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
                <input type="password" class="input-btn" v-model="password" placeholder="Password"/>
            </div>

            <div class="form-group">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" class="confirm-password-icon"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
                <input type="password" class="input-btn" v-model="password_confirm" placeholder="Confirm Password"/>
            </div>

            <button class="input-btn signup-btn">SIGN UP</button>
        </form>
      </div>
    </div>

    <img src="../resources/LoginCardPicture6.png" class="card1-background">
  </div>
  -->

<!-- LOGIN TEMPLATE -->
  <div>
    <div class="middle-card">
      <div class="card-content">
        <form @submit.prevent="handleSubmit2" class="login-form">
            <h4 class="no-account">Already have an account?</h4>
            <h4 class="welcome-text">WELCOME</h4>

            <div class="card-inputs">
              <div class="form-group">
                <svg xmlns="http://www.w3.org/2000/svg" class="user-icon" height="1em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                  <input type="username" class="input-btn" v-model="username" placeholder="Username"/>
              </div>

              <div class="form-group">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" class="age-icon"><path d="M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V287.8L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V384H144z"/></svg>
                  <input type="age" class="input-btn" v-model="age" placeholder="Age"/>
              </div>

              <div class="form-group">
                <svg xmlns="http://www.w3.org/2000/svg" class="password-icon" height="1em" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
                  <input type="password" class="input-btn" v-model="password" placeholder="Password"/>
              </div>

              <div class="form-group">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" class="confirm-password-icon"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
                  <input type="password" class="input-btn" v-model="password_confirm" placeholder="Confirm Password"/>
              </div>

              <button class="input-btn signup-btn">SIGN UP</button>
            </div>
        </form>

        <a href="/about">
          <img src="../resources/Bookster-Logo3.0.png" class="bookster-logo">
        </a>

        <!--
        <a href="/register">
          <button class="signup2-btn">Sign up</button>
        </a>
        -->

        <a href="/login">
          <button class="login2-btn">Login</button>
        </a>
      </div>

      <div class="cardpic-black-background">
      <img src="../resources/LoginCardPicture1.png" class="card0-background2">
      <div id="card2-background"></div>
      </div>
    </div>

    <img src="../resources/LoginCardPicture6.png" class="card1-background">
    <div id="card0-background"></div>
  </div>

</template>

<script>
import { Api } from '../Api'
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
    async handleSubmit2() {
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
        allocationCategories: null,
        username: this.username
      })

      const userHATEOASExample = await Api.post(`/users/${this.user}/progress/add`, {
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
    // NavComponent
  }
}
</script>

<style>
.card-inputs {
  position: relative;
  top: -10vh;
  left: 0vw;
}

.age-icon {
  position: absolute;
  top: 10.5vh;
  left: -1.4vw;
}

.confirm-password-icon {
  position: absolute;
  top: 26vh;
  left: -1.4vw;
}

.signup-btn {
  position: relative;
  left: 3.3vw;
  top: 0vh;
}

.login2-btn {
  border-radius: 3vh;
    position: relative;
    left: 45.4vw;
    top: 40vh;
    z-index: 20;
    width: 60px;
}
</style>
