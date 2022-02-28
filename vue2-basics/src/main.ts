import Vue from "vue";
import App from "./App.vue";
// import App from "./components/00-hello.vue";
// import App from "./10-data-binding.vue";
// import App from "./20-forloop.vue";
// import App from "./22-forloop-objects.vue";
// import App from "./30-conditional.vue";
// import App from "./40-input-binding-simple.vue";
// import App from "./42-input-binding.vue";
// import App from "./50-event-handling.vue";
// import App from "./55-event-mods.vue";
// import App from "./60-props.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
