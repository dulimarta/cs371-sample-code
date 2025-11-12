import { defineStore } from "pinia";
import { ref, type Ref } from "vue";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  onSnapshot,
} from "firebase/firestore";
import { faker } from "@faker-js/faker";
type Member = {
  id?: string;
  firstName: string;
  lastName: string;
};
export const useUserStore = defineStore("user", () => {
  const hello = ref("Hello from UserStore");
  const allMembers: Ref<Array<Member>> = ref([]);

  const db = getFirestore();
  function setupFirestore() {
    console.log("Initializing......", db.app.options);
    allMembers.value.splice(0);
    const memberCollection = collection(db, "members");
    onSnapshot(memberCollection, (qs) => {
      qs.docChanges().forEach((chg) => {
        console.debug(chg.type);
        const d = chg.doc.data() as Member;
        d.id = chg.doc.id;
        switch (chg.type) {
          case "added":
            allMembers.value.push(d);
            break;
          case "removed":
            const pos = allMembers.value.findIndex((x) => x.id === d.id);
            if (pos >= 0) {
              allMembers.value.splice(pos, 1);
            }
            break;
          case "modified":
            break;
        }
      });
    });
  }

  async function addRandomName() {
    const newName: Member = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
    };
    const memberCollection = collection(db, "members");
    await addDoc(memberCollection, newName);
    const qs = await getDocs(memberCollection)
    qs.forEach(qd => {
      qd.data()
    })
  }

  async function removeById(docId: string) {
    const dd = doc(db, "members", docId)
    await deleteDoc(dd);
  }
  return { hello, setupFirestore, allMembers, addRandomName, removeById };
});
