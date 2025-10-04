import {CDN_URL} from "../utils/constant"

//RestaurantCard
const RestaurantCard = ({ resData }) => {
  //object destrucuting - name provided in the actual data is passed here
  // console.log(resData)
  const { resName, cuisine, rating, time,imgId, offer } = resData;
  return (
    <div className="w-58 h-70 rounded-2xl overflow-hidden shadow-md bg-white my-4 hover:bg-gray-100 transform transition-transform duration-200 hover:scale-105
     hover:shadow-lg cursor-pointer" data-testid="res-card">
      <img alt="restaurant-logo" className="h-40 w-full rounded-xl" src={CDN_URL + imgId} />
      <div className="p-4">
        <h3 className="font-bold text-lg">{resName}</h3>
        <div className="flex font-medium">
            <h4>{rating} ✳️</h4>
            <h4>{time} minutes</h4>   
        </div>
          <h4>{cuisine}</h4>
          <h4>{offer}</h4>
      </div>
    </div>
  )
}

export const promotedResCard = (RestaurantCard) => {
  return () => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard />
      </div>
    )
  }
}

export default RestaurantCard