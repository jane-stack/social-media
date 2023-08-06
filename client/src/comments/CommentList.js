import { useContext, useEffect, useState } from "react";
import { ErrorContext } from "../context/ErrorContext";
import CommentCard from "./CommentCard";
import PostComment from "./PostComment";
import CommentEdit from "./CommentEdit";

function CommentList ({ post }) {
    const { setErrors } = useContext(ErrorContext);
    const [comments, setComments] = useState([]);
    const [onEditMode, setOnEditMode] = useState(false);
    const openEditMode = () => {
        setOnEditMode(true);
    }
    const closeEditMode = () => {
        setOnEditMode(false);
    }

    useEffect(() => {
        fetch(`/posts/${post.id}/comments`)
        .then(resp => resp.json())
        .then(data => setComments(data))
        .catch(errors => setErrors(errors))
    }, [post.id, setErrors])

    // handle add new comment
    const addComment = (newComment) => {
        setComments([...comments, newComment]);
    }

    // handle edit comments
    const onEditComment = (newComment) => {
        const updatedCommentList = comments.map(comment => {
            if (comment.id === newComment.id) {
                return newComment
            } else {
                return comment;
            }
        });
        setComments(updatedCommentList);
    }

    // handle delete comments
    const onDeleteComments = (id) => {
        const updatedCommentList = comments.filter(comment => comment.id !== id)
        setComments(updatedCommentList);
    }

    const renderComments = comments.map(comment => {
        return (
            <CommentCard
                key={comment.id}
                post={post}
                comment={comment}
                openEditMode={openEditMode}
                onDeleteComments={onDeleteComments}
            />
        )
    })

    return (
        <div>
            <h2>Comments</h2>
            <div className="box">
            {renderComments}
            {/* <PostComment post={post} addComment={addComment} comments={comments} /> */}
            {onEditMode ? (
                <>
                <CommentEdit post={post} comments={comments} closeEditMode={closeEditMode} onEditComment={onEditComment} />
                </>
            ):(
                <>
                <PostComment post={post} addComment={addComment} comments={comments} />
                </>
            )}
            </div>
        </div>
    )
}

export default CommentList;