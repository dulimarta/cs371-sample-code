<script setup lang="ts">
import WithSlider from './components/WithSlider.vue'
import WithColorPicker from './components/WithColorPicker.vue';
import { useAppStore } from "./appStore"
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
const { accessCode, favColor } = storeToRefs(useAppStore())
const headerStyle = computed(() => {
  return {
    color: favColor.value
  }
})
</script>

<template>
  <h1 >Pinia Store Demo <span :style="headerStyle">{{ accessCode }}</span></h1>
  <WithSlider></WithSlider>
  <WithColorPicker/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
