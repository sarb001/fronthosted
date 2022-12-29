import React from 'react'
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {

  const user = true;

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
              
               <button type = "submit"> Login here  </button>
               </span>
             </form>
               <button type = "submit"> <Link to = "/register">  Register here </Link> </button>
          </div>
    </div>
  )
}

export default Login