import React from "react";
import appsNotFound from "../../assets/App-Error.png";
import { NavLink } from "react-router";
const AppsNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <img src={appsNotFound} alt="" className="max-w-3xl mx-auto" />
      <h1 className="text-4xl font-semibold ">OPPS!! APP NOT FOUND</h1>
      <p>
        The App you are requesting is not found on our system. please try
        another apps
      </p>
      <NavLink
        to="/home"
        className="btn  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white my-3"
      >
        Go Back!
      </NavLink>
    </div>
  );
};

export default AppsNotFound;
