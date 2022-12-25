import React from 'react'
import './Singlepost.css';

const SinglePost = () => {
  return (
    <div> 
              <div className = "main-singlepost">
                    <div className = "singlepostwrapper">
                      <img src = "/images/image-2.jpg"  alt = "main-img" style = {{width:'100%'}}/>
                    </div>
              </div>
             <h2 className = 'singlepost-title'> SinglePost   </h2> 
             <div className="singlepost-icons">
                 <span> Edit </span>
                 <span> Delete  </span>
             </div>
             <div className="singlepost-info">
                <span className = 'singlepost-author'> Author: <b> Safak </b> </span>
                <span className = 'singlepost-date'> 1 hour ago  </span>
             </div>
             <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam possimus repudiandae 
              autem maiores deserunt ratione asperiores, error vero, cumque dicta enim illum consectetu
              r incidunt mollitia exercitationem eligendi omnis explicabo excepturi 
              deleniti odit ut obcaecati dolores ullam sint. Alias architecto sapiente optio, 
              totam aliquid tempore nostrum. 
              </p>
    </div>
  )
}

export default SinglePost