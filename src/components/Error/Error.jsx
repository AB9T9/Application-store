import React from "react";
import error from "../../assets/error-404.png";
import { NavLink } from "react-router";
const Error = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <img src={error} alt="error" className="max-w-4xl mx-auto" />
      <h1 className="text-3xl font-semibold">Oops, page not found!</h1>
      <p>The page you are looking for is not available.</p>
      <NavLink
        to="/home"
        className="btn  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"
      >
        Go Back!
      </NavLink>
    </div>
  );
};

export default Error;
