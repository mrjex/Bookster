<template>
  <div>
    <header>
      <Navbar />
    </header>

    <h3 class="username-header">{{ user }}'s progress:</h3>
    <h2 class="chart-header current-performance-chart-text">PERFORMANCE CHART: {{convertToSelectedPerformanceChartHeader()}}</h2>
    <h2 class="chart-header current-allocation-chart-text">ALLOCATION CHART: {{convertToSelectedAllocationChartHeader()}}</h2>

    <div id="page-background"></div>

    <div>
      <img src="../resources/Progress-blob0.svg" class="blob blob0-svg">
      <img src="../resources/Progress-blob1.svg" class="blob blob1-svg">
      <img src="../resources/Progress-blob2.svg" class="blob blob2-svg">
    </div>

    <div class="card-border performance-card"></div>
    <div class="card-border allocation-card"></div>

    <div class="dotted-line performance-dotted-line"></div>
    <div class="dotted-line allocation-dotted-line"></div>

    <div>
      <div>
        <h4 class="dropdown-performance-btn-text">
          SELECT CHART
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 256 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/></svg>
          </h4>
      </div>
      <b-dropdown id="dropdown-dropright" dropright text="" variant="transparent" class="m-2 chart-dropdown-performance">
        <b-dropdown-item class="chartButton" id="linechart-button" @click.prevent="lineChart">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"/></svg>
          Line Chart
        </b-dropdown-item>
        <b-dropdown-item class="chartButton" id="barchart-button" @click.prevent="barChart">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32zM160 224c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm128-64V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm64 32c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32zM480 96V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7 14.3-32 32-32s32 14.3 32 32z"/></svg>
          Bar Chart
          </b-dropdown-item>
      </b-dropdown>
    </div>

    <div class="performanceSection">
      <div v-if="selectedPerformanceChart === 'LineChart'">
        <LineChart :chartData="chartDataPerformance" />
      </div>
      <div v-else-if="selectedPerformanceChart === 'BarChart'">
        <BarChart :chartData="chartDataPerformance" />
      </div>

        <form @submit.prevent="pushPerformanceData" class="performance-form">
          <div class="form-group performance-label-input">
              <label class="input-progress-header">Reading Session</label>
              <input type="today-progress" class="form-control performance-input" v-model="performanceInput" placeholder="Minutes Read"/>
          </div>
          <button class="addChartValueBtn addPerformanceBtn btn btn-primary btn-block">PUSH DATA</button>
        </form>
    </div>

    <div>
      <div>
        <h4 class="dropdown-allocation-btn-text">
          SELECT CHART
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 256 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/></svg>
        </h4>
      </div>
      <b-dropdown id="dropdown-dropright" dropright text="" variant="transparent" class="m-2 chart-dropdown-allocation">
        <b-dropdown-item class="chartButton" id="radarchart-button" @click.prevent="radarChart">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M37.6 4.2C28-2.3 15.2-1.1 7 7s-9.4 21-2.8 30.5l112 163.3L16.6 233.2C6.7 236.4 0 245.6 0 256s6.7 19.6 16.6 22.8l103.1 33.4L66.8 412.8c-4.9 9.3-3.2 20.7 4.3 28.1s18.8 9.2 28.1 4.3l100.6-52.9 33.4 103.1c3.2 9.9 12.4 16.6 22.8 16.6s19.6-6.7 22.8-16.6l33.4-103.1 100.6 52.9c9.3 4.9 20.7 3.2 28.1-4.3s9.2-18.8 4.3-28.1L392.3 312.2l103.1-33.4c9.9-3.2 16.6-12.4 16.6-22.8s-6.7-19.6-16.6-22.8L388.9 198.7l25.7-70.4c3.2-8.8 1-18.6-5.6-25.2s-16.4-8.8-25.2-5.6l-70.4 25.7L278.8 16.6C275.6 6.7 266.4 0 256 0s-19.6 6.7-22.8 16.6l-32.3 99.6L37.6 4.2z"/></svg>
          Radar Chart
        </b-dropdown-item>
        <b-dropdown-item class="chartButton" id="polarchart-button" @click.prevent="polarChart">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
          Polar Chart
          </b-dropdown-item>
          <b-dropdown-item class="chartButton" id="piechart-button" @click.prevent="pieChart">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M304 240V16.6c0-9 7-16.6 16-16.6C443.7 0 544 100.3 544 224c0 9-7.6 16-16.6 16H304zM32 272C32 150.7 122.1 50.3 239 34.3c9.2-1.3 17 6.1 17 15.4V288L412.5 444.5c6.7 6.7 6.2 17.7-1.5 23.1C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272zm526.4 16c9.3 0 16.6 7.8 15.4 17c-7.7 55.9-34.6 105.6-73.9 142.3c-6 5.6-15.4 5.2-21.2-.7L320 288H558.4z"/></svg>
          Pie Chart
          </b-dropdown-item>
      </b-dropdown>
    </div>

    <div class="allocationSection">
      <div v-if="selectedAllocationChart === 'RadarChart'">
        <RadarChart :chartData="chartDataAllocation" />
      </div>
      <div v-else-if="selectedAllocationChart === 'PolarChart'">
        <PolarChart :chartData="chartDataAllocation" />
      </div>
      <div v-else-if="selectedAllocationChart === 'PieChart'">
        <PieChart :chartData="chartDataAllocationPie" />
      </div>

          <form @submit.prevent="pushAllocationData" class="allocation-form">
            <div class="form-group allocation-inputs">

                <!-- <label class="new-category-label">New Category</label> -->
                <input type="new-category" class="form-control add-category-field" v-model="newCategoryInput" placeholder="Book Category"/>

                  <!-- <label class="completed-books-label">Completed Books</label> -->
                  <input type="completed-books" class="form-control add-book-quantity-field" v-model="completedBooksInput" placeholder="Number Of Books"/>
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
import Navbar from '../components/NavbarComponent.vue'
import UtilsComponent from '../components/UtilsComponent.vue'

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
      selectedChartDropdownColor: '#7CCF8A',
      unselectedChartDropdownColor: '#ffffff',
      previouslySelectedPerformanceChartId: UtilsComponent.methods.getCurrentPerformanceChartButtonId(),
      previouslySelectedAllocationChartId: UtilsComponent.methods.getCurrentAllocationChartButtonId(),
      selectedPerformanceChart: UtilsComponent.methods.getCurrentPerformanceChart(),
      selectedAllocationChart: UtilsComponent.methods.getCurrentAllocationChart(),
      chartDataPerformance: {
        labels: ['Day 0'],
        datasets: [
          {
            label: 'Minutes Read',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            data: [0],
            borderColor: '#C82D54',
            borderWidth: 7
          }
        ]
      },
      chartDataAllocation: {
        labels: ['Finances', 'Mathematics', 'Negotiation'],
        datasets: [
          {
            label: 'Current Month',
            data: [6, 4, 5],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: '#C82D54',
            pointBackgroundColor: '#C82D54',
            pointBorderColor: '#C82D54',
            pointHoverBackgroundColor: '#C82D54',
            pointHoverBorderColor: '#C82D54',
            hoverOffset: 7,
            borderWidth: 7
            // 'rgb(255, 99, 132)'

          /*
            // backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
            pointBackgroundColor: '#41B883',
            label: 'Current Month',
            // backgroundColor: 'rgba(179,181,198,0.2)',
            // pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#FFFB00',
            pointHoverBackgroundColor: '#41B883',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [4, 2, 4],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 1)'
            */
          },
          {
            label: 'Last Month',
            data: [5, 2, 4],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: '#2D42C8',
            pointBackgroundColor: '#2D42C8',
            pointBorderColor: '#2D42C8',
            pointHoverBackgroundColor: '#2D42C8',
            pointHoverBorderColor: '#2D42C8',
            hoverOffset: 7,
            borderWidth: 5
            // 'rgb(54, 162, 235)'

            /*
            label: 'Last Month',
            backgroundColor: 'rgba(255,99,132,0.2)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [3, 1, 4]
            */
          }
        ]
      },
      // Seperate handling of Pie Chart due to differences of front-end structure
      chartDataAllocationPie: {
        labels: ['Finances', 'Mathematics', 'Negotiation'],
        datasets: [
          {
            backgroundColor: [
              '#7DCFCB',
              '#7CCF8A',
              '#CCCF7C',
              '#CF7C7C',
              '#7C84CF',
              '#CF937C',
              '#A27CCF'],
            data: [4, 2, 4],
            hoverOffset: 12,
            borderWidth: 4
          }
        ]
      }
    }
  },
  async created() {
    this.loadCharts()
    UtilsComponent.methods.refreshPage()
    setTimeout(this.initiateColorSelectionOfActiveCharts, 200)
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
    initiateColorSelectionOfActiveCharts() {
      this.colorSelectedButton(UtilsComponent.methods.getCurrentPerformanceChartButtonId())
      this.colorSelectedButton(UtilsComponent.methods.getCurrentAllocationChartButtonId())
    },
    getCurrentDate() {
      const currentDateWithFormat = new Date().toJSON().slice(0, 10).replace(/-/g, '/')
      return currentDateWithFormat

      /*
      // NOTES FOR POSSIBLE UPDATES LATER
      const currentDate = new Date()
      console.warn(currentDate)
      const currentYear = currentDateWithFormat.slice(0, 4) // 2023
      const currentMonth = currentDateWithFormat.slice(5, 7) // 09 --> Convert to string month
      console.warn(this.getMonthName(currentMonth))

      const currentDay = currentDateWithFormat.slice(8)
      console.warn(currentDay)
      */
    },
    getMonthName(monthNumber) {
      const date = new Date()
      date.setMonth(monthNumber - 1)
      return date.toLocaleString('en-US', { month: 'long' })
    },
    colorSelectedButton(buttonId) {
      document.querySelector(buttonId).style.backgroundColor = this.selectedChartDropdownColor
    },
    colorUnselectedPerformanceButton(buttonId) {
      if (this.previouslySelectedPerformanceChartId !== 'null' && this.previouslySelectedPerformanceChartId !== buttonId) {
        document.querySelector(this.previouslySelectedPerformanceChartId).style.backgroundColor = this.unselectedChartDropdownColor
      }
      this.previouslySelectedPerformanceChartId = buttonId
    },
    colorUnselectedAllocationButton(buttonId) {
      if (this.previouslySelectedAllocationChartId !== 'null' && this.previouslySelectedAllocationChartId !== buttonId) {
        document.querySelector(this.previouslySelectedAllocationChartId).style.backgroundColor = this.unselectedChartDropdownColor
      }
      this.previouslySelectedAllocationChartId = buttonId
    },
    proccessChart(chartType, buttonId, isPerformanceChart) {
      this.colorSelectedButton(buttonId)

      if (isPerformanceChart) {
        this.selectedPerformanceChart = chartType
        UtilsComponent.methods.setCurrentPerformanceChart(chartType)
        this.colorUnselectedPerformanceButton(buttonId)
      } else {
        this.selectedAllocationChart = chartType
        UtilsComponent.methods.setCurrentAllocationChart(chartType)
        this.colorUnselectedAllocationButton(buttonId)
      }
    },
    lineChart() {
      this.proccessChart('LineChart', '#linechart-button', true)
    },
    barChart() {
      this.proccessChart('BarChart', '#barchart-button', true)
    },
    radarChart() {
      this.proccessChart('RadarChart', '#radarchart-button', false)
    },
    polarChart() {
      this.proccessChart('PolarChart', '#polarchart-button', false)
    },
    pieChart() {
      this.proccessChart('PieChart', '#piechart-button', false)
    },
    getPerformanceChartLabels() {
      return this.chartDataPerformance.labels
    },
    latestLabelIsCurrentDate(currentDate) {
      return this.getPerformanceChartLabels()[this.getPerformanceChartLabels().length - 1] === currentDate
    },
    pushPerformanceData() {
      const currentDate = this.getCurrentDate()
      console.warn(currentDate)

      const newData = parseInt(this.performanceInput)

      if (this.latestLabelIsCurrentDate(currentDate)) {
        this.chartDataPerformance.datasets[0].data[this.chartDataPerformance.datasets[0].data.length - 1] += newData
        UtilsComponent.methods.setRefreshablePageState()
        UtilsComponent.methods.refreshPage()
      } else {
        this.getPerformanceChartLabels().push(currentDate)
        this.chartDataPerformance.datasets[0].data.push(newData)
      }

      this.updateChartProgressDB()
    },
    pushAllocationData() {
      this.refreshPageOnFirstCategoryAddition()

      this.chartDataAllocation.labels.push(this.newCategoryInput)
      this.chartDataAllocation.datasets[0].data.push(this.completedBooksInput)
      this.chartDataAllocation.datasets[1].data.push(0)
      this.updateChartProgressDB()
    },
    updateChartProgressDB() {
      Api.put(`/users/${this.user}/progress`, {
        performanceCharts: this.chartDataPerformance.datasets[0].data,
        performanceDateLabels: this.chartDataPerformance.labels,
        allocationChartsCurrent: this.chartDataAllocation.datasets[0].data,
        allocationChartsLastMonth: this.chartDataAllocation.datasets[1].data,
        allocationCategories: this.chartDataAllocation.labels,
        username: this.user
      })
    },
    // If user has added at least one data point to the chart: Read and load the corresponding database-values
    loadPerformanceChartsData(userProgress) {
      if (this.getProgressData(userProgress).performanceCharts != null && this.getProgressData(userProgress).performanceCharts.length > 1) {
        this.chartDataPerformance.datasets[0].data = this.getProgressData(userProgress).performanceCharts
        this.chartDataPerformance.labels = this.getProgressData(userProgress).performanceDateLabels
      }
    },
    // NOTE: Remove magic value 3 and add it as a variable (allocation charts start with 3 default categories)
    loadAllocationChartsData(userProgress) {
      if (this.getProgressData(userProgress).allocationCategories != null && this.getProgressData(userProgress).allocationCategories.length > 3) {
        this.chartDataAllocation.labels = this.getProgressData(userProgress).allocationCategories
        this.chartDataAllocation.datasets[0].data = this.getProgressData(userProgress).allocationChartsCurrent
        this.chartDataAllocation.datasets[1].data = this.getProgressData(userProgress).allocationChartsLastMonth

        this.chartDataAllocationPie.datasets[0].data = this.getProgressData(userProgress).allocationChartsCurrent
        this.chartDataAllocationPie.labels = this.getProgressData(userProgress).allocationCategories
      }
    },
    getProgressData(userProgress) {
      return userProgress.data[0]
    },
    async loadCharts() {
      const userProgress = await Api.get(`/users/${this.user}/progress`)
      this.loadPerformanceChartsData(userProgress)
      this.loadAllocationChartsData(userProgress)
    },
    refreshPageOnFirstCategoryAddition() {
      if (UtilsComponent.methods.getHasAddedAllocationCategory() === 'false') {
        UtilsComponent.methods.setHasAddedAllocationCategory(true)
        UtilsComponent.methods.setRefreshablePageState()
        UtilsComponent.methods.refreshPage()
      }
    },
    convertToSelectedPerformanceChartHeader() {
      let temp = this.selectedPerformanceChart
      temp = temp.substring(0, temp.length - 5) // NOTE for developers: The length of 'chart' is 5
      return temp.toUpperCase()
    },
    convertToSelectedAllocationChartHeader() {
      let temp = this.selectedAllocationChart
      temp = temp.substring(0, temp.length - 5) // NOTE for developers: The length of 'chart' is 5
      return temp.toUpperCase()
    }
  }
}
</script>

<style scoped>
h3 {
  color: #7dcfcb;
  font-weight: 650;
  text-shadow: rgb(0, 0, 0) 0.3vw 0 0.5vw;
}

.addChartValueBtn {
  width: 110px;
  border: none;
  font-family: "monsterrat", sans-serif;
  font-weight: 600;
  border-radius: 0.7vw;
  cursor: pointer;
  background-size: 200%;
  position: absolute;
}

.addPerformanceBtn {
  background-image: linear-gradient(to left, #7DCFCB, #CCCF7C,#7DCFCB);
  height: 7vh;
}

.addAllocationBtn {
  background-image: linear-gradient(to left, #7DCFCB, #CCCF7C,#7DCFCB);
}

#page-background {
  top: 0vh;
  left: 0vw;
  width: 99vw;
  height: 220vh;
  background-color: #343434;
  position: absolute;
  z-index: -3;
}

#performance-chart-background {
  top: 25vh;
  left: 0.2vw;
  width: 98.8vw;
  height: 77vh;
  background-color: #ffffffd1;
  position: absolute;
  z-index: -2;
  border-radius: 1.4vw;
  border: 0.4vw solid;
  border-color: #CCCF7C;
}

#performance-chart-background2 {
  top: 80.3vh;
  left: 0.2vw;
  width: 98.8vw;
  height: 21vh;
  background-color: #a3a3a3d1;
  position: absolute;
  z-index: -1;
  border-radius: 1.4vw;
}

.performance-input {
  position: absolute;
  top: 65.2vh;
  left: 28vw;
  width: 125px;
  height: 6.5vh;
}

.input-progress-header {
  position: absolute;
  top: 61.5vh;
  left: 28vw;
  color: #CCCF7C;
  width: 130px;
}

#performance-chart-border {
  position: absolute;
  top: 80vh;
  left: 0.3vw;
  width: 98.4vw;
  height: 0.4vw;
  background-color: #CCCF7C;
  z-index: 20;
}

.performanceSection {
  position: absolute;
  top: 25vh;
  left: 14vw;
  width: 70%;
  height: auto;
}

.allocationSection {
  position: absolute;
  top: 126vh;
  top: 127vh;
  left: 0vw;
}

.chart-dropdown-performance {
  position: absolute;
  top: 85vh;
  border: none;
  font-family: "monsterrat", sans-serif;
  font-weight: 600;
  border-radius: 0.7vw;
  background-size: 200%;
  background-image: linear-gradient(to left, #7DCFCB, #7CCF8A,#7DCFCB);
  height: 7vh;
  width: 10vw;
}

.chart-dropdown-allocation {
  position: absolute;
  top: 183vh;
  left: 23vw;
  border: none;
  font-family: "monsterrat", sans-serif;
  font-weight: 600;
  border-radius: 0.7vw;
  background-size: 200%;
  background-image: linear-gradient(to left, #7DCFCB, #7CCF8A,#7DCFCB);
  height: 7vh;
  width: 10vw;
}

.performance-card {
  height: 75vh;
  width: 80vw;
  top: 25vh;
  left: 6vw;
}

.allocation-card {
  height: 75vh;
  width: 80vw;
  top: 125vh;
  left: 6vw;
}

.card-border {
  background: #073438;
  border-radius: 0.5rem;
  position: absolute;
}

.card-border::before,
.card-border::after {
  content: "";
  position: absolute;
  inset: -0.5rem;
  z-index: -1;
    background: linear-gradient(
    var(--gradient-angle),
    #0e4b50,
    #7dcfcbc7,
    #637c54
  );
  border-radius: inherit;
  animation: rotation 10s linear infinite;
}

.card-border::after {
  filter: blur(3.5rem);
}

.performance-dotted-line {
  top: 80vh;
}

.allocation-dotted-line {
  top: 182vh;
}

.dotted-line {
  position: absolute;
  left: 5.95vw;
  width: 80.1vw;
  height: 0.42vh;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%237CCF8AFF' stroke-width='8' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  z-index: 20;
}

.chart-header {
  position: absolute;
  left: 33vw;
  z-index: 30;
  color:#7CCF8A;
  font-size: 2vw;
}

.current-performance-chart-text {
  top: 18vh;
}

.current-allocation-chart-text {
  top: 118vh;
}

.add-category-field {
  position: relative;
  width: 10vw;
  height: 4vh;
  top: 12vh;
  left: 0vw;
}

.add-book-quantity-field {
  width: 10vw;
  height: 4vh;
}

.new-category-label {
  color: #CCCF7C;
  position: relative;
  top: 0.8vh;
}

.completed-books-label {
  color: #CCCF7C;
  position: relative;
  top: 5vh;
  width: 30vw;
}

.performance-form {
  position: absolute;
  top: -2vh;
  left: 8vw;
}

.allocation-form {
  position: absolute;
  top: 56vh;
  left: 13.5vw;
}

.allocation-inputs {
  position: absolute;
}

.username-header {
  position: absolute;
  top: 7vh;
  left: 6vw;
}

.blob0-svg {
  top: -19vh;
  left: 27vw;
  width: 75%;
  -webkit-mask-image: linear-gradient(
    rgb(0 0 0 / 0) 22%,
    rgb(0 0 0 / 0.8) 50%,
    rgb(0 0 0 / 0.3) 70%,
    rgb(0 0 0 / 0.1) 77%,
    rgb(0 0 0 / 0) 80%
  );
  mask-image: linear-gradient(
    rgb(0 0 0 / 0) 22%,
    rgb(0 0 0 / 0.8) 50%,
    rgb(0 0 0 / 0.3) 70%,
    rgb(0 0 0 / 0.1) 77%,
    rgb(0 0 0 / 0) 80%
  );
}

.blob1-svg {
  top: 38vh;
  left: -2vw;
  width: 40%;
    -webkit-mask-image: linear-gradient(
    rgb(0 0 0 / 0) 22%,
    rgb(0 0 0 / 0.8) 50%,
    rgb(0 0 0 / 0.3) 70%,
    rgb(0 0 0 / 0.1) 87%,
    rgb(0 0 0 / 0) 94%
  );
  mask-image: linear-gradient(
    rgb(0 0 0 / 0) 22%,
    rgb(0 0 0 / 0.8) 50%,
    rgb(0 0 0 / 0.3) 70%,
    rgb(0 0 0 / 0.1) 87%,
    rgb(0 0 0 / 0) 94%
  );
}

.blob2-svg {
  top: 102vh;
  left: -4vw;
  width: 50%;
    -webkit-mask-image: linear-gradient(
    rgb(0 0 0 / 0) 4%,
    rgb(0 0 0 / 0.85) 25%,
    rgb(0 0 0 / 0.3) 70%,
    rgb(0 0 0 / 0.1) 77%,
    rgb(0 0 0 / 0) 80%
  );
  mask-image: linear-gradient(
    rgb(0 0 0 / 0) 4%,
    rgb(0 0 0 / 0.85) 25%,
    rgb(0 0 0 / 0.3) 70%,
    rgb(0 0 0 / 0.1) 77%,
    rgb(0 0 0 / 0) 80%
  );
}

.blob {
  position: absolute;
  height: auto;
  z-index: -2;
}

.dropdown-performance-btn-text {
  color: #fff;
  font-weight: 650;
  position: absolute;
  z-index: 30;
  pointer-events: none;
}

.dropdown-allocation-btn-text {
  color: #fff;
  font-weight: 650;
  position: absolute;
  z-index: 30;
  pointer-events: none;
}

.performance-label-input {
  position: absolute;
  left: 0vw;
}

@media (min-width: 279px) {
  .blob0-svg {
    top: 35vh;
  }

  .blob2-svg {
    top: 115vh;
  }

  .allocationSection {
    left: 5.9vw;
  }

  .chart-dropdown-performance {
    left: 5vw;
  }

  .chart-dropdown-allocation {
    left: 5vw;
  }

  .dropdown-performance-btn-text {
    font-size: 0;
  }

  .dropdown-allocation-btn-text {
    font-size: 0vw;
  }

  .performance-label-input {
    top: -3vh;
  }

  .addPerformanceBtn {
    top: 69.25vh;
    left: 28.6vw;
  }

  .addAllocationBtn {
    top: 11.3vh;
    left: 26vw;
    height: 5vh;
  }

  .allocation-inputs {
    top: 0vh;
    left: 15vw;
  }

  h3 {
    font-size: 2.85vw;
  }

  input,
  input::placeholder {
  font: 0.45rem sans-serif;
  }
}

@media (min-width: 374px) {
  .blob0-svg {
    top: 35vh;
  }

  .blob2-svg {
    top: 115vh;
  }

  .allocationSection {
    left: 5.9vw;
  }

  .chart-dropdown-performance {
    left: 5vw;
  }

  .chart-dropdown-allocation {
    left: 5vw;
  }

  .dropdown-performance-btn-text {
    font-size: 0;
  }

  .dropdown-allocation-btn-text {
    font-size: 0vw;
  }

  .performance-label-input {
    top: -3vh;
  }

  .addPerformanceBtn {
    top: 69.25vh;
    left: 28.6vw;
  }

  .addAllocationBtn {
    top: 11.3vh;
    left: 35vw;
    height: 5vh;
  }

  .allocation-inputs {
    top: 0vh;
    left: 15vw;
  }

  h3 {
    font-size: 2.85vw;
  }

  input,
  input::placeholder {
  font: 0.45rem sans-serif;
  }
}

@media (min-width: 420px) {
  .blob0-svg {
    top: 35vh;
  }

  .blob2-svg {
    top: 115vh;
  }

  .allocationSection {
    left: 5.9vw;
  }

  .chart-dropdown-performance {
    left: 5vw;
  }

  .chart-dropdown-allocation {
    left: 5vw;
  }

  .dropdown-performance-btn-text {
    font-size: 0;
  }

  .dropdown-allocation-btn-text {
    font-size: 0vw;
  }

  .performance-label-input {
    top: -3vh;
  }

  .addPerformanceBtn {
    top: 69.25vh;
    left: 28.6vw;
  }

  .addAllocationBtn {
    top: 11.3vh;
    left: 38.5vw;
    height: 5vh;
  }

  .allocation-inputs {
    top: 0vh;
    left: 15vw;
  }

  h3 {
    font-size: 2.85vw;
  }

  input,
  input::placeholder {
  font: 0.45rem sans-serif;
  }
}

@media (min-width: 540px) {
  .blob0-svg {
    top: 35vh;
  }

  .blob2-svg {
    top: 115vh;
  }

  .allocationSection {
    left: 5.9vw;
  }

  .chart-dropdown-performance {
    left: 5vw;
  }

  .chart-dropdown-allocation {
    left: 5vw;
  }

  .dropdown-performance-btn-text {
    font-size: 0;
  }

  .dropdown-allocation-btn-text {
    font-size: 0vw;
  }

  .performance-label-input {
    top: -3vh;
  }

  .addPerformanceBtn {
    top: 69.25vh;
    left: 28.6vw;
  }

  .addAllocationBtn {
    top: 11.3vh;
    left: 43.5vw;
    height: 5vh;
  }

  .allocation-inputs {
    top: 0vh;
    left: 15.3vw;
  }

  h3 {
    font-size: 2.85vw;
  }

  input,
  input::placeholder {
  font: 0.45rem sans-serif;
  }
}

@media (min-width: 576px) {
  .blob0-svg {
    top: 30vh;
  }

  .blob2-svg {
    top: 112vh;
  }

  .allocationSection {
    left: 12vw;
  }

  .dropdown-performance-btn-text {
    font-size: 0vw;
    top: 88.9vh;
    left: 12vw;
  }

  .dropdown-allocation-btn-text {
    font-size: 0vw;
    top: 186.8vh;
    left: 25.1vw;
  }

  .chart-dropdown-performance {
    left: 10vw;
  }

  .chart-dropdown-allocation {
    left: 10vw;
  }

  .performance-label-input {
    top: -3vh;
  }

  .addPerformanceBtn {
    top: 69.25vh;
    left: 28.6vw;
  }

  .addAllocationBtn {
    top: 9.9vh;
    left: 42vw;
    height: 7vh;
  }

  .allocation-inputs {
    top: 0vh;
    left: 23vw;
  }

  h3 {
    font-size: 2.55vw;
  }

  input,
  input::placeholder {
  font: 0.5rem sans-serif;
  }
}

@media (min-width: 768px) {
  .blob0-svg {
    top: 15vh;
  }

  .blob2-svg {
    top: 109vh;
  }

  .allocationSection {
    left: 23vw;
  }

  .dropdown-performance-btn-text {
    font-size: 0vw;
    top: 88.9vh;
    left: 12vw;
  }

  .dropdown-allocation-btn-text {
    font-size: 0vw;
    top: 186.8vh;
    left: 25.1vw;
  }

  .chart-dropdown-performance {
    left: 10vw;
  }

  .chart-dropdown-allocation {
    left: 10vw;
  }

  .performance-label-input {
    top: -3vh;
  }

  .addPerformanceBtn {
    top: 69.25vh;
    left: 28.6vw;
  }

  .addAllocationBtn {
    top: 10.1vh;
    left: 34vw;
    height: 7vh;
  }

  .allocation-inputs {
    top: 0vh;
    left: 18vw;
  }

  h3 {
    font-size: 2.45vw;
  }

  input,
  input::placeholder {
  font: 0.55rem sans-serif;
  }
}

@media (min-width: 992px) {
  .blob0-svg {
    top: 5vh;
  }

  .blob2-svg {
    top: 106vh;
  }

  .allocationSection {
    left: 30vw;
  }

  .dropdown-performance-btn-text {
    font-size: 0.9vw;
    top: 88.7vh;
    left: 25vw;
  }

  .dropdown-allocation-btn-text {
    font-size: 1vw;
    top: 186.8vh;
    left: 25.1vw;
  }

  .chart-dropdown-performance {
    left: 23vw;
  }

  .chart-dropdown-allocation {
    left: 23vw;
  }

  .addPerformanceBtn {
    top: 69.25vh;
    left: 28.6vw;
  }

  .addAllocationBtn {
    top: 6.2vh;
    left: 27.5vw;
    height: 10.5vh;
  }

  .performance-label-input {
    top: -3vh;
  }

  .allocation-inputs {
    top: 0vh;
    left: 15vw;
  }

  h3 {
    font-size: 2.38vw;
  }

  input,
  input::placeholder {
  font: 0.6rem sans-serif;
  }
}

@media (min-width: 1200px) {
  .blob0-svg {
    top: -9vh;
  }

  .blob2-svg {
    top: 104vh;
  }

  .allocationSection {
    left: 33vw;
  }

  .dropdown-performance-btn-text {
    font-size: 1vw;
    top: 88.3vh;
    left: 24.5vw;
  }

  .dropdown-allocation-btn-text {
    font-size: 1vw;
    top: 186.4vh;
    left: 24.8vw;
  }

  .chart-dropdown-performance {
    left: 23vw;
  }

  .chart-dropdown-allocation {
    left: 23vw;
  }

  .addPerformanceBtn {
    top: 69.25vh;
    left: 28.6vw;
  }

  .addAllocationBtn {
    top: 5.8vh;
    left: 19.5vw;
    height: 11vh;
  }

  .performance-label-input {
    top: -3vh;
  }

  .allocation-inputs {
    top: 0vh;
    left: 8.5vw;
  }

  h3 {
    font-size: 2.27vw;
  }

  input,
  input::placeholder {
  font: 0.65rem sans-serif;
  }
}

@media (min-width: 1400px) {
  .blob0-svg {
    top: -19vh;
  }

  .blob2-svg {
    top: 102vh;
  }

  .allocationSection {
    left: 35vw;
  }

  .dropdown-performance-btn-text {
    font-size: 1.1vw;
    top: 88vh;
    left: 24.2vw;
  }

  .dropdown-allocation-btn-text {
    font-size: 1.1vw;
    top: 185.9vh;
    left: 24.2vw;
  }

  .chart-dropdown-performance {
    left: 23vw;
  }

  .chart-dropdown-allocation {
    left: 23vw;
  }

  .addPerformanceBtn {
    top: 65vh;
    left: 38vw;
  }

  .addAllocationBtn {
    top: 4.2vh;
    left: 10.8vw;
    height: 12vh;
  }

  .performance-label-input {
    top: 0vh;
  }

  .allocation-inputs {
    top: 0vh;
    left: 0vw;
  }

  h3 {
    font-size: 2.2vw;
  }

  input,
  input::placeholder {
    font: 0.9rem sans-serif;
  }
}

@property --gradient-angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

@keyframes rotation {
  0% { --gradient-angle: 0deg; }
  100% { --gradient-angle: 360deg; }
}
</style>
