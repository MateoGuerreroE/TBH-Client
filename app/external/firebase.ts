import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO NO PUSH THIS
const firebaseConfig = {
  apiKey: "AIzaSyCCIa1vlsolnJx_pyxeGflVeeQHE5PHaiE",
  authDomain: "tuhogarboreal.firebaseapp.com",
  projectId: "tuhogarboreal",
  storageBucket: "tuhogarboreal.firebasestorage.app",
  messagingSenderId: "836682530406",
  appId: "1:836682530406:web:d5adb50142fd1b077477a7",
  measurementId: "G-RWD93YN0NY",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
