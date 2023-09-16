import { useContext, useState } from "react";
import { ErrorContext } from "../context/ErrorContext";
import { ContentContext } from "../context/ContentContext";
import Errors from "../errors/Errors";

function NewPost () {
    const { setErrors } = useContext(ErrorContext);
    const { addPost } = useContext(ContentContext);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`/posts`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                title: title,
                content: content
            })
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.errors) {
                setErrors(data.errors)
            } else {
                addPost(data)
                setErrors([])
                setTitle("")
                setContent("")
            }
        })
    }

    return (
        <form className="post-form" onSubmit={handleSubmit}>
            <div className="new-post">
                POST ANYTHING HERE
                <input className="post-input" type="text" name="title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea className="post-input-description" type="textbox" name="content" placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
                <br />
                <button type="submit" className="post-btn">POST</button>
            </div>
            <Errors />
        </form>
    )
}

export default NewPost;