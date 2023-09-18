import { useContext } from "react";
import { UserContext } from "../context/UserContext";
// import NewPost from "../posts/NewPost";

function MyPage () {
    const { user } = useContext(UserContext);

    return (
        <div>
            {/* <NewPost /> */}
            <div>
                {user.user_posts?.map(post => (
                    <div className="box-2" key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        <hr />
                        <button className="edit-btn">Like</button>
                        <button className="edit-btn">Comments</button>
                        <button className="edit-btn">Edit</button>
                        <button className="edit-btn">Delete</button>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyPage;