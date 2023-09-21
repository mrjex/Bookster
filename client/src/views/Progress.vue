<template>
        <form @submit.prevent="handleBookSubmit">
        <h3>{{user}}'s progress:</h3>
        <h3>{{progress}}</h3>
    </form>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Progress ',
  data() {
    return {
      user: null,
      progress: null
    }
  },
  async created() {
    const usernameLength = localStorage.getItem('logged-in-username').length // NOTE: Refactor this later

    if (usernameLength > 0) {
      this.user = localStorage.getItem('logged-in-username')
    } else {
      this.user = null
    }
    const result = await axios.get(`http://localhost:3000/api/users/${this.user}/progress`)
    this.progress = result.data

    localStorage.setItem('current-page', 'Progress')
  }
}
</script>
