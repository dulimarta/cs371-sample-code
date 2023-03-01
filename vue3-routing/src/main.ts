import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

// import "./style.css";
import App from "./App.vue";
import Home from "./components/Home.vue";
import Forecast from "./components/Forecast.vue";
import Settings from "./components/Settings.vue";
import Hourly from "./components/Hourly.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/forecast", component: Forecast },
  { path: "/settings", component: Settings },
  { path: "/hourly", component: Hourly },
];

const router = createRouter({ routes, history: createWebHashHistory() });
createApp(App).use(router).mount("#app");
