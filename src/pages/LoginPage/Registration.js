import React from 'react'
import './Registration.css'

function Registration({setSignUp}) {
  return (
    <div className='registration-wrapper'>
        <div className="registration-logo">
            <img src={require('../../pictures/logo.png')} alt="logo" />
          </div>

          <div className="registration-header">
            <h1>Registration</h1>
            <div className="sign-in"><p>Have you alrady an account? </p> <a href="#" onClick={()=> setSignUp(false)}>Sign in</a></div>
          </div>

        


          <form className="login-inputs__form" >
            <div className="registration-inputs">
            <input type="text"  placeholder='Username'/>
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            <input type="password" placeholder='Confirm password'/>
            </div>

            <button className='register-submit-button'>Register</button>

            <div className="privacy-policy">
                <a href="#"> By continiuing, you agree to our Terms & Conditions & Privacy policy</a>
            </div>
          </form>


        
    </div>
  )
}

export default Registration