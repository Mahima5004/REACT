import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuAccordian from "./MenuAccordian"


const RestaurantMenu = () => {
    
   
    const { resId } = useParams();
    
    //custom hook implementation for cleaning the code
    const menuData = useRestaurantMenu(resId);

    if (menuData === null) return <Shimmer />
    
    const restaurantInfo = menuData?.cards[2]?.card?.card?.info;
    const menuSection = menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards 

    // const menuList = menuSection[1]?.card?.card?.itemCards
    const menuCategory = menuSection.filter((category) => 
        category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
             
    const { id, name, costForTwoMessage, cuisines, avgRating } = restaurantInfo;

    
    
    return (
        <div className="text-center w-11/12 md:w-9/12 pt-24 m-auto">
            <h1 className="font-bold text-3xl">{name}</h1>
            <h2>Cuisines - {cuisines.join(", ")}</h2>
            <h3>{costForTwoMessage} - {avgRating}✳️</h3>

            {menuCategory.map((category) => (
                <MenuAccordian data={category?.card?.card} />
            ))}
            
            {/* <MenuAccordian /> */}
        </div>

        
    )
}

export default RestaurantMenu