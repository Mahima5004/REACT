import RestaurantCard from "./RestaurantCard"
// import restaurants from "../utils/mockData"
import { useState, useEffect } from "react"
import { API_URL } from "../utils/constant";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useInternetStatus from "../utils/useInternetStatus"


//Body
const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaraunt] = useState([]);


  useEffect(() => {
    fetchData();
  }, [])
  
  const fetchData = async () => {
      const restData = await fetch(API_URL);
      const jsonRestData = await restData.json();
      // console.log(jsonRestData)
    setListOfRestaurants(jsonRestData.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaraunt(jsonRestData.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  const filterData = () => {
    const data = listOfRestaurants.filter((restaurant) => {
      return restaurant.info.avgRating >= 4.3;
    })

  setListOfRestaurants(data);
  }

  const searchRestaurant = () => {
    const newRestaurants = listOfRestaurants.filter(res => (
      res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    ))
    setFilteredRestaraunt(newRestaurants)
  }
 
 
  const internetStatus = useInternetStatus();
  if (!internetStatus) return (<h1> ⚠️Seems like you are offline... Please check your internet connectivity</h1>)
  
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
    ) : (
    <div className="body">
        <div className="filter">
            <button
             className="filter-btn"
             onClick={filterData}>
             Top Rated Restaurants
            </button>
          <input
            type="text"
            className="search-text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value)
            }}
          />
          <button className="filter-btn" onClick={
            //Filter out the searched restaurant and update the UI
            searchRestaurant
          }>
          Search</button>
        </div>

      <div className="restaurant-container">
        {/* //Restaurant Card */}
        {filteredRestaurant.map((restaurant) => {
          const { id,name, cuisines, avgRating, sla,cloudinaryImageId, aggregatedDiscountInfoV3} = restaurant.info;
          const resObj = {
            resName: name,
            cuisine: cuisines.join(', '),
            rating: avgRating,
            time: sla?.deliveryTime || "NA",
            imgId: cloudinaryImageId,
            offer: (aggregatedDiscountInfoV3?.header || "NA") + (aggregatedDiscountInfoV3?.subHeader || "NA")
          }
          return (
          <Link
            key={id}
            to={"/restaurant/" + id}
            className="rest-card">
            <RestaurantCard resData={resObj} />
          </Link>
          )
        })}  
      </div>
    </div>
  )
}

export default Body