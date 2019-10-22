import React from "react";

// Style imports
import "../styles/Controller.scss";

const Controller = props => {
    return (
        <div className="controller-container">
            <div className="controller-button">
                <p>N</p>
            </div>
            <div className="controller-button">
                <p>S</p>
            </div>
            <div className="controller-button">
                <p>W</p>
            </div>
            <div className="controller-button">
                <p>E</p>
            </div>
        </div>
    );
};

export default Controller;
