import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC00nU3m6vSdYDI_LbRDZXA5FM4pBhPDH0",
  authDomain: "movieauth-d8ea2.firebaseapp.com",
  projectId: "movieauth-d8ea2",
  storageBucket: "movieauth-d8ea2.firebasestorage.app",
  messagingSenderId: "115813918678",
  appId: "1:115813918678:web:48628e76e8cc6e93d02677",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;
