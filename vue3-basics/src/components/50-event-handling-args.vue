<template>
  <table>
    <tr v-for="(f, pos) in iceCreamFlavors" :key="pos" :class="klazFor(pos)">
      <td>{{ f }} {{ showCoord(pos) }}</td>
      <td><button @click="likeIt(pos)">Select</button></td>
      <td>
        <button @click="(ev) => likeItWithEvent(ev, pos)">E-Select</button>
      </td>
    </tr>
  </table>
</template>

<script setup lang="ts">
import { ref } from "vue";

const iceCreamFlavors = ref([
  "Vanilla",
  "Mint Choc Chip",
  "Strawberry",
  "Deer Trax",
]);
const selection = ref(-1);
let posX = 0;
let posY = 0;

function showCoord(whichOne: number): string {
  if (whichOne !== selection.value || posX === -1) return "";
  return `(${posX}, ${posY})`;
}
function likeIt(whichOne: number) {
  selection.value = whichOne;
  posX = posY = -1;
}

function likeItWithEvent(ev: MouseEvent, whichOne: number) {
  console.debug(`At ${whichOne}`, ev);
  selection.value = whichOne;
  posX = ev.pageX;
  posY = ev.pageY;
}

function klazFor(row: number): string {
  return row === selection.value ? "rowSelected" : "row";
}
</script>

<style scoped>
#box {
  border: 2px solid brown;

  width: 200px;
  min-height: 200px;
}
.rowSelected {
  color: white;
  background-color: hsl(209, 80%, 60%);
}

.row {
  background-color: transparent;
}
</style>