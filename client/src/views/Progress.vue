<template>
        <form @submit.prevent="handleBookSubmit">
        <h3>{{user}}'s progress:</h3>
        <h3>{{progress}}</h3>
    </form>
</template>

<script>
import axios from 'axios'
import UtilsComponent from '../components/UtilsComponent.vue'
export default {
  name: 'ProgressPage',
  data() {
    return {
      user: UtilsComponent.methods.getUsername(),
      progress: null
    }
  },
  async created() {
    const result = await axios.get(`http://localhost:3000/api/users/${this.user}/progress`)
    this.progress = result.data

    UtilsComponent.methods.setCurrentPageState('Progress') // NOTE: May have to change to 'name: ProgressPage'
  }
}
</script>
