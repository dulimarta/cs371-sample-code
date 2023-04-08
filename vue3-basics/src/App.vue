<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { onMounted, ref, Ref } from "vue";
// import Sample from './components/00-hello.vue'
// import Sample from "./components/10-data-binding.vue"
//import Sample from "./components/20-forloop.vue"
// import Sample from "./components/22-forloop-objects.vue";
// import Sample from "./components/30-conditional.vue"
import Sample from "./components/40-input-binding-simple.vue";
// import Sample from "./components/42-input-binding.vue"
// import Sample from "./components/50-event-handling.vue"
// import Sample from "./components/50-event-handling-args.vue"
// import Sample from "./components/55-event-mods.vue"
// import Sample from "./components/60-props.vue"
// import Sample from "./components/70-world-time.vue"
const drawBox: Ref<HTMLCanvasElement | null> = ref(null);
onMounted(() => {
  const ctx = drawBox.value?.getContext("2d");
  console.log("2D Context is", ctx);
  if (ctx) {
    ctx.fillStyle = "green";
    ctx.fillRect(10, 10, 150, 100);
  }
});
var isDragging = false;
function mouseDownHandler(ev: MouseEvent) {
  console.info("Mouse down", ev);
  isDragging = true;
}
function mouseUpHandler(ev: MouseEvent) {
  console.info("Mouse up", ev);
  isDragging = false;
}
function mouseMoveHandler(ev: MouseEvent) {
  if (isDragging) {
    console.info("Mouse move", ev);
  }
}
</script>

<template>
  <Sample></Sample>
  <hrule />

  <div id="imgbox">
    <img src="./assets/logo.png" />
    <canvas
      ref="drawBox"
      id="drawBox"
      width="200"
      height="200"
      @mousedown="mouseDownHandler"
      @mousemove="mouseMoveHandler"
      @mouseup="mouseUpHandler"
    />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
#imgbox {
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 2px solid violet;
  position: relative;
}

#imgbox > img {
  display: inline-block;
  border: 1px solid orange;
}
#drawBox {
  border: 1px solid green;
  display: inline-block;
  position: absolute;
  left: 0px;
}
</style>
