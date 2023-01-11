import Footer from "../components/Footer";
import HeaderLogo from "../components/HeaderLogo";
import React from "react";

const Login = () => {
    return (
        <>
            <div className="header">
                <HeaderLogo />
                <div>Options</div>
            </div>
            <div>Formulaire</div>
            <Footer/>
        </>
    )
}

export default Login;