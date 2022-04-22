<template>
  <div>
    <h2>Checkboxes</h2>
    <template v-for="(c, pos) in availableChoices" :key="pos">
      <input type="checkbox" id="`choice${pos}`" v-model="choices" :value="c" />
      <label for="`choice${pos}`">{{ c }}</label>
    </template>

    <p v-if="choices.length > 0">Selected item(s)</p>
    <ul>
      <li v-for="(a, pos) in choices" :key="pos">{{ a }}</li>
    </ul>
  </div>
  <div>
    <h2>Radio Buttons</h2>
    <template v-for="(c, pos) in availableChoices" :key="pos">
      <input
        type="radio"
        id="`choice${pos}`"
        v-model.number="selection"
        :value="pos"
      />
      <label for="`choice${pos}`">{{ c }}</label>
    </template>
    <p v-if="selection >= 0">Selection {{ selection }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const availableChoices = ref(["Winter", "Spring", "Summer", "Fall"]);
const choices = ref<number[]>([]);
const selection = ref(-1);
</script>

<style scoped>
label {
  margin-right: 1em;
}
</style>