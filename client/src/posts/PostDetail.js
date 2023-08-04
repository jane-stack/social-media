import { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ContentContext } from "../context/ContentContext";
import CommentList from "../comments/CommentList";

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
            <div className="box-2">
                <h1>{post.title}</h1>
                <p>{post.content}</p>
                <button><Link to={`/posts/${post.id}/edit`}>Edit</Link></button>
                <button onClick={onDeletePost}>Delete</button>
            </div>
            <br />
            <hr />
            <br />
            <div>
                <CommentList post={post}/>
            </div>
        </div>
    )
}

export default PostDetail;