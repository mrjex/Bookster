<template>
    <b-container>
        <b-jumbotron :style="jumboStyles" class="jumbotron">
            <div>
                <h2 id="header">{{ title }}</h2>
                <p id="lead" class="book-description">
                    {{ description }}
                </p>
            </div>
            <AddButton :book="{id, title, author, pages}" />
        </b-jumbotron>
        <h3>Reviews</h3>
        <span v-if="!reviews.length">Book has no reviews</span>
        <div v-for="review in reviews" :key="review.id">
          <div class="py-2">
              <Review :review="review" />
          </div>
        </div>
    </b-container>
</template>

<script>
import { Api } from '../Api'
import AddButton from '../components/AddButton.vue'
import Review from '../components/Review.vue'

export default {
  data: function () {
    return {
      id: this.$route.params.isbn,
      title: '',
      description: '',
      author: 'Tony Robbins',
      pages: 0,
      coverURL: '',
      reviews: []
    }
  },
  components: { Review, AddButton },
  async created() {
    const { data } = await Api.get(`/books/${this.id}`)
    this.title = data.title
    this.description = data.description
    this.coverURL = data.coverURL
    this.reviews = data.reviews
  },
  computed: {
    jumboStyles() {
      return {
        // 'background-image': `url(${this.coverURL})`,
        'background-size': 'cover'
      }
    }
  }
}
</script>

<style>
.jumbotron {
    /* text-shadow: 1px 1px 1px #000000; */
    color: black;
}
.blur {
    backdrop-filter: blur(20px);
}
</style>
