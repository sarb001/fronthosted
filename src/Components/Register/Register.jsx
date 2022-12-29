import React from 'react'
import './Register.css';
import  {Link} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Register = () => {

  const [username ,setusername] = useState("");
  const [email ,setEmail] = useState("");
  const [password ,setpassword] = useState("");
  const [error ,seterror] = useState(false);

  const handlesubmit = async (e) => {
    e.preventDefault();
    seterror(false);
    try{
        const res = await axios.post('/auth/register' , {
          username, 
          email, 
          password 
        });
        // console.log(res);
        res.data && window.location.replace('/login');
    }catch(err)
    { 
      seterror(true) 
    }
  }
  return (
    <div> 
        <h2> Register Here  </h2>
         <div className="register-account">
          <form onSubmit = {handlesubmit}>
            <label> Username - </label>
            <input type = "name"  placeholder = 'Enter your username ' 
             onChange = {e => setusername(e.target.value)}  />

            <label>  Email - </label>
            <input type = "email"  placeholder = 'Enter your Email ' 
            onChange = {e => setEmail(e.target.value)}   />

            <label> Password - </label>
            <input type = "password"  placeholder = 'Enter your password ' 
             onChange = {e => setpassword(e.target.value)}  />
                <span style = {{padding:'8%'}}>
                  <button type = "submit"> Register  </button>
                </span>
          </form>
                <button type = "submit" >
                   <Link to = "/login"> Login </Link>   
                 </button>
                 { error && <span>  Something Went Wrong  </span> } 
         </div>
    </div>
  )
}

export default Register