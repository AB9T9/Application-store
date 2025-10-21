import { IoMdDownload } from "react-icons/io";
import { FaStar } from "react-icons/fa";

const InstalledCart = ({ removeHandel, apps }) => {
  return (
    <div className=" flex flex-col md:flex-row md:justify-between md:items-center px-4  mt-3 bg-white">
      <div className="flex gap-4 items-center">
        <figure className="px-2 py-2">
          <img
            src={apps.image}
            alt="Shoes"
            className="rounded-full w-20 object-cover h-20"
          />
        </figure>
        <div className="flex flex-col justify-start gap-3 ">
          <h2 className="inter">{apps.title}</h2>
          <div className="flex items-center gap-2">
            <h1 className="flex items-center gap-1 text-green-700 font-semibold  px-2">
              <IoMdDownload />
              {apps.downloads}
            </h1>
            <h1 className="flex items-center gap-1  text-violet-800 font-semibold px-2">
              <FaStar />
              {apps.ratingAvg}
            </h1>
            <h1>{apps.size} MB</h1>
          </div>
        </div>
      </div>
      <button
        className=" rounded-md px-2 py-2 my-2 bg-green-400 text-white"
        onClick={() => removeHandel(apps.id, apps.title)}
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstalledCart;
