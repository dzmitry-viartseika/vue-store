<template lang="pug">
  div#app
    HeaderTemplate
    router-view
    PaginationTemplate
    FooterTemplate
</template>

<script>

import HeaderTemplate from './components/HeaderTemplate.vue';
import PaginationTemplate from './components/Pagination/PaginationTemplate.vue';
import FooterTemplate from './components/FooterTemplate.vue';


export default {
  name: 'app',
  components: {
    FooterTemplate,
    PaginationTemplate,
    HeaderTemplate,
  },
};
</script>

<style lang="scss">
@import "assets/scss/core";
</style>
