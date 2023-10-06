<template>
    <b-container>
        <b-jumbotron :style="jumboStyles" class="jumbotron">
            <div>
                <h2 id="header">{{ title }}</h2>
                <p id="lead" class="book-description">
                    {{ description }}
                </p>
            </div>
            <b-button variant="primary" href="#">Add to Library</b-button>
        </b-jumbotron>
        <h3>Reviews</h3>
        <div v-for="review in reviews" :key="review.id">
            <Review :review="review" />
        </div>
    </b-container>
</template>

<script>
import { Api } from '../Api'
import Review from '../components/Review.vue'

export default {
  data: function () {
    return {
      title: '',
      description: '',
      coverURL: '',
      reviews: []
    }
  },
  components: { Review },
  async created() {
    const id = this.$route.params.isbn
    const { data } = await Api.get(`/books/${id}`)
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
