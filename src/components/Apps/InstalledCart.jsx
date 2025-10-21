import { IoMdDownload } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { getApps, removeItem } from "../utilities/Addtocart";
import { useEffect, useState } from "react";
import { useApps } from "../../Hook/useApps";
const InstalledCart = ({ removeHandel, apps }) => {
  return (
    <div className="flex justify-between items-center px-4 border mt-3">
      <div className="flex gap-4">
        <figure className="px-2 py-2">
          <img
            src={apps.image}
            alt="Shoes"
            className="rounded-md w-20 object-cover"
          />
        </figure>
        <div className="flex flex-col justify-start gap-2 ">
          <h2 className="">{apps.title}</h2>
          <div className="flex items-center gap-2">
            <h1 className="flex items-center gap-1 text-green-700 font-semibold  px-2">
              <IoMdDownload />
              {apps.downloads}
            </h1>
            <h1 className="flex items-center gap-1  text-violet-800 font-semibold px-2">
              <FaStar />
              {apps.ratingAvg}
            </h1>
            <h1 className="font-bold">{apps.size} MB</h1>
          </div>
        </div>
      </div>
      <button
        className="border rounded-md px-2 py-2 bg-green-400 text-white"
        onClick={() => removeHandel(apps.id)}
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstalledCart;
