<template>
        <form @submit.prevent="handleBookSubmit">
        <h3>This is your profile, {{user}}</h3>

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
      this.$router.push(`${this.user}/books`)
    },
    async reviewsButton() {
      this.$router.push(`${this.user}/reviews`)
    }
  }
}
</script>
