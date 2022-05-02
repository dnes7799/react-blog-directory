import { useNavigate, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const {data:blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id); 
    const navigate = useNavigate();
    
    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then( () => {
            navigate('/');
        })
    }
    
    return ( 
        <div className="blog-details">
            {isPending && <div>Loading... </div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <h3>Writer: {blog.author}</h3>
                    <p>{blog.body}</p>
                    <button onClick={handleDelete}>Delete blog</button>
                </article>
            )} 
        </div>
     );
} 
 
export default BlogDetails;
