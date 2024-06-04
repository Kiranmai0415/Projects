import React from 'react'
import {Button} from 'react-bootstrap'
import "../Forms/Forms.css"

function LoginForm() {
  return (
    <>
    <div className='login'>
        <h2>LOGIN FORM</h2>
        <div>
            <div className='inputs'>
            <input type='text' placeholder='Enter Your email' />
            </div>
            <div className='inputs'>
            <input type='password' placeholder='Enter Your Password' />
            </div>
        </div>
        <div> <Button id='btn'>Submit</Button></div>
        <div className='group'>
            <a href='#'/>SignUp
            <a href='#'/>ForgotPassword
        </div>
    </div>
    </>
  )
}

export default LoginForm