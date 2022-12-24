import React from 'react'
import { Link } from 'react-router-dom';
import './Topbar.css';

const Topbar = () => {
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
                    <li>  <Link>  HOME  </Link>    </li>
                    <li>  <Link>  ABOUT  </Link>    </li>
                    <li>  <Link>  CONTACT  </Link>  </li>
                    <li>  <Link>  WRITE  </Link>    </li>
                </ul>
             </div>
             <div className="third-part" >
                    <span> <Link> LOGIN  </Link> </span>
                    <span>   <Link> REGISTER  </Link>   </span>
             </div>
         </div>
    </div>
  )
}

export default Topbar