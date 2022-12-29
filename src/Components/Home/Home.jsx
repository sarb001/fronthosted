import axios from 'axios'
import React, {useState , useEffect }  from 'react'
import { useLocation } from 'react-router-dom'
import Posts from '../Posts/Posts'
import Sidebar from '../Sidebar/Sidebar'

const Home = () => {
  const [posts,setposts] = useState([]);
  // const location = useLocation();

  // console.log(location);                // gives what we is going on in URL 
  const {search} = useLocation();       // Serach Functionality Extracted 

  useEffect(() => {
    const fetchposts = async () => {
       const res = await axios.get('/posts' + search);      // api/posts/?user=ban
                        //  console.log(res);
        setposts(res.data);
    }
    fetchposts();
  },[])
  return (
    <div> 
           <div className = "home-component">
              <h2>  React & Node Blog  </h2>
           </div>
           <div className  = "posts-section" style = {{display:'grid', gridTemplateColumns:'1fr 300px'}}>
              <Posts posts = {posts} />
              <Sidebar />
           </div>
    </div>
  )
}

export default Home