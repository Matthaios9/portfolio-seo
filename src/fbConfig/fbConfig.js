import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbkn6OvzzBQB2PirklyHHmtKaMb4iYY74",
  authDomain: "sonorous-stone-402314.firebaseapp.com",
  projectId: "sonorous-stone-402314",
  storageBucket: "sonorous-stone-402314.appspot.com",
  messagingSenderId: "910335189227",
  appId: "1:910335189227:web:fa4a7fb9a8ceab3a9d9eae",
  measurementId: "G-FGRYFMNQK7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const fbStorage = getStorage(app);
