<template>
  <div>
    <ChildComponent one="First test" :two="37">
    </ChildComponent>
    <ChildComponent one="Second test" three what="sometext">
    </ChildComponent>
  </div>
</template>

<script lang="ts">
import ChildComponent from "./60-props-child.vue";
import { Vue, Component } from "vue-property-decorator";

@Component({ components: { ChildComponent } })
export default class Sample extends Vue {
  foo = 31;
}
</script>

<style scoped>
</style>