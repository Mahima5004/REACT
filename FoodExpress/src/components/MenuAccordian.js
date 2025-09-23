import { useState } from "react";
import MenuItem from "./MenuItem";

const MenuAccordian = ({ data , showItems, onShowIndex}) => {
    

    return (
        <div className=" shadow-lg cursor-pointer" onClick={onShowIndex}>
            <div className=" m-6 p-4 flex justify-between bg-gray-100">
                <h1 className="font-bold">{data?.title} ({data?.itemCards.length})</h1>
                <p>🔽</p>
            </div>

            {
                 showItems && (data?.itemCards.map((item) => (

                <MenuItem key = {item?.card?.info?.id} item={item} />
                
            )))}
        </div>
    )
}

export default MenuAccordian;