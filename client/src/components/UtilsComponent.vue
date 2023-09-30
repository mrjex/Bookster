<script utils>
export default {
  name: 'UtilsComponent',
  data() {
    return {
      refreshDelay: 10
    }
  },
  methods: {
    getUsername() {
      const usernameLength = localStorage.getItem('logged-in-username').length

      if (usernameLength > 0) {
        return localStorage.getItem('logged-in-username')
      } else {
        return null
      }
    },
    updateLoggedInUser(newUserData, newUsername) {
      localStorage.setItem('logged-in-user', newUserData)
      localStorage.setItem('logged-in-username', newUsername)
      this.setDefaultCharts()
    },
    setDefaultCharts() {
      localStorage.setItem('currentPerformanceChart', 'LineChart')
      localStorage.setItem('currentAllocationChart', 'RadarChart')
    },
    getCurrentPerformanceChart() {
      return localStorage.getItem('currentPerformanceChart')
    },
    getCurrentAllocationChart() {
      return localStorage.getItem('currentAllocationChart')
    },
    // Gets the associated chart button-id for the dropdown (assuming the format '#{{chartname}}-button')
    getCurrentPerformanceChartButtonId() {
      return '#' + this.getCurrentPerformanceChart().toLowerCase() + '-button'
    },
    getCurrentAllocationChartButtonId() {
      return '#' + this.getCurrentAllocationChart().toLowerCase() + '-button'
    },
    setCurrentPerformanceChart(currentChart) {
      localStorage.setItem('currentPerformanceChart', currentChart)
    },
    setCurrentAllocationChart(currentChart) {
      localStorage.setItem('currentAllocationChart', currentChart)
    },
    refreshPage(conditionalPage) {
      let correctPage = null
      if (conditionalPage != null) {
        correctPage = conditionalPage === localStorage.getItem('current-page')
      }

      // If no conditional page was requested, or if the current page-state is equivalent to the conditional page
      if (correctPage == null || correctPage === true) {
        if (localStorage.getItem('refresh-state') === 'Refreshable') {
          setTimeout(this.refreshX, this.refreshDelay)
          localStorage.setItem('refresh-state', 'DONE')
        }
      }
    },
    setRefreshablePageState() {
      localStorage.setItem('refresh-state', 'Refreshable')
    },
    setCurrentPageState(pageName) {
      localStorage.setItem('current-page', pageName)
    },
    getCurrentPageState() {
      return localStorage.getItem('current-page')
    },
    refreshX() { // Private method
      window.location.reload()
    },
    setImageChanger() {
      localStorage.setItem('imageChanger', ['Bookster-AboutPage2.jpg', 'Bookster-Pic3.jpg', 'Bookster-Pic4.jpg', 'Bookster-Pic5.png', 'Bookster-Pic6.jpg'])
    }
  }
}
</script>
