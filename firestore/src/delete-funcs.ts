import {
  collection,
  deleteDoc,
  deleteField,
  doc,
  Firestore,
  getDocs,
  query,
  QueryDocumentSnapshot,
  QuerySnapshot,
  updateDoc,
  where,
} from "firebase/firestore";

export function run(db: Firestore) {
  // Delete a specific field of a document
  const mich = doc(db, "states", "MI");
  updateDoc(mich, { governor: deleteField() });

  // Delete a specific document
  const illi = doc(db, "states", "IL");
  deleteDoc(illi).then(() => {
    console.log("Illinois deleted");
  });

  // Delete documents satisfying a query
  const stateColl = collection(db, "states");
  const ohioQ = query(stateColl, where("name", "==", "Ohio"));
  getDocs(ohioQ).then((qs: QuerySnapshot) => {
    qs.docs.forEach(async (qd: QueryDocumentSnapshot) => {
      const docToRemove = doc(stateColl, qd.id);
      console.log("About to remove", qd.id);
      await deleteDoc(docToRemove);
    });
  });
}
