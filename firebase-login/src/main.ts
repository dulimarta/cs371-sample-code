import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./myconfig";
Vue.config.productionTip = false;
const app = initializeApp(firebaseConfig);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
