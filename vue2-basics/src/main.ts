import Vue from "vue";
// import App from "./App.vue";
// import App from "./components/00-hello.vue";
// import App from "./components/10-data-binding.vue";
// import App from "./components/20-forloop.vue";
// import App from "./components/22-forloop-objects.vue";
// import App from "./components/30-conditional.vue";
// import App from "./components/40-input-binding-simple.vue";
// import App from "./components/42-input-binding.vue";
// import App from "./components/50-event-handling.vue";
// import App from "./components/55-event-mods.vue";
// import App from "./components/60-props.vue";
import App from "./components/70-world-time.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
