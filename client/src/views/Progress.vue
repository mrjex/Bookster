<template>
<div>
  <!--
  <div style="width: 500px;"><canvas id=radarchart></canvas></div>
  <script type="module" src="../radarchart.js"></script>
  -->
  <!-- <ChartComponent /> -->
  <form @submit.prevent="handleBookSubmit">
    <h3>{{ user }}'s progress:</h3>
    <h3>{{ progress }}</h3>
  </form>
</div>
</template>

<script>
import { Api } from '../Api'
// import ChartComponent from './ChartComponent.vue'
export default {
  name: 'ProgressPage',
  inject: ['user'],
  data() {
    return {
      progress: null
    }
  },
  async created() {
    const result = await Api.get(`/users/${this.user}/progress`)
    this.progress = result.data
    console.warn('PROGRESS PAGE!')
  }
  /*
  components: {
    // ChartComponent,
  }
  */
}
</script>
