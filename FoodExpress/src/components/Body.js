import RestaurantCard from "./RestaurantCard"
import restaurants from "../utils/mockData"


//Body
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        {/* //Restaurant Card */}
        {restaurants.map((restaurant) => {
          const { id,name, cuisines, avgRating, sla,cloudinaryImageId, aggregatedDiscountInfoV3} = restaurant.info;
          const resObj = {
            resName: name,
            cuisine: cuisines.join(', '),
            rating: avgRating,
            time: sla?.deliveryTime || NA,
            imgId: cloudinaryImageId,
            offer: (aggregatedDiscountInfoV3?.header || NA) + (aggregatedDiscountInfoV3?.subHeader || NA)
          }
            return < RestaurantCard key = { id } resData = { resObj } />
        })}  
      </div>
    </div>
  )
}

export default Body