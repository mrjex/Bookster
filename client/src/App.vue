<template>
  <div id="app">
    <div>
      <OnSiteComponent />
    </div>
    <div class="auth-wrapper">
      <div class="auth-inner">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import OnSiteComponent from './components/OnSiteComponent.vue'

export default {
  name: 'App',
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
