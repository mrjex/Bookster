<template>
  <div>
    <div class="middle-card">
      <div class="card-content">
        <form @submit.prevent="handleSubmit" class="login-form">
            <!-- <div>
                <NavComponent />
            </div> -->

            <h4 class="no-account">Don't have an account?</h4>
            <h4 class="welcome-text">WELCOME</h4>

            <div class="form-frontend">
              <div class="form-group">
                <svg xmlns="http://www.w3.org/2000/svg" class="user-icon" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                  <input type="username" class="input-btn" v-model="username" placeholder="Username"/>
              </div>

              <div class="form-group">
                <svg xmlns="http://www.w3.org/2000/svg" class="password-icon" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
                  <input type="password" class="input-btn" v-model="password" placeholder="Password"/>
              </div>

              <button class="input-btn login-btn">LOGIN</button>
            </div>
        </form>

        <a href="/about">
          <img src="../resources/Bookster-Logo3.0.png" class="bookster-logo">
        </a>

        <a href="/register">
          <button class="signup2-btn">Sign up</button>
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
// import NavComponent from '../components/NavComponent.vue'
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
        UtilsComponent.methods.setHasAddedAllocationCategory(false)
        this.$router.push('/')
      }
    }
  },
  components: {
    // NavComponent
  }
}
</script>

<style>
#card2-background {
  background-color: #073438;
  width: 400px;
  height: 270px;
  position: absolute;
  left: 35vw;
  top: 55vh;
  border-radius: 0.8vw;
  box-shadow: 6px 6px 2px 1px rgba(0, 0, 0, 0.2);
  z-index: 11;
}

.card0-background2 {
  /*
  width: 400px;
  height: 290px;
  */
  position: absolute;
  left: 35vw;
  top: 23.75vh;
  z-index: 10;
  box-shadow: 6px 6px 2px 1px rgba(0, 0, 0, 0.2);
}

.card1-background {
  position: absolute;
  left: 0vw;
  top: 0vh;
  z-index: -11;
  width: 100vw;
  height: 100vh;
}

.login-form {
  position: absolute;
  top: 57vh;
  left: 41vw;
  z-index: 20;
}

.form-group {
  width: 13vw;
}

.input-btn {
  border-radius: 3vh;
  background-image: linear-gradient(to left, #7DCFCB, #9E7CCF);
}

.login-btn {
  position: relative;
  left: 3.7vw;
}

.signup2-btn {
  position: absolute;
  left: 45.1vw;
  top: 39vh;
  z-index: 35;
  border-radius: 3vh;
  background-color: #e3e3e3;
  width: 70px;
}

.no-account {
  color: #393939;
  font-weight: 420;
  font-size: 15px;
  position: relative;
  top: -21vh;
  left: 1.84vw;
  width: 40vw;
}

.welcome-text {
  color: #ffffff;
  font-weight: 500;
  font-size: 20px;
  position: relative;
  top: -9.5vh;
  left: 3.36vw;
}

.user-icon {
  position: relative;
  top: 3.2vh;
  left: -1.4vw;
}

.password-icon {
  position: relative;
  top: 3.2vh;
  left: -1.35vw;
}

.form-frontend {
  position: relative;
  top: -6vh;
  left: 0.4vw;
}

.cardpic-black-background {
  position: absolute;
}

.card-content {
  position: absolute;
  left: 0vw;
}

.bookster-logo {
  position: absolute;
  top: -1.5vh;
  left: 37.5vw;
  width: 322px;
  /*
  left: 38.5vw;
  width: 45vh;
  */
  height: auto;
  z-index: 15;
}

@media (max-width: 376px) {
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
}
</style>
