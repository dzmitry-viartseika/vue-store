<template lang="pug">
  div#app
    HeaderTemplate
    router-view
    FooterTemplate
</template>

<script>

import HeaderTemplate from './components/HeaderTemplate.vue';
import FooterTemplate from './components/FooterTemplate.vue';


export default {
  name: 'app',
  components: {
    FooterTemplate,
    HeaderTemplate,
  },
};
</script>

<style lang="scss">
@import "assets/scss/core";
</style>
