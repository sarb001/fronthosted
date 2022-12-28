import React from 'react'
import './Register.css';
import  {Link} from 'react-router-dom';

const Register = () => {
  return (
    <div> 
        <h2> Register Here  </h2>
         <div className="register-account">
          <form>

            <label> Username - </label>
            <input type = "name"  placeholder = 'Enter your username '  />
            <label>  Email - </label>
            <input type = "email"  placeholder = 'Enter your Email ' />
            <label> Password - </label>
            <input type = "password"  placeholder = 'Enter your password ' />
              <span style = {{padding:'3%'}}>
                <button type = "submit"> Register  </button>
              </span>
          </form>
                <button type = "submit" >
                   <Link to = "/login"> Login </Link>   
                 </button>
         </div>
    </div>
  )
}

export default Register