import React from 'react';
import {BsFillImageFill} from 'react-icons/bs';

const Settings = () => {
  return (
    <div>  
         <h2> Update your Account  </h2>
        <div className = "setting">
                <form>
                     <label htmlFor = 'fileinput'> <BsFillImageFill style = {{fontSize:'24px'}}/> 
                     </label>
                    <input  type = "file" id = "fileinput" placeholder = 'Enter name....' 
                     style =  {{display:'none'}} />
                    <label> Username  </label>
                    <input  type = "name"         placeholder = 'Enter name....'/>
                    <label> Email  </label>
                    <input  type = "email"         placeholder = 'Enter email .....'/>
                    <label> Password  </label>
                    <input  type = "password"      placeholder = 'Enter password..'/>
                    <button type = "submit" > Update  </button>
                </form>
        </div>
    </div>
  )
}

export default Settings