<template>
  <div id="app">
      <div class="auth-inner">
          <OnSiteComponent v-if="this.$route.meta.requiresAuth" />
          <b-container class="py-3">
          <router-view />
          </b-container>
        </div>
  </div>
</template>

<script>
import OnSiteComponent from './components/OnSiteComponent.vue'

export default {
  name: 'App',
  provide: { user: localStorage.getItem('logged-in-username') },
  components: {
    OnSiteComponent
  }
}
</script>

<style>
body {
  background-color: #343434 !important;
}
.card-body {
  color: black;
}
.b-icon {
  color: white;
}
</style>
