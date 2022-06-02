import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkFnvbGSgUU5fDmu54kGjcPNtWLN_PG2k",
  authDomain: "journalapp-7e94f.firebaseapp.com",
  projectId: "journalapp-7e94f",
  storageBucket: "journalapp-7e94f.appspot.com",
  messagingSenderId: "274340203693",
  appId: "1:274340203693:web:ae5b93fde60f3d48fd4a24"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export {
    db,
    firebase
}