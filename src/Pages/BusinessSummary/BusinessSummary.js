import React, { useEffect, useState } from 'react';
import Summary from './Summary';

const BusinessSummary = () => {
    const [parts, setParts] = useState([]);
    const allItems = parts.slice(0, 3);

    useEffect(() => {
        fetch('parts.json')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div className='my-8'>
            <h2 className='text-2xl font-sans font-bold text-primary flex justify-center items-center'>Business Summary</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2'>
                {
                    allItems.map(item => <Summary
                        key={item._id}
                        item={item}
                    >

                    </Summary>)
                }
            </div>
        </div>
    );
};

export default BusinessSummary;