<template>
    <div>
        <h3>This is your profile, {{user}}</h3>
        <div>
            <button class="btn btn-primary btn-block"
            @click.prevent="booksButton">Your Books</button>
        </div>

        <div>
            <button class="btn btn-primary btn-block"
            @click.prevent="reviewsButton">Your Reviews</button>
        </div>

        <div>
            <button class="btn btn-primary btn-block"
            @click.prevent="progressButton">Your Progress</button>
        </div>
    </div>
</template>

<script>
import UtilsComponent from '../components/UtilsComponent.vue'

export default {
  name: 'User',
  data() {
    return {
      user: UtilsComponent.methods.getUsername()
    }
  },
  created() {
    localStorage.setItem('current-page', 'User')

    if (localStorage.getItem('Test') === 'Refreshable') { // NOTE: Refactor this later
      setTimeout(this.testMethod, 10)
      localStorage.setItem('Test', 'DONE')
    }
  },
  methods: {
    handleSubmit() {
      this.$router.push(`/home/users/${this.user}`)
    },
    booksButton() {
      this.$router.push(`${this.user}/books`)
    },
    reviewsButton() {
      this.$router.push(`${this.user}/reviews`)
    },
    testMethod() { // NOTE: Refactor this later
      window.location.reload()
    },
    progressButton() {
      this.$router.push(`${this.user}/progress`)
    }
  }
}
</script>
