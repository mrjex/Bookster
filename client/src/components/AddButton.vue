<template>
    <b-button variant="info" @click.stop="addBook"> Add to library</b-button>
</template>

<script>
import { Api } from '../Api'

export default {
  name: 'AddButton',
  inject: ['user'],
  props: ['book'],
  methods: {
    async addBook() {
      try {
        await Api.post(`/users/${this.user}/books`, {
          title: this.book.title,
          author: 'Tony Robbins',
          pages: this.book.pages,
          isbn: this.book.id
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
