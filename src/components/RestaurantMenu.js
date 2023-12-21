import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId);

        const json = await data.json();

        setResInfo(json.data);
    }

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, locality, areaName, city } = resInfo?.cards[0]?.card?.card?.info;

    // const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0])

    const itemCards =
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards ||
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0]?.itemCards;

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