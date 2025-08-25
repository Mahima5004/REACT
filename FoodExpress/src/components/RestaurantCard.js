import {CDN_URL} from "../utils/constant"

//RestaurantCard
const RestaurantCard = ({ resData }) => {
  //object destrucuting - name provided in the actual data is passed here
  const { resName, cuisine, rating, time,imgId, offer } = resData;
  return (
    <div className="restaurant-card">
      <img alt="restaurant-logo" className= "restaurant-logo" src={CDN_URL+imgId} />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <div className="rating">
        <h4>{rating} ✳️</h4>
        <h4>{time} minutes</h4>
      </div>
      <h4>{offer}</h4>
    </div>
  )
}

export default RestaurantCard