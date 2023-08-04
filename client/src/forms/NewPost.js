import { useContext } from "react";
import { ErrorContext } from "../context/ErrorContext";

function NewPost () {
    const { setErrors } = useContext(ErrorContext);
    
    return (
        <form className="post-form">
            <h2>Create a New Post</h2>
            <div className="new-post">
                Title &nbsp;
                <input className="post-input" type="text" />
                Content &nbsp;
                <textarea className="post-input-description" type="textbox" />
                <br />
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default NewPost;