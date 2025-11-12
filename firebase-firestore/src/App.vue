<template>
  <v-app>
    <v-main>
      <HelloFirestore />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { useUserStore } from './userstore';
import {onMounted } from "vue"
import HelloFirestore from './components/HelloFirestore.vue';

const userStore = useUserStore()
onMounted(() => {
  userStore.setupFirestore()
 })

</script>
