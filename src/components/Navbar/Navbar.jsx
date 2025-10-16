import React from "react";
import { NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";
import navicon from "../../assets/logo.png";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/apps">Apps</NavLink>
            <NavLink to="/install">Installation</NavLink>
          </ul>
        </div>
        <NavLink to="/home" className="btn btn-ghost text-xl ">
          <img src={navicon} alt="" className="w-8" />
          MYHERO.IO
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-4">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/apps">Apps</NavLink>
          <NavLink to="/install">Installation</NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <NavLink
          className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"
          to="https://github.com/AB9T9"
        >
          <FaGithub className="text-white text-xl" /> Contribute
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
