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
        <div className='w-1/3 mx-auto mt-16'>
            <h2 className='my-4 text-center font-bold text-4xl pb-5'>Add New Car Parts</h2>
            <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                <input className='my-1 border-2 border-neutral-800 h-[40px]' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='my-1 border-2 border-neutral-800 h-[40px]' placeholder='Photo URL' type="text" {...register("img")} />
                <textarea className='my-1 border-2 border-neutral-800 h-[170px]' placeholder='Description' {...register("description")} />
                <input className='my-1 border-2 border-neutral-800 h-[40px]' placeholder='Minimum Order Quantity' type="number" {...register("minimum_order_quantity")} />
                <input className='my-1 border-2 border-neutral-800 h-[40px]' placeholder='Available Quantity' type="number" {...register("available_quantity")} />
                <input className='my-1 border-2 border-neutral-800 h-[40px]' placeholder='Price' type="number" {...register("price")} />
                <div className='text-center mt-4'>
                    <input className='btn bg-rose-600 w-1/2' type="submit" value="Add Product" />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;