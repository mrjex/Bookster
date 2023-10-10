<template>
  <form @submit.prevent="handleBookSubmit">
    <b-container>
      <h3>{{ user }}'s books:</h3>

      <span v-if="!this.books.length">You have no books</span>
      <b-row v-for="(result) in books" :key=result.isbn class="my-4">
        <Book :book=result>
          <b-button @click.stop="" v-b-modal="`modal-${result.isbn}`" variant="danger">Remove from
            library</b-button>
          <b-button @click.stop="" v-b-modal="`review-${result.isbn}`" class="mx-2">Review</b-button>

          <b-modal :id="`review-${result.isbn}`" title="Review Book" @ok="() => reviewBook(result)">
            <b-form-textarea id="textarea" v-model="result.review" placeholder="Enter something..." rows="3"
              max-rows="6">
            </b-form-textarea>
            <b-form-rating v-model="result.rating"></b-form-rating>
          </b-modal>

          <b-modal :id="`modal-${result.isbn}`" title="Are you sure?" ok-variant="danger" @ok="() => removeBook(result)">
            <p class="my-4">This will remove the book from your library</p>
          </b-modal>
        </Book>
      </b-row>
    </b-container>
  </form>
</template>

<script>
import Book from '../components/Book'
import { Api } from '../Api'

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
        await Api.delete(`/users/${this.user}/books/${book.isbn}`)
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
    },
    async reviewBook(book) {
      await Api.post(`/users/${this.user}/reviews/add`, {
        content: book.review,
        rating: book.rating,
        isbn: book.isbn,
        username: this.user
      })
      this.$bvToast.toast('Success', {
        title: 'Added book review',
        autoHideDelay: 5000,
        appendToast: false
      })
    }
  },
  async created() {
    const result = await Api.get(`/users/${this.user}/books`)
    this.books = result.data.books.map(book => {
      return {
        ...book,
        rating: 0,
        review: ''
      }
    })
  }

}
</script>
