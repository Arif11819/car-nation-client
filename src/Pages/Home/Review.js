import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiFillStar } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import useReviews from '../../hooks/useReview';


const Review = ({ review }) => {
    const { _id, feedback, name, rating } = review;
    const [reviews, setReviews] = useReviews();
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    console.log(user)

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure delete this?');

        if (proceed) {
            const url = `https://car-nation-server.up.railway.app/reviews/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remainingReview = reviews.filter(review => review._id !== id);
                    setReviews(remainingReview);
                })

        }
    }

    return (
        <div className="card w-80 h-84 bg-slate-50 shadow-xl border border-slate-200 text-slate-200">
            <div className="card-body pt-1 text-sm text-center mx-auto text-black mt-4 ml-4 mr-4 mb-4 rounded-lg flex flex-col">
                <div className='mx-auto'>
                    <img className=' rounded' src={user?.photoURL} alt="" />
                </div>
                <div className='text-center pt-2'>
                    <p className='font-bold text-sm'>{name}</p>
                </div>
                <div className='flex justify-center items-center'>
                    {(rating == 1) && <div className='flex text-amber-400'>
                        <AiFillStar></AiFillStar>
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </div>}
                    {(rating == 2) && <div className='flex text-amber-400'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </div>}
                    {(rating == 3) && <div className='flex text-amber-400'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />

                    </div>}
                    {(rating == 4) && <div className='flex text-amber-400'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />

                    </div>}
                    {(rating == 5) && <div className='flex text-amber-400'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />

                    </div>}
                </div>

                <div className='flex justify-center items-center'>
                    <h2 className=''>
                        "{feedback}"
                    </h2>
                </div>
                {admin && <div className="card-actions pt-3 mt-4 text-black flex justify-end">
                    <div className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-3 py-1 text-center"><button onClick={() => handleDelete(_id)} >Remove</button></div>
                </div>}
            </div>
        </div>
    );
};

export default Review;