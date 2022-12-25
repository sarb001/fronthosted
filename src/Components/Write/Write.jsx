import React from 'react';
import './Write.css';
import { AiFillFileAdd } from 'react-icons/ai';


const Write = () => {
  return (
    <div> 
            <div className="write-container">
                  <h2> Let's Write  </h2>
                   <div className="input-side">
                      <form> 
                          <label htmlFor = 'fileinput'> 
                              <AiFillFileAdd  style = {{fontSize:'35px' }} />   
                          </label>
                         <input type = "file" id = "fileinput" style = {{display:'none'}} />
                          <label> Title  </label>
                         <input type = "text"  placeholder = 'Enter Title ' />
                          <label> Desc </label>
                         <input  type = "text"  placeholder = 'Enter Desc '/>
                         <span style = {{padding:'3%'}}>
                            <button type = "submit" >  Publish  </button>
                         </span>
                      </form>
                   </div>
            </div>
    </div> 
  )
}

export default Write