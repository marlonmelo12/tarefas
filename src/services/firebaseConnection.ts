import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "",
  authDomain: "tarefas-c981c.firebaseapp.com",
  projectId: "tarefas-c981c",
  storageBucket: "tarefas-c981c.firebasestorage.app",
  messagingSenderId: "887303831356",
  appId: "1:887303831356:web:71988135487c4e6c4d6839"
};


const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };
