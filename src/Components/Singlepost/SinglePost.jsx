import React, { useContext } from 'react'
import './Singlepost.css';
import  {FaEdit} from 'react-icons/fa';
import {AiFillDelete} from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Context } from '../../Context/Context';

const SinglePost = () => {

  const PF = 'http://localhost:5000/images/' ;
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  console.log(path);
  const [post,setpost] = useState([]);
  const { user } = useContext(Context);

  const deletepost = async(req,res) => {
    try{
       await axios.delete(`/posts/${post._id}` , {data : {username : user.username}});
       window.location.replace('/');
    }catch(err)
    {
          res.status(404).json(err);
    }
  }

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
                      <img src = {PF + post.photo}  alt = "main-img" style = {{width:'60%'}}/>
                    </div>
              </div>
             <h2 className = 'singlepost-title'> 
               <Link to = {`/?user=${post.username}`}>
                     {post.title} 
               </Link> 
               </h2> 
               {post.username === user?.username  && (
                 <div className = "singlepost-icons" style = {{display:'grid',gridTemplateColumns:'200px 300px',fontSize:'25px',cursor:'pointer'}}>
                    <span>  <FaEdit /> </span>
                    <span onClick={deletepost}>  <AiFillDelete />  </span>
                 </div>
               )}
             <div className = "singlepost-info" style = {{display:'grid',gridTemplateColumns:'1fr 1fr'}}>
                <span className = 'singlepost-author'> Author: <b> {post.username} </b> </span>
                <span className = 'singlepost-date'> 1 hour ago  </span>
             </div>
             <p> {post.desc} </p>
    </div>
  )
}

export default SinglePost