import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCPGVgTs3IVB13IFTmrF9wRjoHBOh0GU1M",
  authDomain: "blog-5a316.firebaseapp.com",
  projectId: "blog-5a316",
  storageBucket: "blog-5a316.appspot.com",
  messagingSenderId: "175553850139",
  appId: "1:175553850139:web:136517bb2095cfdb3b81be"
};

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()