import React, { useEffect, useState } from "react";

import { getApps, removeItem } from "../components/utilities/Addtocart";
import { useApps } from "../Hook/useApps";
import Loading from "../components/loading/Loading";

import InstalledCart from "../components/Apps/InstalledCart";

const Install = () => {
  const [apps, loading] = useApps();
  const [wishApps, setWishApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const sort = () => {
    if (sortOrder === "dsc") {
      return [...wishApps].sort((a, b) => a.size - b.size);
    } else if (sortOrder === "asc") {
      return [...wishApps].sort((a, b) => b.size - a.size);
    } else {
      return wishApps;
    }
  };
  useEffect(() => {
    const id = getApps();

    const parseId = apps.filter((appId) => id.includes(appId.id));
    setWishApps(parseId);
  }, [apps]);
  const removeHandel = (ids) => {
    const removed = wishApps.filter((f) => f.id !== ids);
    setWishApps(removed);
    removeItem(ids);
    alert("i am clicked ");
  };

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-4xl font-bold my-5">Your Installed Apps</h1>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>

      <div className="flex justify-between items-center px-2">
        <p>({wishApps.length})Apps Found</p>
        <label htmlFor="" className="form-control w-full max-w-xs">
          <select
            name=""
            id=""
            className="select select-bordered"
            defaultValue={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by price</option>
            <option value="asc">High -&gt;Low</option>
            <option value="dsc">Low -&gt;high</option>
          </select>
        </label>
      </div>
      <div>
        {sort().map((app) => (
          <InstalledCart
            key={app.id}
            apps={app}
            removeHandel={removeHandel}
          ></InstalledCart>
        ))}
      </div>
    </div>
  );
};

export default Install;
