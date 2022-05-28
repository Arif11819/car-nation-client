import React from 'react';

const BestServices = () => {
    return (
        <div class="card lg:card-side my-24 mx-7">
            <figure><img className='border-solid' src="https://images.unsplash.com/photo-1601411101851-ea0e07766235?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhciUyMHBhcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Album" /></figure>
            <div class="card-body mx-10 my-16">
                <h2 class="card-title text-4xl font-sans font-bold">Buy Your Best Product Here</h2>
                <p>Connect to the high-performance life. Follow us on our social networks to team up and get an inside view of our latest projects and ideas.</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default BestServices;