<template lang="pug">
  .app-brands
    .app-brands__header Brands
    .app-brands__content
      ul.app-brands__content-list
        li.app-brands__content-item(v-for='(brand,index) in brands' :key="index")
          label.checkbox__label {{ brand.title }}
            input.checkbox(type="checkbox", :name="brand.title")
            span.checkbox__fake
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'BrandsTemplate',
  computed: mapState(['brands']),
};
</script>

<style scoped lang="scss">
@import "../assets/scss/core.scss";
  .app-brands {
    width: 300px;
    height: 500px;
    font-family: $global-font;
    &__header {
      background: $headerTitleBg;
      font-size: 28px;
      line-height: 34px;
      padding: 12px 20px;
      border-top: 1px solid $borderColor;
      border-left: 1px solid $borderColor;
      border-right: 1px solid $borderColor;
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
    }
    &__content {
      &-item {
        min-height: 57px;
        border:1px solid $borderColor;
        box-sizing: border-box;
        width: 100%;
        &:last-child {
          border-bottom-right-radius: 5px;
          border-bottom-left-radius: 5px;
        }
      }
    }
  }
</style>
