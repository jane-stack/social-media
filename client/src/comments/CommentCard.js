import { useState } from "react";
import CommentEdit from "./CommentEdit";

function CommentCard ({post, comment, onDeleteComments, onEditComment}) {
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
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {onEditMode[comment.id] ? (
                <CommentEdit post={post} comment={comment} onEditComment={onEditComment} onEditMode={onEditMode} setOnEditMode={setOnEditMode}/>
            ):(
                <div><strong>{comment.user.username}</strong> : {comment.body}</div>
            )}
            {isHovered && (
                <div>
                    <button className="edit-btn" onClick={() => toggleEditMode(comment.id)}>✏️</button>
                    <button className="delete-btn" onClick={deleteComment}>❌</button>
                </div>
            )}
        </div>
    )
}

export default CommentCard;