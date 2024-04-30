import RestaurantCard from "./RestaurantCard";
import { resList } from "../utlis/mockData";
import { useState } from "react";


const Body = () => {
    const [ listofRestaurants, setListofRestaurants ] = useState( resList );
   
    return(
        <div className="body">
            <div className="filter">
                <button 
                    className="filter-btn"
                    onClick = { () => {
                        const filteredListofRestaurants = listofRestaurants.filter( 
                            (res) => res.info.avgRating > 4
                         );

                        setListofRestaurants(filteredListofRestaurants);

                        console.log(filteredListofRestaurants);
                    }}
                    > Top Rated Restaurant
                </button>
            </div>

            <div className="res-container">
                { listofRestaurants.map( (restaurant) => (
                    <RestaurantCard resData = {restaurant} />
                )) }
            </div>          
        </div>
    );
}

export default Body;