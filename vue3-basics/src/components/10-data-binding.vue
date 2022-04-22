<template>
  <h2>Hello {{ who }} Multiplication {{ 7 * 123 }}</h2>
  <p>(@ {{ currentTime.substring(0, 15).toUpperCase() }})</p>
</template>

<script setup lang="ts">
import { ref } from "vue";
const who = ref("VueJS");
const currentTime = ref(Date().toString());
</script>