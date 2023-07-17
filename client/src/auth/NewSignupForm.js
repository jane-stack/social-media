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
            body: JSON.stringify({name, username, password})
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.errors) {
                setErrors(data.errors);
                setPassword("");
            } else {
                addUser(data);
                loginUser(data);
                navigate('/posts')
            }
        })
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h3>Create an Account</h3>
            <div>
            Full Name &nbsp;
            <input
            type="text"
            name="first_name"
            id="first_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required={true}
            />
            </div>
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
            <button type="submit">Signup</button>
            <Errors />
        </form>
    )
}

export default NewSignupForm;