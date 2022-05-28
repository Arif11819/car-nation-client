import React from 'react';

const Summary = ({ item }) => {
    const { name, img, description } = item;
    return (
        <div className="card bg-base-100 flex shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Summary;