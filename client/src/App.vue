<template>
  <div id="app">
    <div>
    </div>
    <div class="auth-wrapper">
      <div class="auth-inner">
          <OnSiteComponent v-if="this.$route.meta.requiresAuth" />
          <router-view />
        </div>
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
/*
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*/
</style>
