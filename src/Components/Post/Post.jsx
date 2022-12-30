import React from 'react'
import './Post.css';
// import SinglePost from '../Singlepost/SinglePost';
import {Link} from  'react-router-dom';

const Post = ({post}) => {

  const PF = 'http://localhost:5000/images/' ;

  return (
    <div> 
          <div className = "main-container" >
               <div className = "main-image"> 
               {post.photo &&    <img src = {PF + post.photo}
                alt = "main"  style = {{width:'85%'}} />
               }
               </div>
               <div className="post-cats">
                 {post.categories.map((c) => (
                    <span> Categories- {c.name} </span>
                 ))} 
               </div>
               <div className="main-title" style = {{textAlign:'center'}}>
                <Link to = {`/posts/${post._id}`}>
                   <h1>  {post.title} </h1>
                </Link>
                </div>
               <div className="main-date"> 
                <h4> Date is -  { new Date(post.createdAt).toDateString() }  </h4>
                </div>
               <div className="main-desc"> 
                <span>  {post.desc}  </span>
                </div>
          </div>
    </div>
  )
}

export default Post