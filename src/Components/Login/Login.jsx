import React from 'react'
import './Login.css';

const Login = () => {
  return (
    <div>  
       <h2> Login </h2> 
          <div className="login-container">
             <form>
               <label> Usernme :  </label> 
               <input  type = "name" placeholder = 'Enter your name' />
               <label> Password : </label>
               <input  type = "password" placeholder = 'Enter your password' />
               <butto> Login here  </butto>
             </form>
          </div>
    </div>
  )
}

export default Login