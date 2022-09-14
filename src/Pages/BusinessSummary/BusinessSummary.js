
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiagramProject, faFlag, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

const BusinessSummary = () => {

    return (
        <div className='my-32'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 my-20 mx-12'>
                <div className='px-12'>
                    <p><FontAwesomeIcon className='w-72 h-40' icon={faFlag}></FontAwesomeIcon></p>
                    <h2 className='text-5xl mt-8 px-8'>100+</h2>
                    <p className='text-5xl mt-4 font-bold'>Countries</p>
                </div>
                <div>
                    <p><FontAwesomeIcon className='w-72 h-40' icon={faDiagramProject}></FontAwesomeIcon></p>
                    <h2 className='text-5xl mt-8 px-8'>10000K+</h2>
                    <p className='text-5xl mt-4 font-bold'>Product Sell</p>
                </div>
                <div>
                    <p><FontAwesomeIcon className='w-72 h-40' icon={faPeopleGroup}></FontAwesomeIcon></p>
                    <h2 className='text-5xl mt-8 px-24'>6k+</h2>
                    <p className='text-5xl mt-4 font-bold'>Happy Customer</p>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;