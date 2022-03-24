import {
  Firestore,
  doc,
  onSnapshot,
  DocumentSnapshot,
  FirestoreError,
  collection,
  QuerySnapshot,
  DocumentChange,
} from "firebase/firestore";

export function listen(db: Firestore) {
  // Listen to changes on a single document
  const mich = doc(db, "states", "MI");
  onSnapshot(mich, (ds: DocumentSnapshot) => {
    console.log("Doc updated", ds.data());
  });

  // Listen to changes on multiple documents in a collection
  const stateColl = collection(db, "states/MI/cities");
  onSnapshot(stateColl, (qs: QuerySnapshot) => {
    qs.docChanges().forEach((chg: DocumentChange) => {
      console.log(chg.doc.id, chg.type, chg.doc.data());
    });
  });
}
