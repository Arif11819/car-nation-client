import React from 'react';
import { useNavigate } from 'react-router-dom';
import useParts from '../../hooks/useParts';

const ManagePart = ({ part }) => {
    const { _id, name, img, description, minimum_order_quantity, available_quantity, price } = part;

    const [parts, setParts] = useParts();

    const navigate = useNavigate();

    const handleNavigateToPurchase = (id) => {
        navigate(`/parts/${id}`);
    };

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure delete this?');
        if (proceed) {
            const url = `https://secure-fjord-78595.herokuapp.com/parts/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remainingParts = parts.filter(part => part._id !== id);
                    setParts(remainingParts);
                })
        }
    }

    return (
        <div className="card bg-base-100 shadow-xl bg-gradient-to-r from-cyan-500 to-blue-500">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold">{name}</h2>
                <p>{description}</p>
                <h2 className='text-1xl font-bold'>Minimum Order Quantity: {minimum_order_quantity}</h2>
                <h2 className='text-1xl font-bold'>Available Quantity: {available_quantity}</h2>
                <h2 className='text-1xl font-bold'>Price: ${price}</h2>
                <div>
                    <button onClick={() => handleNavigateToPurchase(_id)} className="btn btn-primary">Purchase Now</button>
                </div>
                <button onClick={() => handleDelete(part._id)} className='btn btn-danger'>Delete Product</button>
            </div>
        </div>
    );
};

export default ManagePart;