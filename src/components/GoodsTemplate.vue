<template lang="pug">
    .app-goods
      ProductTemplate
      PaginationTemplate
</template>

<script>

import ProductTemplate from './Product/ProductTemplate.vue';
import PaginationTemplate from './Pagination/PaginationTemplate.vue';

export default {
  name: 'GoodsTemplate',
  components: {
    ProductTemplate,
    PaginationTemplate,
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/core.scss";
  .app-goods {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
</style>
