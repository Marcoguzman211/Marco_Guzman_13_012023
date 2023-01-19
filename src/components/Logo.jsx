import React from "react";
import logoImage from "../assets/argentBankLogo.png";

const Logo = () => {
  return (
      <div className="header-logo">
          <img src={logoImage}
               alt="Argent Bank Logo"
               className="header-logo-image"
          />
      </div>
  );
};

export default Logo;