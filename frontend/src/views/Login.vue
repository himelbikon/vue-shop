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

            <div class="alert alert-danger my-0" v-if="errors.length">
              <div v-for="error in errors" :key="error">{{ error }}</div>
            </div>

            <button type="submit" class="btn btn-primary w-100 my-3">
              Submit
            </button>

            <div class="alert alert-success py-1" v-if="success">
              {{ success }}
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
      errors: [],
      success: "",
    };
  },
  mounted() {
    if (this.$store.state.token) {
      this.$router.push({ name: "home" });
    }
  },
  methods: {
    async loginHandler() {
      this.errors = [];
      this.success = "";

      if (this.email === "") {
        this.errors.push("Enter your email!");
      } else if (this.password === "") {
        this.errors.push("Enter your password!");
      } else {
        const form_data = {
          email: this.email,
          password: this.password,
        };

        await axios
          .post("/api/login", form_data)
          .then((response) => {
            this.success = "Login successful!";
            // console.log(response.data);
            this.$store.commit("loggingIn", response.data);
            this.$router.push({ name: "home" });
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
      }
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