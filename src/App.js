import React from 'react';
import './App.css';
import {BrowserRouter , Routes ,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Topbar from './Components/Topbar/Topbar';
import Write from './Components/Write/Write';
// import SinglePost from './Components/Singlepost/SinglePost';
import Single from './Single/Single';

 export default function App() 
 {
  return (
    <>
    <div className="app">
      <BrowserRouter>
      <Topbar />
        <Routes>
          <Route exact path = "/"     element = {<Single  />}>  </Route>
          <Route  path = "/login" element = {<Login />}>  </Route>
          <Route  path = "/register" element = {<Register />}>  </Route>
          <Route  path = "/write" element = {<Write  />}>  </Route>

        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

