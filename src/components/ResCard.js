import { IMG_URL } from "../utils/constants";

const ResCard = (props) => {

    const { resData } = props;

    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData.info;

    return (
        <div className="res-card">
            <img src={IMG_URL + cloudinaryImageId}></img>
            <h2>{name}</h2>
            <div className="res-details">
                <h3>{cuisines.join(", ")}</h3>
                <h3>{avgRating} ⭐</h3>
                <h3>{costForTwo}</h3>
            </div>
        </div>
    )
}

export default ResCard;