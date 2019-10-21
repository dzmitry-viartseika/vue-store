<template lang="pug">
    .app-container
      .app-cart
        .app-cart__title Shopping cart
        .app-cart__goods(v-if="cartItems.length === 0") There is no item in cart
        .app-cart-row(v-else)
          .app-cart-row__img
            img(src="https://productimages.hepsiburada.net/s/18/280-413/9801258663986.jpg")
          .app-cart-row__desc
            .app-cart-row__desc-title Apple iPhone 7 Plus 32 GB
            .app-cart-row__desc-info Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet!
          .app-cart-row__price 4,241.50$
            span x
          .app-cart-row__amount
            input(type='number' min='1' max='9' step='1' value='1')
            .quantity-nav
              .quantity-button.quantity-up +
              .quantity-button.quantity-down -
          .app-cart-row__delete
              button
                font-awesome-icon(icon="trash")
        .app-cart__amount
          span.app-cart__amount-total Total price:
          span.app-cart__amount-price 0.00$
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'CartTemplate',
  computed: mapState(['cartItems']),
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
    &-row {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 20px;
      flex-direction: row;
      font-family: $global-font;
      &__img img {
        max-width: 100px;
        height: auto;
      }
      &__desc {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        &-title {
          font-size: 24px;
          line-height: 29px;
          font-weight: 700;
        }
        &-info {
          font-size: 19px;
          line-height: 23px;
          font-weight: 400;
        }
      }
      &__delete {
        width: 40px;
        height: 40px;
        border: 1px solid $borderRemoveButton;
      }
      &__amount {
        &-input {
          width: 80px;
          height: 40px;
          background: $borderColor;
          border: none;
          outline: none;
        }
      }
      &__price {
        font-size: 16px;
        line-height: 19px;
        font-weight: bold;
        & span {
          color: $multiplyIconColor;
          margin-left: 3px;
        }
      }
    }
  }

.quantity {
  position: relative;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button
{
  -webkit-appearance: none;
  margin: 0;
}

input[type=number]
{
  -moz-appearance: textfield;
}

.app-cart-row__amount input {
  width: 80px;
  height: 42px;
  line-height: 1.65;
  float: left;
  display: block;
  padding: 0;
  margin: 0;
  padding-left: 20px;
  border: 1px solid #eee;
}

.app-cart-row__amount input:focus {
  outline: 0;
}

.quantity-nav {
  float: left;
  position: relative;
  height: 42px;
}

.quantity-button {
  position: relative;
  cursor: pointer;
  border-left: 1px solid #eee;
  width: 20px;
  text-align: center;
  color: #333;
  font-size: 13px;
  font-family: "Trebuchet MS", Helvetica, sans-serif !important;
  line-height: 1.7;
  transform: translateX(-100%);
  user-select: none;
}

.quantity-button.quantity-up {
  position: absolute;
  height: 50%;
  top: 0;
  border-bottom: 1px solid #eee;
}

.quantity-button.quantity-down {
  position: absolute;
  bottom: -1px;
  height: 50%;
}


</style>
