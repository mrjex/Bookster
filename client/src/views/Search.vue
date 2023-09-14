<template>
    <div>
        <b-jumbotron header="Bookster" lead="Search for a book">
            <b-input-group class="mt-3">
                <b-form-input v-model="keyword" placeholder="Enter your name"></b-form-input>
                <b-button class="btn_message" variant="primary" v-on:click="getMessage()">Search</b-button>
            </b-input-group>
            <p>Results: <br /> </p>
            <p>{{ loading ? 'Loading...' : '' }}</p>
      <b-row>
            <b-col v-for="book in results" :key="book.id">
                <img :src="book.coverURL" width="200px" />
                <h4>{{ book.title }}</h4>
                <h4>Pages: {{ book.pages }}</h4>
                <h5>Year published: {{ book.publishYear }}</h5>
                <br />
                </b-col>
      </b-row>
        </b-jumbotron>
    </div>
</template>
<script>
// @ is an alias to /src
import { Api } from '@/Api'

export default {
  name: 'home',
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
      this.loading = true
      Api.get(`/books/search/${this.keyword}`)
        .then(response => {
          this.results = response.data
          this.loading = false
        })
        .catch(error => {
          this.message = error
        })
    }
  }
}
</script>

<style>
.btn_message {
    margin-bottom: 1em;
}
</style>
