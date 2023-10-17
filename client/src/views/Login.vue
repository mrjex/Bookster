<template>
  <div class="background-forest d-flex align-items-center justify-content-center">
    <div id="outer-container" class="p-2">
      <div class="form-content">
        <a href="/about">
          <img src="../resources/Bookster-Logo3.0.png" class="bookster-logo p-2">
        </a>
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
              <BIconPersonCircle class="mx-2 auth-icon" />
              <input type="username" class="input-btn" v-model="username" placeholder="Username" />
            </div>
            <div class="form-group">
              <BIconKey class="mx-2 auth-icon" />
              <input type="password" class="input-btn" v-model="password" placeholder="Password" />
            </div>
            <button class="input-btn float-right">LOGIN</button>
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

<style scoped>

#loginDetails {
  background-color: #073438;
  border-radius: 0.8vw;
  box-shadow: 6px 6px 2px 1px rgba(0, 0, 0, 0.2);
}

#outer-container {
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

button {
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
</style>
