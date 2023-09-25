<template>
  <div>
    <h3>{{ user }}'s progress:</h3>
    <h3>{{ progress }}</h3>
    <BarChart :chartData="chartData" />
    <LineChart :chartData="chartData" />
    <b-button @click.prevent="addStuff">Add Lol</b-button>
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
      progress: null,
      chartData: {
        labels: [
          'Day 1',
          'Day 2',
          'Day 3',
          'Day 4',
          'Day 5',
          'Day 6',
          'Day 7',
          'Day 8',
          'Day 9',
          'Day 10',
          'Day 11',
          'Day 12'
        ],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
          }
        ]
      }
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
  },
  methods: {
    addStuff() {
      this.chartData.labels.push('Day 13')
      this.chartData.datasets[0].data.push(60)
    }
  }
}
</script>
