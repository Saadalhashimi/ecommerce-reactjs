import { initializeApp } from "firebase/app";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth';
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
  const app = initializeApp(firebaseConfig);

  export const auth = getAuth()
  //export const signInWithGooglePopup = ()=> signInWithPopup(auth,provider)

 
export const createAuthUser= async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUser= async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const db = getFirestore();
         

export const userDocumentAuth =  async (userAuth)=>{
  try{ const userDocumentRef  = doc(db,'users', userAuth.uid);
  console.log('userDocumentRef', userDocumentRef)

  const userSnapshot =  await getDoc(userDocumentRef)
  console.log('userSnapshot', userSnapshot.exists())
  if(!userSnapshot.exists()){
    const {displayName,email}=userAuth;
    const createDate = new Date()
    await setDoc(userDocumentRef,{displayName,email,createDate})
  } 
  return userDocumentRef
}catch(error){
  console.log('error.code', error.code)
}
   
}