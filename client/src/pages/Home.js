import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";  

function Home () {
    const { user } = useContext(UserContext);

    return (
        <div className="home">
            <div>
                <h4>Your Posts</h4>
                {user.user_posts?.map(post => (
                    <div className="box-2" key={post.id}>
                        <h5><Link className="title-link" to={`/posts/${post.id}`}>{post.title}</Link></h5>
                    </div>
                ))}
            </div>
            {/* <div>
                <h4>Commented</h4>
                {user.commented_posts?.map(post => (
                    <div className="box-2" key={post.id}>
                        <h5><Link className="title-link" to={`/posts/${post.id}`}>{post.title}</Link></h5>
                    </div>
                ))}
            </div> */}
            <div>
                <h4>Commented</h4>
                {user.commented_posts?.reduce((uniqueTitles, post) => {
                    if (!uniqueTitles.includes(post.title)) {
                        uniqueTitles.push(post.title);
                        return uniqueTitles;
                    }
                    return uniqueTitles;
                }, []).map((title, index) => (
                    <div className="box-2" key={index}>
                        <h5>
                            <Link className="title-link" to={`/posts/${index}`}>{title}</Link>
                        </h5>
                    </div>
                ))}
            </div>
            <br/><br/><br/>
            <div>
                <h4>Liked</h4>
                {user.liked_posts?.map(post => (
                    <div className="box-2" key={post.id}>
                        <h5><Link className="title-link" to={`/posts/${post.id}`}>{post.title}</Link></h5>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;