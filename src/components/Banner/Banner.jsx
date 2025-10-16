import React from "react";
import { NavLink } from "react-router";
import googleplay from "../../assets/Vector.png";
import appstore from "../../assets/Group.png";
import banner from "../../assets/hero.png";

const Banner = () => {
  return (
    <div>
      <div className="flex flex-col gap-7 justify-center items-center">
        <h1 className="text-center text-5xl font-semibold">
          We Build <br />
          <span className="text-violet-500">Productive</span> Apps
        </h1>
        <p className="text-center max-w-5xl">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="flex justify-center items-center gap-4">
          <NavLink className="btn-outline flex items-center gap-2 btn">
            <img src={googleplay} alt="" className="w-6" />
            Google Play
          </NavLink>
          <NavLink className="btn-outline btn flex items-center gap-2">
            {" "}
            <img src={appstore} alt="" className="w-6" />
            App Store
          </NavLink>
        </div>
        <div className="w-full">
          <img src={banner} alt="" className="w-xl mx-auto" />
          <div className="flex flex-col justify-center items-center mt-0 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] w-full">
            <h1 className="md:text-5xl text-xl text-white p-4">
              Trusted by Millions, Built for You
            </h1>
            <div className="flex flex-col md:flex-row justify-between px-5 md:gap-10 ">
              <div className="flex flex-col items-center p-4">
                <p className="text-sm text-gray-200">Total Downloads</p>
                <h1 className="md:text-3xl font-bold text-white">29.6M</h1>
                <p className="text-sm text-gray-200">
                  21% more than last month
                </p>
              </div>
              <div className="flex flex-col items-center p-4">
                <p className="text-sm text-gray-200">Total Reviews</p>
                <h1 className="md:text-3xl font-bold text-white">906K</h1>
                <p className="text-sm text-gray-200">
                  46% more than last month
                </p>
              </div>
              <div className="flex flex-col items-center p-4">
                <p className="text-sm text-gray-200">Active Apps</p>
                <h1 className="md:text-3xl font-bold text-white">132+</h1>
                <p className="text-sm text-gray-200">31 more will Launch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
