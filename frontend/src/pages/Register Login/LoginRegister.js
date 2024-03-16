import React, { useState } from "react";
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import './register.css'
function LoginRegister() {
    const [isSignIn, setIsSignIn] = useState(true);

    const handleOverlayClick = () => {
        setIsSignIn(!isSignIn);
    };

    return <div className="w-full h-[100vh] m-auto outside-container">
        <div className={`main-container mx-auto ${isSignIn ? '' : 'right-panel-active'}`}>
            <div className="form-container w-[70%] sign-up-container">
                <RegisterForm />
            </div>
            <div className="form-container sign-in-container">
                <LoginForm />
            </div>
            <div class="overlay-container" id="overlayCon">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>
                            To keep connected with us please login with your personal info
                        </p>
                        <button>Sign In</button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button>Sign Up</button>
                    </div>
                </div>
                <button id="overlayBtn" onClick={handleOverlayClick}></button>
            </div>
        </div>
    </div>;
}

export default LoginRegister;
