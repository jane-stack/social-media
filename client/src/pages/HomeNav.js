import { Link } from "react-router-dom";

function HomeNav () {

    return (
        <div className="home-bar">
           <Link to="/myposts" className="nav-link">MY POSTS</Link>
           <Link to="/myconvo" className="nav-link">CONVERSATIONS</Link>
           <Link to="/mylikes" className="nav-link">LIKES</Link>
        </div>
    )
}

export default HomeNav;