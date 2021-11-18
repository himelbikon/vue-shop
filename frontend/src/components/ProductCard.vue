<template>
  <div class="col-6 col-md-4 col-lg-3 my-2">
    <div class="product-card shadow">
      <div>
        <img
          :src="`${this.$store.state.url}${product.image}`"
          alt=""
          class="img-fluid w-100"
          v-if="product.image"
        />
        <img
          src="https://via.placeholder.com/500x500"
          alt=""
          class="img-fluid"
          v-else
        />
      </div>

      <div class="my-2 p-3">
        <div>
          <strong>{{ product.name }}</strong>
        </div>
        <div>Price: ${{ product.price }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product-card",
  props: {
    product: Object,
  },
};
</script>