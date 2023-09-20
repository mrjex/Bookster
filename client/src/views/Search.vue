<template>
  <div>
    <b-jumbotron header="Bookster" lead="Search for a book">
      <b-container fluid="md">
        <b-input-group class="mt-3">
          <b-form-input v-model="keyword" placeholder="Enter a keyword"></b-form-input>
          <b-button class="btn_message" variant="primary" v-on:click="getMessage()">Search</b-button>
        </b-input-group>
        <b-spinner v-if="loading" label="Loading"></b-spinner>
        <b-row v-for="result in results" :key=result.id class="my-4">
          <Book :book=result>
            <b-button variant="info" v-on:click="() => addBook(result)">Add to library</b-button>
          </Book>
        </b-row>
      </b-container>
    </b-jumbotron>
  </div>
</template>
<script>
// @ is an alias to /src
import { Api } from '@/Api'
import Book from '../components/Book.vue'
import axios from 'axios'

export default {
  name: 'home',
  components: { Book },
  data() {
    return {
      keyword: '',
      loading: false,
      message: 'none',
      results: []
    }
  },
  methods: {
    getMessage() {
      this.results = []
      this.loading = true
      Api.get(`/books/search/${this.keyword}`)
        .then(response => {
          this.results = response.data
          this.loading = false
        })
        .catch(error => {
          this.message = error
        })
    },
    async addBook(book) {
      try {
        await axios.post('http://localhost:3000/api/users/mrGit/books/add', {
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
    }
  }
}
</script>

<style>
.btn_message {
  margin-bottom: 1em;
}
</style>
