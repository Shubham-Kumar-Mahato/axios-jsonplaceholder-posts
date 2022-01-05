import {useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './Navbar';
import Body from './Body';
import Page from './Pagination';

const baseURL =`https://jsonplaceholder.typicode.com/posts`;
function App() {
const[posts,setPosts]=useState([]);
const[postsPerPage, setPostsPerPage]=useState([5]);
const[currentPage, setCurrentPage]=useState([1]);
 
useEffect(() => {
 axios.get(baseURL).then((response) => {
setPosts(response.data);
console.log(response.data);
 });
}, [])
const indexOfLastPost=currentPage *postsPerPage;
const indexOfFirstPost = postsPerPage - indexOfLastPost;
const currentPosts =posts.slice(indexOfFirstPost,indexOfLastPost);

  return (
<div className='app'>

<Navbar/>
<Body posts={currentPosts}/>
<Page/>


</div>

   
  );
}

export default App;
