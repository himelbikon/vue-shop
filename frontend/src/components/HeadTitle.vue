<template>
  <div class="head-title my-5">
    <h1 class="text-center py-3">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "head-title",
  props: {
    title: String,
  },
};
</script>