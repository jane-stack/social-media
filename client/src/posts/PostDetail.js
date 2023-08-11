import { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ContentContext } from "../context/ContentContext";
import { UserContext} from "../context/UserContext";
import CommentList from "../comments/CommentList";
import { ErrorContext } from "../context/ErrorContext";

function PostDetail () {
    const { setErrors } = useContext(ErrorContext);
    const { user } = useContext(UserContext);
    const { contents, deletePost } = useContext(ContentContext);
    const id = parseInt(useParams().id);
    const post = contents.find(post => post.id === id);
    const navigate = useNavigate();
    const [commentMode, setCommentMode] = useState(false);
    const openComment = () => setCommentMode(commentMode => !commentMode);
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        fetch(`/posts/${post.id}/likes`, {
            method: "POST",
        })
        .then(resp => {
            if (resp.ok) {
                setLiked(true)
            }
        })
        .catch(error => setErrors(error))
    }

    // const handleUnlike = () => {
    //     fetch(`/posts/${post.id}/likes`, {
    //         method: "DELETE",
    //     })
    //     .then(resp => {
    //         if (resp.ok) {
    //             setLiked(false);
    //         }
    //     })
    //     .catch(error => setErrors(error))
    // }

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
                {liked ? (
                    <button className="edit-btn">Unlike</button>
                ):(
                    <button className="edit-btn" onClick={handleLike}>Like</button>
                )}
                <button className="edit-btn" onClick={openComment}>Comments</button>
                {user && user.username === post.creator?.username && (
                    <>
                    <button className="edit-btn"><Link to={`/posts/${post.id}/edit`}>Edit</Link></button>
                    <button className="edit-btn" onClick={onDeletePost}>Delete</button>
                    </>
                )}
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