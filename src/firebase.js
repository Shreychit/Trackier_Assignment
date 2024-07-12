
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyCotzC4gY_eSWXysBe6YOrwQNuxP4kOwHc",
  authDomain: "trelloclone-8862c.firebaseapp.com",
  projectId: "trelloclone-8862c",
  storageBucket: "trelloclone-8862c.appspot.com",
  messagingSenderId: "774235874773",
  appId: "1:774235874773:web:0b27fcba3615438f94895c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const fbFunctions = getFunctions(app);

if (process.env.NODE_ENV === "development") {
  connectAuthEmulator(auth, "http://localhost:9098");
  connectFirestoreEmulator(db, "localhost", 8082);
  connectFunctionsEmulator(fbFunctions, "localhost", 5002);
}
