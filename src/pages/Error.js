import {NavLink} from "react-router-dom";
import Footer from "../components/Footer";
import HeaderLogo from "../components/HeaderLogo";
import React from "react";

const Error = () => {
    return (
        <div className="error404">
            <div className="header">
                <HeaderLogo />
                <div>Options</div>
            </div>
            <div className="error-content">
                <h2 className="error-message">Page non trouvée...</h2>
                <NavLink to="/">
                    <h4 className="error-link">Page d&aposaccueil</h4>
                </NavLink>
            </div>
            <Footer />
        </div>
    )
}

export default Error;