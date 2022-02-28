<template>
  <div>
    <ul>
      <li>One is {{one}}</li>
      <li>Two is {{two ? two : "N/A"}}</li>
      <li>Three is {{three}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class ChildComponent extends Vue {
  @Prop()
  readonly one!: string;

  @Prop(Number)
  readonly two: number | undefined;

  @Prop(Boolean)
  readonly three!: boolean;

  mounted(): void {
    console.log("Attributes", this.$attrs);
  }
}
</script>

<style scoped>
</style>