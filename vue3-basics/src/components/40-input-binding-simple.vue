<template>
  <p>Your first name <input type="text" v-model="fname" /> (immediate bound)</p>
  <p>Your last name <input type="text" v-model.lazy="lname" /> (lazy bound)</p>
  <p>Your age <input type="number" v-model.number="age" /></p>
  <p v-if="age > 0">{{ fname }} {{ lname }} was born in {{ thisYear - age }}</p>
  <p v-else>Age can't be negative</p>

  <p>
    Pick a color:
    <input type="color" v-model="colorChoice" />
  </p>
  <p>
    Pick a date
    <input type="date" v-model="dateSelection" />
  </p>

  <em>Open the Vue DevTools to inspect the bound variables</em>
</template>
<script setup lang="ts">
import { ref } from "vue";

const thisYear = ref(new Date().getFullYear());
const fname = ref("Johny");
const lname = ref("Appleseed");
const age = ref(1);
const colorChoice = ref("");
const dateSelection = ref("");
const valInRange = ref(0);
</script>