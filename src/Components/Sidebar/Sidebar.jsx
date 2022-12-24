import React from 'react'
import './Sidebar.css';

const Sidebar = () => {
  return (
      <div>  
          <div className="about-me">
               <div className="title">  ABOUT ME </div>
                <div className="title-img">  </div>
                <div className="title-desc">
                   Lorem ipsum, dolor sit amet consectetur   adipisicing elit. Earum libero soluta 
                   tempore dolor quibusdam voluptates 
                  provident veniam pariatur laudantium, omnis, quis doloremque,
                   minus beatae? 
                  </div>
                  <div className="title-categories">
                     <h2>  CATEGORIES </h2>
                     <span> music  </span>
                     <span> life   </span>
                     <span> sport   </span>
                     <span>  food </span>
                     <span> health  </span>
                     <span> diy </span>
                  </div>
                  <div className="title-section">
                      <h3> FOLLOW US </h3>
                    </div>
          </div>
      </div>
  )
}

export default Sidebar