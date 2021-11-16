<template>
  <div class="login-page">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-10 col-md-6 col-lg-4 bg-white pt-5 pb-4 my-5 rounded">
          <form class="px-3 pt-3 pb-0" @submit.prevent="loginHandler">
            <div>
              <h3 class="fw-bold text-center mb-5">Login</h3>
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
              <label for="exampleInputPassword1" class="form-label"
                >Password</label
              >
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                v-model="password"
              />
            </div>

            <div class="alert alert-danger my-0" v-if="false">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic,
              cupiditate?
            </div>

            <button type="submit" class="btn btn-primary w-100 my-3">
              Submit
            </button>

            <div class="alert alert-success py-1" v-if="false">
              Lorem ipsum dolor, sit amet
            </div>

            <p class="text-center mt-2">
              Don't have any account? <a href="#">Register</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  mounted() {
    if (this.$store.state.isAuthenticated) {
      this.$router.push({ name: "home" });
    }
  },
  methods: {
    async loginHandler() {
      const form_data = {
        email: this.email,
        password: this.password,
      };

      await axios
        .post("/api/login", form_data)
        .then((response) => {
          console.log(response.data);
          this.$store.state.isAuthenticated = true;
          this.$store.state.authCheck = true;
          this.$router.push({ name: "home" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.login-page {
  background: linear-gradient(to bottom right, rgb(9 163 201), rgb(86 244 105));
  min-height: 100vh;
}
</style>