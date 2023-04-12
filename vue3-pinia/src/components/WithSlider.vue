<template>
  <input type="range" :min="1000" :max="9999" @change="sliderUpdated" 
  v-model="sliderVal"/>
  {{ Math.floor(sliderVal) }}
</template>

<script setup lang="ts">
import { ref, Ref } from "vue"
import { useAppStore } from "../appStore"
const appStore = useAppStore()
const x = 1000 + Math.random() * 8000
const sliderVal: Ref<number> = ref(x)

function sliderUpdated() {
  appStore.updateAccess(Math.floor(sliderVal.value))
}
</script>