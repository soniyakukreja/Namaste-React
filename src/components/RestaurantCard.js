import { CDN_URL,SWIGGY_IMAGES_URL } from "../utils/constants";
const RestaurantCard = (props)=>{
const {resData} = props;
    // console.log('resData',resData)
    const {id,name,avgRating,cuisines,cloudinaryImageId} = resData?.info;
    return <div className="res-card" key={id}>
        <img src={SWIGGY_IMAGES_URL+cloudinaryImageId} style={{width:'100%'}} />
        <h3 className="name">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h1>{avgRating} *</h1>
    </div>
}

export default RestaurantCard