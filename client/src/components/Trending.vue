<template>
  <div>
    <h1>Trending Books</h1>
    <b-row class="justify-content-center">
      <div v-for="book in books" :key="book.isbn">
        <b-col class="flex-fill">
          <b-card :title="book.title" :img-src="book.coverURL" img-alt="Image" img-top tag="article"
            style="max-width: 20rem;" class="bookCard mb-2">
            <b-card-text>
              {{ book.description }}
            </b-card-text>
            <b-button href="#" variant="primary">Add</b-button>
          </b-card>
        </b-col>
      </div>
    </b-row>
  </div>
</template>
<script>
import { Api } from '../Api'

export default {
  name: 'trending',
  data() {
    return {
      books: []
    }
  },
  methods: {

  },
  async created() {
    const { data } = await Api.get('/books/trending')
    this.books = data
  }

}
</script>

<style>
.bookCard {
  width: 270px;
  height: 500px;
}

.card-text {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.bookCard img {
  width: 65%;
  padding: 10px;
  margin: auto;
}
</style>
