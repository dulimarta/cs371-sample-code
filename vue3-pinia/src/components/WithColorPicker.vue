<template>
  <h3>Pick a color</h3>
  <input
    type="color"
    @input="colorChanged"
    v-model="clr"
  />
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useAppStore } from "../appStore";
const clr = ref("")
const appStore = useAppStore()
function colorChanged() {
  appStore.updateColor(clr.value)
}
</script>