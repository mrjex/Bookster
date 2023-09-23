<template>
  <form @submit.prevent="handleBookSubmit">
    <b-container>
      <h3>{{ user }}'s books:</h3>
      <b-row v-for="result in books" :key=result.id class="my-4">
        <Book :book=result>
          <b-button v-b-modal.modal-1 variant="danger">Remove from
            library</b-button>
          <b-modal id="modal-1" title="Are you sure?" ok-variant="danger" @ok="() => removeBook(result)">
            <p class="my-4">This will remove the book from your library</p>
          </b-modal>
        </Book>
      </b-row>
    </b-container>
  </form>
</template>

<script>
import axios from 'axios'
import Book from '../components/Book'

export default {
  name: 'Books',
  inject: ['user'],
  components: { Book },
  data() {
    return {
      books: []
    }
  },
  methods: {
    async removeBook(book) {
      try {
        await axios.delete(`http://localhost:3000/api/users/${this.user}/books/${book.isbn}`)
        this.$bvToast.toast('Success', {
          title: 'Removed book from library',
          autoHideDelay: 5000,
          appendToast: false
        })
        this.books = this.books.filter(entry => entry.isbn !== book.isbn)
      } catch {
        this.$bvToast.toast('Error', {
          title: 'Something went wrong',
          autoHideDelay: 5000,
          appendToast: false
        })
      }
    }
  },
  async created() {
    const result = await axios.get(`http://localhost:3000/api/users/${this.user}/books`)
    this.books = result.data.books // NOTE: Do result.data to include HATEOAS links
    console.warn(this.books)
  }

}
</script>
