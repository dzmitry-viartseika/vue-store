<template lang="pug">
    .app-product
      .app-product-row
        .app-product-row__wrap(v-for='(prod,index) in goods' :key="index")
          router-link(:to="'/product/' + prod.id").app-product-row__item-link
            .app-product-row__item
              img.app-product-row__item-img(:src="prod.img")
              .app-product-row__item-title {{ prod.title }}
              .app-product-row__item-price ${{ prod.price }}
              .app-product-row__item-desc {{ prod.description }}
              button.app-product-row__item-btn(@click.prevent="showAlert(prod)") Add to Cart
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ProductTemplate',
  computed: mapState(['goods']),
  methods: {
    showAlert(item) {
      this.$swal('Added to cart!');
      this.$store.getters.cartItems.push(item);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/core.scss";
  .app-product {
    &-row {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      margin: 0px -18px;
      position: relative;
      left: 5px;
      &__wrap {
        padding: 0 14px;
        width: 33%;
      }
      &__item {
        border: 1px solid $borderColor;
        height: auto;
        display: flex;
        justify-content: center;
        flex-direction: column;
        color: $headerTitleColor;
        font-family: $global-font-title-product;
        transition: all .4s ease-in;
        cursor: pointer;
        padding: 16px;
        border-radius: 5px;
        margin-bottom: 14px;
        &:hover &-btn {
            opacity: 1;
        }
        &:hover {
          box-shadow: -1px 1px 5px 0 rgba(0,0,0,0.75);
        }
        &-link {
          text-decoration: none;
        }
        &-img {
          max-width: 215px;
          height: auto;
          margin: 0 auto;
        }
        &-title {
          margin-top: 25px;
          font-size: 13px;
          line-height: 15px;
          font-weight: 500;
          margin-bottom: 8px;
        }
        &-price {
          font-size: 20px;
          line-height: 24px;
          font-weight: 500;
          text-align: left;
          margin-bottom: 8px;
        }
        &-desc {
          font-size: 11px;
          line-height: 17px;
          font-weight: 400;
          text-align: left;
          margin-bottom: 8px;
        }
        &-btn {
          background: $bgOfButton;
          padding: 0 12px;
          height: 36px;
          border-radius: 5px;
          transition: all .2s;
          width: 60%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: $secondColor;
          margin: 30px auto 0;
          cursor: pointer;
          opacity: 0;
          &:hover {
            background: $hoverBgofButton;
          }
        }
      }
    }
  }
</style>
