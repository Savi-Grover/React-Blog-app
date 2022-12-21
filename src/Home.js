import { useState } from 'react';
import BlogList from './BlogList';
const Home = () => {

    const[blogs,setBlogs]= useState([
{ title: 'My new website', body:'loren ipsum...', author: 'mario', id:1},
{ title: 'web dev tool tips', body:'loren ipsum...', author: 'luigi', id:2},
{ title: 'Pro tips to web customisation', body:'loren ipsum...', author: 'yoshi', id:3}

    ]);
    const handleDelete = (id)=>{
    const newBlogs=blogs.filter(blog =>blog.id!==id);
    setBlogs(newBlogs)
}
    return (  
<div className="home">

<BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/> 
{/*<BlogList blogs={blogs.filter((blog)=>blog.author==='mario')} title="All Blogs!" handleDelete={handleDelete}/> */}
</div>
)
}
export default Home;