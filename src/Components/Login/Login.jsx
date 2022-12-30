import React, { useState  , useRef } from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/Context';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const userRef = useRef();
  const passwordref = useRef();

  const { user ,dispatch , isFetching } = useContext(Context); 

  // const user = true;

  const handlesubmit = async (e) => {
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    try{
      const res = await axios.post('/auth/login' , {
        username : userRef.current.value ,
        password : passwordref.current.value,
      });
      dispatch({type:"LOGIN_SUCCESS" , payload : res.data})
    }catch(err) {
      dispatch({type:"LOGIN_FAIL"});
    }
  }
  // console.log(' logging user is ',user);
  return (
    <div>  
       <h2> Login </h2> 
          <div className = "login-container">
             <form onSubmit = {handlesubmit}>
               <label> Username :  </label> 
               <input  type = "name" placeholder = 'Enter your name' 
               ref = {userRef} />

               <label> Password : </label>
               <input  type = "password" placeholder = 'Enter your password' 
                 ref = {passwordref} />
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