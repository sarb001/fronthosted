import React from 'react'
import './Post.css';
// import SinglePost from '../Singlepost/SinglePost';

const Post = () => {
  return (
    <div> 
          <div className = "main-container" >
               <div className = "main-image"> 
                <img src = "/images/image-2.jpg" alt = "main-image"  style = {{width:'85%'}} />
               </div>
               <div className="main-title">
                 <h2> OK let's start Test </h2>
                </div>
               <div className="main-date"> 
                <h3> Date is -   </h3>
                </div>
               <div className="main-desc"> 
                <span>  Lorem ipsum dolor sit amet consectetur 
                  adipisicing elit. Vitae accusamus magnam
                   consequuntur nisi, consequatur distinctio enim 
                   modi atque voluptate impedit. Quae reiciendis
                    aut modi?  </span>
                </div>
          </div>
    </div>
  )
}

export default Post