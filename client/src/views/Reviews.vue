<template>
        <form @submit.prevent="handleBookSubmit">
        <h3>{{user}}'s reviews:</h3>
        <h3>{{reviews}}</h3>
    </form>
</template>

<script>
import { Api } from '../Api'
export default {
  name: 'Reviews',
  inject: ['user'],
  data() {
    return {
      reviews: null
    }
  },
  async created() {
    const result = await Api.get(`/users/${this.user}/reviews`)
    this.reviews = result.data.reviews // NOTE: Do result.data to include HATEOAS links
    console.warn(this.reviews)
  }
}
</script>
