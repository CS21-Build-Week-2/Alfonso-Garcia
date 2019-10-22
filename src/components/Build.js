import React from "react";

// Function imports
import buildMap from "../util/buildMap";

// Style imports
import "../styles/Controller.scss";

const Build = props => {
    return (
        <div className="controller-button" onClick={buildMap}>
            <p>Build Map</p>
        </div>
    );
};

export default Build;
