import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto border-1 ">
      <div className="flex flex-col h-screen ">
        <Navbar></Navbar>
        <div className="flex-1 px-5">
          <Outlet></Outlet>
        </div>

        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
