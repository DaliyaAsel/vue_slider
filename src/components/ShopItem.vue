<template>
  <div class="item">
    <img :src="product.img" :alt="product.title" />
    <router-link class="link" :to="/shop/ + product.id">{{
      product.title
    }}</router-link>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      tupe: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.item__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  .item {
    max-width: 48%;
    text-align: center;
  }
  p {
  }
  font-size: 22px;
}
</style>