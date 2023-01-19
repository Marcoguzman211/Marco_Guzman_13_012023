import Footer from "../components/Footer";
import HeaderLogo from "../components/HeaderLogo";
import React from "react";
import SingInToggle from "../components/SignInToggle";
import AuthentificationForm from "../components/AuthentificationForm";

const Login = () => {
    return (
        <>
            <div className="header">
                <HeaderLogo />
                <SingInToggle />
            </div>
            <AuthentificationForm />
            <Footer/>
        </>
    );
};

export default Login;