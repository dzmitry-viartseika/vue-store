<template lang="pug">
  .app-item
    .app-container
      .app-item-row
        .app-item-row__promo
          img(src="https://productimages.hepsiburada.net/s/18/280-413/9801258663986.jpg")
        .app-item-row__info
          .app-item-row__info-title Apple iPhone 7 Plus 32 GB (Apple Türkiye Garantili)
          .app-item-row__info-price $4,241.50
          .app-item-row__info-subtitle Description
          .app-item-row__info-content Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Amet
          .app-item-row__info-subtitle Brand
          .app-item-row__info-content Apple
          .app-item-row__info-subtitle Size
          .app-item-row__info-content 124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)
          .app-item-row__info-subtitle Camera
          .app-item-row__info-content 8mp (3264x2448)
          .app-item-row__info-subtitle CPU
          .app-item-row__info-content 1.3GHz Apple A6
          .app-item-row__info-subtitle Memory
          .app-item-row__info-content 16GB, 32GB and RAM 1 GB
          .app-item-row__info-subtitle Display
          .app-item-row__info-content 4.0 326 pixel density
          .app-item-row__info-subtitle Battery
          .app-item-row__info-content 1480 mAh
          .app-item__order
            button.app-item__order-btn Add to Cart

</template>

<script>
export default {
  name: 'ProductItem',
  props: ['id'],
  computed: {
    // prod() {
    //   const id = this.id;
    //   return this.$store.getters.prodById(id);
    // },
  },
};
</script>

<style scoped lang="scss">
  @import "../assets/scss/core.scss";

  .app-item {
    width: 100%;
    height: auto;
    font-family: $global-font;
    &-row {
      border: 1px solid $borderColor;
      display: flex;
      justify-content: center;
      margin-top: 20px;
      align-items: center;
      &__promo {
        width: 40%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
      }
      &__info {
        width: 60%;
        padding: 48px;
        border-left: 1px solid $borderColor;
        &-title {
          font-size: 28px;
          line-height: 34px;
          font-weight: bold;
          color: $headerTitleColor;
          margin-bottom: 16px;
        }
        &-price {
          color: $productPriceColor;
          font-size: 28px;
          line-height: 34px;
          font-weight: 500;
          margin-bottom: 16px;
        }
        &-subtitle {
          font-size: 16px;
          line-height: 24px;
          font-weight: 700;
          color: $headerTitleColor;
        }
        &-content {
          font-size: 16px;
          line-height: 24px;
          margin-bottom: 16px;
        }
      }
    }
    &__order {
      border-top: 1px solid $borderColor;
      &-btn {
        margin-top: 20px;
        text-transform: uppercase;
        border: 1px solid $selectedCheckboxBg;
        color: $selectedCheckboxBg;
        background-color: $secondColor;
        font-size: 20px;
        line-height: 30px;
        font-weight: 400;
        font-family: $global-font;
        border-radius: 5px;
        height: 48px;
        padding: 8px 16px;
        cursor: pointer;
        transition: all .4s ease-in;
        &:hover {
          background: $selectedCheckboxBg;
          color: $secondColor;
        }
      }
    }
  }
</style>
