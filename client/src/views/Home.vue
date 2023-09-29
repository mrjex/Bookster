<template>
  <div>
    <b-container>
      <Search />
    </b-container>
  </div>
</template>

<style>
video{
  z-index: -1000;
  left: 50%;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  object-fit: cover;
}
</style>

<script>
// @ is an alias to /src
import { Api } from '@/Api'
import Search from './Search.vue'
import UtilsComponent from '../components/UtilsComponent.vue'

export default {
  name: 'Home',
  created() {
    UtilsComponent.methods.refreshPage()
  },
  methods: {
    getMessage() {
      Api.get('/')
        .then((response) => {
          this.message = response.data.message
        })
        .catch((error) => {
          this.message = error
        })
    }
  },
  components: { Search }
}
</script>

<style>
.btn_message {
  margin-bottom: 1em;
}
</style>
