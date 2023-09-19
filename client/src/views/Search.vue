<template>
  <div>
    <b-jumbotron header="Bookster" lead="Search for a book">
      <b-container fluid="md">
        <b-input-group class="mt-3">
          <b-form-input v-model="keyword" placeholder="Enter a keyword"></b-form-input>
          <b-button class="btn_message" variant="primary" v-on:click="getMessage()">Search</b-button>
        </b-input-group>
        <b-spinner v-if="loading" label="Loading"></b-spinner>
        <b-row v-for="book in results" :key="book.id" class="my-4">
          <b-col>
            <b-card no-body class="overflow-hidden text-left" role="button">
              <b-row no-gutters>
                <b-col md="2">
                  <b-card-img :src="book.coverURL" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="10">
                  <b-card-body :title="book.title">
                    <b-card-text>
                      <p>
                        {{ book.description || 'No description available' }}
                      </p>
                    </b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
      </b-container>

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
    }
  }
}
</script>

<style>
.btn_message {
  margin-bottom: 1em;
}
</style>
