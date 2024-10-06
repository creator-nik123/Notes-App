import { initializeApp } from "firebase/app";
import { getFirestore, collection} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDv-aE6aS9gyC_p3_WgxQhRBWNGdTDHb6M",
  authDomain: "notes-react-6e14f.firebaseapp.com",
  projectId: "notes-react-6e14f",
  storageBucket: "notes-react-6e14f.appspot.com",
  messagingSenderId: "202580793568",
  appId: "1:202580793568:web:f56216b897f09d07c89885"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")