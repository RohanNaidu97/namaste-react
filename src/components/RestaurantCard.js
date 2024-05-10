import { RES_LOGO } from "../utlis/constants";

const RestaurantCard = (props) => {
    const { resData } = props;

    const { cloudinaryImageId, name, cuisines, sla, avgRating } = resData.info;

    return(
        <div className="res-card bg-amber-400 ">
            <img className = "res-logo w-55 h-50 py-10" alt="res logo" 
            src={ RES_LOGO + cloudinaryImageId} />
            <h3> { name } </h3>
            <h4> { cuisines.join(", ") } </h4>
            <h4> { sla.slaString } </h4>
            <h4> { avgRating } ⭐</h4>
        </div>
    );
}   


export default RestaurantCard;