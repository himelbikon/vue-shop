<template>
  <div class="cart">
    <h3>{{ this.$store.state.cartItems }}</h3>
  </div>
</template>

<script>
export default {
  name: "cart",
};
</script>