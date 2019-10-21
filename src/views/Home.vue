<template lang="pug">
  .app-container
    .app-content
      .app-content__aside
        BrandsTemplate
        PriceTemplate
      .app-content__main
        LayoutModeTemplate
        GoodsTemplate
</template>

<script>
import LayoutModeTemplate from '../components/LayoutModeTemplate.vue';
import BrandsTemplate from '../components/BrandsTemplate.vue';
import GoodsTemplate from '../components/GoodsTemplate.vue';
import CartTemplate from '../components/CartTemplate.vue';
import PriceTemplate from '../components/PriceTemplate.vue';

export default {
  name: 'Home.vue',
  components: {
    PriceTemplate,
    CartTemplate,
    BrandsTemplate,
    GoodsTemplate,
    LayoutModeTemplate,
  },
};
</script>

<style scoped lang="scss">
  @import "../assets/scss/core.scss";

  .app-content {
    padding-top: 50px;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
  &__aside {
     width: 30%;
   }
  &__main {
     width: 70%;
   }
  }
</style>
