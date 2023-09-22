<template>
        <form @submit.prevent="handleBookSubmit">
        <h3>{{user}}'s reviews:</h3>
        <h3>{{reviews}}</h3>
    </form>
</template>

<script>
import axios from 'axios'
import UtilsComponent from '../components/UtilsComponent.vue'

export default {
  name: 'Reviews',
  data() {
    return {
      user: UtilsComponent.methods.getUsername(),
      reviews: null
    }
  },
  async created() {
    const result = await axios.get(`http://localhost:3000/api/users/${this.user}/reviews`)
    this.reviews = result.data.reviews // NOTE: Do result.data to include HATEOAS links
    console.warn(this.reviews)

    UtilsComponent.methods.setCurrentPageState('Reviews')
  }
}
</script>
