import { Link } from "react-router-dom";

function PostCard ({ post }) {

    return (
        <div className="box">
            <h3><Link to={`/posts/${post.id}`}>{post.title}</Link></h3>
            <p>{post.content}</p>
        </div>
    )
}

export default PostCard;