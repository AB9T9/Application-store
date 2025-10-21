import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import { ToastContainer } from "react-toastify";
const Root = () => {
  return (
    <div className="max-w-7xl mx-auto bg-[#D2D2D2] ">
      <div className="flex flex-col">
        <Navbar></Navbar>
        <div className="flex-1 px-5">
          <Outlet></Outlet>
        </div>

        <Footer></Footer>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Root;
