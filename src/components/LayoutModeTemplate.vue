<template lang="pug">
    .app-layouts
      .app-layouts__text Change Layout:
      .app-layouts-mode.app-layouts-mode-three
        .app-layouts-mode__item
        .app-layouts-mode__item
        .app-layouts-mode__item
      .app-layouts-mode.app-layouts-mode-four
        .app-layouts-mode__item
        .app-layouts-mode__item
        .app-layouts-mode__item
        .app-layouts-mode__item
</template>

<script>
export default {
  name: 'LayoutTypesTemplate',
};
</script>

<style scoped lang="scss">
@import "../assets/scss/core.scss";
  .app-layouts {
    padding: 12px 20px;
    background: $headerTitleBg;
    border: 1px solid $borderColor;
    font-family: $global-font;
    font-size: 16px;
    line-height: 24px;
    color: $headerTitleColor;
    display: flex;
    justify-content: flex-end;
    border-radius: 5px;
    margin-bottom: 20px;
    &-mode {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid $selectBorder;
      padding: 5px;
      cursor: pointer;
      &-three {
        margin-left: 10px;
        margin-right: 10px;
      }
      &-four {

      }
      &__item {
        width: 11px;
        height: 11px;
        background: $selectBorder;
        & + & {
          margin-left: 5px;
        }
      }
    }
  }
</style>
