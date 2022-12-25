import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import SinglePost from '../Components/Singlepost/SinglePost'

import './Single.css';

const Single = () => {
  return (
    <div> 
            <div className = "singlepost" >
                 <div className = "singlepost-main"> 
                    <SinglePost />
                 </div>
                 <div className = "sidebar"> 
                    <Sidebar />
                 </div>
            </div>
    </div>
  )
}

export default Single