<template>
  <div class="head-banner bg-light py-5">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="text p-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sit
            velit voluptatem. Aliquam architecto pariatur harum molestias
            facilis reiciendis nam corporis.
            <div>
              <button class="my-3 btn dbg text-white">Shop Now</button>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <img class="img-fluid" src="@/assets/png.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "head-banner",
  methods: {},
};
</script>

<style scoped>
@keyframes slideInLeft {
  0% {
    transform: translateX(-30%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  0% {
    transform: translateX(30%);
  }
  100% {
    transform: translateX(0);
  }
}

.text {
  margin-top: 10%;
  transition: 0.5s;
  animation: 1s ease-out 0s 1 slideInLeft;
}

img {
  animation: 1s ease-out 0s 1 slideInRight;
}

.dbg {
  background: var(--dbg);
}

@media (max-width: 992px) {
  .row {
    flex-direction: column-reverse;
    text-align: center;
  }
}
</style>