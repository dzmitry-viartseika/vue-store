<template lang="pug">
    .app-pagination
      .app-container
        .app-pagination-row
          .app-pagination-row__item.app-pagination-row__item_prev Previous
          .app-pagination-row__item.app-pagination-row__item_active.app-pagination-row__item_first 1
          .app-pagination-row__item.app-pagination-row__item_second 2
          .app-pagination-row__item.app-pagination-row__item_next Next
</template>

<script>
export default {
  name: 'PaginationTemplate',
};
</script>

<style scoped lang="scss">
  @import "../../assets/scss/core.scss";

  .app-pagination {

    &-row {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-bottom: 20px;
      margin-top: 20px;
      &__item {
        border: 1px solid $borderColor;
        color: $hoverBgofButton;
        padding: 8px 12px;
        transition: all .4s ease-in;
        cursor: pointer;
        &:hover {
          background: $borderColor;
        }
      }
      &__item_active {
        background: $hoverBgofButton;
        color: $secondColor;
      }
    }
  }
</style>
