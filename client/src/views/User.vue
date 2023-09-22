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
    UtilsComponent.methods.setCurrentPageState('User')
    UtilsComponent.methods.refreshPage()
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
    progressButton() {
      this.$router.push(`${this.user}/progress`)
    }
  }
}
</script>
