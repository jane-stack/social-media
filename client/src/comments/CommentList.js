import { useContext, useEffect, useState } from "react";
import { ErrorContext } from "../context/ErrorContext";
import CommentCard from "./CommentCard";

function CommentList ({ post }) {
    const { setErrors } = useContext(ErrorContext);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(`/posts/${post.id}/comments`)
        .then(resp => resp.json())
        .then(data => setComments(data))
        .catch(errors => setErrors(errors))
    }, [post.id, setErrors])

    const renderComments = comments.map(comment => {
        return (
            <CommentCard
                key={comment.id}
                comment={comment}
            />
        )
    })

    return (
        <div>{renderComments}</div>
    )
}

export default CommentList;