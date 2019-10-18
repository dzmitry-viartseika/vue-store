<template lang="pug">
  div#app
    HeaderTemplate
    .app-container
      .app-content
        .app-content__aside
          BrandsTemplate
        .app-content__main
          LayoutModeTemplate
          GoodsTemplate
    FooterTemplate
</template>

<script>

import HeaderTemplate from './components/HeaderTemplate.vue';
import LayoutModeTemplate from './components/LayoutModeTemplate.vue';
import BrandsTemplate from './components/BrandsTemplate.vue';
import GoodsTemplate from './components/GoodsTemplate.vue';
import CartTemplate from './components/CartTemplate.vue';
import FooterTemplate from './components/FooterTemplate.vue';


export default {
  name: 'app',
  components: {
    FooterTemplate,
    HeaderTemplate,
    CartTemplate,
    BrandsTemplate,
    GoodsTemplate,
    LayoutModeTemplate,
  },
};
</script>

<style lang="scss">
  @import "assets/scss/core";

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
