<template>
  <div class="checkout-page">
    <h3 class="text-center my-2">Checkout</h3>

    <div class="container">
      <div class="row">
        <!-- form col -->
        <div class="col-12 col-md-6">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >Frist Name</label
              >
              <input type="text" class="form-control" v-model="first_name" />
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >Last Name</label
              >
              <input type="text" class="form-control" v-model="last_name" />
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >Email address</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="email"
              />
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Phone</label>
              <input type="text" class="form-control" v-model="phone" />
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Address</label>
              <input
                type="text"
                class="form-control"
                v-model="address"
                maxlength="250"
              />
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >Zip Code</label
              >
              <input type="text" class="form-control" v-model="zipcode" />
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Place</label>
              <input
                type="text"
                class="form-control"
                v-model="place"
                maxlength="250"
              />
            </div>

            <button
              type="button"
              class="btn btn-df text-white"
              @click="orderHandler()"
            >
              Submit
            </button>
          </form>
        </div>

        <!-- products list -->
        <div class="col-12 col-md-6">
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
                <td>${{ item.product.price }}</td>
                <td>{{ item.quantity }}</td>
                <td>${{ item.quantity * item.product.price }}</td>
              </tr>
            </tbody>
          </table>

          <div class="mx-5">Total: ${{ totalCartPrice }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "checkout",
  data() {
    return {
      cart: [],
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      address: "",
      zipcode: "",
      place: "",
      errors: [],
    };
  },
  mounted() {
    this.cart = this.$store.state.cart;
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
  methods: {
    orderHandler() {
      const data = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        phone: this.phone,
        address: this.address,
        zipcode: this.zipcode,
        place: this.place,
      };

      console.log(data);
    },
  },
};
</script>

<style scoped>
.btn-df {
  background: var(--dbg);
}
</style>