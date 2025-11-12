<template>
  <v-container min-width="800">
      <v-row>
        <v-col cols="8">
          <h2>Data From Firestore</h2>
          <!-- <v-btn @click="userStore.addRandomName()">Add</v-btn>
        
          <ol>
            <li v-for="n in allMembers">
              <v-icon @click="userStore.removeById(n.id!)">mdi-delete</v-icon>
              {{ n.firstName }} {{ n.lastName }}</li>
          </ol> -->
        </v-col>
      </v-row>
  </v-container>
</template>

<script setup lang="ts">
// import { useUserStore } from '@/userstore';
// import { storeToRefs } from 'pinia';

// const userStore = useUserStore()
// const {allMembers} = storeToRefs(userStore)
</script>
