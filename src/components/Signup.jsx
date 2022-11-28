import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {

  function passwordVisibility() 
  {
      var input = document.getElementById("input").value
      if(input.type ="password")
      {
        input.type = "text"
      }  
      else
      {
        input.type ="password"
      }
  }
  return (
    <div className='signup-page'>

      <div className="page-inputs">
      <span>Sign Up</span> <br />
      <input type="email"  id="signup-email" placeholder='Enter Email Id...' /> <br />
      <input type="password" id="signup-password" placeholder='Enter Password...' /><button onClick={ passwordVisibility } id='show-password'>show</button><br />
      <input type="checkbox" id="signup-checkbox" /><span id='remeber-me'>Remeber Me</span> <br />
      <button>Sign Up</button> <br />
      <Link to="/forgetpassword">Forgot Password ?</Link>
      </div> 

    </div>
  )
}

export default Signup