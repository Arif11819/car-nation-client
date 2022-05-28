import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {
    const { _id, name, img, description, minimum_order_quantity, available_quantity, price } = part;
    const navigate = useNavigate();

    const handleNavigateToPurchase = () => {
        navigate('/purchase');
    }
    return (
        <div class="card bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title font-bold">{_id}.  {name}</h2>
                <p>{description}</p>
                <h2 className='text-1xl font-bold'>Minimum Order Quantity: {minimum_order_quantity}</h2>
                <h2 className='text-1xl font-bold'>Available Quantity: {available_quantity}</h2>
                <h2 className='text-1xl font-bold'>Price: ${price}</h2>
                <div>
                    <button onClick={() => handleNavigateToPurchase()} class="btn btn-primary">Purchase Now</button>
                </div>
            </div>
        </div>
    );
};

export default Part;