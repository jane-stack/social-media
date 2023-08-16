import { useContext, useState } from "react";
import { ErrorContext } from "../context/ErrorContext";
import { ContentContext } from "../context/ContentContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import Errors from "../errors/Errors";

function EditPost () {
    const { setErrors } = useContext(ErrorContext);
    const { contents, editPost } = useContext(ContentContext);
    const id = parseInt(useParams().id);
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
                navigate(`/posts/${post.id}`)
            }
        })
    }

    return (
        <form className="post-form" onSubmit={handleSubmit}>
            <h2>Edit This Post</h2>
            <div className="new-post">
                Title &nbsp;
                <input className="post-input" type="text" name="title" value={formData.title} onChange={handleChange} />
                Content &nbsp;
                <textarea className="post-input-description" type="textbox" name="content" value={formData.content} onChange={handleChange} />
                <br />
                <button type="submit">Submit</button>
                <button><Link to={`/posts/${post.id}`}>Cancel</Link></button>
            </div>
            <Errors />
        </form>
    )
}

export default EditPost;