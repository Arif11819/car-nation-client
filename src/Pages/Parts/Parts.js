import React, { useEffect, useState } from 'react';
import Part from './Part';
import './Parts.css';

const Parts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/parts')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div className='my-28'>
            <h2 className='text-3xl text-violet-700 flex justify-center items-center font-bold font-sans'>Our Car Parts</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2'>
                {
                    parts.map(part => <Part
                        key={part._id}
                        part={part}
                    >

                    </Part>)
                }
            </div>
        </div>
    );
};

export default Parts;