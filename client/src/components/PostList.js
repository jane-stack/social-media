import PostCard from "../cards/PostCard";
import NewPost from "../forms/NewPost";

function PostList ({ contents }) {

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
            {renderPosts}
        </div>
    )
}

export default PostList;