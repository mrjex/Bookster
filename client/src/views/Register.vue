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
  /*
  width: 400px;
  height: 290px;
  */
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

  /*
  left: 38.5vw;
  width: 45vh;
  */
  width: 28vh;
  z-index: 15;
}

.icon {
  color: white;
}

/* @media (max-width: 376px) {
.cardpic-black-background {
    left: -41.3vw;
  }

  .card-content {
    left: -28vw;
  }

  .bookster-logo {
    width: 200px;
    left: 60vw;
    top: 6vh;
  }
}

@media (min-width: 376px) {
.cardpic-black-background {
    left: -33.3vw;
  }

  .card-content {
    left: -28vw;
  }

  .bookster-logo {
    top: -1.5vh;
    left: 37.5vw;
    width: 322px;
  }
}

@media (min-width: 410px) {
.cardpic-black-background {
    left: -33.3vw;
  }

  .card-content {
    left: -28vw;
  }

  .bookster-logo {
    top: -1.5vh;
    left: 37.5vw;
    width: 322px;
  }
}

@media (min-width: 450px) {
.cardpic-black-background {
    left: -29vw;
  }

  .card-content {
    left: -25vw;
  }

  .bookster-logo {
    top: -1.5vh;
    left: 37.5vw;
    width: 322px;
  }
}

@media (min-width: 490px) {
.cardpic-black-background {
    left: -27vw;
  }

  .card-content {
    left: -23vw;
  }

  .bookster-logo {
    top: -1.5vh;
    left: 37.5vw;
    width: 322px;
  }
}

@media (min-width: 576px) {
.cardpic-black-background {
    left: -18.5vw;
  }

  .card-content {
    left: -14.5vw;
  }

  .bookster-logo {
    top: -1.5vh;
    left: 37.5vw;
    width: 322px;
  }
}

@media (min-width: 768px) {
  .cardpic-black-background {
    left: -10.5vw;
  }

  .card-content {
    left: -8.5vw;
  }

  .bookster-logo {
    top: -1.5vh;
    left: 37.5vw;
    width: 322px;
  }
}

@media (min-width: 992px) {
  .cardpic-black-background {
    left: -5.5vw;
  }

  .card-content {
    left: -4.5vw;
  }

  .bookster-logo {
    top: -1.5vh;
    left: 37.5vw;
    width: 322px;
  }
}

@media (min-width: 1200px) {
  .cardpic-black-background {
    left: -0.5vw;
  }

  .card-content {
    left: -0.5vw;
  }

  .bookster-logo {
    top: -1.5vh;
    left: 37.5vw;
    width: 322px;
  }
}

@media (min-width: 1400px) {
  .cardpic-black-background {
    left: 0vw;
  }

  .card-content {
    left: 0vw;
  }

  .bookster-logo {
    top: -1.5vh;
    left: 37.5vw;
    width: 322px;
  }
} */
</style>
