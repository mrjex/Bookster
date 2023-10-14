<template>
  <div class="background-forest d-flex align-items-center justify-content-center">
    <div class="outer-container p-2">
      <div class="form-content">
        <img src="../resources/Bookster-Logo3.0.png" class="bookster-logo p-2">
        <div class="d-flex align-items-center justify-content-center">
          <div>
            <h4 class="no-account">Don't have an account? <a href="/register">
                Sign up
              </a>
            </h4>
            <h4 class="welcome-text">WELCOME</h4>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center align-items-center py-2" id="loginDetails">
        <div class="form-frontend">
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <BIconPersonCircle class="mx-2" />
              <input type="username" class="input-btn" v-model="username" placeholder="Username" />
            </div>
            <div class="form-group">
              <BIconKey class="mx-2" />
              <input type="password" class="input-btn" v-model="password" placeholder="Password" />
            </div>
            <button class="input-btn login-btn float-right">LOGIN</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import NavComponent from '../components/NavComponent.vue'
import UtilsComponent from '../components/UtilsComponent.vue'
import { BIconPersonCircle, BIconKey } from 'bootstrap-vue'

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
    BIconPersonCircle, BIconKey
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
