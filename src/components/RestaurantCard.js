import { RES_LOGO } from "../utlis/constants";

const RestaurantCard = (props) => {
    const { resData } = props;

    const { cloudinaryImageId, name, cuisines, sla, avgRating } = resData.info;

    return(
        <div className="res-card">
            <img id = "res-logo" alt="res logo" 
            src={ RES_LOGO + cloudinaryImageId} />
            <h3> { name } </h3>
            <h4> { cuisines.join(", ") } </h4>
            <h4> { sla.deliveryTime } </h4>
            <h4> { avgRating } </h4>
        </div>
    );
}   


export default RestaurantCard;