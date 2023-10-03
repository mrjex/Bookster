<template>
  <b-col>
    <b-card no-body class="overflow-hidden text-left" role="button">
      <b-row no-gutters>
        <b-col md="2">
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
  </b-col>
</template>
<script>
export default {
  props: ['book']
}
</script>

<style>
.book-cover {
  width:200px
}
</style>
