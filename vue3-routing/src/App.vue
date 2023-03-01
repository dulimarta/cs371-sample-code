<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div id="navigation">
    <RouterLink to="/">First Page</RouterLink>
    <RouterLink to="/two">Second Page</RouterLink>
    <RouterLink to="/three">Third Page</RouterLink>
  </div>
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
