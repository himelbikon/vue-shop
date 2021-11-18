<template>
  <div class="home-page">
    <section><HeadBanner /></section>
    <section><LatestProducts /></section>
  </div>
</template>

<script>
import HeadBanner from "@/components/HeadBanner";
import LatestProducts from "@/components/LatestProducts";

export default {
  name: "home",
  mounted() {},
  components: {
    HeadBanner,
    LatestProducts,
  },
};
</script>