import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

// import "./style.css";
import App from "./App.vue";
import Home from "./components/Home.vue";
import Forecast from "./components/Forecast.vue";
import Settings from "./components/Settings.vue";
import Hourly from "./components/Hourly.vue";
import ForecastByZip from "./components/ForecastByZip.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/forecast", component: Forecast },
  { path: "/settings", component: Settings },
  { path: "/hourly", component: Hourly },
  { name: "byZip", path: "/zip/:zipCode", component: ForecastByZip, props: true}
];

const router = createRouter({ routes, history: createWebHashHistory() });
createApp(App).use(router).mount("#app");
