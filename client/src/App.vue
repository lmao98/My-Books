<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex justify-start">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <div class="nav__items d-flex gap-2 ml-2">
        <a class="white--text" href="/#/">Home</a>
        <a class="white--text" href="/#/about">About</a>
        <a class="white--text" href="/#/mybooklist">My book list</a>
      </div>

      <v-spacer></v-spacer>

      <v-btn small elevation="" color="" href="/#/signin">Sign In</v-btn>

      <v-btn outline color="white primary--text" dark href="/#/signup">Sign up</v-btn>
    </v-app-bar>

    <v-main>
      <component :is="currentView" />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import NotFound from "./components/NotFound";
import MyBookListPageVue from "./components/MyBookListPage.vue";
import SignInPage from "./components/SignInPage.vue";
import SignUpPage from "./components/SignUpPage.vue";

const routes = {
  "/": HomePage,
  "/about": AboutPage,
  "/mybooklist": MyBookListPageVue,
  "/signin": SignInPage,
  "/signup": SignUpPage,
};
export default {
  name: "App",

  components: {
    HelloWorld,
    HomePage,
    AboutPage,
    NotFound,
    SignUpPage,
  },

  data() {
    return {
      currentPath: window.location.hash,
    };
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || "/"] || NotFound;
    },
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      this.currentPath = window.location.hash;
    });
  },
};
</script>

<style scoped>
.nav__items {
  gap: 1rem;
}
</style>
