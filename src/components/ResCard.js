import { IMG_URL } from "../utils/constants";

const ResCard = (props) => {

    const { resData } = props;

    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData.info;

    return (
        <div className="res-card">
            <img src={IMG_URL + cloudinaryImageId}></img>
            <h2>{name}</h2>
            <div className="res-details">
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating} ⭐</h4>
                <h4>{costForTwo}</h4>
            </div>
        </div>
    )
}

export default ResCard;