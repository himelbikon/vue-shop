<template>
  <div class="main-app">
    <Header />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import axios from "axios";

import Header from "@/components/Header";

export default {
  name: "App",
  components: {
    Header,
  },
  watch: {
    $route(to, from) {
      if (to != from) {
        window.scroll(0, 0);
      }
    },
  },
  mounted() {
    if (!this.$store.state.token) {
      console.log("check auth");
      this.$store.commit("initializeStore");
      this.getProfile();
    }
  },
  methods: {
    async getProfile() {
      await axios
        .get("/users/profile")
        .then((response) => {
          this.$store.state.user = response.data.email.split("@")[0];
        })
        .catch(() => {
          this.$store.commit("logginOut");
        });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Yuji+Syuku&display=swap");
:root {
  --dbg: #3cd3ad;
  --hov-col: #0d6efd;
}

* {
  font-family: "Yuji Syuku", serif;
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  color: var(--dbg);
}

.dbg {
  background: var(--dbg);
}

.dc {
  color: var(--dbg);
}

main {
  min-height: 80vh;
}

@media (max-width: 992px) {
  .non-mobile {
    display: none;
  }
}
</style>
