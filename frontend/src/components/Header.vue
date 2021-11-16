<template>
  <header>
    <nav class="dbg text-white d-flex justify-content-between py-2 px-3">
      <div class="d-inline">
        <router-link :to="{ name: 'home' }"
          ><img
            src="https://himelbikon.pythonanywhere.com/static/images/logo1.png"
            alt=""
          />
        </router-link>
      </div>

      <div class="d-inline-block m-0 p-0">
        <ul
          class="d-flex mx-3 ls-none main-menu my-0 p-0"
          :style="{ right: menuRight }"
        >
          <li class="p-3 d-flex justify-content-end">
            <button class="btn mobile text-white" v-on:click="menuHandler">
              <i class="far fa-window-close"></i>
            </button>
          </li>
          <li class="p-3"><a href="#"> Home </a></li>
          <li class="p-3">
            <router-link :to="{ name: 'about' }"> About us </router-link>
          </li>
          <li class="p-3"><a href="#"> Contact </a></li>
          <li class="p-3"><a href="#"> Dashboard </a></li>
          <li class="p-3">
            Services
            <div class="sub-menu-1 text-center my-2 px-2 py-3 shadow">
              <ul class="ls-none m-0 p-0">
                <li class=""><a href="#">category</a></li>
                <hr />
                <li class=""><a href="#">category most</a></li>
                <hr />
                <li class=""><a href="#"> category</a></li>
              </ul>
            </div>
          </li>
          <li class="p-3"><a href="#"> Login </a></li>
          <li class="p-3"><a href="#"> Logout </a></li>
          <li class="p-3"><a href="#"> Contact </a></li>
        </ul>
      </div>

      <button class="btn mobile text-white" v-on:click="menuHandler">
        <i class="fas fa-bars"></i>
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      menuOpen: false,
      menuRight: "-390px",
    };
  },
  mounted() {},
  methods: {
    menuHandler() {
      console.log(this.menuOpen);
      this.menuOpen = !this.menuOpen;
      if (this.menuOpen) {
        this.menuRight = "-12px";
      } else {
        this.menuRight = "-390px";
      }
    },
  },
};
</script>


<style scoped>
a {
  color: white;
  text-decoration: none;
}

nav a:hover {
  color: #0d6efd;
}

.ls-none {
  list-style: none;
}

.sub-menu-1 {
  display: none;
  position: absolute;
  background: var(--dbg);
}

.main-menu li:hover .sub-menu-1,
.sub-menu-1:hover {
  display: block;
}

@media (max-width: 1000px) {
  .main-menu {
    background: var(--dbg);
    display: flex;
    flex-direction: column;
    position: absolute;
    box-shadow: 0 0 0;
    width: 370px;
    height: 100vh;
    top: 0;
    /* right: -370px; */
    text-align: center;
    transition: 0.5s ease-in-out;
  }
}
</style>