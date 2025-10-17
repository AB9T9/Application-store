import React, { useState } from "react";
import { useApps } from "../Hook/useApps";
import Cart from "../components/Apps/Cart";
import Loading from "../components/loading/Loading";
import { ImGift } from "react-icons/im";
import appsNotFound from "../../src/assets/App-Error.png";

const Apps = () => {
  const [appsData, loading] = useApps();
  const [password, setPassword] = useState("");
  const trimed = password.trim().toLocaleLowerCase();
  const searched = trimed
    ? appsData.filter((p) => p.title.toLocaleLowerCase().includes(trimed))
    : appsData;

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div>
        <h1 className="text-3xl text-center font-bold mt-3">
          Our All Applications
        </h1>
        <p className="text-center mt-2">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between px-5 my-4">
        <p className="text-xl font-semibold">({searched.length}) Apps Found</p>
        <input
          onChange={(e) => setPassword(e.target.value)}
          defaultValue={password}
          type="text"
          className="border px-4 py-2 "
          placeholder="Search apps"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 my-5 gap-5">
        {searched.map((apps) => (
          <Cart key={apps.id} apps={apps}></Cart>
        ))}
      </div>
      {searched.length === 0 ? (
        <img src={appsNotFound} alt="" className="max-w-4xl mx-auto mt-2" />
      ) : (
        ""
      )}
    </div>
  );
};

export default Apps;
