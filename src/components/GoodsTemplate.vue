<template lang="pug">
    .app-goods
      ProductTemplate

</template>

<script>

import ProductTemplate from './Product/ProductTemplate.vue';

export default {
  name: 'GoodsTemplate',
  components: {
    ProductTemplate,
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/core.scss";
  .app-goods {
    border: 1px solid $borderColor;
    width: 100%;
    height: 700px;
    border-radius: 5px;
  }
</style>
