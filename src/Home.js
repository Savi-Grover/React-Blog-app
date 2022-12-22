import { useState } from 'react';
import { useEffect } from 'react';
import BlogList from './BlogList';
const Home = () => {

    const[blogs,setBlogs]= useState(null);
    const[isLoading,setLoading]=useState(true);
    const[isError,setError]=useState(null);

    //const [name, setName]=useState('mario');
//     const handleDelete = (id)=>{
//     const newBlogs=blogs.filter(blog =>blog.id!==id);
//     setBlogs(newBlogs)
    
// }
useEffect(()=> {
setTimeout(() => {
    fetch('http://localhost:8000/blogs')
.then(res => {
    console.log(res);
    if (!res.ok){
throw Error('could not fetch the data from resource')
    }
    return res.json();
})
.then( data =>{
    console.log(data);
    setBlogs(data);
    setLoading(false);
    setError(null);
}).catch(err => {
    //console.log(err.message);
    setError(err.message);
})
}, 1);
}, []);
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