import React from 'react'
import { Link } from 'react-router-dom';
import './Topbar.css';

const Topbar = () => {
  const user = false;
  return (
    <div> 
         <div className = "topbar-main">
             <div className = "icons">
                <span> Fb  </span>
                <span> Twitter </span>
                <span> Instagram  </span>
             </div>
             <div className = "main-links">
                <ul style = {{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr' ,listStyleType:'none'}} >
                    <li>  <Link to = "/">  HOME  </Link>    </li>
                    <li>  <Link to = "/about">  ABOUT  </Link>    </li>
                    <li>  <Link to = "/contact">  CONTACT  </Link>  </li>
                    <li>  <Link to = "/write">  Write </Link> </li>
                </ul>
             </div>
             <div className = "third-part" >
                    <span>   
                      { user && 'LOGOUT' }
                      { user ? (<>
                        <ul>
                          <li>  <span> <img src = "/images/image-2.jpg"  style = {{width:'35%'}} /> </span>  </li>
                        </ul> 
                        </>) : (<ul style = {{display:'flex',columnGap:'40px'}}>
                                <li>  <span>  <Link to = "/register">  Register </Link>  </span> </li>
                                <li>  <span>  <Link to = "/login"> LOGIN  </Link> </span>  </li>
                                 </ul> ) 
                      }
                    </span>
             </div>
         </div>
    </div>
  )
}

export default Topbar