<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>Vue Routing Demo</h1>
  <p>This paragraph will stay the same when you switch pages</p>

  <p>But the content below this line is dynamically loaded based
    on the route path selected.
  </p>


</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
