import Footer from "../components/Footer";
import HeaderLogo from "../components/HeaderLogo";
import React from "react";

const Profile = () => {
    return (
        <>
            <div className="header">
                <HeaderLogo />
                <div>Options</div>
            </div>
            <div>Profile infos</div>
            <Footer />
        </>
    )
}

export default Profile;