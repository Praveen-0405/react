const RestoCards = (props) => {
  const foodData = props?.foodData?.info;
  return (
    <div className="card">
      <img
        className="food-image"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          foodData.cloudinaryImageId
        }
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

export default RestoCards;
