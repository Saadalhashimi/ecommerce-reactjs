import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import{getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBdKeIQFOqKtfcCHeGOje3ylwpxCdQbzkc",
    authDomain: "ecommerce-react-db-3fcde.firebaseapp.com",
    projectId: "ecommerce-react-db-3fcde",
    storageBucket: "ecommerce-react-db-3fcde.appspot.com",
    messagingSenderId: "995455146779",
    appId: "1:995455146779:web:f9114ad7ae6b760ec8d1be"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  export const auth = getAuth()
  //export const signInWithGooglePopup = ()=> signInWithPopup(auth,provider)

  export const db = getFirestore();
         

//   export const userDocumentAuth =(userAuth)=>{
//       const userDocumentRef  = doc(db,'users', userAuth.uid);
//       console.log('userDocumentRef', userDocumentRef)
//   }
