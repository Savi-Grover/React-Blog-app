import { useState } from 'react';
import BlogList from './BlogList';
const Home = () => {

    const[blogs,setBlogs]= useState([
{ title: 'My new website', body:'loren ipsum...', author: 'mario', id:1},
{ title: 'web dev tool tips', body:'loren ipsum...', author: 'luigi', id:2},
{ title: 'Pro tips to web customisation', body:'loren ipsum...', author: 'yoshi', id:3}

    ]);


    return (  
<div className="home">

<BlogList blogs={blogs} title="All Blogs!"/> 
</div>
)
}
export default Home;