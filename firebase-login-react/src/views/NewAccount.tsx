import {
  createUserWithEmailAndPassword,
  Auth,
  getAuth,
  UserCredential,
  sendEmailVerification,
} from "firebase/auth";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewAccount.css";
let auth: Auth;
export default function NewAccount() {
  const navigate = useNavigate();
  const [u_email, setEmail] = useState("");
  const [u_pass1, setPass1] = useState("");
  const [u_pass2, setPass2] = useState("");
  useEffect(() => {
    auth = getAuth();
  }, []);

  function updateEmail(ev: ChangeEvent<HTMLInputElement>) {
    setEmail(ev.target.value);
  }
  function updatePass1(ev: ChangeEvent<HTMLInputElement>) {
    setPass1(ev.target.value);
  }
  function updatePass2(ev: ChangeEvent<HTMLInputElement>) {
    setPass2(ev.target.value);
  }

  function toMain() {
    if (u_pass1 === u_pass2) {
      createUserWithEmailAndPassword(auth!, u_email, u_pass1)
        .then(async (cr: UserCredential) => {
          await sendEmailVerification(cr.user);
          navigate("/home/Email", { replace: true });
        })
        .catch((err: any) => {
          alert(`Unable to create account ${err}`);
        });
    } else {
      alert("Passwords do not match");
    }
  }
  return (
    <>
      <h2>Create Account</h2>
      <section>
        <input type="text" placeholder="Email" onChange={updateEmail}></input>
        <input
          type="password"
          placeholder="Password"
          onChange={updatePass1}
        ></input>
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={updatePass2}
        ></input>
      </section>
      <div>
        <button onClick={() => navigate(-1)}>Cancel</button>
        <button onClick={toMain}>Create & Login</button>
      </div>
    </>
  );
}
