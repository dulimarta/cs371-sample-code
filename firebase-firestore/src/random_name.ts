import { defineStore } from "pinia";
import { faker } from "@faker-js/faker";
import { type Ref, ref } from "vue";
import {
  collection,
  getFirestore,
  onSnapshot,
  addDoc,
} from "firebase/firestore";
type AppState = {
  randomName: String;
};

type Member = {
  firstName: String;
  lastName: String;
};
export const useRandomNameFunctionalStyle = defineStore("randomu", () => {
  const randomName = ref("");
  const allNames: Ref<string[]> = ref([]);
  const appDB = getFirestore();
  async function newName() {
    // randomName.value = faker.person.firstName() + " " + faker.person.lastName();

    const mColl = collection(appDB, "members");
    const newMember: Member = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
    };
    await addDoc(mColl, newMember);
  }

  function observeFirestore() {
    const mColl = collection(appDB, "members");
    console.log("Inside Fire Observer");
    onSnapshot(mColl, (qs) => {
      for (const ch of qs.docChanges()) {
        console.log(`${ch.doc.id} was ${ch.type}`);
        const myFiredata: Member = ch.doc.data() as Member;
        if (ch.type == "added") {
          allNames.value.push(
            myFiredata.lastName + ", " + myFiredata.firstName
          );
        }
      }
    });
  }
  return {
    randomName,
    allNames,
    newName,
    observeFirestore,
  };
});
