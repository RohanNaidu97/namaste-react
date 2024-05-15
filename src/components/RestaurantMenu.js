import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

import useRestaurantMenu from "../utlis/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const [ showIndex, setShowIndex ] = useState(null);

    const params = useParams();
    // console.log(params.resid);
    const resId = params.resid;

    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null )
        return <Shimmer />

    const { name, cuisines, costForTwoMessage, avgRating } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const categories = resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => 
            c.card?.["card"]?.["@type"] === 
            "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

    // console.log(categories);

    return(
        <div className="menu text-center">
            <h1 className="font-bold text-2xl my-6"> { name } </h1>
            <h2 className="font-bold text-lg"> { cuisines.join(", ") } -- { costForTwoMessage } </h2>

            {categories.map(
                (category, index) => (<RestaurantCategory key = {category?.card?.card.card} 
                data = {category?.card?.card} 
                showItem = { index === showIndex ? true : false }
                setShowIndex = { () => setShowIndex(index) }    
                />)
            )}

        </div>
    );
}

export default RestaurantMenu