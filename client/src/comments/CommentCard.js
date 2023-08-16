import { useContext, useState } from "react";
import CommentEdit from "./CommentEdit";
import { UserContext } from "../context/UserContext";

function CommentCard ({post, comment, onDeleteComments, onEditComment}) {
    const { user } = useContext(UserContext);
    const { id } = comment;
    const [onEditMode, setOnEditMode] = useState({});
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    }
    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    const deleteComment = () => {
        fetch(`/posts/${post.id}/comments/${id}`, {
            method: "DELETE"
        })
        onDeleteComments(id)
    }

    const toggleEditMode = (commentId) => {
        setOnEditMode((prevEditMode) => ({
            ...prevEditMode,
            [commentId]: !prevEditMode[commentId],
        }));
    };

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="box-comment">
            {onEditMode[comment.id] ? (
                <CommentEdit post={post} comment={comment} onEditComment={onEditComment} onEditMode={onEditMode} setOnEditMode={setOnEditMode}/>
            ):(
                <div><strong className="username-color">{comment.user.username}</strong> : {comment.body}</div>
            )}
            {isHovered && (
                <div>
                {user && user.username === comment.user.username && (
                    <div>
                    <button className="edit-btn" onClick={() => toggleEditMode(comment.id)}>✏️</button>
                    <button className="delete-btn" onClick={deleteComment}>❌</button>
                    </div>
                )}
                </div>
            )}
        </div>
    )
}

export default CommentCard;