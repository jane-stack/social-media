import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContentContext } from "../context/ContentContext";

function PostDetail () {
    const { contents, deletePost } = useContext(ContentContext);
    const id = parseInt(useParams().id);
    const post = contents.find(post => post.id === id);
    const navigate = useNavigate();

    const onDeletePost = () => {
        fetch(`/posts/${post.id}`, {
            method: "DELETE",
        })
        .then(resp => resp.json())
        .then(deletePost(post.id))
        .then(navigate('/posts'))
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <button>Edit</button>
            <button onClick={onDeletePost}>Delete</button>
        </div>
    )
}

export default PostDetail;