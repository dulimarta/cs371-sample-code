<template>
  <div>
    <ul>
      <li>One is {{one}}</li>
      <li>Two is {{two ? two : "N/A"}}</li>
      <li>Three is {{three}}</li>
    </ul>

    Attributes: {{$attrs}}
  </div>
</template>

<script setup lang="ts">
export type ArgType = {
  one: string;
  two?: number;
  three?: boolean
}
  
   const what = defineProps<ArgType>();

  function onMounted(): void {
    console.log("Attributes", what);
  }

</script>

<style scoped>
</style>