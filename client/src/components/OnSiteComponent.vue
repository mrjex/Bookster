<template>
    <nav class="navbar navbar-expand navbar-light">
      <div class="container">
        <div class="collapse navbar-collapse">
          <div>
            <a href="/home">Home</a>
          </div>
          <ul class="navbar-nav ml-auto">
            <div>
                <div>
                    <li class="nav-item">
                        <a href="/login" class="nav-link">Logout</a>
                     </li>
                </div>
            </div>
            <div>
                <b-button variant="outline-primary"
                @click.prevent="profileButton">Profile</b-button>
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
    }
  }
}
</script>
