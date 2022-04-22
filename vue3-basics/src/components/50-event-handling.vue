<template> 
    <button @click="handleGo">Click me!</button>
    <button @click.shift="handleReset">Shift-Click to Reset</button>
    <p>Click count {{ count }}</p>
    <div
      ref="box"
      id="box"
      @mouseenter="mouseTrafficIn"
      @mouseleave="mouseTrafficOut"
    ></div>  
</template>

<script setup lang="ts">
import { ref } from "vue";
const count = ref(0);
const box = ref<Element>(undefined!);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function handleGo(ev: MouseEvent) {
  count.value++;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function handleReset(ev: MouseEvent) {
  count.value = 0;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function mouseTrafficIn(ev: MouseEvent) {
  box.value.className = "mousein";
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function mouseTrafficOut(ev: MouseEvent) {
  box.value.className = "mouseout";
}
</script>

<style scoped>
#box {
  border: 2px solid brown;

  width: 200px;
  min-height: 200px;
}
.mousein {
  background-color: blueviolet;
}

.mouseout {
  background-color: transparent;
}
</style>