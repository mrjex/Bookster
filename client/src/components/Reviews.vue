<template>
        <form @submit.prevent="handleBookSubmit">
        <h3>{{user}}'s reviews:</h3>
        <h3>{{reviews}}</h3>
    </form>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Reviews',
  data() {
    return {
      user: null,
      reviews: null
    }
  },
  async created() {
    const usernameLength = localStorage.getItem('logged-in-username').length // NOTE: Refactor this later

    if (usernameLength > 0) {
      this.user = localStorage.getItem('logged-in-username')
    } else {
      this.user = null
    }
    const result = await axios.get(`http://localhost:3000/api/users/${this.user}/reviews`)
    this.reviews = result.data.reviews // NOTE: Do result.data to include HATEOAS links
    console.warn(this.reviews)

    localStorage.setItem('current-page', 'Reviews')
  }
}
</script>
