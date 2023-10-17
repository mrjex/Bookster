<template>
  <b-col>
    <b-card no-body class="overflow-hidden text-left" role="button">
      <b-row no-gutters>
        <b-col md="2">
          <b-card-img :src=this.bookinfo.coverURL class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="10">
          <b-card-body :title=this.bookinfo.title>
            <b-card-text>
              <b-col>
                <p>
                  {{ review.content }}
                </p>
                <div>
                  <b-form-rating :value=review.rating no-border readonly show-value></b-form-rating>
                </div>
              </b-col>
            </b-card-text>
            <b-button variant="outline-primary float-right" v-b-modal="`modal-${review.id}`">Edit Review</b-button>
            <slot></slot>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
    <b-modal :id="`modal-${review.id}`" title="Edit Review" @ok="() => updateReview()">
      <b-form-group label="Content">
        <b-form-textarea id="textarea" rows="2" max-rows="6" v-model="reviewInfo.content"></b-form-textarea>
      </b-form-group>
      <b-form-group label="Rating">
        <b-form-rating v-model="reviewInfo.rating"></b-form-rating>
      </b-form-group>
    </b-modal>
  </b-col>
</template>
<script>
import { Api } from '../Api'
export default {
  props: ['review'],
  data() {
    return {
      bookinfo: { coverURL: ' ', title: ' ' },
      reviewInfo: {
        content: this.review.content,
        rating: this.review.rating
      }
    }
  },
  computed: {
    compReview: {
      get() { return this.review },
      set(value) { this.$emit('update:review', value) }
    }
  },
  methods: {
    async updateReview() {
      try {
        await Api.put(`/reviews/${this.review._id}`, this.reviewInfo)
        this.compReview.content = this.reviewInfo.content
        this.compReview.rating = this.reviewInfo.rating
        this.$bvToast.toast('Success', {
          title: 'Review saved',
          autoHideDelay: 5000,
          appendToast: false
        })
      } catch (e) { console.error(e) }
    }
  },
  async created() {
    try {
      const result = await Api.get(`/books/${this.review.isbn}`)
      this.bookinfo = result.data
    } catch (e) {
      console.error(e)
    }
  }
}
</script>
