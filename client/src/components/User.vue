<template>
    <form @submit.prevent="handleSubmit">
        <h3>Profile! GG</h3>
        <button class="btn btn-primary btn-block">Profile</button>
    </form>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'User',
  data() {
    return {
      user: null
    }
  },
  methods: {
    async handleSubmit() {
      this.$router.push(`/home/users/${localStorage.getItem('logged-in-username')}`)
    }
  }
}
</script>
