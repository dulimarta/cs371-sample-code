<template>
  <div id="app">
    <h2>Vue App Samples</h2>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    wghere
    <div>
      <Sample></Sample>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import HelloWorld from "./components/HelloWorld.vue";
// import Sample from "./components/00-hello.vue";
// import Sample from "./components/10-data-binding.vue";
// import Sample from "./components/20-forloop.vue";
// import Sample from "./components/22-forloop-objects.vue";
// import Sample from "./components/30-conditional.vue";
// import Sample from "./components/40-input-binding-simple.vue";
// import Sample from "./components/42-input-binding.vue";
// import Sample from "./components/50-event-handling.vue";
// import Sample from "./components/55-event-mods.vue";
// import Sample from "./components/60-props.vue";
import Sample from "./components/70-world-time.vue";

@Component({
  components: {
    Sample,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>
