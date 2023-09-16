<template>
        <form @submit.prevent="handleBookSubmit">
        <!-- <h3>This is your profile, {{user}}</h3> -->

        <div>
            <button class="btn btn-primary btn-block">TEMPORARY</button>
        </div>

        <div>
            <button class="btn btn-primary btn-block"
            @click.prevent="booksButton">Your Books</button>
        </div>

        <div>
            <button class="btn btn-primary btn-block"
            @click.prevent="reviewsButton">Your Reviews</button>
        </div>
    </form>
</template>

<script>
import axios from 'axios'
export default {
  name: 'User',
  data() {
    return {
      user: null
    }
  },
  created() {
    const usernameLength = localStorage.getItem('logged-in-username').length

    if (usernameLength > 0) {
      this.user = localStorage.getItem('logged-in-username')
    } else {
      this.user = null
    }
  },
  methods: {
    async handleSubmit() {
      this.$router.push(`/home/users/${localStorage.getItem('logged-in-username')}`)
    },
    async booksButton() {
      const result = await axios.get(`http://localhost:3000/api/users/${this.user}/books`)
      const books = result.data.books // Note: Do result.data to include HATEOAS links
      console.warn(books)

      /*
      if (result.status === 200 && result.data.length > 0) {
        console.warn(this.username, this.password)

        localStorage.setItem('logged-in-user', JSON.stringify(result.data[0]))
        localStorage.setItem('logged-in-username', this.username)

        // this.$router.push('/home')
      }
      */
    },
    reviewsButton() {
      console.warn('Reviews!')
      // TODO NEXT: GET Reviews and display books and reviews on front-end website
    }
  }
}
</script>
