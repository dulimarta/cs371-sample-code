<template>
  <div>
    <h3>Random value is {{randomVal}}</h3>
    <template v-if="randomVal <= 3">
      <p>This will print when random is 1-3</p>
    </template>
    <template v-else-if="randomVal >= 7">
      <p>Bigger value seven to 10</p>
    </template>
    <p v-else>
      Random value must be in the range 4-6
    </p>

    <em>Reload this page to get a new random value</em>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Test extends Vue {
  private randomVal: number = 1 + Math.floor(Math.random() * 10);
}
</script>

<style scoped>
</style>