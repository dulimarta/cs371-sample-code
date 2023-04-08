<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <HelloWorld msg="Vite + Vue" />
  <RouterView></RouterView>

</template>

<style scoped>
#navigation {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
