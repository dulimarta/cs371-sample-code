<template>
  <div>
    <button @click="handleGo">Click me!</button>
    <button @click.shift="handleReset">Shift-Click to Reset</button>
    <p>Click count {{count}}</p>
    <div ref="box" id="box" @mouseenter="mouseTrafficIn"
      @mouseleave="mouseTrafficOut">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Sample extends Vue {
  private count = 0;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleGo(ev: MouseEvent) {
    this.count++;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleReset(ev: MouseEvent) {
    this.count = 0;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  mouseTrafficIn(ev: MouseEvent) {
    (this.$refs.box as Element).className = "mousein";
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  mouseTrafficOut(ev: MouseEvent) {
    (this.$refs.box as Element).className = "mouseout";
  }
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