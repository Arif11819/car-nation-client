import { useParams } from 'react-router-dom';
import usePurchase from '../../hooks/usePurchase';
import BookingModal from './BookingModal';


const Purchase = () => {
    const { partsId } = useParams();
    const [parts, setParts] = usePurchase(partsId);

    return (
        <div className='my-6'>
            <div className="card bg-base-100 shadow-xl bg-gradient-to-r from-cyan-500 to-blue-500">
                <figure className="px-10 pt-10">
                    <img src={parts.img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold">{parts.name}</h2>
                    <p>{parts.description}</p>
                    <h2 className='text-1xl font-bold'>Minimum Order Quantity: {parts.minimum_order_quantity}</h2>
                    <h2 id='available-quantity' className='text-1xl font-bold'>Available Quantity: {parts.available_quantity}</h2>
                    <h2 className='text-1xl font-bold'>Price: ${parts.price}</h2>
                    <div>
                        <label for="booking-modal"
                            onClick={() => setParts(parts)}
                            className="btn btn-primary flex justify-center items-center">Order Now
                        </label>
                    </div>
                </div>
                {parts && <BookingModal parts={parts}></BookingModal>}
            </div>
        </div>
    );
};

export default Purchase;