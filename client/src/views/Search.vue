<template>
  <div>
    <b-jumbotron header="Bookster" lead="Search for a book">
        <b-input-group class="mt-3">
          <b-form-input
            v-model="keyword"
            placeholder="Enter a keyword"
          ></b-form-input>
          <b-button
            class="btn_message"
            variant="primary"
            v-on:click="getMessage()"
            >Search</b-button
          >
          <b-button v-b-modal.modal-1 class="mx-2">Bar Code</b-button>

          <b-modal id="modal-1" title="Scan Your Book's Bar Code">
            <StreamBarcodeReader
              @decode="onDecode"
              @loaded="onLoaded"
            ></StreamBarcodeReader>
          </b-modal>
        </b-input-group>
        <b-spinner v-if="loading" label="Loading"></b-spinner>
        <b-row v-for="result in results" :key="result.id" class="my-4">
          <Book :book="result">
            <b-button variant="info" v-on:click="() => addBook(result)"
              >Add to library</b-button
            >
          </Book>
        </b-row>
    </b-jumbotron>
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
  data() {
    return {
      keyword: '',
      loading: false,
      message: 'none',
      results: []
    }
  },
  methods: {
    getMessage(target) {
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
      await this.getMessage(decodedString)

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
        await Api.post('/users/mrGit/books/add', {
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
