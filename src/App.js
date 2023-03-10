import React, { useEffect, useContext , useState } from 'react';
import './App.css';
import {BrowserRouter , Routes ,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Topbar from './Components/Topbar/Topbar';
import Write from './Components/Write/Write';
import Settings from './Components/Settings/Settings';
import Single from './Components/Single/Single';
import { Context, ContextProvider } from './Context/Context';
import axios from 'axios';


// import SinglePost from './Components/Singlepost/SinglePost';
// import Single from './Single/Single';
// import Settings from './Components/Settings/Settings';

 export default function App() 
 {
   const { user } = useContext(Context);
    //  const user = false;
    console.log(user);
  return (
    <>
    <div className = "app">
      <ContextProvider>
          <BrowserRouter>
            <Topbar />
                <Routes>
                  <Route  exact path = "/"       element = {<Home />}>  </Route>
                  <Route  path = "/register"     element = { user ?  <Home /> : <Register />} >     </Route>
                  <Route  path = "/login"        element = { user ?  <Home/> :  <Login /> }>          </Route>   
                  <Route  path = "/write"        element = { user ?  <Write /> :  <Register/> } >     </Route>
                  <Route  path = "/settings"     element = { user ?  <Settings />  :  <Register/> }> </Route>
                  <Route  path = "/posts/:postid" element = {<Single  />}>  </Route> 
                </Routes>
          </BrowserRouter>
      </ContextProvider>
    </div>
    </>
  );
}

