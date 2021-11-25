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

            <hr />
            <div ref="paypal"></div>
            <hr />

            <!-- <button
              type="button"
              class="btn btn-df text-white"
              @click="orderHandler()"
            >
              Submit
            </button> -->
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
import axios from "axios";

export default {
  name: "checkout",
  data() {
    return {
      loaded: false,
      paidFor: false,
      cart: [],
      items: [],
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      address: "",
      zipcode: "",
      place: "",
      token: "Ecommerce_",
      errors: [],
      totalPrice: 0,
    };
  },
  mounted() {
    this.cart = this.$store.state.cart;
    this.totalPrice = this.priceCounter();
    this.token = this.generateToken();

    this.collectItems();
    this.mountPaypal();
  },
  computed: {
    totalCartPrice() {
      let price = 0;
      this.cart.map((i) => {
        price += i.product.price * i.quantity;
      });

      return price;
    },
  },
  methods: {
    mountPaypal: function () {
      const script = document.createElement("script");
      script.src =
        "https://www.paypal.com/sdk/js?client-id=AbzYFUyRQHaRRb0NQ6vsehobiGBGwcFjcJBlMIxrfbzy_mFH4nklge6-raop0Nk9YW2Ryulu9Z0yPI_z";
      // AbzYFUyRQHaRRb0NQ6vsehobiGBGwcFjcJBlMIxrfbzy_mFH4nklge6-raop0Nk9YW2Ryulu9Z0yPI_z
      script.addEventListener("load", this.setLoaded);
      document.body.appendChild(script);
    },
    setLoaded: function () {
      this.loaded = true;
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: this.token,
                  amount: {
                    currency_code: "USD",
                    value: this.totalPrice,
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            this.data;
            this.paidFor = true;
            console.log(order);
            this.orderHandler();
          },
          onError: (err) => {
            console.log(err);
          },
        })
        .render(this.$refs.paypal);
    },
    orderHandler() {
      const data = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        phone: this.phone,
        address: this.address,
        zipcode: this.zipcode,
        place: this.place,
        token: this.token,
        paid_amount: this.totalPrice,
        items: this.items,
      };

      axios
        .post("orders/", data)
        .then(() => {
          // console.log(response.data);
          this.$router.push({ name: "home" });
          this.$store.commit("clearCart");
        })
        .catch((error) => {
          if (error.response) {
            for (const property in error.response.data) {
              this.errors.push(`${error.response.data[property]}`);
            }
            console.log(JSON.stringify(error.response.data));
          } else if (error.message) {
            this.error.push("Something went wrong. Please try later!");
            console.log(JSON.stringify(error));
          }
        });
    },
    collectItems() {
      this.cart.map((i) => {
        const item = {
          product: i.product.id,
          price: i.product.price,
          quantity: i.quantity,
        };

        this.items.push(item);
      });
    },
    priceCounter() {
      let price = 0;
      this.cart.map((i) => {
        price += i.product.price * i.quantity;
      });

      return price;
    },
    generateToken() {
      const string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let token = "";

      for (let i = 0; i < 20; i++) {
        token += string[this.random(0, string.length)];
      }

      this.token += token;
      // console.log(this.token);
    },
    random(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
  },
};
</script>

<style scoped>
.btn-df {
  background: var(--dbg);
}
</style>