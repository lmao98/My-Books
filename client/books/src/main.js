// import { createApp } from "vue";
// import App from "./App.vue";

// const app = createApp(App);
// import gAuthPlugin from "vue3-google-oauth2";
// let gauthClientId =
//   "206051238634-f1i031k7v3t8acpvcsiq4s14rsisqba2.apps.googleusercontent.com";
// app.use(gAuthPlugin, {
//   clientId: gauthClientId,
//   scope: "email",
//   prompt: "consent",
// });

// app.mount("#app");
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
