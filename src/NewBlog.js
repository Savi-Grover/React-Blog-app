import { useState } from "react";
const NewBlog = () => {

    const[title, setTitle] =useState('');
    const[body, setBody] = useState('');
    const[author,setAuthor]=useState('');
    const[isloading,setIsLoading]=useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault(); //prevent page refresh 
        const blog ={ title,body,author };

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=> {
            console.log('new blog added');
            setIsLoading(false);
        })
    }
    return (
        <div className="create">
        <h2>
            Add New Blog
        </h2>
        <form onSubmit={handleSubmit}>
            <label>Blog title : </label>
            <input type="text"
            required 
            value={title}
            onChange={(e) => setTitle(e.target.value)}/>
            <label>Blog body : </label>
            <textarea required
            value={body}
            onChange={(e) => setBody(e.target.value)}/>
            <label>Blog author: </label>
            <select
            value={author}
            onChange={(e) => setAuthor(e.target.value)}>
                <option value="mario">mario</option>
                <option value="luigi">luigi</option>
                <option value="yoshi">yoshi</option>
            </select>
            {!isloading && <button >Add Blog</button> }
            { isloading && <button disabled >Adding...</button> }  
        </form>
        </div> 
     );
}
 
export default NewBlog;