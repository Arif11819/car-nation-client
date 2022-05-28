
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiagramProject, faFlag, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

const BusinessSummary = () => {

    return (
        <div className='my-32'>
            <h2 className='text-5xl font-sans font-bold flex justify-center items-center'>Business Summary</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 my-20 mx-12'>
                <div className='mx-12'>
                    <p><FontAwesomeIcon className='w-72 h-40' icon={faFlag}></FontAwesomeIcon></p>
                    <h2 className='text-5xl mt-8 px-8'>100+</h2>
                    <p className='text-5xl mt-4 text-primary'>Countries</p>
                </div>
                <div>
                    <p><FontAwesomeIcon className='w-72 h-40' icon={faDiagramProject}></FontAwesomeIcon></p>
                    <h2 className='text-5xl mt-8 px-8'>10000K+</h2>
                    <p className='text-5xl mt-4 text-primary'>Product Sell</p>
                </div>
                <div>
                    <p><FontAwesomeIcon className='w-72 h-40' icon={faPeopleGroup}></FontAwesomeIcon></p>
                    <h2 className='text-5xl mt-8 px-24'>6k+</h2>
                    <p className='text-5xl mt-4 text-primary'>Happy Customer</p>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;