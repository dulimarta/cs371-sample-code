import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

// import "./style.css";
import App from "./App.vue";
import PageOne from "./components/PageOne.vue";
import PageTwo from "./components/PageTwo.vue";
import PageThree from "./components/PageThree.vue";

const routes = [
  { path: "/", component: PageOne },
  { path: "/two", component: PageTwo },
  { path: "/three", component: PageThree },
];

const router = createRouter({ routes, history: createWebHashHistory() });
createApp(App).use(router).mount("#app");
