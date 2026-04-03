import { useEffect, useState } from "react";
import { useParams } from "react-router";
// import { RestoItems } from "../components/RestoItems";
import { RESTORANT_MENUS_DATA } from "../utils/restaurant.constant";
import RestoItems from "./RestoItems";

const RestoMenus = () => {
  // const [restoInfo, setRestoInfo] = useState(null);
  const [restoInfo, setRestoInfo] = useState(RESTORANT_MENUS_DATA);
  const [accordian, setAccordian] = useState(false);

  const { restId } = useParams();

  useEffect(() => {
    fetchRestoData();
  }, []);

  /**
   * due to cors,cookies issue swiggy api is failing
   */
  const fetchRestoData = async () => {
    // const url =
    //   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.30070&lng=80.46390&restaurantId=697204&catalog_qa=undefined&submitAction=ENTER";
    // const url =
    //   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4201415&lng=78.5075126&restaurantId=729663";
    // const data = await fetch(url);
    // const jsonRestoData = await data.json();
    // setRestoInfo(jsonRestoData);
    const data = restoInfo.filter((item) => {
      if (
        item?.["card"]?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      ) {
        return item["card"]["card"]["itemCards"];
      }
    });
    setRestoInfo(data);
  };

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">RestoMenus of {restId}</h1>
      {restoInfo.map((item, index) => (
        <div key={index}>
          <RestoItems
            data={item?.card?.card}
            accordian={index == accordian}
            setAccordian={() => setAccordian(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default RestoMenus;
