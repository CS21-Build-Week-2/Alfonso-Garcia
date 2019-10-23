import React, { useState, useEffect } from "react";

// Component Imports
import Controller from "./Controller";
import Build from "./Build";

// Style Imports
import "../styles/Map.scss";

const Map = props => {
    const [room, setRoom] = useState({});

    useEffect(() => {
        setRoom({ ...props.roomInfo });
    }, [props.roomInfo]);

    return (
        <>
            <Controller />
            <Build />
            <div className="Room">
                <h2>{room.title}</h2>
            </div>
        </>
    );
};

export default Map;
