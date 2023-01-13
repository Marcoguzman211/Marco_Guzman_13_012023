import React from "react";
import Footer from "../components/Footer";
import HeaderLogo from "../components/HeaderLogo";
import Hero from "../components/Hero";
import SingInToggle from "../components/SignInToggle";
import Features from "../components/Features";
const Home = () => {
    return (
        <>
            <div className="home">
                <div className="header">
                    <HeaderLogo />
                    <SingInToggle />
                </div>
                <Hero />
                <Features />
                <Footer />
            </div>
        </>
    );
};

export default Home;