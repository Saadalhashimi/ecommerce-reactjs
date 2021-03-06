import React from 'react'
import './Button.style.css'
const Button_Classes = {
    google:'google-sign-in',
    inverted:'inverted'
}


const Button = ({children,buttonType,...otherProps}) => {
  return (
    <button className={`button-container ${Button_Classes[buttonType]}`}{...otherProps}>
        {children}
    </button>
  )
}

export default Button