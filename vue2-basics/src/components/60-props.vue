<template>
  <div>
    <ChildComponent one="First test" :two="37">
    </ChildComponent>
    <ChildComponent one="Second test" three what="sometext">
    </ChildComponent>
    <WorldClock />
  </div>
</template>

<script lang="ts">
import ChildComponent from "./60-props-child.vue";
import WorldClock from "./70-clock.vue";
import { Vue, Component } from "vue-property-decorator";

@Component({ components: { ChildComponent, WorldClock } })
export default class Sample extends Vue {
  foo = 31;
}
</script>

<style scoped>
</style>