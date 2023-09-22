<template>
  <div>
    <div>
      <h3>Home</h3>
      <h3 v-if="user">Hi, {{user}}</h3>
      <h3 v-if="!user">You are not logged in</h3>
    </div>

    <OnSiteComponent/>

    <div> <!-- NOTE: Video is not scaleable according to screen-size. FIX THIS LATER!-->
      <video autoplay loop muted class="video">
        <source src="../resources/BookVideo-Group21.mp4" type="video/mp4"/>
      </video>
    </div>
  </div>
</template>

<style>
video{
  z-index: -1000;
  left: 50%;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  object-fit: cover;
}
</style>

<script>
// @ is an alias to /src
import { Api } from '@/Api'
import OnSiteComponent from '../components/OnSiteComponent.vue'
import UtilsComponent from '../components/UtilsComponent.vue'

export default {
  name: 'Home',
  data() {
    return {
      user: UtilsComponent.methods.getUsername()
    }
  },
  created() {
    UtilsComponent.methods.setCurrentPageState('Home')
  },
  methods: {
    getMessage() {
      Api.get('/')
        .then(response => {
          this.message = response.data.message
        })
        .catch(error => {
          this.message = error
        })
    }
  },
  components: {
    OnSiteComponent
  }
}
</script>

<style>
.btn_message {
  margin-bottom: 1em;
}
</style>
