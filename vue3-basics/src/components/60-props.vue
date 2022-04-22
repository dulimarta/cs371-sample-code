<template>
  <div>
    <ChildComponent one="First test" :two="37">
    </ChildComponent>
    <ChildComponent one="Second test" three what="sometext">
    </ChildComponent>
    <WorldClock label="Here" time-zone="US/Detroit" />
  </div>
</template>
<script setup lang="ts">
import ChildComponent from "./60-props-child.vue"
import WorldClock from "./70-clock.vue"
</script>
