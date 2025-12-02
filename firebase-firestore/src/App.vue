<template>
  <v-app>
    <v-main>
      <HelloFirestore />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
// import { useUserStore } from './userstore';
import { onMounted } from "vue";
import HelloFirestore from "./components/HelloFirestore.vue";
import { useRandomNameFunctionalStyle } from "./random_name";
const userStore = useRandomNameFunctionalStyle();
onMounted(() => {
  userStore.observeFirestore();
});
</script>
