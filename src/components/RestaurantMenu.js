import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, locality, areaName, city } = resInfo?.cards[0]?.card?.card?.info;

    const itemCards =
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards ||
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards ||
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0]?.itemCards ||
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0]?.itemCards;

    return (
        <div>
            <h1>{name}</h1>
            <h5>{locality}, {areaName}, {city}</h5>
            <h5>{cuisines.join(", ")}</h5>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item => (
                    <li key={item.card.info.id}>{item.card.info.name} - ₹{item.card.info.price / 100 || item.card.info.variantsV2.pricingModels[0].price / 100}</li>
                ))}
            </ul>
        </div >
    )
}

export default RestaurantMenu;