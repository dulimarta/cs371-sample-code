<template>
  <v-container min-width="800">
    <v-row>
      <v-col cols="8">
        <h2>Data From Firestore</h2>
        <v-btn @click="userStore.newName">Add</v-btn>
        <span>You have {{ randomName }}</span>
        <span>You have {{ allNames.length }} member from Firestore</span>
        <!--ol>
            <li v-for="n in allMembers">
              <v-icon @click="userStore.removeById(n.id!)">mdi-delete</v-icon>
              {{ n.firstName }} {{ n.lastName }}</li>
          </ol-->
        <ul>
          <li v-for="(pos, n) in allNames" :key="pos">KKKK {{ n }}</li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useRandomNameFunctionalStyle } from "@/random_name";

// import { useUserStore } from "@/userstore";
import { storeToRefs } from "pinia";

const userStore = useRandomNameFunctionalStyle();
const { randomName, allNames } = storeToRefs(userStore);
// const { newName } = userStore;
</script>
