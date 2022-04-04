import React from 'react'
import './FormInput.style.css'

const FormInput = ({label,...otherProps}) => {
  return (
    <div className='input-group'>
    <label className='input-label'>{label}</label>
    <input className='input-form' {...otherProps}/>
    </div>
  )
}

export default FormInput