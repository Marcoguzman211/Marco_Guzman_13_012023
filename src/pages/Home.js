import React from "react";
import Footer from "../components/Footer";
import HeaderLogo from "../components/HeaderLogo";
import Hero from "../components/Hero";
const Home = () => {
    return (
        <>
            <div className="home">
                <div className="header">
                    <HeaderLogo />
                    <div>Options</div>
                </div>
                <Hero />
                <div>Features</div>
                <Footer />
            </div>
        </>
    )
}

export default Home;