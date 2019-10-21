<template lang="pug">
  .app-footer
    .app-container
      .app-footer__copyright Copyright © Dmitry Verteyko 2019
</template>

<script>
export default {
  name: 'FooterTemplate',
};
</script>

<style scoped lang="scss">
@import "../assets/scss/core";
  .app-footer {
    width: 100%;
    background: $MainBgSection;
    color: $secondColor;
    font-size: 16px;
    line-height: 24px;
    position: fixed;
    bottom: 0;
    text-align: center;
    height: 70px;
    display: flex;
    align-items: center;
  }
</style>
