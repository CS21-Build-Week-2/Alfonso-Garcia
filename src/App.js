import React, { useState, useEffect } from "react";

// Styles import
import "./styles/App.scss";

// Component imports
import Login from "./components/Login";

const App = () => {
    const [backendURL] = useState("https://lambda-treasure-hunt.herokuapp.com");

    useEffect(() => {
        localStorage.clear();
    }, []);

    return (
        <div className="App">
            <Login backendURL={backendURL} />
        </div>
    );
};

export default App;
