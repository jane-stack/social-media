import { useContext } from "react";
import PostDetail from "./PostDetail";
import NewPost from "./NewPost";
import { ContentContext } from "../context/ContentContext";

function PostList () {
    const { contents } = useContext(ContentContext);

    const renderPosts = contents.map(post => {
        return (
            <PostDetail
            key={post.id}
            post={post}
        />
        )
    })

    return (
        <div className="posts-list">
            <NewPost />
            <br />
            {contents.length > 0 ? (
                renderPosts
            ):(
                <p>Loading...</p>
            )}
        </div>
    )
}

export default PostList;