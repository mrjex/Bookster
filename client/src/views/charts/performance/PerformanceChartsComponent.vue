<template>
  <div>
    <LineChart />
    <BarChart />

    <h2>Performance Charts Component</h2>

        <form @submit.prevent="handleSubmit">

        <h3>Add new data:</h3>
        <div class="form-group">
            <label>Day label</label>
            <input type="dayLabel" class="form-control" v-model="dayLabel" placeholder="Day label"/>
        </div>

        <div class="form-group">
            <label>Data</label>
            <input type="dataValue" class="form-control" v-model="dataValue" placeholder="Data"/>
        </div>

        <button class="btn btn-primary btn-block">Submit Data </button>
    </form>
  </div>
</template>

<script>
import LineChart from './LineChart.vue'
import BarChart from './BarChart.vue'

export default {
  name: 'PerformanceChartsComponent',
  provide() {
    return { chartDataTest: this.chartData, chartOptionsTest: this.chartOptions }
  },
  data() {
    return {
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
            data: [40, 39, 10, 40, 39, 73, 40, 20, 7, 3, 24, 37]
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  components: {
    LineChart,
    BarChart
  }
}
</script>
