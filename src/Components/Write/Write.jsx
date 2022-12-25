import React from 'react';
import './Write.css';

const Write = () => {
  return (
    <div> 
            <div className="write-container">
                  <h2> Let's Write  </h2>
                   <div className="input-side">
                      <form>
                         
                         <label> File  </label>
                         <input type = "file" />

                         <label> Title  </label>
                         <input type = "text"  placeholder = 'Enter Title ' />

                         <label> Desc </label>
                         <input type = "text"  placeholder = 'Enter Desc '/>
                      </form>
                   </div>

            </div>
    </div> 
  )
}

export default Write