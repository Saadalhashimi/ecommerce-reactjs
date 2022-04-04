
import { useState } from "react"
import FormInput from "../form-input/FormInput"
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import{auth,signInAuthUser} from '../../tools/firebase/firebase';
import './SignIn.style.css'
import Button from "../button/Button"

const defaultFormFields = {
  email:'',
  password:'',
}
const SignInForm= () => {
  const [formFields,setFormFields]= useState(defaultFormFields)
  const {email,password}= formFields;

  console.log(formFields)
  const resetFormFields=()=>{
    setFormFields(defaultFormFields)
  }

  const handleSubmit= async (event)=>{
    event.preventDefault();
     
   try{
     const response = await signInAuthUser(email,password);
     console.log('response from sign in ', response)
     resetFormFields()
   }catch(error){
     if(error.code==='auth/wrong-password'){
       alert('wrong password')

     }
     console.log('error from sign in', error)
   }
    
  }

  const handleChange=(event)=>{
      console.log('event', event)
    const {name,value}=event.target;

    console.log('event.target', event.target)

    console.log('name', name)

    setFormFields({...formFields,[name]:value})
  }
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
    <div className="signUp-container">
         <h2>Already have an account?</h2>
        <span>Sign In with your email and Password</span>
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