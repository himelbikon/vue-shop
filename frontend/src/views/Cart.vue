<template>
  <div class="cart">
    <h3 class="text-center my-2">Cart Items</h3>

    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Full Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, key) in this.$store.state.cart" :key="item">
            <th scope="row">{{ key + 1 }}</th>
            <td>{{ item.product.name }}</td>
            <td>{{ item.product.price }}</td>
            <td>
              <button
                class="btn btn-sm btn-light"
                @click="decreaseCart(item.product.id)"
              >
                -
              </button>
              {{ item.quantity }}
              <button
                class="btn btn-sm btn-light"
                @click="increaseCart(item.product.id)"
              >
                +
              </button>
            </td>
            <td>{{ item.quantity * item.product.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "cart",
  components: {},
  methods: {
    increaseCart(id) {
      this.$store.commit("increaseCart", id);
    },
    decreaseCart(id) {
      this.$store.commit("decreaseCart", id);
    },
  },
};
</script>