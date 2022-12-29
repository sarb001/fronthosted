import React from 'react';
import Post from '../Post/Post';
import './Posts.css';

const Posts = ({posts}) => {
  return (
    <div> 
         <div className = "mainposts-section">
          { posts.map((p) => (
              <Post post = {p} />
          ))
          }
         </div>
    </div>
  )
}

export default Posts