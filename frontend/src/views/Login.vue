<template>
  <div class="login-page">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-10 col-md-6 col-lg-4 bg-white pt-5 pb-4 my-5 rounded">
          <form class="px-3 pt-3 pb-0">
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
export default {
  mounted() {
    if (!this.$store.state.isAuthenticated) {
      this.$router.push({ name: "home" });
    }
  },
};
</script>

<style scoped>
.login-page {
  background: linear-gradient(to bottom right, rgb(9 163 201), rgb(86 244 105));
  min-height: 80vh;
}
</style>