import React from 'react';
import Post from '../Post/Post';
import './Posts.css';

const Posts = () => {
  return (
    <div> 
         <div className = "mainposts-section">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
         </div>
    </div>
  )
}

export default Posts