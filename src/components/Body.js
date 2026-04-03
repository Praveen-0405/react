import RestoCards, { vegRestoCards } from "./RestoCards";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useRestaurants } from "../utils/useRestaurants";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [resto, setResto] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [shimmer, setShimmer] = useState(false);
  const [orginalData, setOrginalData] = useState([]);

  const topResto = () => {
    const filter = orginalData.filter((data) => {
      return data.info.avgRating > 4;
    });
    setResto(filter);
  };

  // custom hood
  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return <h1>You are in Offline , Please check your connection</h1>;
  }

  // custom hook or else we can use use effect which is commented below
  const filterData = useRestaurants();
  useEffect(() => {
    setShimmer(true);
    if (filterData && filterData.length > 0) {
      setResto(filterData);
      setOrginalData(filterData);
    }
    setShimmer(false);
  }, [filterData]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   setShimmer(true);
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.30070&lng=80.46390&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
  //   );

  //   const json = await data.json();

  //   const filterData =
  //     json?.["data"]?.["cards"]?.[1]?.["card"]?.["card"]?.["gridElements"]?.[
  //       "infoWithStyle"
  //     ]?.["restaurants"] ?? [];

  //   setResto(filterData);
  //   setOrginalData(filterData);

  //   setShimmer(false);
  // };

  const VegResto = vegRestoCards(RestoCards);

  const { userData, setUserName } = useContext(UserContext);

  const searchResto = () => {
    const filterdResto = orginalData.filter((item) => {
      const itemName = item.info.name.toLowerCase();
      const searchLowerCase = searchText.toLowerCase();
      return itemName.includes(searchLowerCase);
    });
    setResto(filterdResto);
  };

  if (shimmer) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search">
        <input
          className="px-4 border border-solid border-black rounded-lg"
          id="search"
          name="search"
          type="text"
          value={searchText}
          placeholder="Search Restaurant"
          onChange={(event) => setsearchText(event.target.value)}
        />
        <button
          className="px-4 py-2 bg-gray-100 rounded-lg"
          onClick={searchResto}
        >
          Search
        </button>
        <button
          className="m-4 p-4 px-4 py-2 bg-gray-100 rounded-lg"
          onClick={topResto}
        >
          Top Restaurant
        </button>

        <input
          className="px-4 border border-solid border-black rounded-lg"
          id="name"
          name="name"
          type="text"
          value={userData || ""}
          placeholder="Enter Name"
          onChange={(event) => setUserName(event.target.value)}
        />
      </div>
      <div className="cards">
        {resto.map((data) => (
          // <Link key={data.info.id} to={`/restaurants/${data.info.id}`}>
          //   <RestoCards foodData={data} />
          // </Link>
          <Link
            key={data.info.id}
            to={`/restaurants/${data.info.name} (${data.info.id})`}
          >
            {data?.info?.veg ? (
              <VegResto foodData={data} />
            ) : (
              <RestoCards foodData={data} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
