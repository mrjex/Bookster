<template>
    <nav class="navbar navbar-expand navbar-light fixed-top">
      <div class="container">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <div v-if="user != 'null'">
                <b-button variant="outline-primary"
                @click.prevent="logoutButton">Logout</b-button>
            </div>
            <div v-if="currentPage === 'Home'">
                <b-button variant="outline-primary"
                @click.prevent="profileButton">Profile</b-button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
import UtilsComponent from '../components/UtilsComponent.vue'

export default {
  name: 'OnSiteComponent',
  data() {
    return {
      currentPage: UtilsComponent.methods.getCurrentPageState(),
      user: UtilsComponent.methods.getUsername()
    }
  },
  created() {
    UtilsComponent.methods.refreshPage('Home')
  },
  methods: {
    profileButton() {
      UtilsComponent.methods.setRefreshablePageState()
      this.$router.push(`/home/users/${this.user}`)
    },
    logoutButton() {
      UtilsComponent.methods.setRefreshablePageState()
      this.$router.push('/login')
    }
  }
}
</script>
