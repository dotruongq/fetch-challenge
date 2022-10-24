import React from 'react'
import './App.css';

const Button = ({ButtonText,Req,setReq,handleClick}) => {
  return (
    <button 
    className='button-click' 
    style={{backgroundColor: Req === ButtonText ? 'black':'white',
            color: Req === ButtonText ? 'white':'black' }} 
    onClick={(e) =>handleClick(e)}
    
    >{ButtonText}</button>
  )
}

export default Button