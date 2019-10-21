<template lang="pug">
  .app-item
    .app-container
      .app-item-row
        .app-item-row__promo
          img(src="https://productimages.hepsiburada.net/s/18/280-413/9801258663986.jpg")
        .app-item-row__info
          .app-item-row__info-title {{ prod.title }}
          .app-item-row__info-price {{ prod.price }}
          .app-item-row__info-subtitle Description
          .app-item-row__info-content {{ prod.description }}
          .app-item-row__info-subtitle Brand
          .app-item-row__info-content {{ prod.brand }}
          .app-item-row__info-subtitle Size
          .app-item-row__info-content {{ prod.size }}
          .app-item-row__info-subtitle Camera
          .app-item-row__info-content {{ prod.camera }}
          .app-item-row__info-subtitle CPU
          .app-item-row__info-content {{ prod.cpu }}
          .app-item-row__info-subtitle Memory
          .app-item-row__info-content {{ prod.memory }}
          .app-item-row__info-subtitle Display
          .app-item-row__info-content {{ prod.display }}
          .app-item-row__info-subtitle Battery
          .app-item-row__info-content {{ prod.battery }}
          .app-item__order
            button.app-item__order-btn Add to Cart

</template>

<script>
export default {
  name: 'ProductItem',
  props: ['id'],
  computed: {
    prod() {
      const idx = this.id;
      return this.$store.getters.prodById(idx);
    },
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
