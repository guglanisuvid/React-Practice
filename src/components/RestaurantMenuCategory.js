import { useState } from "react";
import RestaurantMenuItem from "./RestaurantMenuItem";

const RestaurantMenuCategory = ({ data }) => {

    const { title } = data?.card?.card;

    const [showItems, setShowItems] = useState(null);

    const showHideMenuItems = () => {
        showItems ? setShowItems(false) : setShowItems(true);
    }

    return (
        <div className="my-8 p-2 bg-[#ECF8E5] rounded-lg shadow-md">
            <h3 className="text-lg font-semibold flex justify-between py-2 cursor-pointer" onClick={() => showHideMenuItems()}>
                <span>
                    {title} ({data.card.card.itemCards.length})
                </span>
                <span>
                    ▽
                </span>
            </h3>
            <div>
                {
                    showItems && (data?.card?.card?.itemCards?.map((items) => (
                        <RestaurantMenuItem key={items.card.info.id} itemData={items} />
                    )))
                }
            </div>
        </div>
    )
}

export default RestaurantMenuCategory;