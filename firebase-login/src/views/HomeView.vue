<template>
  <div class="home">
    <h2>This is the main page</h2>
    <button @click="outtahere">Logout</button>
    <img :src="userPhotoURL" width="64">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {
  getAuth,
  onAuthStateChanged,
  User,
  Auth,
  signOut,
} from "firebase/auth";
@Component
export default class HomeView extends Vue {
  userPhotoURL = "";
  auth: Auth | null = null;
  mounted(): void {
    this.auth = getAuth();
    onAuthStateChanged(this.auth, (user: User | null) => {
      console.log(user?.photoURL);
      this.userPhotoURL = user?.photoURL ?? "";
    });
  }

  outtahere(): void {
    if (this.auth) signOut(this.auth);

    // Back to the previous page
    this.$router.back();
  }
}
</script>
