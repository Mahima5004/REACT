import {CDN_URL} from "../utils/constant"

const MenuItem = ({ item }) => {
    console.log(item)
    const {name, price, defaultPrice, ratings, description, imageId} = item?.card?.info
    return (
        <div className="flex justify-between border-b border-gray-300">
            <div className="text-left p-2 m-4">
                <h1 className="font-bold">{name}</h1>
                <h3 className="font-bold">₹{price ? price / 100 : defaultPrice / 100}</h3>
                <p>✳️{ratings?.aggregatedRating?.rating}({ratings?.aggregatedRating?.ratingCountV2})</p>
                <p className="m-2">{description}</p>
            </div>
            <div className="p-2 m-4">
                <img alt="item-img" src={CDN_URL+imageId}></img>
            </div>
       </div>
   )
}

export default MenuItem