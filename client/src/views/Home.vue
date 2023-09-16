<template>
    <form @submit.prevent="handleSubmit">
        <h3>Home</h3>
        <button class="btn btn-primary btn-block">Profile</button>

         <div>
           <h3 v-if="user">Hi, {{user}}</h3>
           <h3 v-if="!user">You are not logged in</h3>
        </div>
    </form>
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'

export default {
  name: 'home',
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
    },
    handleSubmit() {
      this.$router.push(`/home/users/${localStorage.getItem('logged-in-username')}`)
    }
  }
}
</script>

<style>
.btn_message {
  margin-bottom: 1em;
}
</style>
