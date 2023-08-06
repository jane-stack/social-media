// import { useContext, useState } from "react";
// import { ErrorContext } from "../context/ErrorContext";

function CommentEdit ({comment, post, onEditComment, closeEditMode}) {
    // const { setErrors } = useContext(ErrorContext);
    // const initialState = {
    //     body: comment.body
    // }
    // const [formData, setFormData] = useState(initialState);

    // const handleChange = (e) => {
    //     const {name, value} = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value
    //     })
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     fetch(`/posts/${post.id}/comments/${comment.id}`, {
    //         method: "PATCH",
    //         headers: {"Content-Type": "application/json"},
    //         body: JSON.stringify(formData)
    //     })
    //     .then(resp => resp.json())
    //     .then(data => {
    //         if (data.errors) {
    //             setErrors(data.errors)
    //         } else {
    //             onEditComment(data)
    //             setErrors([])
    //         }
    //     })
    // }
        
        return (
        <form>
            <div>
            <input className="chat-textarea" type="text" name="body" />
            <br />
            <button type="submit">Finish Editing</button>
            <button onClick={closeEditMode}>Cancel</button>
            </div>
        </form>
    )
}

export default CommentEdit;