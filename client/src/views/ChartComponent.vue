<template>
    <div>
        <body>
            <!--
            <div style="width: 500px;"><canvas id=radarchart></canvas></div>
            <script type="module" src="../charts/radarchart.js"></script>
            -->
        <!-- <div style="width: 500px;"><canvas id=radarchart></canvas></div> -->
        </body>
        <h3>{{ user }}'s progress:</h3>
        <h3> {{progress}} </h3>
    </div>
</template>

<script>
import { Api } from '../Api'
import Chart from 'chart.js/auto'

export default {
  name: 'ProgressPage',
  inject: ['user'],
  data() {
    return {
      progress: null,
      dataTest: {
        labels: [
          'Eating',
          'Drinking',
          'Sleeping',
          'Designing',
          'Coding',
          'Cycling',
          'Running'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 105, 81, 56, 55, 20],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        }, {
          label: 'My Second Dataset',
          data: [28, 48, 40, 19, 96, 27, 116],
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)'
        }]
      }
    }
  },
  async created() {
    const result = await Api.get(`/users/${this.user}/progress`)
    this.progress = result.data
    console.warn(this.progress)

    const dataTest2 = this.dataTest

    const radarChart = new Chart(document.getElementById('radarchart'),
      {
        type: 'radar',
        dataTest2,
        options: {
          elements: {
            line: {
              borderWidth: 3
            }
          }
        }
      })
    console.warn(radarChart.type)
  }
}
</script>
