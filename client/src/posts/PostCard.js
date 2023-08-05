import { Link } from "react-router-dom";

function PostCard ({ post }) {

    return (
        <div className="box-3">
            <h4><Link className="title-link" to={`/posts/${post.id}`}>{post.title}</Link></h4>
            <h5>- {post.creator.username}</h5>
        </div>
    )
}

export default PostCard;