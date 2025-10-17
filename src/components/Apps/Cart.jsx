import { IoMdDownload } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router";

const Cart = ({ apps }) => {
  return (
    <NavLink to={`/details/${apps.id}`}>
      <div className="card bg-base-100  shadow-sm">
        <figure className="px-2 py-2">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title flex-1">{apps.title}</h2>
          <div className="flex justify-between w-full">
            <h1 className="flex items-center gap-1 text-green-700 font-semibold bg-gray-300 px-2">
              <IoMdDownload />
              {apps.downloads}
            </h1>
            <h1 className="flex items-center gap-1  text-violet-800 font-semibold bg-gray-200 px-2">
              <FaStar />
              {apps.ratingAvg}
            </h1>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Cart;
