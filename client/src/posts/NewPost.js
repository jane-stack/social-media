import { useContext, useState } from "react";
import { ErrorContext } from "../context/ErrorContext";
import { ContentContext } from "../context/ContentContext";

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
                Title &nbsp;
                <input className="post-input" type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                Content &nbsp;
                <textarea className="post-input-description" type="textbox" name="content" value={content} onChange={(e) => setContent(e.target.value)} />
                <br />
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default NewPost;