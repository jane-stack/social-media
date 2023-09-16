import { useContext, useState } from "react";
import { ErrorContext } from "../context/ErrorContext";

function CommentEdit ({post, comment, onEditComment, onEditMode, setOnEditMode}) {
    const { setErrors } = useContext(ErrorContext);
    const [body, setBody] = useState(comment.body);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`/posts/${post.id}/comments/${comment.id}`, {
            method: "PATCH",
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
                onEditComment(data)
                setErrors([])
                setOnEditMode(!onEditMode);
            }
        })
    }
        
        return (
        <form onSubmit={handleSubmit}>
            <div>
            <input className="input-edit" type="text" name="body" value={body} onChange={(e) => setBody(e.target.value)} />
            </div>
        </form>
    )
}

export default CommentEdit;