import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { ErrorContext } from "../context/ErrorContext";
import Errors from "../errors/Errors";
import { useNavigate } from "react-router-dom";

function LoginForm () {
    const { loginUser, loggedIn } = useContext(UserContext);
    const { setErrors } = useContext(ErrorContext);
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (loggedIn) {
            navigate("/posts")
        } else {
            return (
                setErrors([])
            )
        }
    }, [loggedIn, navigate, setErrors])

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/login', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username, password})
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.errors) {
                setErrors(data.errors);
                setPassword("");
            } else {
                loginUser(data);
                navigate('/posts')
            }
        })
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h3>Login to Student Account</h3>
            <div>
            Username &nbsp;
            <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required={true}
            />
            </div>
            <div>
            Password &nbsp;
            <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required={true}
            />
            </div>
            <button type="submit">Log In</button>
            <Errors />

        </form>
    )
}

export default LoginForm;