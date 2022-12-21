import { useState } from 'react';

const Home = () => {

    const[blogs,setBlogs]= useState([
{ title: 'My new website', body:'loren ipsum...', author: 'mario', id:1},
{ title: 'web dev tool tips', body:'loren ipsum...', author: 'luigi', id:2},
{ title: 'Pro tips to web customisation', body:'loren ipsum...', author: 'yoshi', id:3}

    ]);

const handleClick=()=> {
    console.log('hello all');
}

const handleClickAgain=(name)=> {
    console.log('hello' + name);
}

    return (  
<div className="home">

{blogs.map((blogtoshow)=>(
<div className="blog-preview" key={blogtoshow.id}>
<h2>{ blogtoshow.title}</h2>
<p>Written by {blogtoshow.author}</p>
</div>
)
)}


    {/*<h2>Homepage< a href="/" style={{color: "purple"}}>Content</a></h2>*/}
    <button onClick={handleClick}>Click me</button>
    <button onClick={
        ()=>{handleClickAgain('savi')}
        }>Click me again</button>


</div>
    );
}
 
export default Home;