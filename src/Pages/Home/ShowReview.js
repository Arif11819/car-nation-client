import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReview';
import Review from './Review';
import { BsArrowRight } from 'react-icons/bs';



const ShowReview = () => {
    const [reviews] = useReviews();
    const navigate = useNavigate();
    const handleNavigateToAddReview = () => {
        navigate('/dashboard/addreview')
    }
    return (
        <div>
            <p className='flex items-center justify-center mt-20 gap-4'><h1 className='lg:text-4xl text-2xl font-bold text-center'>See What Our Customer Says </h1> <h2 className='pt-3 font-bold lg:text-4xl text-2xl text-rose-600'><BsArrowRight></BsArrowRight></h2></p>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 lg:px-32 px-8 mt-24 mb-6'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
            <div className='text-center mb-20'>
                <button onClick={handleNavigateToAddReview} className='text-white bg-rose-600 font-medium rounded-lg text-sm px-16 py-3 mt-2 text-center cursor-pointer'>Add a Review</button>
            </div>
        </div>
    );
};

export default ShowReview;