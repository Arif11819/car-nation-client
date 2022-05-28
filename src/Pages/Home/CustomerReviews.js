import React from 'react';
import CustomerReview from './CustomerReview';

const CustomerReviews = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Cattrina',
            location: 'california',
            reviews: 'This company provide a beautiful services and their product are very good',
            img: "https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlJTIwc21hbGwlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            _id: 2,
            name: 'Donald Trump',
            location: 'London',
            reviews: 'This company provide a beautiful services and their product are very good',
            img: "https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZSUyMGF0JTIwd29ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            _id: 3,
            name: 'Ahatasam',
            location: 'Dhaka',
            reviews: 'This company provide a beautiful services and their product are very good',
            img: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBlb3BsZSUyMGF0JTIwd29ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500"
        }
    ];
    return (
        <div className='my-28'>
            <h2 className='text-5xl text-black flex justify-center items-center font-bold font-sans'>See What Our Customer Says</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <CustomerReview
                        key={review._id}
                        review={review}
                    >

                    </CustomerReview>)
                }
            </div>
        </div>
    );
};

export default CustomerReviews;