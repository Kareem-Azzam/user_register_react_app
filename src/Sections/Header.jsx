import React from "react";

const Header = () => {
  return (
    <div className="flex justify-around shadow-nav_shadow items-center bg-primary sticky top-0 w-full ">
      <div className="text-xl font-sans font-semibold p-4">
        <label className="text-secondColor">Register</label> Page
      </div>
      <div></div>
      <img src={require("./../img/kareem_azzam.png")} className="w-16 h-16" />
      <ul className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Header;
