import { useContext } from "react";
import PostCard from "./PostCard";
import NewPost from "../forms/NewPost";
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
            <h2>All Posts</h2>
            {renderPosts}
        </div>
    )
}

export default PostList;