import {
  collection,
  Firestore,
  getDocs,
  doc,
  QueryDocumentSnapshot,
  QuerySnapshot,
  getDoc,
  DocumentSnapshot,
  query,
  where,
  orderBy,
  limit,
} from "firebase/firestore";
import { stat } from "fs";

function selectAllFromCollections(db: Firestore) {
  const stateColl = collection(db, "states");
  getDocs(stateColl).then((qs: QuerySnapshot) => {
    console.log("Number of documents found", qs.size)
    qs.forEach((qd: QueryDocumentSnapshot) => {
      console.log("From Firestore: ", qd.id, qd.data());
    });
  });
}

function search(db: Firestore) {
  const q = query(collection(db, "states"), where("name", "==", "Ohio"));
  getDocs(q).then((qs: QuerySnapshot) => {
    qs.forEach((doc: QueryDocumentSnapshot) => {
      console.log("Is Ohio?", doc.id, doc.data());
    });
  });

  const c = query(
    collection(db, "states"),
    where("population", ">", 20_000_000)
  );
  getDocs(c).then((qs: QuerySnapshot) => {
    console.log(`Query returns ${qs.size} records`);
    qs.forEach((z) => {
      console.log("Population above 20 millions", z.data());
    });
  });
}

function sortAndLimit(db: Firestore) {
  const q = query(collection(db, "states"), orderBy("name", "asc"), limit(4));
  getDocs(q).then((qs: QuerySnapshot) => {
    qs.forEach((doc: QueryDocumentSnapshot) => {
      const { name } = doc.data();
      console.log("State sorted", name, doc.data());
    });
  });
}

export function run(db: Firestore) {
  // selectAllFromCollections(db);
  search(db);
  // sortAndLimit(db);
}
