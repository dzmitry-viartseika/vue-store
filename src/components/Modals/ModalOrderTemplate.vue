<template lang="pug">
  .app-modal
    .app-modal__icon
    .app-modal__info
    button.app-modal__btn
  .app-overlay
</template>

<script>
export default {
  name: 'ModalOrderTemplate',
},
</script>

<style scoped lang="scss">
  @import "../../assets/scss/core.scss";
  .app-modal {
    max-width: 480px;
    height: auto;
    padding: 10px;
    &__icon {

    }
    &__info {
      font-size: 27px;
      line-height: 30px;
      font-weight: 600;
      font-family: $global-font;
    }
    &__btn {
      height: 21px;
      padding: 10px 24px;
      color: $secondColor;
      background: $bgOfButton;
      transition: all .3s ease-in;
      font-family: $global-font;
      &:hover {
        background: $hoverBgofButton;
      }
    }
  }

</style>
