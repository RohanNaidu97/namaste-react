import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItem, setShowIndex }) => {

    function handleClick() {
        setShowIndex();
    }

    return (
        <div className=" bg-gray-50 shadow-md w-6/12 mx-auto my-4">
            <div className=" flex justify-between cursor-pointer"
            onClick={handleClick}>
                <span className="font-bold text-lg"> {data.title}  </span>
                <span> ({data.categories[0].itemCards.length})⬇️ </span>

            </div>

            {showItem && <ItemList items = { data.categories[0].itemCards }/>}
        </div>

    )
}

export default RestaurantCategory;