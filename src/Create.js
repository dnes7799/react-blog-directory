import { useState } from "react";
import { useNavigate} from "react-router-dom";
const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Dinesh');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            //telling that we are sending json data.
            headers: {'Content-Type': 'application/json'},
            //actual data we are sending
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false);
            navigate('/');
        })

    }
    return (
        <div className="create">
            <h2>  Add a new blog.</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title: </label>
                <input type="text" required  value={title} onChange={(e) => setTitle(e.target.value)}/> 
                <label>Blog body: </label>
                <textarea required  value={body} onChange={(e) => setBody(e.target.value)}/>
                <label>Blog Author: </label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)} >
                    <option value="Dinesh">Dinesh</option>
                    <option value="Dnes">Dnes</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Addding Blog....</button>}
                <p>{title}</p>
            </form>
        </div>
    );
}
 
export default Create;