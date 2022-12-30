import React from 'react';
import './Write.css';
import { AiFillFileAdd } from 'react-icons/ai';
import { useState } from 'react';
import { useContext } from 'react';
import { Context } from '../../Context/Context';
import axios from 'axios';

const Write = () => {

   const [title,setTitle] = useState('');
   const [desc,setdesc] = useState('');
   const [file,setfile] = useState(null);

   const { user } = useContext(Context);

   const handlewrite = async(e) => {
      e.preventDefault();
      const newpost = {
         username : user.username,
         title,
         desc,
      };
      if(file){                              //  for File like Image 
         const data = new FormData();
         const filename =  Date.now() + file.name;    // for unique Name 
         data.append('name' , filename);
         data.append('file' ,file);
         newpost.photo = filename;
         try{
            await axios.post('/upload',data);               //   
         }catch(err)
         {}
      }try{
         const res = await axios.post('/posts' , newpost);       // post the data as newpost 
         window.location.replace('/posts/' + res.data._id);      // and replace this Location 
      }catch(err)
      {

      }
   }

  return (
    <div> 
            <div className="write-container">
                  <h2> Let's Write  </h2>
                     <div className = "show-file">
                         { file  && (<img src = {URL.createObjectURL(file)}  alt = ""  style = {{width:'10%'}} />) }
                     </div>
                   <div className="input-side">
                      <form onSubmit = {handlewrite}> 
                          <label htmlFor = 'fileinput'> 
                              <AiFillFileAdd  style = {{fontSize:'35px' }} />   
                          </label>
                         <input type = "file" id = "fileinput" style = {{display:'none'}}  
                         onChange = {e => setfile(e.target.files[0])} />
                          <label> Title  </label>
                         <input type = "text"  placeholder = 'Enter Title ' 
                          onChange = {e => setTitle(e.target.value)}  />
                          <label> Desc </label>
                         <input  type = "text"  placeholder = 'Enter Desc '  
                          onChange = {e => setdesc(e.target.value)}  />
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