import React, { useState } from "react";
import axios from "axios";

// Component Imports
import Map from "./Map";

const Login = props => {
    // Props destructuring -----------------

    const { backendURL, loggedIn, isLoggedIn } = props;

    // State hooks -----------------

    const [token, setToken] = useState("");
    const [error, setError] = useState({});
    const [roomInfo, setRoomInfo] = useState({});

    // Handler functions -----------------

    const handleSubmit = e => {
        e.preventDefault();
        axios
            .get(`${backendURL}/api/adv/init`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Token ${token}`
                }
            })
            .then(res => {
                setError({});
                isLoggedIn(true);
                setRoomInfo(res.data);
                localStorage.setItem("token", token);
                console.log(res);
            })
            .catch(err => {
                setError({
                    Error: err.response.data.detail,
                    status: err.response.status
                });
                isLoggedIn(false);
                setRoomInfo({});
            });
    };

    const handleChange = e => {
        setToken(e.target.value);
    };

    const reset = e => {
        setToken("");
    };

    // Return -----------------
    return (
        <div className="Login">
            {!loggedIn ? (
                <form onSubmit={handleSubmit}>
                    <label>Enter your API key:</label>
                    <input
                        type="password"
                        value={token}
                        onChange={handleChange}
                    />
                    <button type="submit">Submit</button>
                    <button type="reset" onClick={reset}>
                        Clear
                    </button>
                </form>
            ) : (
                <Map />
            )}
        </div>
    );
};

export default Login;
