
import './Parts.css';
import { useNavigate } from 'react-router-dom';
import { AiOutlineStar } from 'react-icons/ai';

const Parts = () => {
    const navigate = useNavigate();
    const handleNavigateTo = () => {
        navigate('/manageparts');
    }
    return (
        <div className='flex mt-32 grid lg:grid-cols-4 grid-cols-1'>
            <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000" className='bg-red-500 w-84 h-[301px]'>
                <div className='pt-10 pl-12 font-bold'>
                    <h2 className='pb-3 text-white'>USED CAR / BRAND NEW</h2>
                    <h1 className='lg:text-3xl text-2xl pb-4 text-white'>Advanced Vehicle Repair Service</h1>
                    <p className='flex pb-4 text-white'><AiOutlineStar></AiOutlineStar><AiOutlineStar></AiOutlineStar><AiOutlineStar></AiOutlineStar><AiOutlineStar></AiOutlineStar><AiOutlineStar></AiOutlineStar></p>
                    <p className='pb-4 text-3xl text-white'>$23500</p>
                    <button onClick={handleNavigateTo} className='btn bg-white text-rose-600'>Buy Now</button>
                </div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1000">
                <img src="https://i.ibb.co/pfvRfPM/best-services-img01.jpg" alt="" />
            </div>
            <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000" className='bg-black w-84 h-[301px]'>
                <div className='pt-10 pl-12 font-bold'>
                    <h2 className='pb-3 text-white'>ENGINE / <span className='text-rose-600'>BRAND NEW</span></h2>
                    <h1 className='lg:text-3xl text-2xl pb-4 text-white'>Servicing 5 Years Guarantee</h1>
                    <p className='flex pb-4 text-rose-600'><AiOutlineStar></AiOutlineStar><AiOutlineStar></AiOutlineStar><AiOutlineStar></AiOutlineStar><AiOutlineStar></AiOutlineStar><AiOutlineStar></AiOutlineStar></p>
                    <p className='pb-4 text-3xl text-rose-600'>$23500</p>
                    <button onClick={handleNavigateTo} className='btn bg-white text-rose-600'>Buy Now</button>
                </div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1000">
                <img src="https://i.ibb.co/VWwywZF/best-services-img02.jpg" alt="" />
            </div>
        </div>
    );
};

export default Parts;