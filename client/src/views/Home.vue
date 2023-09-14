<template>
  <div>
    <h3 v-if="user">Hi, {{user.username}}</h3>
    <h3 v-if="!user">You are not logged in</h3>
  </div>
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'
// import axios from 'axios'

export default {
  name: 'home',
  data() {
    return {
      user: null
    }
  },
  /*
  async created() {
    const response = await axios.get('user', {
      headers: {
        Authorization: 'Bearer' + localStorage.getItem('password')
      }
    })

    this.user = response.data
  },
  */
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
  }
}
</script>

<style>
.btn_message {
  margin-bottom: 1em;
}
</style>
