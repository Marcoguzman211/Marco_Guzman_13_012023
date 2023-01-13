import React from "react";
import Logo from "./Logo.jsx";
import { NavLink} from "react-router-dom";

const HeaderLogo = () => {
    return (
        <div className="header">
            <NavLink to="/">
                <Logo />
                <h1 className='sr-only'>Argent Bank</h1>
            </NavLink>
        </div>
    );
};

export default HeaderLogo;
