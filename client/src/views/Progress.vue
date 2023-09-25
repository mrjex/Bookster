<template>
  <div>
    <header>
      <Navbar />
    </header>
    <div v-if="user === 'bob'">
      <h3>YOOO BOB</h3>
    </div>

    <h3>{{ user }}'s progress:</h3>
    <h3>{{ progress }}</h3>
    <BarChart :chartData="chartDataPerformance" />
    <LineChart :chartData="chartDataPerformance" />
    <b-button @click.prevent="addStuff">Add datapoint</b-button>

    <PolarChart :chartData="chartDataAllocation" />
    <RadarChart :chartData="chartDataAllocation" />
    <PieChart :chartData="chartDataAllocationPie" />
    <b-button @click.prevent="addStuff2">Add datapoint</b-button>
  </div>
</template>

<script>
import { Api } from '../Api'
import RadarChart from './charts/allocation/RadarChart.vue'
import PolarChart from './charts/allocation/PolarChart.vue'
import PieChart from './charts/allocation/PieChart.vue'
import LineChart from './charts/performance/LineChart.vue'
import BarChart from './charts/performance/BarChart.vue'
import Navbar from '../components/NavbarComponent.vue'

export default {
  name: 'ProgressPage',
  inject: ['user'],
  data() {
    return {
      progress: null,
      chartDataPerformance: {
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
            hidden: false,
            backgroundColor: '#f87979',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
          }
        ]
      },
      chartDataAllocation: {
        labels: [
          'Finances',
          'Emotional Intelligence',
          'Mathematics',
          'Coding',
          'Negotiation',
          'Leadership',
          'Business',
          'Productivity'
        ],
        datasets: [
          {
            // backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
            label: 'Current Month',
            backgroundColor: 'rgba(179,181,198,0.2)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [65, 59, 90, 81, 56, 55, 40, 38]
          },
          {
            label: 'Last Month',
            backgroundColor: 'rgba(255,99,132,0.2)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [28, 48, 40, 19, 96, 27, 100, 65]
          }
        ]
      },
      // Seperate handling of Pie Chart due to differences of front-end structure
      chartDataAllocationPie: {
        labels: ['Finances', 'Emotional Intelligence', 'Mathematics', 'Coding', 'Negotiation', 'Leadership', 'Business', 'Productivity'],
        datasets: [
          {
            backgroundColor: ['#AAF0D1', '#40E0D0', '#CCFFFF', '#81D8D0', '#AAF0D1', '#81D8D0', '#007C80', '#1F6357'],
            data: [40, 20, 80, 10, 35, 57, 63, 94]
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
    PieChart,
    Navbar
  },
  methods: {
    addStuff() {
      this.chartDataPerformance.labels.push('Day 13')
      this.chartDataPerformance.datasets[0].data.push(60)
    },
    addStuff2() {
      this.chartDataAllocation.labels.push('NewCategory')
      this.chartDataAllocation.datasets[0].data.push(90)
      this.chartDataAllocation.datasets[1].data.push(0)

      this.chartDataAllocationPie.labels.push('NewCategory')
      this.chartDataAllocationPie.datasets[0].data.push(90)
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'montserrat', sans-serif;
}

header {
  width: 100vw;
  background-color: #222;
  padding: 20px;

}
</style>
