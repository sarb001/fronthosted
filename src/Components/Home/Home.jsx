import React from 'react'
import Posts from '../Posts/Posts'
import Sidebar from '../Sidebar/Sidebar'
import Topbar from '../Topbar/Topbar'

const Home = () => {
  return (
    <div> 
          <Topbar />
           <div className = "home-component">
              <h2>  React & Node Blog  </h2>
           </div>
           <div className  = "posts-section" style = {{display:'grid', gridTemplateColumns:'1fr 300px'}}>
              <Posts />
              <Sidebar />
           </div>
    </div>
  )
}

export default Home