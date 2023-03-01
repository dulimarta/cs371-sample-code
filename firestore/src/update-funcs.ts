import {
  Firestore,
  doc,
  updateDoc,
  arrayRemove,
  increment,
} from "firebase/firestore";

export async function run(db: Firestore) {
  const mich = doc(db, "states/MI");
  await updateDoc(mich, {
    bird: "Blue Jay",
    population: 8_000_000,
    // governor: {
    //   name: "Gretchen Whitmer",
    //   age: 55,
    // },
    // capital: "City of Lansing",
  });
  await updateDoc(mich, { population: increment(517) });

  const gr = doc(db, "states/MI/cities/GRR");
  await updateDoc(gr, { universities: ["GVSU", "Calvin", "XYZ"] });
  await updateDoc(gr, { universities: arrayRemove("XYZ") });
}
