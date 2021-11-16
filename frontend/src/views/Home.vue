<template>
  <div class="home-page">
    <button class="btn btn-success">Home</button>

    <h2>
      {{ this.$store.state.authCheck }} {{ this.$store.state.isAuthenticated }}
    </h2>
  </div>
</template>

<script>
export default {
  name: "home",
  mounted() {},
};
</script>