import React from 'react'
import './Register.css';

const Register = () => {
  return (
    <div> 
        <h2> Register Here  </h2>
         <div className="register-account">
          <form>

            <label> Username - </label>
            <input type = "name"  placeholder = 'Enter your username ' />
            <label>  Email - </label>
            <input type = "email"  placeholder = 'Enter your Email ' />
            <label> Password - </label>
            <input type = "name"  placeholder = 'Enter your password ' />
              <span style = {{padding:'3%'}}>
                <button type = "submit"> Register  </button>
              </span>
          </form>
         </div>
    </div>
  )
}

export default Register