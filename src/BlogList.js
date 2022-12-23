import { Link } from "react-router-dom";
const BlogList =(props) => {
    const blogs =props.blogs;
    const title=props.title;
    //const handleDelete=props.handleDelete;

return (
<div classname="Blog-list">
    <h2>{title}</h2>
{blogs.map((blog)=>(
<div className="blog-preview" key={blog.id}>
<Link to={`/blogs/${blog.id}`}>
    <h2>{ blog.title}</h2>
    <p>Written by {blog.author}</p>
    </Link>

{/*deletion as functional prop*/}
{/*<button onClick={()=>handleDelete(blog.id)}>Delete Blog</button>*/}
</div>
))}
</div>
);
}
export default BlogList;