import React from 'react'
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import{auth} from '../../tools/firebase/firebase'
import SignUpForm from '../../components/signUp-form/SignUp-form';

const SignIn = () => {
  //  const logGoogleUser = async ()
  const signInWithGoogle= ()=>{
  const provider = new GoogleAuthProvider();
  // provider.getCustomParameters({
  //     prompt:'select_account'
  // });
   signInWithPopup(auth,provider)
   .then((res) =>{
     console.log('user', res)
     
   })
   .catch(err=>console.log('err', err))

  

  }
  return (
    <div>
      <h2>Sign-in Component</h2>
      <button onClick={signInWithGoogle}> sign in with google popup</button>
      <SignUpForm />
      </div>
  )
}

export default SignIn