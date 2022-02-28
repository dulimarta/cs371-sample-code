<template>
  <div>
    <h2>Chemical Elements</h2>
    <ol>
      <li v-for="(a,pos) in atoms" :key="pos">{{a}}</li>
    </ol>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class MyComponent extends Vue {
  private readonly atoms = [
    "Argon",
    "Barium",
    "Carbon",
    "Erebium",
    "Fluor",
    "Galium",
    "Helium",
    "...and more...",
  ];
}
</script>