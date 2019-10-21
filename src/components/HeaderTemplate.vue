<template lang="pug">
    header.app-header
      .app-container
        .app-header-row
          .app-header-row__logo
            a.app-header-row__logo_link(href="/") Ecommerce
          router-link.app-header-row__cart(:to="'/cart'")
            span.app-header-row__cart-text Cart
            span.app-header-row__cart-order ({{ cartItems.length }})

</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: 'HeaderTemplate',
  computed: mapGetters(['cartItems']),
};
</script>

<style scoped lang="scss">

  @import "../assets/scss/core.scss";

  .app-header {
    width: 100%;
    background: $MainBgSection;
    min-height: 70px;
      &-row {
        display: flex;
        justify-content: space-between;
        align-self: center;
        height: 70px;
        &__logo {
          font-family: $global-font;
          font-size: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          &_link {
            text-decoration: none;
            color: $secondColor;
          }
        }
        &__cart {
          color: $cartColor;
          font-size: 16px;
          line-height: 24px;
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          &-text {
            margin-right: 5px;
          }
        }
      }
  }
</style>
