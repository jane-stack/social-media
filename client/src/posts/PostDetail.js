import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ContentContext } from "../context/ContentContext";
import { UserContext} from "../context/UserContext";
import CommentList from "../comments/CommentList";
import { ErrorContext } from "../context/ErrorContext";

function PostDetail ({post}) {
    const { setErrors } = useContext(ErrorContext);
    const { user } = useContext(UserContext);
    const { contents, deletePost } = useContext(ContentContext);
    // const { id: paramsId } = useParams();
    // const id = parseInt(paramsId);
    // const post = contents.find(post => post.id === id);
    const navigate = useNavigate();
    const [commentMode, setCommentMode] = useState(false);
    const openComment = () => setCommentMode(commentMode => !commentMode);
    const [liked, setLiked] = useState(false);
    const params = useParams();

    useEffect(() => {
        // fetch(`/posts/${params.id}/likes`)
        fetch(`/posts/${post.id}/likes`)
        .then(resp => {
            if (resp.ok) {
                resp.json().then(data => {
                    setLiked(data.liked);
                });
            } 
        })
        .catch(errors => {
            setErrors(errors);
        });
    }, [post, params, setErrors])

    const handleLike = () => {
        fetch(`/posts/${post.id}/likes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.success) {
                setLiked(true);
            }
        })
        .catch(error => {
            setErrors(error)
        });
    }

    const handleUnlike = () => {
        fetch(`/posts/${post.id}/likes/${params.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.success) {
                setLiked(false);
            }
        })
        .catch(error => {
            setErrors(error)
        });
    }

    const onDeletePost = () => {
        fetch(`/posts/${post.id}`, {
            method: "DELETE",
        })
        .then(resp => resp.json())
        .then(deletePost(post.id))
        .then(navigate(`/posts`))
    }

    if (!post || !post.title) {
        return <p>Loading..</p>
    }

    return (
        <div>
            <div className="box-2">
                <h5>{post.creator.username}</h5>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <hr/>
                <div className="post-bar">
                {liked ? (
                    <button className="edit-btn" onClick={handleUnlike}>Unlike</button>
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
                <hr/>
                {commentMode && <CommentList post={post}/>}
            </div>
        </div>
    )
}

export default PostDetail;