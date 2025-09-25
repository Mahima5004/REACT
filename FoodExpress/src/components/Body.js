import RestaurantCard from "./RestaurantCard"
// import restaurants from "../utils/mockData"
import { useState, useEffect, useContext } from "react"
import { API_URL } from "../utils/constant";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useInternetStatus from "../utils/useInternetStatus"
import UserContext from "../utils/UserContext";



//Body
const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("Seach here...");
  const [filteredRestaurant, setFilteredRestaraunt] = useState([]);

  const { loggedUser, setUserName } = useContext(UserContext);

 

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
      return restaurant.info.avgRating >= 4.5;
    })
  setFilteredRestaraunt(data);
  }

  const searchRestaurant = () => {
    const newRestaurants = listOfRestaurants.filter(res => (
      res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    ))
    setFilteredRestaraunt(newRestaurants)
  }
 
  // const PromotedRestaurantCard = promotedResCard(RestaurantCard);
 
  const internetStatus = useInternetStatus();
  if (!internetStatus) return (<h1> ⚠️Seems like you are offline... Please check your internet connectivity</h1>)
  
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
    ) : ( 
    <div className="w-11/12 md:w-9/12 mx-auto pt-24">
        <div className="flex justify-between">
          <div>
             <input
            type="text"
            className="p-4 border-solid  bg-gray-100 rounded-xl"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value)
            }}
          />
          <button className="p-3 m-5 bg-amber-700 rounded-2xl text-white w-30 cursor-pointer" onClick={
            //Filter out the searched restaurant and update the UI
            searchRestaurant
          }>
            Search</button>
          </div>
          <div className="px-4 m-5">
            <input
            type="text"
            className="p-4 border-solid  bg-gray-100 rounded-xl"
            value={loggedUser}
            onChange={(e) => {
              setUserName(e.target.value)
            }}
          />
            <button 
             className="p-3 mx-2 bg-amber-700 rounded-2xl text-white cursor-pointer"
             onClick={filterData}>
             Top Rated Restaurants
            </button>
          </div>
        
        </div>

      <div className="flex flex-wrap gap-6">
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
            >
            <RestaurantCard resData={resObj} />
          </Link>
          )
        })}  
      </div>
    </div>
  )
}

export default Body