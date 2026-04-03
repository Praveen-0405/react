import { useEffect, useState } from "react";
import { RESTAURANTS } from "../utils/restaurant.constant";

export const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resData = await fetch(RESTAURANTS);

    const json = await resData.json();

    const filterData =
      json?.["data"]?.["cards"]?.[1]?.["card"]?.["card"]?.["gridElements"]?.[
        "infoWithStyle"
      ]?.["restaurants"] ?? [];

    setRestaurants(filterData);
  };

  return restaurants;
};

// export default useRestaurants;
