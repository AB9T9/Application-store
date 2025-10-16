import axios from "axios";
import { useEffect, useState } from "react";

export const useApps = () => {
  const [apps, setApps] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios("../public/apps.json")
      .then((data) => setApps(data.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(true));
  }, []);
  return [apps, error, loading];
};
