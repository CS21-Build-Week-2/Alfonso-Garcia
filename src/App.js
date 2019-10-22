import React, { useState, useEffect } from "react";

// Styles import
import "./styles/App.scss";

// Component imports
import Login from "./components/Login";
import Map from "./components/Map";

const App = () => {
    const [backendURL] = useState("https://lambda-treasure-hunt.herokuapp.com");
    const [loggedIn, isLoggedIn] = useState(false);

    useEffect(() => {
        localStorage.clear();
        isLoggedIn(false);
    }, []);

    return (
        <div className="App">
            <Login
                backendURL={backendURL}
                loggedIn={loggedIn}
                isLoggedIn={isLoggedIn}
            />
        </div>
    );
};

export default App;
