import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp(

    {
  apiKey: "AIzaSyAzy5_XbGXn4fReGs8gWbAnpr3wWa5F94w",
  authDomain: "react-cartshop-libreria.firebaseapp.com",
  projectId: "react-cartshop-libreria",
  storageBucket: "react-cartshop-libreria.appspot.com",
  messagingSenderId: "387337695978",
  appId: "1:387337695978:web:5d32e179fde93682575d93"
    }
    
);

export function getFirebase() {
 return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}