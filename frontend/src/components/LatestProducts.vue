<template>
  <div class="latest-products">
    <HeadTitle title="Latest Products" />

    <div class="container my-3">
      <div class="row">
        <ProductCard
          v-for="product in latestProducts"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import HeadTitle from "@/components/HeadTitle";
import ProductCard from "@/components/ProductCard";
import axios from "axios";

export default {
  name: "latest-products",
  data() {
    return {
      latestProducts: [],
    };
  },
  components: {
    HeadTitle,
    ProductCard,
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      await axios
        .get("/shop")
        .then((response) => {
          this.latestProducts = response.data;
        })
        .catch((error) => {
          if (error.response) {
            console.log(JSON.stringify(error.response.data));
          } else {
            console.log("Something went wrong!");
          }
        });
    },
  },
};
</script>