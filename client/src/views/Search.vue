<template>
  <div>
    <b-jumbotron class="video-container" lead="Search for a book">
      <h1 class="caption">Bookster</h1>
      <!-- <h3 class="subtitle">From the creators of <a href="https://github.com/indomet/wioplay" target="_blank">WioPlay</a></h3> -->
      <video autoplay muted loop class="main-bg">
        <source src="../resources/BookVideo-Group21.mp4" type="video/mp4" />
      </video>
      <b-form @submit="getMessage">
        <b-input-group class="mt-3">
          <b-form-input v-model="keyword" placeholder="Enter a keyword"></b-form-input>

          <b-input-group-append>
            <b-button class="btn_message" type="submit" variant="primary">Search</b-button>
            <b-button class="btn_message" v-b-modal.modal-1>Bar Code</b-button>
            <!-- <b-input-group-text><b-icon-eye-fill></b-icon-eye-fill></b-input-group-text> -->
          </b-input-group-append>

          <b-modal id="modal-1" title="Scan Your Book's Bar Code">
            <StreamBarcodeReader @decode="onDecode" @loaded="onLoaded"></StreamBarcodeReader>
          </b-modal>
        </b-input-group>
      </b-form>
    </b-jumbotron>
    <b-spinner v-if="loading" label="Loading"></b-spinner>
    <div v-for="result in results" :key="result.id" class="py-2">
      <Book :book="result">
        <b-button variant="info" @click.stop="() => addBook(result)">Add to library</b-button>
      </Book>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import { Api } from '@/Api'
import { StreamBarcodeReader } from 'vue-barcode-reader'
import sound from '../../assets/scan.mp3'
import Book from '../components/Book.vue'

export default {
  name: 'home',
  components: { Book, StreamBarcodeReader },
  inject: ['user'],
  data() {
    return {
      keyword: '',
      loading: false,
      message: 'none',
      results: []
    }
  },
  methods: {
    getMessage(event, target) {
      event?.preventDefault()
      this.results = []
      this.loading = true
      Api.get(`/books/search/${target || this.keyword}`)
        .then((response) => {
          this.results = response.data
          this.loading = false
        })
        .catch((error) => {
          this.message = error
        })
    },
    async onDecode(decodedString) {
      console.log(decodedString)
      this.$bvModal.hide('modal-1')
      this.playSound()
      await this.getMessage(null, decodedString)

      // Api.get(`/books/search/${decodedString}`)
      //   .then((response) => {
      //     console.log(response.data)
      //     ...
      //   })
      //   .catch((error) => {
      //     console.error(error)
      //   })
    },
    onLoaded() {
      console.log('scanner has loaded')
    },
    async addBook(book) {
      try {
        await Api.post(`/users/${this.user}/books/add`, {
          title: book.title,
          author: 'Tony Robbins',
          pages: book.pages,
          isbn: book.id
        })
        this.$bvToast.toast('Success', {
          title: 'Added book to library',
          autoHideDelay: 5000,
          appendToast: false
        })
      } catch {
        this.$bvToast.toast('Error', {
          title: 'Something went wrong',
          autoHideDelay: 5000,
          appendToast: false
        })
      }
    },
    playSound() {
      const audio = new Audio(sound)
      audio.play()
    }
  }
}
</script>

<style>
.btn_message {
  margin-bottom: 1em;
}
</style>
