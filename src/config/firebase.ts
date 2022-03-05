import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import { ILeadPdv } from "../pages/FormPDV";

const firebaseConfig = {
  apiKey: "AIzaSyBcAKS14Kn7r3fSfSrFhOSOyOAnIsSyo2k",
  authDomain: "sistemas-la4.firebaseapp.com",
  projectId: "sistemas-la4",
  storageBucket: "sistemas-la4.appspot.com",
  messagingSenderId: "744475629510",
  appId: "1:744475629510:web:32c1b863ef5537235984c7",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function registerLead(lead: ILeadPdv) {
  try {
    await addDoc(collection(db, "leads-pdv"), {
      ...lead,
      isContacted: false,
      date: new Date(),
      registerDate: Date.now()
    });

    return true;
  } catch (e) {
    alert("Houve um erro. Por favor, tente novamente.")
  }
}
