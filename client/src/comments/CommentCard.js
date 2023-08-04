function CommentCard ({comment}) {

    return (
        <div>
            <p><strong>{comment.user.username}</strong> : {comment.body}</p>
        </div>
    )
}

export default CommentCard;