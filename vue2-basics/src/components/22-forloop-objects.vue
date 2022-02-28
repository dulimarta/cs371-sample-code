<template>
  <div>
    <template v-for="(a,pos) in atoms">
      <h2 :key="`xxxxx${pos}`">Chemical Property of {{a.name}}</h2>
      <p :key="`yyyy${pos}`">Atomic weight is {{a.weight}}</p>
    </template>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class MyComponent extends Vue {
  private readonly atoms = [
    { name: "Argon", weight: 39.948 },
    { name: "Barium", weight: 137.33 },
    { name: "Carbon", weight: 12.011 },
    { name: "Fluor", weight: 19.998 },
    { name: "Galium", weight: 69.723 },
    { name: "Helium", weight: 4.0024 },
  ];
}
</script>