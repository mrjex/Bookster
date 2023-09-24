<template>
  <div>
    <h3>{{ user }}'s progress:</h3>
    <h3>{{ progress }}</h3>
    <BarChart />
    <LineChart />
    <PolarChart />
    <RadarChart />
    <PieChart />
  </div>
</template>

<script>
import { Api } from '../Api'
import RadarChart from './charts/allocation/RadarChart.vue'
import PolarChart from './charts/allocation/PolarChart.vue'
import PieChart from './charts/allocation/PieChart.vue'
import LineChart from './charts/performance/LineChart.vue'
import BarChart from './charts/performance/BarChart.vue'

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
