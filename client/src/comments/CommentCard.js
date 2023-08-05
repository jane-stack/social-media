import { useState } from "react";

function CommentCard ({comment, openEditMode}) {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    }
    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <p><strong>{comment.user.username}</strong> : {comment.body}</p>
            {isHovered && (
                <div>
                    <button className="edit-btn" onClick={openEditMode}>✏️</button>
                    <button className="delete-btn">❌</button>
                </div>
            )}
        </div>
    )
}

export default CommentCard;