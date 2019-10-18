<template lang="pug">
    .app-product
      .app-product-row
        .app-product-row__item(v-for='(item,index) in goods' :key="index")
        .app-product-row__item-img {{ goods }}
        .app-product-row__item-title {{ item.title }}
        .app-product-row__item-price {{ item.price }}
        .app-product-row__item-desc {{ item.desc }}
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ProductTemplate',
  computed: mapState(['goods']),
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/core.scss";
  .app-product {
    &-row {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      &__item {
        width: 33%;
        border: 1px solid $borderColor;
        height: 400px;
      }
    }
  }
</style>
