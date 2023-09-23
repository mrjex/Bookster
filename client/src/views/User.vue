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

export default {
  name: 'User',
  inject: ['user'],
  methods: {
    handleSubmit() {
      this.$router.push(`/users/${this.user}`)
    },
    booksButton() {
      this.$router.push(`${this.$route.path}/books`)
    },
    reviewsButton() {
      this.$router.push(`${this.$route.path}/reviews`)
    },
    progressButton() {
      this.$router.push(`${this.$route.path}/progress`)
    }
  }
}
</script>
