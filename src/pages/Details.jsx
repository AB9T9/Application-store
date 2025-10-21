import { useParams } from "react-router";
import { useApps } from "../Hook/useApps";
import Loading from "../components/loading/Loading";
import download from "../assets/icon-downloads.png";
import rating from "../assets/icon-ratings.png";
import review from "../assets/icon-review.png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import { getApps, setApps } from "../components/utilities/Addtocart";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Details = () => {
  const [installedApps, setInstallApps] = useState([]);
  const { id } = useParams();
  const ids = Number(id);

  const [apps, loading] = useApps();
  const installHandel = (id) => {
    setApps(id);
    setInstallApps([...installedApps, id]);
    toast(filtered.title + " Installed");
  };
  const exits = installedApps.find((app) => app == id);

  useEffect(() => {
    const ids = getApps();
    setInstallApps([...ids]);
  }, [id]);
  if (loading) {
    return <Loading></Loading>;
  }
  const filtered = apps.find((a) => a.id === ids);
  if (filtered)
    return (
      <div>
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-10 bg-transparent  max-w-3xl mx-auto ">
          <figure>
            <img
              src={filtered.image}
              alt="Movie"
              className="w-50 h-50 object-cover mt-5"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">{filtered.title}</h2>
            <p>
              Developed By :{" "}
              <span className="text-violet-500 font-bold text-xl">
                {filtered.companyName}
              </span>
            </p>
            <div className="flex justify-between items-center md:pr-10 my-1">
              <div className="flex flex-col gap-2 items-center">
                <img src={download} alt="" className="w-6" />
                <p>Downloads</p>
                <h1 className="md:text-2xl font-bold ">{filtered.downloads}</h1>
              </div>
              <div className="flex flex-col gap-2 items-center justify-start">
                <img src={rating} alt="" className="w-6" />
                <p>Average Ratings</p>
                <h1 className="md:text-2xl font-bold ">{filtered.downloads}</h1>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <img src={review} alt="" className="w-6" />
                <p>Total Reviews</p>
                <h1 className="md:text-2xl font-bold ">{filtered.reviews}K</h1>
              </div>
            </div>
            <button
              className="btn btn-outline w-xs mt-5 text-white bg-[#00D390]"
              onClick={() => installHandel(filtered.id)}
            >
              {exits ? "Installed" : `Install now ${filtered.size}  MB`}
            </button>
          </div>
        </div>

        {/*For the re-chart here */}

        <div className="flex justify-center my-8">
          {
            <BarChart
              width={600}
              height={300}
              data={filtered.ratings}
              layout="vertical"
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" /> {/* 👈 Flips bar direction */}
              <YAxis type="category" dataKey="name" />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#00D390" barSize={30} />
            </BarChart>
          }
        </div>
        {/*description */}
        <p className="font-bold text-xl">Description:</p>
        <p className="text-xl">{filtered.description}</p>
      </div>
    );
};

export default Details;
