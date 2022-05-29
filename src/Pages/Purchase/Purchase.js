import React from 'react';
import { useParams } from 'react-router-dom';
import usePurchase from '../../hooks/usePurchase';


const Purchase = () => {
    const { partsId } = useParams();
    const [parts] = usePurchase(partsId);

    return (
        <div>
            <div class="card bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={parts.img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title font-bold">{parts.name}</h2>
                    <p>{parts.description}</p>
                    <h2 className='text-1xl font-bold'>Minimum Order Quantity: {parts.minimum_order_quantity}</h2>
                    <h2 className='text-1xl font-bold'>Available Quantity: {parts.available_quantity}</h2>
                    <h2 className='text-1xl font-bold'>Price: ${parts.price}</h2>
                </div>
            </div>
            <div className='flex flex-col items-center mt-20'>
                <input type="text" className="input input-bordered input-primary w-2/6 block mt-2" />
                <input type="text" className="input input-bordered input-primary w-2/6 block mt-2" />
                <input type="text" className="input input-bordered input-primary w-2/6 block mt-2" />
                <input type="text" className="input input-bordered input-primary w-2/6 block mt-2" />
                <button className='btn btn-primary mt-3'>Order Now</button>
            </div>
        </div>
    );
};

export default Purchase;