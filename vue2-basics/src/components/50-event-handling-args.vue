<template>
  <div>
    <table>
      <tr v-for="(f,pos) in iceCreamFlavors" :key="pos"
        :class="klazFor(pos)">
        <td>{{f}} {{showCoord(pos)}}</td>
        <td><button @click="likeIt(pos)">Select</button></td>
        <td><button
            @click="(ev) => likeItWithEvent(ev, pos)">E-Select</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Sample extends Vue {
  iceCreamFlavors = ["Vanilla", "Mint Choc Chip", "Strawberry", "Deer Trax"];
  selection = -1;
  posX = 0;
  posY = 0;

  showCoord(whichOne: number): string {
    if (whichOne !== this.selection || this.posX === -1) return "";
    return `(${this.posX}, ${this.posY})`;
  }
  likeIt(whichOne: number) {
    this.selection = whichOne;
    this.posX = this.posY = -1;
  }

  likeItWithEvent(ev: MouseEvent, whichOne: number) {
    console.debug(`At ${whichOne}`, ev);
    this.selection = whichOne;
    this.posX = ev.pageX;
    this.posY = ev.pageY;
  }

  klazFor(row: number): string {
    return row === this.selection ? "rowSelected" : "row";
  }
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