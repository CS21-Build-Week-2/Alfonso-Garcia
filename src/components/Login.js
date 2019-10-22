import React, { useState } from "react";
import axios from "axios";

const Login = props => {
    // Props destructuring -----------------
    const { backendURL } = props;

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
                setRoomInfo(res.data);
                console.log(res.data);
            })
            .catch(err => {
                setError({
                    Error: err.response.data.detail,
                    status: err.response.status
                });
                setRoomInfo({});
                console.log(err);
            });

        localStorage.setItem("token", token);
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
            <form onSubmit={handleSubmit}>
                <label>Enter your API key:</label>
                <input type="password" value={token} onChange={handleChange} />
                <button type="submit">Submit</button>
                <button type="reset" onClick={reset}>
                    Clear
                </button>
            </form>
        </div>
    );
};

export default Login;
