
import { useState } from "react"
import FormInput from "../form-input/FormInput"
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import{auth,signInAuthUser,userDocumentAuth} from '../../tools/firebase/firebase';
import './SignIn.style.css'
import Button from "../button/Button"

const defaultFormFields = {
  email:'',
  password:'',
}
const SignInForm= () => {
  const [formFields,setFormFields]= useState(defaultFormFields)
  const {email,password}= formFields;

 
  const resetFormFields=()=>{
    setFormFields(defaultFormFields)
  }

  const handleSubmit= async (event)=>{
    event.preventDefault();
     
   try{
     const response = await signInAuthUser(email,password);
     console.log('response', response)
     userDocumentAuth(response.user)
     resetFormFields()
   }catch(error){
     if(error.code==='auth/wrong-password'){
       alert('wrong password')

     }
     if(error.code==='auth/user-not-found'){
      alert('no user')

    }
     console.log('error from sign in', error)
   }
    
  }

  const handleChange=(event)=>{
    const {name,value}=event.target;

    setFormFields({...formFields,[name]:value})
  }

  const provider = new GoogleAuthProvider();
    provider.getCustomParameters({
        prompt:'select_account'
    });

  const signInWithGoogle= ()=>{
    signInWithPopup(auth,provider)
     .then((res) =>{
       console.log('user', res)
       userDocumentAuth(res.user)
       
       
     })
     .catch(err=>console.log('err', err))
  
    
  
    }

  return (
    <div className="signUp-container">
         <h2>Already have an account?</h2>
        <span>Sign In with your Email or Google account</span>
        <form onSubmit={handleSubmit}>
            <FormInput label='Email'type='email' required onChange={handleChange} name='email' value={email}/>
            <FormInput label='Password' type='password' required onChange={handleChange} name='password' value={password}/>
            <div className="buttons-container">
            <Button type="submit">Sign In</Button>
            <Button type='button'buttonType='google' onClick={signInWithGoogle} >Google Sign In</Button>
            </div>
            
        </form>
    </div>
  )
}

export default SignInForm