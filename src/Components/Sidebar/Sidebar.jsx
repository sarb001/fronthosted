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
                     <h4>  CATEGORIES </h4>
                     <ul style = {{listStyleType:'none',fontSize:'21px'}} >
                      <li> music  </li>
                      <li> life  </li>
                      <li> sport  </li>
                      <li> food  </li>
                      <li> health  </li>
                      <li> diy  </li>
                     </ul>
                  </div>
                  <div className="title-section">
                      <h4> FOLLOW US </h4>
                    </div>
          </div>
      </div>
  )
}

export default Sidebar