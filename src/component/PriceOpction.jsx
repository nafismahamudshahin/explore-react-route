import PropTypes from 'prop-types'
import { CiCircleCheck } from "react-icons/ci";

const PriceOpction = ({ item }) => {
    // console.log(item[0].name)

    return (
        <div>
            {
                <div className='p-6 bg-white flex h-96 flex-col text-gray-600 font-sans font-bold rounded-md'>
                    <div className='text-center'>
                        <h1 className='text-4xl'>{item.name}</h1>
                        <h2 className='text-2xl'>Price: {item.price}</h2>
                    </div>
                    <h2 className='flex-grow p-5 pl-10'>{item.features.map((featur, index) => {
                        return (
                            <div key={index} className='flex gap-1 items-center'>
                                <CiCircleCheck />
                              
                                <span className='block'>{featur}</span>
                            </div>
                        )
                    })}
                    </h2>
                    <button className='w-full bg-green-600 mt-5 rounded-lg py-2'>Buy Now</button>
                </div>
            }
        </div>
    );
};
PriceOpction.propTypes = {
    item: PropTypes.object
}
export default PriceOpction;