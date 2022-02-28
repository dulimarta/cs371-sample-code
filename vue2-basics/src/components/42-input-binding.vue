<template>
  <div>
    <div>
      <h2>Checkboxes</h2>
      <template v-for="(c,pos) in availableChoices">
        <input type="checkbox" id="`choice${pos}`" v-model="choices"
          :value="c" :key="`a-${pos}`" />
        <label for="`choice${pos}`" :key="`b-${pos}`">{{c}}</label>
      </template>

      <p v-if="choices.length > 0">Selected item(s)</p>
      <ul>
        <li v-for="(a,pos) in choices" :key="pos">{{a}}</li>
      </ul>
    </div>
    <div>
      <h2>Radio Buttons</h2>
      <template v-for="(c,pos) in availableChoices">
        <input type="radio" id="`choice${pos}`" v-model.number="selection"
          :value="pos" :key="`a-${pos}`" />
        <label for="`choice${pos}`" :key="`b-${pos}`">{{c}}</label>
      </template>
      <p v-if="selection >= 0">Selection {{selection}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class Sample extends Vue {
  readonly availableChoices = ["Winter", "Spring", "Summer", "Fall"];
  private choices: number[] = [];
  private selection = -1;
}
</script>

<style scoped>
label {
  margin-right: 1em;
}
</style>