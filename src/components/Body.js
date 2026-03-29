import RestoCards from "./RestoCards";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setShimmer(true);
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.30070&lng=80.46390&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await data.json();

    const filterData =
      json?.["data"]?.["cards"]?.[1]?.["card"]?.["card"]?.["gridElements"]?.[
        "infoWithStyle"
      ]?.["restaurants"] ?? [];

    setResto(filterData);
    setOrginalData(filterData);

    setShimmer(false);
  };

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
          id="search"
          name="search"
          type="text"
          value={searchText}
          placeholder="Search Restaurant"
          onChange={(event) => setsearchText(event.target.value)}
        />
        <button onClick={searchResto}>Search</button>
        <button className="btn-primary" onClick={topResto}>
          Top Restaurant
        </button>
      </div>
      <div className="cards">
        {resto.map((data) => (
          <Link key={data.info.id} to={`/restaurants/${data.info.id}`}>
            <RestoCards foodData={data} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
