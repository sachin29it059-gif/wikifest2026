import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCvUybCAMXnBSWLSf_BvqsZ0RiMp40gpko",
  authDomain: "wikifest-bbcb7.firebaseapp.com",
  databaseURL: "https://wikifest-bbcb7-default-rtdb.firebaseio.com",
  projectId: "wikifest-bbcb7",
  storageBucket: "wikifest-bbcb7.firebasestorage.app",
  messagingSenderId: "806918034385",
  appId: "1:806918034385:web:4bd4b8ba448eb4305ec6f0",
  measurementId: "G-BCGNTT6B78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and Export
export const db = getDatabase(app);
export { firebaseConfig };