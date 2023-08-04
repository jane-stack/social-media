import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

function Navbar () {
    const { user, logoutUser, loggedIn } = useContext(UserContext);
    const navigate = useNavigate();

    const signoutUser = () => {
        fetch(`/logout`, { method: "DELETE" })
        .then(logoutUser())
        .then(() => navigate('/'))
    }

    const signedIn = () => {
        return (
            <>
            <div><h4>Welcome In, {user.name}</h4></div>
            <Link to="/home" className="nav-link">Home</Link>
            <Link to="/posts" className="nav-link">Posts</Link>
            <Link to="#" className="nav-link" onClick={signoutUser}>Log Me Out</Link>
            </>
        )
    }

    const signedOut = () => {
        <>
        <h4>Please log in</h4>
        </>
    }

    return (
        <div className="navbar">
            <div><h1>Random Posts</h1></div>
            {loggedIn ? signedIn() : signedOut()}
        </div>
    )
}

export default Navbar;