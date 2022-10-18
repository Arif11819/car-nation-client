
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiagramProject, faFlag, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

const BusinessSummary = () => {

    return (
        <div className='my-48'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 my-20 lg:mx-32 mx-0'>
                <div className='lg:px-16 pb-10 lg:pb-0 flex flex-col justify-center items-center'>
                    <p className='text-info'><FontAwesomeIcon className='w-32 h-20' icon={faFlag}></FontAwesomeIcon></p>
                    <h2 className='lg:text-3xl text-3xl  mt-8 text-center'>100+</h2>
                    <p className='lg:text-3xl text-3xl mt-4 font-bold text-center'>Countries</p>
                </div>
                <div className='pb-10 lg:pb-0 flex flex-col justify-center items-center'>
                    <p className='text-info'><FontAwesomeIcon className='w-32 h-20' icon={faDiagramProject}></FontAwesomeIcon></p>
                    <h2 className='lg:text-3xl text-3xl text-center mt-8 px-8'>10000K+</h2>
                    <p className='lg:text-3xl text-3xl text-center mt-4 font-bold'>Product Sell</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-info'><FontAwesomeIcon className='w-32 h-20' icon={faPeopleGroup}></FontAwesomeIcon></p>
                    <h2 className='lg:text-3xl text-3xl mt-8 text-center px-24'>6k+</h2>
                    <p className='lg:text-3xl text-3xl  mt-4 text-center font-bold'>Happy Customer</p>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;