import React from 'react';
import './App.css';
import {BrowserRouter , Routes ,Route } from 'react-router-dom';
import Home from './Components/Home/Home';

 export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path = "/" element = {<Home />}>  </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

