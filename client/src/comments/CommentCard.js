import { useState } from "react";

function CommentCard ({post, comment, openEditMode, onDeleteComments}) {
    const { id } = comment;
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

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <p><strong>{comment.user.username}</strong> : {comment.body}</p>
            {isHovered && (
                <div>
                    <button className="edit-btn" onClick={openEditMode}>✏️</button>
                    <button className="delete-btn" onClick={deleteComment}>❌</button>
                </div>
            )}
        </div>
    )
}

export default CommentCard;