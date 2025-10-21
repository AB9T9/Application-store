import React, { useEffect, useState } from "react";

import { getApps, removeItem } from "../components/utilities/Addtocart";
import { useApps } from "../Hook/useApps";
import Loading from "../components/loading/Loading";

import InstalledCart from "../components/Apps/InstalledCart";
import { toast } from "react-toastify";

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
  const removeHandel = (ids, title) => {
    const removed = wishApps.filter((f) => f.id !== ids);
    setWishApps(removed);
    removeItem(ids);
    toast(title + " Uninstall");
  };

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="flex flex-col justify-center items-center md:py-10 ">
        <h1 className="text-4xl font-bold my-5">Your Installed Apps</h1>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>

      <div className="flex justify-between items-center px-2">
        <p className="font-semibold text-xl ">{wishApps.length} Apps Found</p>
        <label className="form-control md:w-full max-w-xs ">
          <select
            className="select select-bordered "
            defaultValue={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by size</option>
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
