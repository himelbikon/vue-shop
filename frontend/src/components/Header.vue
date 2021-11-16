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
          <li class="p-3" v-if="$store.state.isAuthenticated">
            Name
            <div class="sub-menu-1 text-center my-2 px-2 py-3 shadow">
              <ul class="ls-none m-0 p-0">
                <li class=""><a href="#">Profile</a></li>
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
          <li class="p-3" v-if="!$store.state.isAuthenticated">
            <router-link :to="{ name: 'login' }"> Login </router-link>
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
import axios from "axios";

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
      this.menuOpen = !this.menuOpen;
      if (this.menuOpen) {
        this.menuRight = "-12px";
      } else {
        this.menuRight = "-390px";
      }
    },
    logoutHandler() {
      axios
        .post("/api/logout")
        .then((response) => {
          console.log(response.data);
          this.$store.state.isAuthenticated = false;
          this.$store.state.authCheck = true;
        })
        .catch((error) => {
          console.log(error);
        });
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