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
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, key) in this.$store.state.cart" :key="item">
            <th scope="row">{{ key + 1 }}</th>
            <td>{{ item.product.name }}</td>
            <td>${{ item.product.price }}</td>
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
            <td>${{ item.quantity * item.product.price }}</td>
            <td>
              <button
                class="btn btn-danger btn-sm"
                @click="deleteFromCart(item.product.id)"
              >
                x
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="container">
      <div class="row d-flex justify-content-end">
        <div class="col-4 border rounded p-3">
          <div>Total: ${{ totalCartPrice }}</div>
          <router-link
            :to="{ name: 'checkout' }"
            class="btn btn-df mt-3 text-white"
            >Checkout</router-link
          >
        </div>
      </div>
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
    deleteFromCart(id) {
      this.$store.commit("deleteFromCart", id);
    },
  },
  computed: {
    totalCartPrice() {
      let price = 0;
      this.$store.state.cart.map((i) => {
        price += i.product.price * i.quantity;
      });

      return price;
    },
  },
};
</script>

<style scoped>
.btn-df {
  background: var(--dbg);
}
</style>