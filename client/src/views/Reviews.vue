<template>
  <div>
    <form @submit.prevent="handleBookSubmit">
      <b-container>
        <h3 class="text-white">{{ user }}'s reviews:</h3>
        <b-button class="float-right" variant="danger" v-b-modal="'clear-modal'">Clear All</b-button>
        <br />
        <span v-if="!reviews.length" class="text-white">You have no reviews</span>
        <b-row v-for="result in reviews" :key=result.id class="my-4">
          <Review :review=result>
          </Review>
        </b-row>
      </b-container>
    </form>
    <b-modal title="Are you sure?" id="clear-modal" ok-variant="danger" @ok="clearReviews">
      This will permanently clear all your reviews
    </b-modal>
  </div>
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
      reviews: []
    }
  },
  methods: {
    async clearReviews() {
      await Api.delete('/reviews', { data: { username: this.user } })
      this.reviews = []
      this.$bvToast.toast('Success', {
        title: 'Cleared all reviews',
        autoHideDelay: 5000,
        appendToast: false
      })
    }
  },
  async created() {
    const result = await Api.get(`/users/${this.user}/reviews`)
    this.reviews = result.data.reviews // NOTE: Do result.data to include HATEOAS links
  }
}
</script>
