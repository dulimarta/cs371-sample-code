<template>
  <div>
    <section>
      <div id="loginpanel">
        <input type="text" v-model="u_email"
          placeholder="Enter your email">
        <input type="password" v-model="u_pass"
          placeholder="Enter your password">
        <div id="loginByEmail">
          <button :disabled="!isValidInput"
            @click="createAccount">Signup</button>
          <button :disabled="u_email.length === 0" @click="resetPass">Reset
            Password</button>
          <button :disabled="!isValidInput"
            @click="withEmail">Login</button>
        </div>
        <div>
          <input id="verif" type="checkbox" v-model="emailVerification">
          <label for="verif">Send verification email</label>
        </div>
        <div id="withProvider">
          <button @click="withGMail">Google</button>
          <button @click="withGitHub">GitHub</button>
        </div>
      </div>
    </section>
    <span id="msgbox" v-show="message.length > 0">{{message}}</span>

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
  GithubAuthProvider,
  sendEmailVerification,
  signOut,
  signInWithRedirect,
  sendPasswordResetEmail,
} from "firebase/auth";

@Component
export default class LoginView extends Vue {
  u_email = "";
  u_pass = "";
  message = "";
  auth: Auth | null = null;
  emailVerification = false;

  get isValidInput(): boolean {
    return this.u_email.length > 0 && this.u_pass.length > 0;
  }

  mounted(): void {
    this.auth = getAuth();
  }

  showMessage(txt: string) {
    this.message = txt;

    // The message will automatically disappear after 5 seconds
    setTimeout(() => {
      this.message = "";
    }, 5000);
  }

  createAccount(): void {
    createUserWithEmailAndPassword(this.auth!, this.u_email, this.u_pass)
      .then(async (cr: UserCredential) => {
        if (this.emailVerification) {
          await sendEmailVerification(cr.user);
          await signOut(this.auth!);
          this.showMessage(
            "An email verification has been sent to " + cr.user.email
          );
        } else this.showMessage(`New account created with UID ${cr.user.uid}`);
      })
      .catch((err: any) => {
        this.showMessage(`Unable to create account ${err}`);
      });
  }

  resetPass(): void {
    sendPasswordResetEmail(this.auth!, this.u_email)
      .then(() => {
        this.showMessage(
          `A password reset link has been sent to ${this.u_email}`
        );
      })
      .catch((err: any) => {
        this.showMessage(`Unable to reset password ${err}`);
      });
  }
  withEmail(): void {
    signInWithEmailAndPassword(this.auth!, this.u_email, this.u_pass)
      .then(async (cr: UserCredential) => {
        if (cr.user.emailVerified)
          this.$router.push({ name: "home", params: { byWayOf: "Email" } });
        else {
          this.showMessage("You must first verify your email");
          await signOut(this.auth!);
        }
      })
      .catch((err: any) => {
        this.showMessage(`Unable to login ${err}`);
      });
  }

  withGMail(): void {
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth!, provider)
      .then((cred: UserCredential) => {
        console.log("Yes, logged in");

        // Move to the home page
        this.$router.push({ name: "home", params: { byWayOf: "Google" } });
      })
      .catch((err: any) => {
        this.showMessage(`Unable to login with GMail ${err}`);
      });
  }

  withGitHub(): void {
    const provider = new GithubAuthProvider();
    // provider.addScope("repo");
    // provider.setCustomParameters({
    //   allow_signup: "false",
    // });
    signInWithPopup(this.auth!, provider)
      .then((cred: UserCredential) => {
        console.log("Yes, logged in with GitHub");

        // Move to the home page
        this.$router.push({ name: "home", params: { byWayOf: "GitHub" } });
      })
      .catch((err: any) => {
        this.showMessage(`Unable to login with GitHub ${err}`);
      });
  }
}
</script> -->
<style scoped>
#loginpanel {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid black;
  padding: 0.5em;
  border-radius: 0.5em;
}

section {
  margin-bottom: 1em;
}
#msgbox {
  font-size: 80%;
  font-style: italic;
  border-radius: 0.5em;
  background-color: hsl(0, 0%, 75%);
  padding: 0.5em;
}
#loginByEmail {
  margin-top: 0.5em;
}
#withProvider {
  margin-top: 1em;
  align-self: center;
}

input {
  margin: 0.25em;
  align-self: stretch;
}

button {
  margin-right: 0.25em;
}
label {
  font-size: 80%;
}
</style>