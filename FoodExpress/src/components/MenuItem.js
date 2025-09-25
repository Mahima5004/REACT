import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constant"
import {useDispatch} from "react-redux"

const MenuItem = ({ item }) => {
    const { name, price, defaultPrice, ratings, description, imageId } = item?.card?.info
    const dispatch = useDispatch();

    const handleItem = () => {
        dispatch(addItem(item))
    }
    
    return (
        <div className="flex justify-between border-b border-gray-300">
            <div className="text-left p-2 m-4 w-9/12">
                <h1 className="font-bold">{name}</h1>
                <h3 className="font-bold">₹{price ? price / 100 : defaultPrice / 100}</h3>
                <p>✳️{ratings?.aggregatedRating?.rating}({ratings?.aggregatedRating?.ratingCountV2})</p>
                <p className="m-2">{description}</p>
            </div>
            <div className="p-2 m-4 relative w-3/12">
                <img alt="item-img" src={CDN_URL + imageId} className="rounded-xl"/>
                <button
                    className="p-2 bg-white text-green-400 font-medium rounded-xl absolute bottom-0 left-25 cursor-pointer"
                    onClick={handleItem}
                >ADD+</button>
            </div>
       </div>
   )
}

export default MenuItem