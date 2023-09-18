<template>
  <div>
    <h3>Home</h3>
    <h3 v-if="user">Hi, {{user}}</h3>
    <h3 v-if="!user">You are not logged in</h3>
    <OnSiteComponent />
    <!--
    <div>
      <button class="btn btn-primary btn-block"
      @click.prevent="profileButton">Profile</button>
    </div>
    -->
  </div>
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'
import OnSiteComponent from '../components/OnSiteComponent.vue'

export default {
  name: 'Home',
  data() {
    return {
      user: null
    }
  },
  created() { // Note: Refactor this method later (since it's used in User.vue also)
    const usernameLength = localStorage.getItem('logged-in-username').length

    if (usernameLength > 0) {
      this.user = localStorage.getItem('logged-in-username')
    } else {
      this.user = null
    }
    localStorage.setItem('current-page', 'Home')
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
    /*
    profileButton() {
      this.$router.push(`/home/users/${this.user}`) //
    }
    */
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
