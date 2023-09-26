<template>
  <div>
<div>
  <b-dropdown id="dropdown-grouped" text="CHARTS" class="chart-dropdown">
    <b-dropdown-group id="dropdown-group-1" header="Performance Charts">
      <b-dropdown-item-button class="chartButton LineChart" @click="selectedPerformanceChart = 'LineChart'">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"/></svg>
        Line Chart </b-dropdown-item-button>

      <b-dropdown-item-button class="chartButton BarChart" @click="selectedPerformanceChart = 'BarChart'">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32zM160 224c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm128-64V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm64 32c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32zM480 96V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7 14.3-32 32-32s32 14.3 32 32z"/></svg>
        Bar Chart</b-dropdown-item-button>
    </b-dropdown-group>
    <b-dropdown-group id="dropdown-group-2" header="Allocation Charts">
      <b-dropdown-item-button class="chartButton RadarChart" @click.prevent="radarChart">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M37.6 4.2C28-2.3 15.2-1.1 7 7s-9.4 21-2.8 30.5l112 163.3L16.6 233.2C6.7 236.4 0 245.6 0 256s6.7 19.6 16.6 22.8l103.1 33.4L66.8 412.8c-4.9 9.3-3.2 20.7 4.3 28.1s18.8 9.2 28.1 4.3l100.6-52.9 33.4 103.1c3.2 9.9 12.4 16.6 22.8 16.6s19.6-6.7 22.8-16.6l33.4-103.1 100.6 52.9c9.3 4.9 20.7 3.2 28.1-4.3s9.2-18.8 4.3-28.1L392.3 312.2l103.1-33.4c9.9-3.2 16.6-12.4 16.6-22.8s-6.7-19.6-16.6-22.8L388.9 198.7l25.7-70.4c3.2-8.8 1-18.6-5.6-25.2s-16.4-8.8-25.2-5.6l-70.4 25.7L278.8 16.6C275.6 6.7 266.4 0 256 0s-19.6 6.7-22.8 16.6l-32.3 99.6L37.6 4.2z"/></svg>
        Radar Chart</b-dropdown-item-button>
      <b-dropdown-item-button class="chartButton PolarChart" @click.prevent="polarChart">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
        Polar Chart</b-dropdown-item-button>

      <b-dropdown-item-button class="chartButton PieChart" @click.prevent="pieChart">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M304 240V16.6c0-9 7-16.6 16-16.6C443.7 0 544 100.3 544 224c0 9-7.6 16-16.6 16H304zM32 272C32 150.7 122.1 50.3 239 34.3c9.2-1.3 17 6.1 17 15.4V288L412.5 444.5c6.7 6.7 6.2 17.7-1.5 23.1C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272zm526.4 16c9.3 0 16.6 7.8 15.4 17c-7.7 55.9-34.6 105.6-73.9 142.3c-6 5.6-15.4 5.2-21.2-.7L320 288H558.4z"/></svg>
        Pie Chart</b-dropdown-item-button>
    </b-dropdown-group>
  </b-dropdown>
</div>

    <header>
      <!-- <Navbar /> -->
    </header>

    <h3>{{ user }}'s progress:</h3>

    <div name="performanceSection">
      <div v-if="selectedPerformanceChart === 'LineChart'">
        <LineChart :chartData="chartDataPerformance" />
      </div>
      <div v-else-if="selectedPerformanceChart === 'BarChart'">
        <BarChart :chartData="chartDataPerformance" />
      </div>

        <form @submit.prevent="pushPerformanceData">
          <div class="form-group">
              <label>Today's Progress</label>
              <input type="today-progress" class="form-control" v-model="performanceInput" placeholder="Progress"/>
          </div>
          <button class="addChartValueBtn addPerformanceBtn btn btn-primary btn-block">PUSH DATA</button>
        </form>
    </div>

    <div name="allocationSection">
      <div v-if="selectedAllocationChart === 'RadarChart'">
        <RadarChart :chartData="chartDataAllocation" />
      </div>
      <div v-else-if="selectedAllocationChart === 'PolarChart'">
        <PolarChart :chartData="chartDataAllocation" />
      </div>
      <div v-else-if="selectedAllocationChart === 'PieChart'">
        <PieChart :chartData="chartDataAllocationPie" />
      </div>

          <form @submit.prevent="pushAllocationData">
            <div class="form-group">
                <label>New Category</label>
                <input type="new-category" class="form-control" v-model="newCategoryInput" placeholder="New-Category"/>

                <label>Completed Books</label>
                <input type="completed-books" class="form-control" v-model="completedBooksInput" placeholder="Completed-Books"/>
            </div>
            <button class="addChartValueBtn addAllocationBtn btn btn-primary btn-block">PUSH DATA</button>
        </form>
    </div>
  </div>
</template>

<script>
import { Api } from '../Api'
import RadarChart from './charts/allocation/RadarChart.vue'
import PolarChart from './charts/allocation/PolarChart.vue'
import PieChart from './charts/allocation/PieChart.vue'
import LineChart from './charts/performance/LineChart.vue'
import BarChart from './charts/performance/BarChart.vue'
// import Navbar from '../components/NavbarComponent.vue'

export default {
  name: 'ProgressPage',
  inject: ['user'],
  data() {
    return {
      progress: null,
      performanceInput: null,
      newCategoryInput: null,
      completedBooksInput: null,
      performanceDataPoints: null,
      selectedPerformanceChart: 'LineChart',
      selectedAllocationChart: 'RadarChart',
      chartDataPerformance: {
        labels: ['Day 0'],
        datasets: [
          {
            label: 'Minutes Read',
            backgroundColor: '#f87979',
            data: [0]
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
    const userProgress = await Api.get(`/users/${this.user}/progress`)

    // If user has added at least one data point to the chart: Read and load the corresponding database-values
    if (userProgress.data[0].performanceCharts.length > 1) {
      this.chartDataPerformance.datasets[0].data = userProgress.data[0].performanceCharts
      this.chartDataPerformance.labels = userProgress.data[0].performanceDateLabels
    }
  },
  components: {
    RadarChart,
    PolarChart,
    LineChart,
    BarChart,
    PieChart
    // Navbar
  },
  methods: {
    lineChart() {
      // console.warn(this.selectedAllocationChart)
    },
    barChart() {
      // console.warn(this.selectedAllocationChart)
    },
    radarChart() {
      this.selectedAllocationChart = 'RadarChart'
    },
    polarChart() {
      this.selectedAllocationChart = 'PolarChart'
    },
    pieChart() {
      this.selectedAllocationChart = 'PieChart'
    },
    pushPerformanceData() {
      this.chartDataPerformance.labels.push('Day X') // TODO: Connect with current Date: Load with data - Database
      this.chartDataPerformance.datasets[0].data.push(this.performanceInput)

      this.updateChartProgressDB()
    },
    pushAllocationData() {
      this.chartDataAllocation.labels.push(this.newCategoryInput)
      this.chartDataAllocation.datasets[0].data.push(this.completedBooksInput)
      this.chartDataAllocation.datasets[1].data.push(0)

      this.chartDataAllocationPie.labels.push(this.newCategoryInput)
      this.chartDataAllocationPie.datasets[0].data.push(this.completedBooksInput)

      this.updateChartProgressDB()
    },
    updateChartProgressDB() {
      Api.put(`/users/${this.user}/progress`, {
        performanceCharts: this.chartDataPerformance.datasets[0].data,
        performanceDateLabels: this.chartDataPerformance.labels,
        allocationChartsCurrent: this.chartDataAllocation.datasets[0].data,
        allocationChartsLastMonth: this.chartDataAllocation.datasets[1].data,
        allocationChartPie: this.chartDataAllocationPie.datasets[0].data,
        allocationCategories: this.chartDataAllocation.labels,
        username: this.user
      })
    }
  }
}
</script>

<style scoped>
.addChartValueBtn {
  border: none;
  margin: 20px;
  padding: 24px;
  width: 220px;
  font-family: "monsterrat", sans-serif;
  border-radius: 6px;
  cursor: pointer;
  background-size: 200%;
}

.addPerformanceBtn {
  background-image: linear-gradient(to left, #FFC312, #EE5A24,#FFC312);
}

.addAllocationBtn {
  background-image: linear-gradient(to left, #12CBC4, #0652DD,#12CBC4);
}
</style>

<!--
<style scoped>
.chartButton {
  background-color: rgb(69, 52, 179);
}
</style>
-->

<!--
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
-->
