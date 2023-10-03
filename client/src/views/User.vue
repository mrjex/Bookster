<template>
  <div>
    <b-container>

      <h3>This is your profile, {{ user }}</h3>
      <button class="btn btn-primary btn-block" @click.prevent="booksButton">Your Books</button>
      <button class="btn btn-primary btn-block" @click.prevent="reviewsButton">Your Reviews</button>
      <button class="btn btn-primary btn-block" @click.prevent="progressButton">Your Progress</button>
      <button class="btn btn-danger btn-block" v-b-modal.modal-1>Delete Account</button>

      <b-modal id="modal-1" title="Delete Account" ok-variant="danger" @ok="deleteAccount">
        <p class="my-4">This will delete your account permanently</p>
      </b-modal>

    </b-container>
  </div>
</template>

<script>
import UtilsComponent from '../components/UtilsComponent.vue'
import { Api } from '../Api'
export default {
  name: 'User',
  inject: ['user'],
  methods: {
    handleSubmit() {
      this.$router.push(`/users/${this.user}`)
    },
    booksButton() {
      this.$router.push(`${this.$route.path}/books`)
    },
    reviewsButton() {
      this.$router.push(`${this.$route.path}/reviews`)
    },
    progressButton() {
      UtilsComponent.methods.setRefreshablePageState()
      this.$router.push(`${this.$route.path}/progress`)
    },
    async deleteAccount() {
      localStorage.removeItem('logged-in-username')
      await Api.delete(`/users/${this.user}`)
      this.$router.push('/login')
    }
  }
}
</script>
