<template>
  <form @submit.prevent="handleBookSubmit">
    <b-container>
      <h3 class="text-white">{{user}}'s reviews:</h3>
      <b-row v-for="result in reviews" :key=result.id class="my-4">
        <Review :review=result >
        </Review>
      </b-row>
    </b-container>
  </form>
</template>

<script>
import Review from '../components/UserPageReview'
import { Api } from '../Api'

export default {
  name: 'Reviews',
  inject: ['user'],
  components: { Review },
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
