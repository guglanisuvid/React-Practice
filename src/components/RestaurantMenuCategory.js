import RestaurantMenuItem from "./RestaurantMenuItem";

const RestaurantMenuCategory = ({ data, showItems, setShowIndex }) => {

    const handleClick = () => {
        setShowIndex();
    };

    return (
        <div className="my-8 p-2 bg-[#ECF8E5] rounded-lg shadow-md">
            <h3
                className="text-lg font-semibold flex justify-between py-2 cursor-pointer"
                onClick={() => handleClick()}>
                <span>
                    {data?.title} ({data?.itemCards?.length})
                </span>
                <span>
                    ▽
                </span>
            </h3>
            <div>
                {
                    showItems
                    &&
                    <RestaurantMenuItem
                        key={data?.itamCards?.card?.info?.id}
                        itemData={data}
                    />

                }
            </div>
        </div>
    )
}

export default RestaurantMenuCategory;