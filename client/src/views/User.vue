<template>
  <div>
    <b-container>
      <div>
        <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
          <template #header>Welcome, <b>{{ user }}</b></template>
          <template #lead>
            You can navigate through your bookster settings through this page
          </template>
        </b-jumbotron>
      </div>
      <div class="d-flex flex-wrap align-items-center">
        <div class="p-2">
          <b-card class="profile-card" title="Books" style="max-width: 15rem;" @click.prevent="booksButton">
            <b-card-img src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png"></b-card-img>
            <template #footer>
              <em>This is where you can view all your added books list</em>
            </template>
          </b-card>
        </div>
        <div class="p-2">
          <b-card title="Reviews" style="max-width: 15rem;" @click.prevent="reviewsButton" class="profile-card">
            <b-card-img src="https://cdn.pixabay.com/photo/2017/10/25/18/10/peer-review-icon-2888794_960_720.png"></b-card-img>
            <template #footer>
              <em>Share your thoughts on books</em>
            </template>
          </b-card>
        </div>
                <div class="p-2">
            <b-card title="Progress" style="max-width: 15rem;" @click.prevent="progressButton" class="profile-card">
              <b-card-img src="https://cdn-icons-png.flaticon.com/512/4992/4992624.png"></b-card-img>
              <template #footer>
                <em>View and log reading progress</em>
              </template>
            </b-card>
          </div>
          <div class="p-2">
            <b-card title="Delete Account" style="max-width: 15rem;" v-b-modal.modal-1>
              <b-card-img src="https://cdn-icons-png.flaticon.com/512/3687/3687412.png"></b-card-img>
              <template #footer>
                <em>This will delete your account permanently</em>
              </template>
            </b-card>
          </div>
      </div>

      <b-modal id="modal-1" title="Delete Account" ok-variant="danger" @ok="deleteAccount">
        <p class="my-4">This will delete your account permanently</p>
      </b-modal>

    </b-container>
  </div>
</template>

<script>
import UtilsComponent from '../components/UtilsComponent.vue'
// import { BIconBook } from 'bootstrap-vue'

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
      await Api.delete(`/users/${this.user}`)
      localStorage.removeItem('logged-in-username')
      this.$router.push('/login')
    }
  },
  components: {
    // BIconBook
  }
}
</script>
<style>
.profile-card:hover {
  cursor: pointer;
}
</style>
