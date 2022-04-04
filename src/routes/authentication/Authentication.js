import React from 'react'
import SignUpForm from '../../components/signUp-form/SignUp-form';
import SignInForm from '../../components/signIn-form/SignIn-form';
import './Authentication.style.css'

const Authentication = () => {
 
  
  return (
    <div className='auth-container'>
      <SignInForm />
      <SignUpForm />
      </div>
  )
}

export default Authentication