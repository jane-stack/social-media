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
            {renderPosts}
        </div>
    )
}

export default PostList;