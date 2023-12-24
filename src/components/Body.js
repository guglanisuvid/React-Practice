import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import { RES_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const [filteredList, setFilteredList] = useState([]);

    const [searchText, setSearchText] = useState("");

    const [filterText, setFilterText] = useState("See Top Rated Restaurants");

    const topRatedRestaurants = () => {
        const filteredList = listOfRestaurants.filter(
            res => res.info.avgRating > 4.2
        );
        setFilteredList(filteredList);
        setFilterText("See All Restaurants");
    }

    const displayAllRestaurants = () => {
        setFilteredList(listOfRestaurants);
        setFilterText("See Top Rated Restaurants");
    }

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(RES_URL);
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return (
            <h1>
                Looks like you are offline. Please connect to an internet connection!
            </h1>
        );
    }

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="search-filter">
                <div className="search-btn-container">
                    <input type="text" placeholder="Restaurant Name" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                    />
                    <button onClick={() => {
                        const filteredList = listOfRestaurants.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                        setFilteredList(filteredList);
                    }}>Search</button>
                </div>
                <div className="filter-btn-container">
                    <button
                        className="filter-btn"
                        onClick={() => {
                            filterText === "See Top Rated Restaurants" ? topRatedRestaurants() : displayAllRestaurants();
                        }}>
                        {filterText}
                    </button>
                </div>
            </div>
            <div className="res-container">
                {
                    filteredList.map((restaurant) => (
                        <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><ResCard resData={restaurant} /></Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;