import { useDispatch } from "react-redux";
import { addItem, removeLastItem } from "../utils/cartSlice";

const RestaurantMenuItem = ({ itemData }) => {

    const dispatch = useDispatch();

    const handleAddItem = (itemInfo) => {
        dispatch(addItem(itemInfo));
    }

    const handleRemoveItem = () => {
        dispatch(removeLastItem());
    }

    console.log(itemData);

    return (
        itemData?.itemCards.map((item) => (
            <div className="pt-4">
                <div className="flex justify-between items-center gap-10">
                    <div className="w-[88%]">
                        <h4>{item?.card?.info?.name}</h4>
                        <h4>₹{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</h4>
                        <h4 className="text-[12px] mt-2">{item?.card?.info?.description}</h4>
                    </div>
                    <div className="flex justify-around items-center flex-1">
                        <span
                            className="bg-rose-600 text-lime-50 w-full p-1 text-center rounded-l-lg cursor-pointer"
                            onClick={handleRemoveItem}>
                            -
                        </span>
                        <span
                            className="bg-lime-50 w-full p-1 text-center font-semibold">
                            0
                        </span>
                        <span
                            className="bg-green-600 text-lime-50 w-full p-1 text-center rounded-r-lg cursor-pointer"
                            onClick={() => handleAddItem(item?.card?.info)}>
                            +
                        </span>
                    </div>
                </div>
                <hr className="mt-4 border-lime-800" />
            </div>
        ))
    )
}

export default RestaurantMenuItem;