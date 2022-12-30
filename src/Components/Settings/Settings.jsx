import React, { useContext } from 'react';
import { useState } from 'react';
import {BsFillImageFill} from 'react-icons/bs';
import { Context } from '../../Context/Context';
import axios from 'axios';

const Settings = () => {

  const {user ,dispatch} = useContext(Context);
  const PF = 'http://localhost:5000/images/';
  const [file ,setFile] = useState(null);

  const [username ,setusername] = useState("");
  const [email ,setEmail] = useState("");
  const [password ,setpassword] = useState("");

  const [success , setsuccess] = useState(false);

  const updatedata  = async (e) => {
    e.preventDefault();
    dispatch({type:"UPDATE_START"});
    const updatedata = {
       userid: user._id,
       username,
       email ,
       password
    };
    if(file){                              //  for File like Image 
       const data = new FormData();
       const filename =  Date.now() + file.name;    // for unique Name 
       data.append('name' , filename);
       data.append('file' ,file);
       updatedata.profilepic = filename;
       try{
          await axios.post('/upload',data);               //   
       }catch(err)
       {}
    }try{

          const res = await axios.put('/users/'+user._id, updatedata);       // post the data as newpost 
          setsuccess(true);
          dispatch({type:"UPDATE_SUCCESS" , payload : res.data});
        }catch(err)
        {
         dispatch({type:"UPDATE_FAIL" });
        }
 }

  return (
    <div>  
         <h2> Update your Account  </h2>
        <div className = "setting">
                <form style = {{display:'grid',gridTemplateRows:'1fr 1fr'}}>
                     <label> Profile Picture  </label>
                    <div className = "setting">
                        <img src = {PF + user.profilepic} alt = "profile" />
                    </div>
                  <span style = {{padding:'4px'}}>
                      <label htmlFor = 'fileinput'> <BsFillImageFill 
                      style = {{fontSize:'24px',padding:'1%',cursor:'pointer'}}/> 
                     </label>

                    <input  type = "file" id = "fileinput"  
                     placeholder = 'Enter name....' 
                     style =  {{display:'none'}}
                     onChange = {(e) => setFile(e.target.files[0])}  />
                  </span>

                  <span style = {{padding:'4px'}}>
                    <label> Username  </label>
                    <input  type = "name" placeholder = {user.username}          
                    onChange={(e) => setusername(e.target.value)}  />
                  </span>
                  <span style = {{padding:'4px'}}>
                    <label> Email  </label>
                    <input  type = "email"     placeholder = {user.email}   
                    onChange={(e) => setEmail(e.target.value)}  />
                  </span>
                  <span style = {{padding:'4px'}}>
                    <label> Password  </label>
                    <input  type = "password"   placeholder = {user.password}    
                    onChange={(e) => setpassword(e.target.value)}  />
                  </span>
                    <span style = {{padding:'3%'}}>
                       <button type = "submit" style = {{cursor:'pointer'}} 
                       onClick = {updatedata}> Update  </button>
                    </span>
                </form>
                { success && <span>  Profile has been Updated..... </span> }
        </div>
    </div>
  )
}

export default Settings