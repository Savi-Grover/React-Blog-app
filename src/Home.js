//import { useState } from 'react';
//import { useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';


const Home = () => {
const {data : blogs, isLoading, isError}=useFetch('http://localhost:8000/blogs');
    

    //const [name, setName]=useState('mario');
//     const handleDelete = (id)=>{
//     const newBlogs=blogs.filter(blog =>blog.id!==id);
//     setBlogs(newBlogs)
    
// }

    return (  
<div className="home">
{isLoading && <div>Loading....</div>}
{blogs && <BlogList blogs={blogs} title="All Blogs!" /> }
{isError && <div>{ isError }</div>}
{/*<BlogList blogs={blogs.filter((blog)=>blog.author==='mario')} title="All Blogs!" handleDelete={handleDelete}/> */}

{/* <button onClick={() => setName('luigi')}>Name Change</button>
<p>{name}</p> */}
</div>
)
}
export default Home;