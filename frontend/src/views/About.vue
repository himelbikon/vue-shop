<template>
  <div class="about-page">
    <button class="btn btn-danger">
      About

      {{ this.$store.state.authCheck }}
      {{ this.$store.state.isAuthenticated }}
    </button>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>