<template>
        <form @submit.prevent="handleBookSubmit">
        <h3>{{user}}'s books:</h3>
        <h3>{{books}}</h3>
    </form>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Books',
  data() {
    return {
      user: null,
      books: null
    }
  },
  async created() {
    const usernameLength = localStorage.getItem('logged-in-username').length // NOTE: Refactor this later

    if (usernameLength > 0) {
      this.user = localStorage.getItem('logged-in-username')
    } else {
      this.user = null
    }
    const result = await axios.get(`http://localhost:3000/api/users/${this.user}/books`)
    this.books = result.data.books // NOTE: Do result.data to include HATEOAS links
    console.warn(this.books)
  }
}
</script>
