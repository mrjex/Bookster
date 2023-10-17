<template>
  <b-container class="bg-white p-3 rounded">
    <b-form-group id="fieldset-1" label="Username">
      <b-input-group>
        <b-form-input v-model="username"></b-form-input>
        <b-input-group-append>
          <b-button variant="info" @click="changeUsername">Save</b-button>
        </b-input-group-append>
      </b-input-group>
    </b-form-group>
  </b-container>
</template>

<script>
import { Api } from '../Api'

// import { BIconBook } from 'bootstrap-vue'
export default {
  name: 'UserSettings',
  inject: ['user'],
  data() {
    return {
      username: this.user
    }
  },
  methods: {
    async changeUsername() {
      try {
        await Api.patch(`/users/${this.user}`, { updatedUsername: this.username })
        localStorage.setItem('logged-in-username', this.username)
        this.user = this.username
        this.$bvToast.toast('Success', {
          title: 'Username was changed',
          autoHideDelay: 5000,
          appendToast: false
        })
        // setTimeout(() => {
        //   this.$router.push(`/users/${this.username}/profile`)
        //   window.location.reload()
        // }, 500)
      } catch {
      }
    }
  },
  components: {
    // BIconBook
  }
}
</script>
