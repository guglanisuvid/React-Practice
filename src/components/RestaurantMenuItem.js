const RestaurantMenuItem = ({ itemData }) => {

    const { name, price, defaultPrice, description } = itemData?.card?.info;

    return (
        <div className="pt-4">
            <div className="flex justify-between items-center gap-10">
                <div className="w-[88%]">
                    <h4>{name}</h4>
                    <h4>₹{price / 100 || defaultPrice / 100}</h4>
                    <h4 className="text-[12px] mt-2">{description}</h4>
                </div>
                <div className="flex justify-around items-center flex-1">
                    <span className="bg-rose-600 text-lime-50 w-full p-1 text-center rounded-l-lg cursor-pointer">-</span>
                    <span className="bg-lime-50 w-full p-1 text-center font-semibold">0</span>
                    <span className="bg-green-600 text-lime-50 w-full p-1 text-center rounded-r-lg cursor-pointer">+</span>
                </div>
            </div>
            <hr className="mt-4 border-lime-800" />
        </div>
    )
}

export default RestaurantMenuItem;