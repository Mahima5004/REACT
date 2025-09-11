import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {
    
   
    const { resId } = useParams();
    
    //custom hook implementation for cleaning the code
    const menuData = useRestaurantMenu(resId);

    if (menuData === null) return <Shimmer />
    
    const restaurantInfo = menuData?.cards[2]?.card?.card?.info;
    const menuSection = menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards 

    const menuList = menuSection[1]?.card?.card?.itemCards
         

    const { id, name, costForTwoMessage, cuisines, avgRating } = restaurantInfo;

    
    
    return (
        <div className="rest-menu">
            <h1>{name}</h1>
            <h2>Cuisines - {cuisines.join(", ")}</h2>
            <h3>{costForTwoMessage} - {avgRating}✳️</h3>
            <h1>Recommended</h1>
            <ul>
                {
                    menuList.map(menu => (
                        <li key={menu?.card?.info?.id} className="dish-card">
                            {menu?.card?.info?.name} - ₹{menu?.card?.info?.price / 100 || menu?.card?.info?.defaultPrice/100}
                        </li>
                    ))
                }
            </ul> 
        </div>
    )
}

export default RestaurantMenu