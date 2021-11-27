<template>
  <div class="single-product">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 my-3">
          <div class="image-side d-flex justify-content-center">
            <img
              src="https://via.placeholder.com/500x500"
              alt=""
              class="img-fluid w-75"
              v-if="!product.image"
            />
            <img
              :src="this.$store.state.url + bigImg"
              alt=""
              class="img-fluid w-75"
              v-else
            />
          </div>

          <div class="row d-flex justify-content-center">
            <div class="col-2 m-0 p-0">
              <img
                :src="this.$store.state.url + product.image"
                alt=""
                class="img-fluid"
                v-if="product.image"
                @click="changeImage(product.image)"
              />
            </div>
            <div class="col-2 m-0 p-0">
              <img
                :src="this.$store.state.url + product.image2"
                alt=""
                class="img-fluid"
                v-if="product.image2"
                @click="changeImage(product.image2)"
              />
            </div>
            <div class="col-2 m-0 p-0">
              <img
                :src="this.$store.state.url + product.image3"
                alt=""
                class="img-fluid"
                v-if="product.image3"
                @click="changeImage(product.image3)"
              />
            </div>
            <div class="col-2 m-0 p-0">
              <img
                :src="this.$store.state.url + product.image4"
                alt=""
                class="img-fluid"
                v-if="product.image4"
                @click="changeImage(product.image4)"
              />
            </div>
            <div class="col-2 m-0 p-0">
              <img
                :src="this.$store.state.url + product.image5"
                alt=""
                class="img-fluid"
                v-if="product.image5"
                @click="changeImage(product.image5)"
              />
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 my-3">
          <h3>{{ product.name }}</h3>

          <div class="my-5">Price: ${{ product.price }}</div>

          <div v-if="isIncart">
            This product is already in cart! ({{ isIncart[0].quantity }})
          </div>

          <div class="input-group my-5 w-75">
            <input
              type="number"
              min="1"
              class="form-control"
              aria-describedby="button-addon2"
              v-model="quantity"
            />
            <button
              class="btn btn-df"
              type="button"
              id="button-addon2"
              @click="addTocart()"
            >
              Add To Cart
            </button>
            <div v-if="isIncart">
              <small
                >You can increase, decrease or delete this product from cart
                page.</small
              >
            </div>
          </div>
        </div>
      </div>

      <div class="row my-3">
        {{ product.details }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "single-product",
  data() {
    return {
      product: {},
      quantity: 1,
      bigImg: "",
    };
  },
  mounted() {
    this.getProduct();
  },
  methods: {
    async getProduct() {
      await axios
        .get(`/api/shop/${this.$route.params.id}/`)
        .then((response) => {
          this.product = response.data;

          this.bigImg = response.data.image;
        })
        .catch((error) => {
          console.log(JSON.stringify(error.response.data));
        });
    },
    changeImage(src) {
      this.bigImg = src;
    },
    addTocart() {
      const obj = { product: this.product, quantity: this.quantity };
      this.$store.commit("addToCart", obj);
    },
  },
  computed: {
    isIncart() {
      const exists = this.$store.state.cart.filter((i) => {
        return i.product.id === this.product.id;
      });

      if (exists.length) {
        return exists;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
img {
  cursor: pointer;
}

.btn-df {
  background: var(--dbg);
  color: white;
}
</style>