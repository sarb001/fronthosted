import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {

    const [cat,setcat] = useState([]);

    useEffect(() => {
    const getcat = async () => {
      const res = await axios.get('/category');
      setcat(res.data);
    }
    getcat();
    },[cat])

  return (
      <div>  
          <div className="about-me">
               <div className="title">  ABOUT ME </div>
                <div className="title-img">  </div>
                <div className="title-desc">
                   Lorem ipsum, dolor sit amet consectetur   adipisicing elit. Earum libero soluta 
                   tempore dolor quibusdam voluptates 
                  provident veniam pariatur laudantium, omnis, quis doloremque,
                   minus beatae? 
                  </div>
                  <div className="title-categories">
                     <h4>  CATEGORIES </h4>
                     <ul style = {{listStyleType:'none',fontSize:'21px'}} >
                        { cat.map((c) => ( 
                         <Link to = {`/?cat=${c.name}`}>
                             <li>  {c.name} </li>
                          </Link>
                         )) }
                      
                     </ul>
                  </div>
                  <div className="title-section">
                      <h4> FOLLOW US </h4>
                    </div>
          </div>
      </div>
  )
}

export default Sidebar