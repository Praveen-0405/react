import { CDN_IMAGE } from "../utils/restaurant.constant";

const RestoCards = (props) => {
  const foodData = props?.foodData?.info;
  return (
    <div className="card">
      <img
        className="food-image"
        src={CDN_IMAGE + foodData.cloudinaryImageId}
      />
      <div>
        <b>{foodData.name}</b>
      </div>
      <br></br>
      <div>{foodData.cuisines.join(", ")}</div>
      <div>{foodData.costForTwo}</div>
      <div>{foodData.avgRating}⭐</div>
    </div>
  );
};

export const vegRestoCards = (RestoCards) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Veg
        </label>
        <RestoCards {...props} />
      </div>
    );
  };
};

export default RestoCards;
