import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const onSubmit = data => {
        const url = `https://secure-fjord-78595.herokuapp.com/reviews`;
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
                reset();
                toast.success("Thank You Sir For Adding New Review!!")
            })
        navigate('/review');
    };
    return (
        <div className='mt-20'>
            <h1 className='text-3xl text-center font-bold mb-10'>Give Feedback Of Our System</h1>
            <form className='flex flex-col mb-10' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex justify-center items-center'>
                    <label className="flex flex-col justify-start items-start">
                        <span className="font-bold my-2">Name *</span>
                        <input
                            // value={user.fullName}
                            type="text"
                            value={user?.displayName}
                            className="input input-bordered w-96"
                            required
                            {...register("name")}
                        />
                    </label>
                </div>
                <div className='flex justify-center items-center'>
                    <label className="flex flex-col justify-start items-start">
                        <span className="font-bold my-2">Rating *</span>
                        <select
                            type='number'
                            placeholder="Give Rating"
                            className="input input-bordered w-96"
                            required
                            {...register("rating")}
                        >
                            <option value="">Select Your Rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>

                </div>
                <div className='flex flex-col justify-center items-center'>
                    <label className="flex flex-col justify-start items-start">
                        <span className="font-bold my-2">Review *</span>
                        <textarea
                            type='text'
                            placeholder="Type Review"
                            className="input input-bordered w-96 h-[150px]"
                            required
                            {...register("feedback")}
                        />
                    </label>
                    <input className='text-white bg-rose-600 font-medium rounded-lg text-sm px-16 py-3 mt-2 text-center cursor-pointer' type="submit" value="Feedback" />
                </div>

                <ToastContainer className="w-20 ml-48 pt-4" />
            </form>
        </div>
    );
};

export default AddReview;