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
        <AddButton :book="result" />
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
import AddButton from '../components/AddButton.vue'

export default {
  name: 'home',
  components: { Book, StreamBarcodeReader, AddButton },
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
      // this.playSound()
      await this.getMessage(null, decodedString)
      console.log(window.speechSynthesis.getVoices())
      const utterance = new SpeechSynthesisUtterance()
      utterance.text = 'Book has been scanned'
      utterance.voice = window.speechSynthesis.getVoices()[158]
      window.speechSynthesis.speak(utterance)
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
