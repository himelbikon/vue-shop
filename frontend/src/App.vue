<template>
  <div class="main-app">
    <Header />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Yuji+Syuku&display=swap");
:root {
  --dbg: #3cd3ad;
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
</style>
