<template>

<b-card header-tag="header">
    <template #header>
        <b-avatar class="mx-2" variant="primary" :text="CH"></b-avatar>
        <span>{{ review.username }}</span>
      </template>
      <b-card-text>{{ review.content }}</b-card-text>
      <template #footer>
        <b-form-rating :value="review.rating" readonly></b-form-rating>
      </template>
    </b-card>

</template>

<script>
export default {
  props: ['review']
}
</script>
