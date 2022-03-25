<template>
  <div id="loginpanel">
    <input type="text" v-model="u_email" placeholder="Enter your email">
    <input type="password" v-model="u_pass"
      placeholder="Enter your password">
    <div id="withProvider">
      <button :disabled="!isValidInput"
        @click="createAccount">Signup</button>
      <button :disabled="!isValidInput" @click="withEmail">Login</button>
    </div>
    <div>
      <button @click="withGMail">Google</button>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {
  getAuth,
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
@Component
export default class LoginView extends Vue {
  u_email = "";
  u_pass = "";
  auth: Auth | null = null;

  get isValidInput(): boolean {
    return this.u_email.length > 0 && this.u_pass.length > 0;
  }

  mounted(): void {
    this.auth = getAuth();
  }

  createAccount(): void {
    createUserWithEmailAndPassword(this.auth!, this.u_email, this.u_pass)
      .then((cr: UserCredential) => {
        alert(`New account created with UID ${cr.user.uid}`);
      })
      .catch((err: any) => {
        alert(`Unable to create account ${err}`);
      });
  }

  withEmail(): void {
    signInWithEmailAndPassword(this.auth!, this.u_email, this.u_pass)
      .then((cr: UserCredential) => {
        this.$router.push({ path: "/home" });
      })
      .catch((err: any) => {
        alert(`Unable to login ${err}`);
      });
  }

  withGMail(): void {
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth!, provider).then((cred: UserCredential) => {
      console.log("Yes, logged in");

      // Move to the home page
      this.$router.push({ path: "/home" });
    });
  }
}
</script>
<style scoped>
#loginpanel {
  border: 1px solid black;
  padding: 0.5em;
  border-radius: 0.5em;
}
#loginpanel {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
}

#withProvider {
  margin-bottom: 1em;
}
input {
  margin: 0.25em;
}

input:last-of-type {
  margin-bottom: 1em;
}
button {
  margin-right: 0.25em;
}
</style>