<template>
  <div>
    <h1>Trending Books</h1>
      <div class="justify-content-center" v-for="book in books" :key="book.isbn">
        <div class="py-2">
          <Book :book=book />
        </div>
      </div>
  </div>
</template>
<script>
import { Api } from '../Api'
import Book from './Book.vue'

export default {
  name: 'trending',
  components: {
    Book
  },
  data() {
    return {
      books: []
    }
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
