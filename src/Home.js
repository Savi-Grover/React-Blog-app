import { useState } from 'react';
import { useEffect } from 'react';
import BlogList from './BlogList';
const Home = () => {

    const[blogs,setBlogs]= useState(null);
    const[isLoading,setLoading]=useState(true);

    const [name, setName]=useState('mario');
//     const handleDelete = (id)=>{
//     const newBlogs=blogs.filter(blog =>blog.id!==id);
//     setBlogs(newBlogs)
    
// }

useEffect(()=> {
setTimeout(() => {
    fetch('http://localhost:8000/blogs')
.then(res => {
    return res.json();
})
.then( data =>{
    console.log(data);
    setBlogs(data);
    setLoading(false);
}); }, 1000);
}, []);
    return (  
<div className="home">
{isLoading && <div>Loading....</div>}
{blogs && <BlogList blogs={blogs} title="All Blogs!" /> }
{/*<BlogList blogs={blogs.filter((blog)=>blog.author==='mario')} title="All Blogs!" handleDelete={handleDelete}/> */}

{/* <button onClick={() => setName('luigi')}>Name Change</button>
<p>{name}</p> */}
</div>
)
}
export default Home;