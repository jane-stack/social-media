import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";  

function Home () {
    const { user } = useContext(UserContext);

    return (
        <div className="home">
            <div>
                <h4>Your Posts</h4>
                {user.user_posts.map(post => (
                    <div className="box-2" key={post.id}>
                        <h5><Link className="title-link" to={`/posts/${post.id}`}>{post.title}</Link></h5>
                    </div>
                ))}
            </div>
            <br/><br/><br/>
            <div>
                <h4>Commented On</h4>
                {user.commented_posts.map(post => (
                    <div className="box-2" key={post.id}>
                        <h5><Link className="title-link" to={`/posts/${post.id}`}>{post.title}</Link></h5>
                    </div>
                ))}
            </div>
            <br/><br/><br/>
            <div>
                <h4>Liked</h4>
            </div>
        </div>
    )
}

export default Home;