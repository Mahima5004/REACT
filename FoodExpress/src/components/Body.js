import RestaurantCard from "./RestaurantCard"
// import restaurants from "../utils/mockData"
import { useState, useEffect } from "react"
import { API_URL } from "../utils/constant";



//Body
const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();

  }, [])
  const fetchData = async () => {
      const restData = await fetch(API_URL);
      const jsonRestData = await restData.json();
      setListOfRestaurants(jsonRestData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  const filterData = () => {
    const data = listOfRestaurants.filter((restaurant) => {
      return restaurant.info.avgRating >= 4.2;
    })
  // console.log("Button clicked")
  setListOfRestaurants(data);
  }
  return (
    <div className="body">

      <button className="filter-btn" onClick={filterData}>Top Rated Restaurants</button>

      <div className="restaurant-container">
        {/* //Restaurant Card */}
        {listOfRestaurants.map((restaurant) => {
          const { id,name, cuisines, avgRating, sla,cloudinaryImageId, aggregatedDiscountInfoV3} = restaurant.info;
          const resObj = {
            resName: name,
            cuisine: cuisines.join(', '),
            rating: avgRating,
            time: sla?.deliveryTime || "NA",
            imgId: cloudinaryImageId,
            offer: (aggregatedDiscountInfoV3?.header || "NA") + (aggregatedDiscountInfoV3?.subHeader || "NA")
          }
            return < RestaurantCard key = { id } resData = { resObj } />
        })}  
      </div>
    </div>
  )
}

export default Body