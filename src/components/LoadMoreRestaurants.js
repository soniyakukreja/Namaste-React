import ShimmerCards from "./ShimmerCards"
import { useState, useEffect } from "react"

const LoadMoreRestaurants = function(props){

    const [loading,setLoading] = useState(true);

    const loadMoreRestaurants = async () => {
        // const fetchData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7163181&lng=75.8679403");
        // const json = await fetchData.json();
        // const data = json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        // console.log('...',data)
        // props.setMoreData(data);
        props.changeLoadingState(false);
      

    };

    useEffect(()=>{
        console.log("loaded");
        loadMoreRestaurants();
        
        // setLoading(false);
        // props.changeLoadingState(false);
    },[])

    return <>
    <ShimmerCards />
    </>
}

export default LoadMoreRestaurants