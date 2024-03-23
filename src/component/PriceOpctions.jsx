import { useEffect, useState } from "react";
import PriceOpction from "./PriceOpction";

const PriceOpctions = () => {
    const [priceOpction , setPriceOpction] = useState([]);
    useEffect(()=>{
        fetch('price.json')
        .then(res => res.json())
        .then(data =>setPriceOpction(data)) 
        .catch(error=>console.error(error));
    },[]);
    return (
        <div className="grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-5 my-10">
            {
                priceOpction.map((item)=>{
                    console.log("items",item)
                    return(
                        <PriceOpction key={item.id} item={item}/>            
                    )
                })
            }
        </div>
    );
};

export default PriceOpctions;