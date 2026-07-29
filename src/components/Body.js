import RestaurantCard from "./RestaurantCard";
import listOfRestaurant from "../utils/Mockdata";
import { useState,useEffect,useRef } from "react";
import ShimmerCards from "./ShimmerCards";
import LoadMoreRestaurants from "./LoadMoreRestaurants";

const Body = () => {
    const [resList,setResList] = useState([]);
    const [filteredData,setFilteredData] = useState([]);
    const [searchValue,setSearchValue] = useState("");
    const [loading,setLoading] = useState(true);
    const [loadMore,setLoadMore] = useState(false);
    const [page, setPage] = useState(1);
    const [counter,setCounter] = useState(1);
    const bottomRef = useRef(null);


    useEffect(() => {
        fetchData();

        // Scroll event handler
        // const handleScroll = () => {
        //     if (
        //         window.innerHeight + window.scrollY >= document.body.offsetHeight - 2
        //     ) {
        //         setLoadMore(true);
        //         console.log("User reached end of page")

  
        //     }
        // };
        // window.addEventListener('scroll', handleScroll);
        // return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        console.log('inside page effect',page)

        const observer = new IntersectionObserver(
            async (entries) => {
                        console.log('inside observer');


                if (entries[0].isIntersecting && !loading) {
                            console.log('inside condition');


                    setLoading(true);
                    let newCards = [];
                    for(let i=0;i<=10;i++){

                        newCards.push({info:{id:counter+i,name:counter+i,avgRating:'',cuisines:[],cloudinaryImageId:''}});
                        (i==10)&&  setCounter(prev=>prev+11); 
                    }

                    // setTimeout(() => {
                        
                    //      setFilteredData(prev => [...prev, ...newCards]);

                    // setPage(prev => prev + 1);
                    // setLoading(false);
                    // }, 5000);

                    setFilteredData(prev => [...prev, ...newCards]);

                    setPage(prev => prev + 1);
                    setLoading(false);

                }
            }
        );

        const currentRef = bottomRef.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };

    }, [page, loading]);
    console.log('FilteredData',counter,filteredData)
    

    const fetchData = async function(){
        const fetchData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7163181&lng=75.8679403");
        const json = await fetchData.json();
        const data = json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setResList(data);
        setFilteredData(data);
        setLoading(false);
    }


    return <div className="body-container">
        <div className="search">
            <input name="search" onChange={(e)=>{
                setSearchValue(e.target.value);
            }} value={searchValue}  />
            <button onClick={()=>{
                const searchedData = resList.filter((data)=>{
                    return data?.info?.name.toLowerCase().includes(searchValue.toLocaleLowerCase())
                })
                setFilteredData(searchedData);
            }}>Search</button>
        </div>

        <div>
            <button onClick={()=>{
                const filteredList  = resList.filter((res)=>{
                    return res.info.avgRating>4;
                })
                setFilteredData(filteredList)
            }}>Filter Restaurant with 4+ rating</button>
        </div>
        
        <div className="restaurant-card-container">
            {filteredData.length==0?(<ShimmerCards/>):(<>
            {filteredData.map((res)=>{
                return <RestaurantCard key={res?.info?.id} resData={res} />
            })}
            </>)}
            
            <div ref={bottomRef} style={{display:"flex"}}>
                {loading && <ShimmerCards /> }
            </div>
        </div>       
    </div>
}

export default Body