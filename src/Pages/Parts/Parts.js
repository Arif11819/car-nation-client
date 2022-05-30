import { useNavigate } from 'react-router-dom';
import useParts from '../../hooks/useParts';
import Part from './Part';
import './Parts.css';

const Parts = () => {
    const [parts] = useParts();
    const sliceParts = parts.slice(0, 3);
    const navigate = useNavigate();

    const handleNavigateToManageParts = () => {
        navigate('/manageparts');

    }
    return (
        <div className='my-28'>
            <h2 className='text-3xl flex justify-center items-center font-bold font-sans bg-info h-16'>Our Car Parts</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2'>
                {
                    sliceParts.map(part => <Part
                        key={part._id}
                        part={part}
                    >

                    </Part>)
                }
            </div>
            <div className='flex justify-end items-end mt-3'>
                <button onClick={() => handleNavigateToManageParts()} className='btn btn-primary'>Manage All Parts</button>
            </div>
        </div>
    );
};

export default Parts;