import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuCategory from "./RestaurantMenuCategory";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, locality, areaName, city } = resInfo?.cards[0]?.card?.card?.info;

    const menuCategory =
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            category => category?.card?.card?.["@type"].includes(".ItemCategory")
        );

    return (
        <div className="text-lime-800 px-6 my-8">
            <h1 className="text-4xl font-bold my-2">{name}</h1>
            <h5 className="text-sm my-2">{locality}, {areaName}, {city}</h5>
            <h5 className="text-sm my-2">{cuisines.join(", ")}</h5>
            <h2 className="text-4xl font-bold text-center my-4">Menu</h2>
            <div className="w-[72%] mx-auto">
                {
                    menuCategory.map((category) => (
                        <RestaurantMenuCategory key={category.card.card.title} data={category} />
                    ))
                }
            </div>
        </div >
    )
}

export default RestaurantMenu;