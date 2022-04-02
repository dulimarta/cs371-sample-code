import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import {
  Auth,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  UserCredential,
} from "firebase/auth";
import "./LoginView.css";

// Don't declare this variable inside the function
// Otherwise, it will get reset every render
let auth: Auth | null;

export default function (): JSX.Element {
  const [u_email, setEmail] = useState("");
  const [u_pass, setPass] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    auth = getAuth();
    console.log("Auth is initialized", auth);
  }, []);

  function updateEmail(ev: ChangeEvent<HTMLInputElement>) {
    setEmail(ev.target.value);
  }
  function updatePass(ev: ChangeEvent<HTMLInputElement>) {
    setPass(ev.target.value);
  }
  function resetPass(): void {
    sendPasswordResetEmail(auth!, u_email)
      .then(() => {
        showMessage(`A password reset link has been sent to ${u_email}`);
      })
      .catch((err: any) => {
        showMessage(`Unable to reset password ${err}`);
      });
  }

  function withEmail() {
    signInWithEmailAndPassword(auth!, u_email, u_pass)
      .then(async (cr: UserCredential) => {
        if (cr.user.emailVerified) navigate("/home/Email");
        else {
          showMessage("You must first verify your email");
          await signOut(auth!);
        }
      })
      .catch((err: any) => {
        showMessage(`Unable to login ${err}`);
      });
  }

  function createAccount() {
    navigate("/newAcct");
  }

  function showMessage(msg: string) {
    setMessage(msg);

    setTimeout(() => {
      setMessage("");
    }, 5000);
  }
  function withGMail() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth!, provider)
      .then((cred: UserCredential) => {
        console.log("Yes, logged in");

        const param = createSearchParams({ byWayOf: "Google" });
        // Move to the home page
        navigate("/home/Google");
        // navigate({ pathname: "/home/Google" });
      })
      .catch((err: any) => {
        showMessage(`Unable to login with GMail ${err}`);
      });
  }

  function withGitHub() {
    const provider = new GithubAuthProvider();
    // provider.addScope("repo");
    // provider.setCustomParameters({
    //   allow_signup: "false",
    // });
    signInWithPopup(auth!, provider)
      .then((cred: UserCredential) => {
        console.log("Yes, logged in with GitHub");

        // Move to the home page
        navigate("/home/GitHub");
      })
      .catch((err: any) => {
        showMessage(`Unable to login with GitHub ${err}`);
      });
  }
  return (
    <>
      <section>
        <div id="loginpanel">
          <input
            type="text"
            placeholder="Enter your email"
            onChange={updateEmail}
          />
          <input
            type="password"
            placeholder="Enter your password"
            onChange={updatePass}
          />
          <div id="loginByEmail">
            <button onClick={createAccount}>Signup</button>
            <button onClick={resetPass}>Reset Password</button>
            <button onClick={withEmail}>Login</button>
          </div>
        </div>
        <div id="withProvider">
          <button onClick={withGMail}>Google</button>
          <button onClick={withGitHub}>GitHub</button>
        </div>
      </section>
      <span id="msgbox">{message}</span>
    </>
  );
}
