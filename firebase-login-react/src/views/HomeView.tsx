import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Auth, User } from "firebase/auth";

let auth: Auth | null;

export default function (props: any): JSX.Element {
  const navigate = useNavigate();
  const { byWayOf } = useParams();
  const [userPhotoURL, setPhotoURL] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        setPhotoURL(user.photoURL ?? "");
        setUserName(user.displayName ?? "No name");
      } else {
        setPhotoURL("");
        setUserName("");
      }
    });
  }, []);

  async function outtahere() {
    if (auth) await signOut(auth);
    setPhotoURL("");
    navigate(-1);
  }

  return (
    <>
      <h2>Home View</h2>
      <p>
        Logged in via {byWayOf} {userName}
      </p>
      {userPhotoURL.length > 0 ? <img src={userPhotoURL} /> : <></>}
      <div>
        <button onClick={outtahere}>Logout</button>
      </div>
    </>
  );
}
function useHistory() {
  throw new Error("Function not implemented.");
}
