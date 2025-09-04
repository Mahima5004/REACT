import { useEffect, useState } from "react"
import { MENU_API } from "../utils/constant"
import Shimmer from "./Shimmer"
import {useParams} from "react-router-dom"


const RestaurantMenu = () => {
    
    const [menuData, setMenuData] = useState(null)
   
    const { resId }  = useParams();

    useEffect(() => {
        fetchMenu();
        console.log(menuData)
    }, [])
    
    const fetchMenu = async () => {
        const resMenu = await fetch(MENU_API + resId)
        const jsonMenu = await resMenu.json();
        setMenuData(jsonMenu?.data)
    }

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