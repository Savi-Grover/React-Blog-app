import { useParams } from "react-router-dom";
import useFetch from './useFetch';

const BlogDetail = () => {
    const{ id }=useParams();
    const {data : blog, isError, isLoading }= useFetch('http://localhost:8000/blogs/' + id);
   
    return ( 
        <div className="blog-details">
        {isLoading && <div>Loading...</div>}
        {isError && <div>{ isError }</div>}
        { blog && (
          <article>
            <h2>{ blog.title }</h2>
            <p>Written By { blog.author}</p>
            <div>{blog.body}</div>
          </article>
        )}
        </div>
     );
}
 
export default BlogDetail;