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
  const [post,setpost] = useState({});
  const { user } = useContext(Context);
  console.log('user is --',user);

  const [updatemode ,setupdatemode] = useState(false);
  const [title ,setTitle] = useState("");
  const [desc ,setDesc] = useState("");
  

  const deletepost = async() => {
    try{
       await axios.delete(`/posts/${post._id}` , {data : {username : user.username}});
       window.location.replace('/');
    }catch(err)
    { 
      // res.status(404).json(err); 
    }
  }

  const handleupdate = async() => {
      try
      {
        await axios.put(`/posts/${post._id}` ,  
        {username : user.username ,title ,desc });
        // window.location.reload();
        setupdatemode(false);
      }catch(err)
      {  
        //  res.status(400).json(err);  
      }
  }

  useEffect(() => {
    const getpost = async () => {
      const res = await axios.get('/posts/' + path);
      // console.log(res.data);
      setpost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    }   
    getpost();
  },[path])

  return (
     <div> 
              <div className = "main-singlepost">
                    <div className = "singlepostwrapper">
                      {  post.photo && (
                      <img src = {PF + post.photo}  alt = "main" style = {{width:'60%'}}/>
                      )  }
                    </div>
              </div>
              {
                 updatemode ? ( 
                 <input type = "text"
                  value = {title} 
                  onChange = {(e) => setTitle(e.target.value) } 
                  />) : (
                <>
                  <h2 className = 'singlepost-title'> 
                          <h2> {title}   </h2> 
                    </h2> 
                    {  post.username === user?.username  && (
                        <div className = "singlepost-icons" 
                        style = {{display:'grid',gridTemplateColumns:'200px 300px',fontSize:'25px',cursor:'pointer'}}>
                            <span onClick = {() => setupdatemode(true)}>  <FaEdit /> </span>
                            <span onClick = {deletepost}>  <AiFillDelete />  </span>
                        </div> )
                    }
             </>
                )
              }
             <div className = "singlepost-info" style = {{display:'grid',gridTemplateColumns:'1fr 1fr'}}>
               <Link to = {`/?user=${post.username}`}> 
                    <span className = 'singlepost-author'> Author: 
                    <b> {post.username} </b> </span>
                </Link> 
                <span className = 'singlepost-date'> 1 hour ago  </span>
             </div>
              {
                 updatemode ? (  <textarea value = {desc}  
                  onChange = {(e) => setDesc(e.target.value)} 
                 />  ) : 
                 (<> 
                    <p> {desc} </p>
                 </>)
              }
              { updatemode &&   <button onClick = {handleupdate}>   Update </button> }
     </div>
  )
}

export default SinglePost