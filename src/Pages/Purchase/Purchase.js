import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import usePurchase from '../../hooks/usePurchase';


const Purchase = () => {
    const { partsId } = useParams();
    const [parts] = usePurchase(partsId);
    const [user] = useAuthState(auth);

    const handlePlaceOrder = event => {
        event.preventDefault();

    }

    return (
        <div className='my-6'>
            <div className="card bg-base-100 shadow-xl bg-gradient-to-r from-cyan-500 to-blue-500">
                <figure className="px-10 pt-10">
                    <img src={parts.img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold">{parts.name}</h2>
                    <p>{parts.description}</p>
                    <h2 className='text-1xl font-bold'>Minimum Order Quantity: {parts.minimum_order_quantity}</h2>
                    <h2 className='text-1xl font-bold'>Available Quantity: {parts.available_quantity}</h2>
                    <h2 className='text-1xl font-bold'>Price: ${parts.price}</h2>
                </div>
            </div>
            <form onSubmit={handlePlaceOrder} className='flex flex-col items-center mt-20'>
                <h2 className='text-center text-5xl text-red-500 my-4 font-sans font-bold'>Please Order</h2>
                <input type="text" disabled value={user?.displayName} className="input input-bordered input-primary w-2/6 block mt-2" />
                <input type="text" disabled value={user?.email} className="input input-bordered input-primary w-2/6 block mt-2" />
                <input type="text" className="input input-bordered input-primary w-2/6 block mt-2" />
                <input type="text" className="input input-bordered input-primary w-2/6 block mt-2" />
                <button className='btn btn-primary mt-3'>Order Now</button>
            </form>
        </div>
    );
};

export default Purchase;