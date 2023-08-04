import { useParams } from "react-router-dom";

function PostDetail ({ contents }) {
    const id = parseInt(useParams().id);
    const post = contents.find(post => post.id === id);

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    )
}

export default PostDetail;