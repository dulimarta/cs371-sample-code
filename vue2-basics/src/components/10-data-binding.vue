<template>
  <div>
    <h2>Hello {{who}} Multiplication {{ 7 * 123 }} </h2>
    <p> (@ {{ currentTime.substring(0, 15).toUpperCase() }})</p>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class MyComponent extends Vue {
  private readonly who = "VueJS";
  private readonly currentTime = Date().toString();
  private personalInfo = {
    name: "Hans Dulimarta",
    occupation: {
      name: "Grand Valley State Univerisity",
      address: "1 Campus Drive",
      city: "Allendale",
    },
    teachingAssignment: [
      { couseeNumber: "CIS371-01", credits: 3 },
      { couseeNumber: "CIS371-02", credits: 3 },
      { couseeNumber: "CIS452-10", credits: 4 },
    ],
  };
}
</script>