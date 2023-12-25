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
        <div className="text-lime-800 px-6 my-8">
            <h1 className="text-4xl font-bold">{name}</h1>
            <h5 className="text-sm">{locality}, {areaName}, {city}</h5>
            <h5 className="text-sm">{cuisines.join(", ")}</h5>
            <h2 className="text-4xl font-bold text-center my-4">Menu</h2>
            <ul className="w-[80%] mx-auto border-2 border-lime-800 rounded-2xl overflow-hidden">
                {itemCards.map(item => (
                    <div>
                        <li className="w-full flex gap-10 my-4" key={item.card.info.id}>
                            <span className="w-1/2 text-center">
                                {item.card.info.name}
                            </span>
                            <span className="w-1/2 text-center">
                                ₹{item.card.info.price / 100 || item.card.info.variantsV2.pricingModels[0].price / 100}
                            </span>
                        </li>
                        <hr className="w-[96%] mx-auto border-lime-200" />
                    </div>
                ))}
            </ul>
        </div >
    )
}

export default RestaurantMenu;