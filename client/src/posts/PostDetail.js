import { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ContentContext } from "../context/ContentContext";
import CommentList from "../comments/CommentList";

function PostDetail () {
    const { contents, deletePost } = useContext(ContentContext);
    const id = parseInt(useParams().id);
    const post = contents.find(post => post.id === id);
    const navigate = useNavigate();
    const [commentMode, setCommentMode] = useState(false);
    const openComment = () => setCommentMode(commentMode => !commentMode);

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
                <h5>{post.creator.username}</h5>
                <p>{post.content}</p>
                <button className="delete-btn">❤️️</button>
                <button className="edit-btn" onClick={openComment}>Comments</button>
                <button className="edit-btn"><Link to={`/posts/${post.id}/edit`}>Edit</Link></button>
                <button className="edit-btn" onClick={onDeletePost}>Delete</button>
            </div>
            <br />
            <hr />
            <br />
            <div>
                {commentMode && <CommentList post={post}/>}
            </div>
        </div>
    )
}

export default PostDetail;