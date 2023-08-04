import { Link } from "react-router-dom";

function PostCard ({ post }) {

    return (
        <div className="box">
            <h3><Link className="title-link" to={`/posts/${post.id}`}>{post.title}</Link></h3>
            <h5>{post.creator.username}</h5>
            <p>{post.content}</p>
        </div>
    )
}

export default PostCard;