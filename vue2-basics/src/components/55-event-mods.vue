<template>
  <div>
    <p>Place the mouse in the input field and press
      <span ref="txt">Ctrl-DownArrow</span>
    </p>
    <input ref="myinput" type="text" @keydown.ctrl.down="doDownArrow">
    <div id="parent" @click.capture.stop="parentHandler">
      <div @click="childHandler" id="child">Child</div>
    </div>
    <a href="http://vuejs.org" @click.prevent="childHandler">VueJS Home</a>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Sample extends Vue {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  doDownArrow(_: KeyboardEvent) {
    const el = this.$refs.txt as Element;
    el.className = "glow";
    setTimeout(() => {
      el.className = "dim";
    }, 500);
  }
  parentHandler(ev: MouseEvent): void {
    console.log("In parent handler", ev.x, ev.y);
  }

  childHandler(ev: MouseEvent): void {
    console.log("In child handler", ev.x, ev.y);
  }
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