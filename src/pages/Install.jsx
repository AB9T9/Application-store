import React, { useEffect, useState } from "react";

import { getApps } from "../components/utilities/Addtocart";
import { useApps } from "../Hook/useApps";
import Loading from "../components/loading/Loading";
import Cart from "../components/Apps/Cart";
import InstalledCart from "../components/Apps/InstalledCart";

const Install = () => {
  const [apps, loading] = useApps();
  const [wishApps, setWishApps] = useState([]);
  useEffect(() => {
    const id = getApps();

    const parseId = apps.filter((appId) => id.includes(appId.id));
    setWishApps(parseId);
  }, [apps]);

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1>hello</h1>
      <div>
        {wishApps.map((app) => (
          <InstalledCart key={app.id} apps={app}></InstalledCart>
        ))}
      </div>
    </div>
  );
};

export default Install;
