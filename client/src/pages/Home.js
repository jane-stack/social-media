import { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";  

function Home () {
    const { user } = useContext(UserContext);

    const renderOnce = useMemo(() => {
        const titles = new Set();
        return user.commented_posts?.filter(post => {
            if (!titles.has(post.title)) {
                titles.add(post.title);
                return true;
            }
            return false;
        });
    }, [user.commented_posts]);

    return (
        <div className="home">
            <div className="home-box">
                <h4>Your Posts</h4>
                {user.user_posts?.map(post => (
                    <div className="box-home" key={post.id}>
                        <h5><Link className="title-link" to={`/posts/${post.id}`}>{post.title}</Link></h5>
                    </div>
                ))}
            </div>
            <div className="home-box">
                <h4>Commented</h4>
                {renderOnce?.map(post => (
                    <div className="box-home" key={post.id}>
                        <h5><Link className="title-link" to={`/posts/${post.id}`}>{post.title}</Link></h5>
                    </div>
                ))}
            </div>
            <br/><br/><br/>
            <div className="home-box">
                <h4>Liked</h4>
                {user.liked_posts?.map(post => (
                    <div className="box-home" key={post.id}>
                        <h5><Link className="title-link" to={`/posts/${post.id}`}>{post.title}</Link></h5>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;