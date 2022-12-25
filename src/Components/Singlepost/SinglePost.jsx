import React from 'react'
import './Singlepost.css';
import  {FaEdit} from 'react-icons/fa';
import {AiFillDelete} from 'react-icons/ai';

const SinglePost = () => {
  return (
    <div> 
              <div className = "main-singlepost">
                    <div className = "singlepostwrapper">
                      <img src = "/images/image-2.jpg"  alt = "main-img" style = {{width:'60%'}}/>
                    </div>
              </div>
             <h2 className = 'singlepost-title'> SinglePost   </h2> 
             <div className = "singlepost-icons" style = {{display:'grid',gridTemplateColumns:'200px 300px',fontSize:'25px',cursor:'pointer'}}>
                 <span>  <FaEdit /> </span>
                 <span>  <AiFillDelete />  </span>
             </div>
             <div className = "singlepost-info" style = {{display:'grid',gridTemplateColumns:'1fr 1fr'}}>
                <span className = 'singlepost-author'> Author: <b> Safak </b> </span>
                <span className = 'singlepost-date'> 1 hour ago  </span>
             </div>
             <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Ipsam possimus repudiandae  autem maiores deserunt ratione asperiores,
              </p>
    </div>
  )
}

export default SinglePost