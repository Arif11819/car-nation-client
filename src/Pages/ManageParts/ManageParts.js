import React from 'react';
import useParts from '../../hooks/useParts';
import ManagePart from './ManagePart';

const ManageParts = () => {
    const [parts] = useParts();
    return (
        <div className='my-28'>
            <h2 className='text-3xl text-violet-700 flex justify-center items-center font-bold font-sans'>Our All Car Parts</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2'>
                {
                    parts.map(part => <ManagePart
                        key={part._id}
                        part={part}
                    >

                    </ManagePart>)
                }
            </div>
        </div>
    );
};

export default ManageParts;