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
          <li class="p-3">
            <router-link :to="{ name: 'home' }"> Home </router-link>
          </li>
          <li class="p-3">
            <router-link :to="{ name: 'about' }"> About us </router-link>
          </li>
          <li class="p-3" v-if="$store.state.token">
            User
            <div class="sub-menu-1 text-center my-2 px-2 py-3 shadow">
              <ul class="ls-none m-0 p-0">
                <li>
                  <router-link :to="{ name: 'profile' }">Profile</router-link>
                </li>
                <hr />
                <li class="">
                  <button
                    class="btn text-white btn-nav"
                    v-on:click="logoutHandler"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </li>
          <li class="p-3"><a href="#"> Contact </a></li>
          <li class="p-3" v-if="!$store.state.token">
            <router-link :to="{ name: 'login' }"> Login </router-link>
          </li>

          <li class="p-3">
            <router-link :to="{ name: 'cart' }">
              <i class="fas fa-shopping-cart"></i> ({{ cartLen }})
            </router-link>
          </li>
        </ul>
      </div>

      <button class="btn mobile text-white" v-on:click="menuHandler">
        <i class="fas fa-bars"></i>
      </button>
    </nav>
  </header>
</template>

<script>
var right = "-390px";

export default {
  name: "Header",
  data() {
    return {
      menuRight: right,
    };
  },
  watch: {
    $route(to, from) {
      if (to != from) {
        this.menuRight = right;
      }
    },
  },
  mounted() {},
  methods: {
    menuHandler() {
      if (this.menuRight === right) {
        this.menuRight = "-22px";
      } else {
        this.menuRight = right;
      }
    },
    logoutHandler() {
      this.$store.state.token = "";
      this.$store.commit("logginOut");
    },
  },
  computed: {
    cartLen() {
      return this.$store.state.cart.length;
    },
  },
};
</script>


<style scoped>
a {
  color: white;
  text-decoration: none;
}

nav a:hover,
.main-menu li:hover {
  color: var(--hov-col);
}

.btn-nav:hover {
  background: var(--hov-col);
}

.ls-none {
  list-style: none;
}

.sub-menu-1 {
  display: none;
  position: absolute;
  background: var(--dbg);
}

.sub-menu-1 li {
  min-width: 100px;
}

.main-menu li:hover .sub-menu-1,
.sub-menu-1:hover {
  display: block;
}

.dbg {
  background: var(--dbg);
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
    text-align: center;
    transition: 0.5s ease-in-out;
    /* overflow: hidden; */
  }
}
</style>