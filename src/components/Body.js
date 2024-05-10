import RestaurantCard from "./RestaurantCard";
import { resList } from "../utlis/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utlis/useOnlineStatus";


const Body = () => {
    const [ listofRestaurants, setListofRestaurants ] = useState( [] );
    const [ filteredRestaurant, setFilteredRestaurant] = useState( [] );

    const [ searchText, setSearchText ] = useState("");
   
    useEffect( () => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        console.log(json);
        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

        setListofRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };


    const onlineStatus = useOnlineStatus();

    // if(onlineStatus) {return (<h1> Your internet connection is off. </h1>);}

    return listofRestaurants.length === 0 ? ( <Shimmer/> ) : (
        <div className="body">
            <div className="filter my-16 flex justify-between bg-orange-200 py-2 navbar navbar-expand">
                <div className="search px-2 space-x-auto bg-teal-400 rounded mx-2 ">
                    <input className="search-box px-1 bg-green-10" type="text" value={ searchText } 
                        onChange={ (e) => {
                            setSearchText(e.target.value);
                        } }
                    />
                    <button onClick={ () => {
                        const filteredRestaurant = listofRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurant(filteredRestaurant);

                    }
                        } className="px-4"> Search 
                    </button>
                </div>
                
                <button 
                    className="filter-btn bg-teal-400 mx-4 py-1 px-2 rounded"
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

            <div className="res-container grid grid-cols-5 gap-10 m-4 font-sans text-base">
                { filteredRestaurant.map( (restaurant) => (
                    <Link key = { restaurant.info.id } 
                    to={"/restaurants/" + restaurant.info.id}>
                    <RestaurantCard  resData = {restaurant} />
                    </Link>
                )) }
            </div>          
        </div>
    );
}

export default Body;