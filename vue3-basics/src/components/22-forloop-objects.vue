<template>
  <template v-for="(a, pos) in atoms" :key="pos">
    <h2>Chemical Property of {{ a.name }}</h2>
    <p>Atomic weight is {{ a.weight }}</p>
  </template>
</template>
<script setup lang="ts">
import { ref } from "vue";

const atoms = ref([
  { name: "Argon", weight: 39.948 },
  { name: "Barium", weight: 137.33 },
  { name: "Carbon", weight: 12.011 },
  { name: "Fluor", weight: 19.998 },
  { name: "Galium", weight: 69.723 },
  { name: "Helium", weight: 4.0024 },
]);
</script>