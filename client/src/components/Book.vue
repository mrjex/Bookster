<template>
  <b-card no-body class="overflow-hidden text-left" role="button" @click="this.viewBook">
    <b-row no-gutters>
      <b-col class="cover-container" md="2">
        <b-card-img :src="book.coverURL" class="book-cover rounded-0"></b-card-img>
      </b-col>
      <b-col md="10">
        <b-card-body :title="book.title">
          <b-card-text>
            <p>
              {{ book.description || 'No description available' }}
            </p>
          </b-card-text>
          <slot></slot>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>
<script>
export default {
  name: 'Book',
  props: ['book'],
  methods: {
    viewBook(e) {
      this.$router.push(`/books/${this.book.id || this.book.isbn}`)
    }
  }
}
</script>

<style>

@media only screen and (max-width: 768px) {
  .book-cover {
    width: 150px !important;
  }
  .cover-container {
    text-align: center;
  }
}
</style>
