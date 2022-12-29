import React from 'react'
import './Singlepost.css';
import  {FaEdit} from 'react-icons/fa';
import {AiFillDelete} from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const SinglePost = () => {

  const location = useLocation();
  const path = location.pathname.split('/')[2];
  console.log(path);
  const [post,setpost] = useState([]);

  useEffect(() => {
    const getpost = async () => {
      const res = await axios.get('/posts/' + path);
      // console.log(res.data);
      setpost(res.data);
    }   
    getpost();
  },[path])

  return (
    <div> 
              <div className = "main-singlepost">
                    <div className = "singlepostwrapper">
                      <img src = {post.photo}  alt = "main-img" style = {{width:'60%'}}/>
                    </div>
              </div>
             <h2 className = 'singlepost-title'> 
               <Link to = {`/?user=${post.username}`}>
                     {post.title} 
               </Link> 
               </h2> 
             <div className = "singlepost-icons" style = {{display:'grid',gridTemplateColumns:'200px 300px',fontSize:'25px',cursor:'pointer'}}>
                 <span>  <FaEdit /> </span>
                 <span>  <AiFillDelete />  </span>
             </div>
             <div className = "singlepost-info" style = {{display:'grid',gridTemplateColumns:'1fr 1fr'}}>
                <span className = 'singlepost-author'> Author: <b> {post.username} </b> </span>
                <span className = 'singlepost-date'> 1 hour ago  </span>
             </div>
             <p> {post.desc} </p>
    </div>
  )
}

export default SinglePost