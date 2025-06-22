import React from "react";

import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex justify-center items-center gap-3 flex-col p-10">
      <img src={logo} alt="" />
      <p>Journalism Without Fear or Favour</p>
    </div>
  );
};

export default Header;
