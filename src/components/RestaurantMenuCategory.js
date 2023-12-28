import RestaurantMenuItem from "./RestaurantMenuItem";

const RestaurantMenuCategory = ({ data, showItems, setShowIndex }) => {

    const handleClick = () => {
        setShowIndex();
    };

    return (
        <div className="my-8 p-2 bg-[#ECF8E5] rounded-lg shadow-md">
            <h3 className="text-lg font-semibold flex justify-between py-2 cursor-pointer" onClick={() => handleClick()}>
                <span>
                    {data?.title} ({data?.itemCards?.length})
                </span>
                <span>
                    ▽
                </span>
            </h3>
            <div>
                {
                    showItems && (data?.itemCards?.map((items) => (
                        <RestaurantMenuItem
                            key={items?.card?.info?.id}
                            itemData={items}
                        />
                    )))
                }
            </div>
        </div>
    )
}

export default RestaurantMenuCategory;