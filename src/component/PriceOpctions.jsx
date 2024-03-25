import { useEffect, useState } from "react";
import PriceOpction from "./PriceOpction";
import { ColorRing } from 'react-loader-spinner'
const PriceOpctions = () => {
    const [priceOpction, setPriceOpction] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('price.json')
            .then(res => res.json())
            .then(data => {
                setPriceOpction(data);

            })
            .catch(error => console.error(error));
        setLoading(false);
    }, []);
    return (
        <div>
            <div className=" flex justify-center">
                {loading && <ColorRing
                    visible={true}
                    height="180"
                    width="180"
                    ariaLabel="color-ring-loading"
                    wrapperStyle={{}}
                    wrapperClass="color-ring-wrapper"
                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                />}
            </div>
            <div className="grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-5 my-10">

                {
                    priceOpction.map((item) => {
                        console.log("items", item)
                        return (
                            <div key={item.id}>

                                <PriceOpction item={item} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default PriceOpctions;