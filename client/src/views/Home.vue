<template>
  <div>
    <b-container>
      <Search />
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'
import Search from './Search.vue'

export default {
  name: 'Home',
  created() {
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
    /*
    profileButton() {
      this.$router.push(`/home/users/${this.user}`) //
    }
    */
  },
  components: { Search }
}
</script>

<style>
.btn_message {
  margin-bottom: 1em;
}
</style>
