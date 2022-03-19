<template>
  <div id="app">
    <Users />
    <Quotes />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Users from "./components/RandomUsers.vue";
import Quotes from "./components/RandomQuotes.vue";
@Component({
  components: {
    Users,
    Quotes,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  /* Place the two child components in a FlexBox row */
  display: flex;
  flex-direction: row;
}
</style>
