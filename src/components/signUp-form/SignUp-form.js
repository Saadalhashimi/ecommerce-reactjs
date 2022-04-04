
import { useState } from "react"
import { createAuthUser } from "../../tools/firebase/firebase"
import FormInput from "../form-input/FormInput"
import './SignUp.style.css'
import Button from "../button/Button"

const defaultFormFields = {
  displayName:'',
  email:'',
  password:'',
  confirmPassword:''
}
const SignUpForm= () => {
  const [formFields,setFormFields]= useState(defaultFormFields)
  const {displayName,email,password,confirmPassword}= formFields;

  console.log(formFields)

  const resetFormFields=()=>{
    setFormFields(defaultFormFields)
  }

  const handleSubmit= async (event)=>{
    event.preventDefault();
    if(password !==confirmPassword){
      alert('password not match')
      return 
    }
    try{
      const response = await createAuthUser(email,password)
      console.log('response from sign up', response)
      resetFormFields()
      
    }catch(error){
     console.log('user creation error', error)
    }
  }

  const handleChange=(event)=>{
      console.log('event', event)
    const {name,value}=event.target;

    console.log('event.target', event.target)

    console.log('name', name)

    setFormFields({...formFields,[name]:value})
  }

  return (
    <div className="signUp-container">
         <h2>Don't have an account?</h2>
        <span>Sign up with your email</span>
        <form onSubmit={handleSubmit}>
            <FormInput label='display Name' type='text' required onChange={handleChange} name='displayName' value={displayName}/>
            <FormInput label='Email'type='email' required onChange={handleChange} name='email' value={email}/>
            <FormInput label='Password' type='password' required onChange={handleChange} name='password' value={password}/>
            <FormInput  label='Confirm Password' type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>
            <Button type="submit">Sign Up</Button>
        </form>
    </div>
  )
}

export default SignUpForm