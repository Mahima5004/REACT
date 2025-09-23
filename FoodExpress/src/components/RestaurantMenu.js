import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuAccordian from "./MenuAccordian"
import { useState } from "react";


const RestaurantMenu = () => {


    const [showIndex, setShowIndex] = useState(0);
   
    const { resId } = useParams();
    
    //custom hook implementation for cleaning the code
    const menuData = useRestaurantMenu(resId);

    if (menuData === null) return <Shimmer />
    
    const restaurantInfo = menuData?.cards[2]?.card?.card?.info;
    const menuSection = menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards 

    const menuCategory = menuSection.filter((category) => 
        category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
             
    const { name, costForTwoMessage, cuisines, avgRating } = restaurantInfo;

    
    
    return (
        <div className="text-center w-11/12 md:w-9/12 pt-24 m-auto">
            <h1 className="font-bold text-3xl">{name}</h1>
            <h2>Cuisines - {cuisines.join(", ")}</h2>
            <h3>{costForTwoMessage} - {avgRating}✳️</h3>

            {menuCategory.map((category, index) => (
                <MenuAccordian
                    key={category?.card?.card?.title}
                    data={category?.card?.card}
                    showItems={index === showIndex}
                    onShowIndex={() => setShowIndex(index === showIndex ? null : index)} />
            ))}
            
        </div>

        
    )
}

export default RestaurantMenu