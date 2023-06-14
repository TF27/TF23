import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBLwdqZzqXq3rffq2gIgLAhGnSNIyaKnl4",
  authDomain: "tf23-ee7f5.firebaseapp.com",
  projectId: "tf23-ee7f5",
  storageBucket: "tf23-ee7f5.appspot.com",
  messagingSenderId: "522696876126",
  appId: "1:522696876126:web:46e64fb67eda07d6a5d4cf",
  measurementId: "G-E6TTKTER3M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })
}
