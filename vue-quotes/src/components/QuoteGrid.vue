<template>
  <div class="row">
    <app-quote
      :key="index"
      v-for="(quote, index) in quotes"
      @click.native="deleteQuote(index)"
    >{{ quote }}</app-quote>
  </div>
</template>

<script>
import Quote from "./Quote.vue";
export default {
  props: {
    quotes: Array
  },
  components: {
    appQuote: Quote
  },
  methods: {
    deleteQuote(index) {
      this.$emit('quoteDeleted', index);
    }
  }
};
</script>

<style>
</style>