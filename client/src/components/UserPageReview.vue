<template>
  <b-col>
    <b-card no-body class="overflow-hidden text-left" role="button">
      <b-row no-gutters>
        <b-col md="2">
          <b-card-img :src= this.bookinfo.coverURL class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="10">
          <b-card-body :title= this.bookinfo.title>
            <b-card-text>
              <b-col>
                <p>
                  {{ review.content }}
                </p>
                <div>
                  <b-form-rating :value = review.rating  no-border readonly show-value></b-form-rating>
                </div>
            </b-col>
            </b-card-text>
            <slot></slot>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </b-col>
</template>
<script>
import { Api } from '../Api'
export default {
  props: ['review'],
  data() {
    return {
      bookinfo: { coverURL: ' ', title: ' ' }
    }
  },
  async created() {
    const result = await Api.get(`/books/${this.review.isbn}`)
    this.bookinfo = result.data
  }
}
</script>
