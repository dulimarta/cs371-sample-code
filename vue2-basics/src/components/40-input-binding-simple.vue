<template>
  <div>
    <p>
      Your first name <input type="text" v-model="fname"> (immediate bound)
    </p>
    <p>
      Your last name <input type="text" v-model.lazy="lname"> (lazy bound)
    </p>
    <p>Your age <input type="number" v-model.number="age"> </p>
    <p v-if="age > 0">{{fname}} {{lname}} was born in {{thisYear - age }}
    </p>
    <p v-else>Age can't be negative</p>

    <p>Pick a color:
      <input type="color" v-model="colorChoice">
    </p>
    <p>Pick a date
      <input type="date" v-model="dateSelection">
    </p>

    <em>Open the Vue DevTools to inspect the bound variables</em>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class TestElement extends Vue {
  readonly thisYear: number = new Date().getFullYear();
  private fname = "Johny";
  private lname = "Appleseed";
  private age = 1;
  private colorChoice = "";
  private dateSelection = "";
  private valInRange = 0;
}
</script>