import { useEffect, useState } from "react";
import { useParams } from "react-router";

const RestoMenus = () => {
  const [restoInfo, setRestoInfo] = useState(null);

  const { restId } = useParams();

  useEffect(() => {
    // fetchRestoData();
  }, []);

  /**
   * due to cors,cookies issue swiggy api is failing
   */
  const fetchRestoData = async () => {
    const url =
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.30070&lng=80.46390&restaurantId=697204&catalog_qa=undefined&submitAction=ENTER";
    const data = await fetch(url);
    const jsonRestoData = await data.json();
    setRestoInfo(jsonRestoData);
  };

  return <div>RestoMenus of RestaurantID {restId}</div>;
};

export default RestoMenus;
