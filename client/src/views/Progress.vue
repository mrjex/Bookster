<template>
  <div>
    <h3>{{ user }}'s progress:</h3>
    <h3>{{ progress }}</h3>
    <PieChart />
    <BarChart />
    <LineChart />
    <PolarChart />
    <RadarChart />
  </div>
</template>

<script>
import { Api } from '../Api'
import RadarChart from './charts/RadarChart.vue'
import PolarChart from './charts/PolarChart.vue'
import LineChart from './charts/LineChart.vue'
import BarChart from './charts/BarChart.vue'
import PieChart from './charts/PieChart.vue'

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
    console.warn(this.progress)
  },
  components: {
    RadarChart,
    PolarChart,
    LineChart,
    BarChart,
    PieChart
  }
}
</script>
