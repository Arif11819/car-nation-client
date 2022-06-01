import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {
        const url = `https://secure-fjord-78595.herokuapp.com/parts`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
        navigate('/manageparts');
    };
    return (
        <div className='w-1/2 mx-80'>
            <h2 className='my-4 text-center text-primary'>Add New Inventory</h2>
            <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                <input className='my-1 border-2 border-neutral-800' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='my-1 border-2 border-neutral-800' placeholder='Photo URL' type="text" {...register("img")} />
                <textarea className='my-1 border-2 border-neutral-800' placeholder='Description' {...register("description")} />
                <input className='my-1 border-2 border-neutral-800' placeholder='Minimum Order Quantity' type="number" {...register("minimum_order_quantity")} />
                <input className='my-1 border-2 border-neutral-800' placeholder='Available Quantity' type="number" {...register("available_quantity")} />
                <input className='my-1 border-2 border-neutral-800' placeholder='Price' type="number" {...register("price")} />
                <input className='btn btn-danger' type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;