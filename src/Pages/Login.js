import React, { useState } from "react";
import "./Login.css";
import Accessibility from "../Components/Accessibility";
import NavBar from "../Components/NavBar";
import axios from "axios";

const Login = () => {
    const [isRegister, setIsRegister] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [retype_password, setRetype_password] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [passwordStrength, setPasswordStrength] = useState("");
    const [error, setError] = useState("");
    const [token, setToken] = useState(""); // State to store token

    function handleToggleForm() {
        setIsRegister(!isRegister);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const userData = {
            email: email,
            password: password
        };
        const url = isRegister ? "http://localhost:8000/register/" : "http://localhost:8000/login/";
        if (isRegister) {
            userData.username = username;
            userData.retype_password = retype_password;
            userData.dateOfBirth = dateOfBirth;
        }
        axios.post(url, userData)
            .then((res) => {
                const token = res.data.token;
                setToken(token);
                setError(""); 
            })
            .catch((error) => {
                if (error.response) {
                    setError(error.response.data.detail);
                } else {
                    setError("An unexpected error occurred.");
                }
                setToken("");
            });
    }
    



    return (
        <div>
            <NavBar isLoggedIn={!!token} /> 
            <div className={`${isRegister ? "Register" : "Login"}`}>
                <form onSubmit={handleSubmit} className="Login_c">
                    {error}
                    
                    {isRegister && (
                        <input className="input" placeholder="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}
                        />
                    )}
                    <input className="input" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                    <input className="input" placeholder="Password" type="password" value={password}  onChange={(e) => setPassword(e.target.value)}
                    />
                    {isRegister && (
                        <input
                            className="input"
                            placeholder="Retype Password"
                            type="password"
                            value={retype_password}
                            onChange={(e) => setRetype_password(e.target.value)}
                        />
                    )}
                    {isRegister && (
                        <input className="input" placeholder="Date of Birth" type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)}
                        />
                    )}

                    <button type="submit">{isRegister ? "Register" : "Login"}</button>
                    {token && <div>Login or registration successful!</div>}
                </form>
                
                <button onClick={handleToggleForm} className="RegisterToggle">
                    {isRegister ? "Already have an account? Login" : "Don't have an account? Register"}
                </button>
                
            </div>
            <Accessibility />
        </div>
    );
};

export default Login;


