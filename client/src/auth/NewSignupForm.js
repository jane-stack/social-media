import { useContext, useEffect, useState } from "react";
import { ErrorContext } from "../context/ErrorContext";
import { UserContext } from "../context/UserContext";
import Errors from "../errors/Errors";
import { useNavigate } from "react-router-dom";

function NewSignupForm () {
    const { setErrors, loggedIn } = useContext(ErrorContext);
    const { addUser, loginUser } = useContext(UserContext);
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (loggedIn) {
            navigate('/posts')
        } else {
            return (
                setErrors([])
            )
        }
    }, [loggedIn, navigate, setErrors])

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/signup', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name, username, email, password })
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.errors) {
                setErrors(data.errors);
                setPassword(!data.errors);
            } else {
                addUser(data);
                loginUser(data);
                navigate('/posts')
            }
        })
    }

    return (
        <form className="form-signup" onSubmit={handleSubmit}>
            <h3>CREATE AN ACCOUNT</h3>
            <div>
            <input
            className="login-input"
            type="text"
            name="first_name"
            id="first_name"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            </div>
            <div>
            <input
            className="login-input"
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            </div>
            <div>
            <input
            className="login-input"
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div>
            <input
            className="login-input"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <button type="submit" className="login-btn">Sign Up</button>
            <Errors />
        </form>
    )
}

export default NewSignupForm;