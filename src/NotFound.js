import { Link } from "react-router-dom";

const NotFound = () => {
    return (  
        <div className="not-found">
            <h2>Page not found</h2>
            <p>
                <Link to="/">Back to Home page</Link>
            </p>
        </div>


    );
}
 
export default NotFound;