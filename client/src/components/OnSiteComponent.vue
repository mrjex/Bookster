<template>
  <nav class="navbar navbar-expand navbar-light">
    <div class="container">
      <div class="collapse navbar-collapse">
        <div>
          <a href="/">Home</a>
        </div>
        <ul class="navbar-nav ml-auto">
          <div>
            <div>
              <li class="nav-item">
                <a href="/login" @click="logout" class="nav-link">Logout</a>
              </li>
            </div>
          </div>
          <div v-if="this.$route.name !== 'Profile'">
            <b-button variant="outline-primary" @click.prevent="profileButton">Dashboard</b-button>
          </div>
          <div v-else>
            <button class="btn btn-danger btn-block delete-account-button" v-b-modal.modal-1>Delete Account</button>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'OnSiteComponent',
  inject: ['user'],
  created() {
  },
  methods: {
    profileButton() {
      this.$router.push(`/users/${this.user}`)
    },
    logout() {
      localStorage.removeItem('logged-in-username')
    }
  }
}
</script>

<style>
.navbar {
  color: white;
  background-color: black;
  text-decoration: none;
}
.delete-account-button {
  border-radius: 2vh !important;
  background-color: #CF7C7C !important;
  border: none !important;
}
.nav-link {
  color: white !important;
}

</style>
