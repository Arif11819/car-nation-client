import React from 'react';

const CustomerReview = ({ review }) => {
    const { name, location, reviews, img } = review;
    return (
        <div className="card lg:max-w-96 bg-base-100 shadow-xl my-20">
            <div className="card-body">
                <p>{reviews}</p>
                <div className='flex items-center py-6'>
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div className='px-5'>
                        <h4 className='text-3xl'>{name}</h4>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;