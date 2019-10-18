<template lang="pug">
    .app-container
      .app-cart
        .app-cart__title Shopping cart
        .app-cart__goods There is no item in cart
        .app-cart__amount
          span.app-cart__amount-total Total price:
          span.app-cart__amount-price 0.00$
</template>

<script>
export default {
  name: 'CartTemplate',
};
</script>
<style scoped lang="scss">

@import "../assets/scss/core.scss";

  .app-cart {
    margin-top: 40px;
    font-family: $global-font;
    border: 1px solid $borderColor;
    box-sizing: border-box;
    border-radius: 5px;
    &__title {
      color: $headerTitleBg;
      background: $MainBgSection;
      height: 50px;
      display: flex;
      align-items: center;
      padding: 12px 20px;
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
    &__goods {
      min-height: 115px;
      padding: 20px;
      text-align: center;
      font-size: 56px;
    }
    &__amount {
      min-height: 80px;
      padding: 12px 20px;
      font-size: 16px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      border-top: 1px solid $borderColor;
      background: $cartFormFooterBg;
      &-total {
        margin-right: 5px;
      }
      &-price {
        font-weight: bold;
      }
    }
  }
</style>
