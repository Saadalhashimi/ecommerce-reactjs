
import { useState } from "react"

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

  const handleChange=(event)=>{
      console.log('event', event)
    const {name,value}=event.target;

    console.log('event.target', event.target)

    console.log('name', name)

    setFormFields({...formFields,[name]:value})
  }

  return (
    <div>
        <h1>Sign up with your email</h1>
        <form onSubmit={()=>{}}>
            <label>display Name</label>
            <input type='text' required onChange={handleChange} name='displayName' value={displayName}/>
            <label>Email</label>
            <input type='email' required onChange={handleChange} name='email' value={email}/>
            <label>Password</label>
            <input type='password' required onChange={handleChange} name='password' value={password}/>
            <label>Confirm Password</label>
            <input type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>
            <button type="submit">Sign Up</button>
        </form>
    </div>
  )
}

export default SignUpForm