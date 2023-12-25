import { IMG_URL } from "../utils/constants";

const ResCard = (props) => {

    const { resData } = props;

    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData.info;

    return (
        <div className="flex flex-col w-60 h-full p-2 border-solid border-2 border-green-600 rounded-lg overflow-hidden text-lime-800 shadow-2xl">
            <img className="h-1/2 w-full" src={IMG_URL + cloudinaryImageId}></img>
            <h2 className="text-2xl font-bold text-center my-2">{name}</h2>
            <div className="flex flex-1 flex-col justify-around my-2">
                <h4>{cuisines.join(", ")}</h4>
                <div className="flex justify-between">
                    <h4>{avgRating} ⭐</h4>
                    <h4>{costForTwo}</h4>
                </div>
            </div>
        </div>
    )
}

export default ResCard;