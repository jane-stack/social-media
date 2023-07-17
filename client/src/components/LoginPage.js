import { useState } from "react";
import NewSignupForm from "../auth/NewSignupForm";
import LoginForm from "../auth/LoginForm";

function LoginPage () {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <div>
            {showLogin ? (
                <>
                <LoginForm />
                <p className='words'>Create an Account &nbsp;
                <button onClick={() => setShowLogin(false)}>Signup</button>
                </p>
                </>
            ):(
                <>
                <NewSignupForm />
                <p className='words'>Log in to your Account &nbsp;
                    <button onClick={() => setShowLogin(true)}>Login</button>
                </p>
                </>
            )}
        </div>
    )
}

export default LoginPage;