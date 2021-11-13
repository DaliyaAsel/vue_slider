<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <div class="product__wrapper">
          <!-- slider -->
          <div class="product-slider">
            <carousel :perPage="1" :paginationEnabled="true" paginationColor="#b3b3b3" paginationActiveColor="#494ce8">
              <slide v-for="(slide, index) in product.gallery" :key="index"> 
                  <img :src="slide.img" alt="slide.title">
              </slide>
            </carousel>
          </div>
          <!-- content -->
          <div class="product-content">
            <h1 class="title">{{ product.title }}</h1>
            <p>{{ product.descr }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: null,
    };
  },
  created() {
    // из параметров ройта вытащили id
    let id = this.$route.params.id;
    // вызвали getters из state и передали туда этот id, этот геттерс в сою очередь ищет совпадение из линка карточки и роута
    this.product = this.$store.getters.getProduct(id);
  },
};
</script>

<style lang="scss">
.product__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .product-slider,
  .product-content {
    min-width: 48%;
    text-align: center;
  }
}
</style>
   