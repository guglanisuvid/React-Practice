import ResCard, { withPromotedLabel } from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RES_URL } from "../utils/constants";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const [filteredList, setFilteredList] = useState([]);

    const [searchText, setSearchText] = useState("");

    const [filterText, setFilterText] = useState("See Top Rated Restaurants");

    const PromotedResCard = withPromotedLabel(ResCard);

    const onlineStatus = useOnlineStatus();

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(RES_URL);

        const json = await data.json();

        setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const topRatedRestaurants = () => {
        const filteredList = listOfRestaurants.filter(
            res => res.info.avgRating > 4.4
        );
        setFilteredList(filteredList);
        setFilterText("See All Restaurants");
    }

    const displayAllRestaurants = () => {
        setFilteredList(listOfRestaurants);
        setFilterText("See Top Rated Restaurants");
    }

    if (onlineStatus === false) {
        return (
            <h1>
                Looks like you are offline. Please connect to an internet connection!
            </h1>
        );
    }

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="border-solid mt-8 px-6">
            <div className="flex justify-evenly">
                <div>
                    <input className="px-4 py-2 rounded-lg bg-green-100 placeholder:text-lime-800 text-lime-800 outline-none shadow-lg" type="text" placeholder="Restaurant Name" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                    />
                    <button className="px-4 py-2 mx-2 rounded-lg bg-green-600 text-lime-50 shadow-lg" onClick={() => {
                        const filteredList = listOfRestaurants.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                        setFilteredList(filteredList);
                    }}>Search</button>
                </div>
                <button
                    className="px-4 py-2 rounded-lg bg-green-600 text-lime-50  shadow-lg"
                    onClick={() => {
                        filterText === "See Top Rated Restaurants" ? topRatedRestaurants() : displayAllRestaurants();
                    }}>
                    {filterText}
                </button>
            </div>
            <div className="grid grid-cols-5 justify-items-center gap-8 my-8">
                {
                    filteredList.map((restaurant) => (
                        <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                            {
                                (restaurant.info.avgRating > 4.2 && restaurant.info.avgRating < 4.5) ? (
                                    <PromotedResCard resData={restaurant} />
                                ) : (
                                    <ResCard resData={restaurant} />
                                )
                            }
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;