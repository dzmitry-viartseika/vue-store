<template lang="pug">
  .app-price
    .app-price__header Price
    .app-price__content
      ul.app-price__content-list
        li.app-price__content-item
          label.checkbox__label Low to high
            input.checkbox
            span.checkbox__fake
        li.app-price__content-item
          label.checkbox__label High to low
            input.checkbox
            span.checkbox__fake
</template>

<script>
export default {
  name: 'PriceTemplate',
};
</script>

<style scoped lang="scss">
  @import "../assets/scss/core.scss";
  .app-price {
    width: 300px;
    height: auto;
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
