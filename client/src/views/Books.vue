<template>
        <form @submit.prevent="handleBookSubmit">
        <h3>{{user}}'s books:</h3>
        <h3>{{books}}</h3>
    </form>
</template>

<script>
import axios from 'axios'
import UtilsComponent from '../components/UtilsComponent.vue'

export default {
  name: 'Books',
  data() {
    return {
      user: UtilsComponent.methods.getUsername(),
      books: null
    }
  },
  async created() {
    const result = await axios.get(`http://localhost:3000/api/users/${this.user}/books`)
    this.books = result.data.books // NOTE: Do result.data to include HATEOAS links
    console.warn(this.books)

    UtilsComponent.methods.setCurrentPageState('Books')
  }
}
</script>
