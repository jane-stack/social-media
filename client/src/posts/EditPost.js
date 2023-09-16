import { useContext, useState } from "react";
import { ErrorContext } from "../context/ErrorContext";
import { ContentContext } from "../context/ContentContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import Errors from "../errors/Errors";

function EditPost () {
    const { setErrors } = useContext(ErrorContext);
    const { contents, editPost } = useContext(ContentContext);
    // const id = parseInt(useParams().id);
    const { id: paramsId } = useParams();
    const id = parseInt(paramsId);
    const post = contents.find(post => post.id === id);
    const initialState = {
        title: post.title,
        content: post.content
    }
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`/posts/${post.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.errors) {
                setErrors(data.errors)
            } else {
                editPost(data)
                setErrors([])
                navigate(`/posts`)
            }
        })
    }

    return (
        <form className="post-form-2" onSubmit={handleSubmit}>
            <div className="new-post">
                <input className="post-input" type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} />
                <textarea className="post-input-description" type="textbox" name="content" placeholder="Content" value={formData.content} onChange={handleChange} />
                <br />
                <button type="submit">Submit</button>
                <button><Link to={`/posts`}>Cancel</Link></button>
            </div>
            <Errors />
        </form>
    )
}

export default EditPost;