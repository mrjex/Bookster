<template>
        <form @submit.prevent="handleBookSubmit">
        <h3>{{user}}'s progress:</h3>
        <h3>{{progress}}</h3>
    </form>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ProgressPage',
  inject: ['user'],
  data() {
    return {
      progress: null
    }
  },
  async created() {
    const result = await axios.get(`http://localhost:3000/api/users/${this.user}/progress`)
    this.progress = result.data
  }
}
</script>
