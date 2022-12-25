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
               <span style = {{padding:'3%'}} > 
               <button> Login here  </button>
               </span>
             </form>
          </div>
    </div>
  )
}

export default Login