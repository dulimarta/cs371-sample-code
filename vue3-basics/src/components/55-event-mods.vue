<template>
  <p>
    Place the mouse in the input field and press
    <span ref="txt">Shift-DownArrow</span>
  </p>
  <input ref="myinput" type="text" @keydown.shift.down="doDownArrow" />
  <div id="parent" @click.capture.stop="parentHandler">
    <div @click="childHandler" id="child">Child</div>
  </div>
  <a href="http://vuejs.org" @click.prevent="childHandler">VueJS Home</a>
</template>

<script setup lang="ts">
import { ref } from "vue";
const txt = ref<HTMLSpanElement>(undefined!);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function doDownArrow(_: KeyboardEvent) {
  txt.value.className = "glow";
  setTimeout(() => {
    txt.value.className = "dim";
  }, 500);
}
function parentHandler(ev: MouseEvent): void {
  console.log("In parent handler", ev.x, ev.y);
}

function childHandler(ev: MouseEvent): void {
  console.log("In child handler", ev.x, ev.y);
}
</script>

<style scoped>
.glow {
  background-color: blue;
  color: white;
}

.dim {
  animation: dimmer 1500ms;
}

@keyframes dimmer {
  0% {
    background-color: blue;
    color: white;
  }
  100% {
    background-color: inherit;
    color: inherit;
  }
}

#parent {
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 14em;
  min-height: 10em;
  background-color: lightgreen;
}

#child {
  padding: 3em;
  text-align: center;
  background-color: lightsalmon;
}
</style>