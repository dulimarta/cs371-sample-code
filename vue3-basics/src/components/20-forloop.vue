<template>
  <h2>Chemical Elements</h2>
  <ol>
    <li v-for="(a, pos) in atoms" :key="pos">{{ a }}</li>
  </ol>
</template>


<script setup lang="ts">
import { ref } from "vue";

const atoms = ref([
  "Argon",
  "Barium",
  "Carbon",
  "Erebium",
  "Fluor",
  "Galium",
  "Helium",
  "...and more...",
]);
</script>