<template>
  <div>
    <form @submit.prevent="handleSubmit" class="signup-form">
        <!-- <div>
            <NavComponent />
        </div> -->
        <h4 class="welcome2-text">WELCOME</h4>

        <h4 class="have-account">Already have an account?</h4>

        <div class="form-group">
          <svg xmlns="http://www.w3.org/2000/svg" class="user2-icon" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
            <input type="username" class="input-btn" v-model="username" placeholder="Username"/>
        </div>

         <div class="form-group">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" class="age-icon"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V287.8L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V384H144z"/></svg>
            <input type="age" class="input-btn" v-model="age" placeholder="Age"/>
        </div>

        <div class="form-group">
          <svg xmlns="http://www.w3.org/2000/svg" class="password2-icon" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
            <input type="password" class="input-btn" v-model="password" placeholder="Password"/>
        </div>

        <div class="form-group">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" class="confirm-password-icon"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
            <input type="password" class="input-btn" v-model="password_confirm" placeholder="Confirm Password"/>
        </div>

        <button class="input-btn signup-btn">SIGN UP</button>
    </form>

      <a href="/about">
        <img src="../resources/Bookster-Logo3.0.png" class="bookster-logo">
      </a>

    <a href="/login">
      <button class="login2-btn">Login</button>
    </a>

    <div class="card-background-elements">
      <img src="../resources/LoginCardPicture1.png" class="card0-background">
      <div id="card-background"></div>
    </div>

    <img src="../resources/LoginCardPicture6.png" class="card1-background">
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
.input-btn {
  border-radius: 3vh;
  background-image: linear-gradient(to left, #7DCFCB, #A27CCF);
  /*
  background-image: linear-gradient(to left, #7DCFCB, #A27CCF,#7DCFCB);
  */
}

.card0-background {
  position: absolute;
  left: 35vw;
  top: 13vh;
  z-index: 8;
  box-shadow: 6px 6px 2px 1px rgba(0, 0, 0, 0.2);
}

#card-background {
  background-color: #073438;
  width: 400px;
  height: 300px;
  position: absolute;
  left: 35vw;
  top: 45vh;
  border-radius: 0.8vw;
  box-shadow: 6px 6px 2px 1px rgba(0, 0, 0, 0.2);
  z-index: 9;
}

.signup-btn {
  width: 80px;
  position: absolute;
  top: 24.5vh;
  left: 3vw;
}

.signup-form {
  position: absolute;
  top: 62.5vh;
  left: 42vw;
  z-index: 20;
}

.login2-btn {
  position: relative;
  left: 46vw;
  top: 40vh;
  z-index: 35;
  border-radius: 3vh;
  background-color: #e3e3e3;
}

.user2-icon {
  position: absolute;
  top: 0.84vh;
  left: -1.2vw;
}

.age-icon {
  position: absolute;
  top: 7.13vh;
  left: -1.1vw;
}

.password2-icon {
  position: absolute;
  top: 13.2vh;
  left: -1.35vw;
}

.confirm-password-icon {
  position: absolute;
  top: 19.1vh;
  left: -1.35vw;
}

.have-account {
  color: #393939;
  font-weight: 420;
  font-size: 15px;
  position: absolute;
  top: -26vh;
  left: 1.4vw;
}

.welcome2-text {
  color: #ffffff;
  font-weight: 500;
  font-size: 20px;
  position: absolute;
  top: -11vh;
  left: 3.07vw;
}

.bookster-logo {
  position: absolute;
  aspect-ratio: 520 / 376;
  width: 290px;
  /*
  height: 376px;
  */
  top: 1vh;
  left: 38.5vw;
  z-index: 15;
}

.card-background-elements {
  position: relative;
  top: 6.7vh;
}

</style>
