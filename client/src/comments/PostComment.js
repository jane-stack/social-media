import { useContext, useState } from "react";
import { ErrorContext } from "../context/ErrorContext";

function PostComment ({post, addComment}) {
    const { setErrors } = useContext(ErrorContext);
    const [body, setBody] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`/posts/${post.id}/comments`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                body: body
            })
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.errors) {
                setErrors(data.errors)
            } else {
                addComment(data)
                setErrors([])
                setBody("")
            }
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
            <textarea className="comment-textarea" type="text" name="body" value={body} onChange={(e) => setBody(e.target.value)} />
            <br /><br />
            <button type="submit" className="post-btn">Post Comment</button>
            </div>
        </form>
    )
}

export default PostComment;