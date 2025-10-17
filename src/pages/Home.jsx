import React from "react";
import Banner from "../components/Banner/Banner";
import { NavLink } from "react-router";
import { useApps } from "../Hook/useApps";
import Loading from "../components/loading/Loading";
import Cart from "../components/Apps/Cart";

const Home = () => {
  const [apps, loading] = useApps();
  if (loading) {
    return <Loading></Loading>;
  }
  const filterd = apps.slice(0, 8);

  return (
    <div>
      <div className=" mx-auto mt-5">
        <Banner></Banner>
      </div>
      <div>
        <h1 className="text-2xl text-center mt-5 font-bold ">Trending Apps</h1>
        <p className="text-center mt-2">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 my-5 gap-5">
        {filterd.map((apps) => (
          <Cart apps={apps} key={apps.id}></Cart>
        ))}
      </div>
      <NavLink
        to="/apps"
        className=" btn flex justify-cente w-fit mx-auto mt-4"
      >
        See all
      </NavLink>
    </div>
  );
};

export default Home;
