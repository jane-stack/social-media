import { useContext } from "react";
import PostCard from "./PostCard";
import NewPost from "./NewPost";
import { ContentContext } from "../context/ContentContext";

function PostList () {
    const { contents } = useContext(ContentContext);

    const renderPosts = contents.map(post => {
        return (
            <PostCard
            key={post.id}
            post={post}
        />
        )
    })

    return (
        <div>
            <NewPost />
            <hr />
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