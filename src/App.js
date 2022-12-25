import React from 'react';
import './App.css';
import {BrowserRouter , Routes ,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Topbar from './Components/Topbar/Topbar';
import Write from './Components/Write/Write';

 export default function App() 
 {
  return (
    <>
    <div className="app">
      <BrowserRouter>
      <Topbar />
        <Routes>
          <Route exact path = "/" element = {<Home />}>  </Route>
          <Route exact path = "/login" element = {<Login />}>  </Route>
          <Route exact path = "/register" element = {<Register />}>  </Route>

          <Route exact path = "/write" element = {<Write  />}>  </Route>

        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

