
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const BookingModal = ({ parts }) => {
    const { _id, name, available_quantity, minimum_order_quantity } = parts;
    const [user] = useAuthState(auth);

    const handleOrderQuantity = event => {
        event.preventDefault();

        const availableQuantity = document.getElementById('available');
        const availableQuantityValue = parseInt(availableQuantity.value)

        const minimumOderQuantity = document.getElementById('minimum-quantity');
        const minimumOderQuantityValue = parseInt(minimumOderQuantity.value);

        const orderQuantity = document.getElementById('order-quantity');
        const orderQuantityValue = parseInt(orderQuantity.value);

        if (orderQuantityValue <= availableQuantityValue && orderQuantityValue >= minimumOderQuantityValue) {
            toast("Your Order Place Successfully");
        }
        else {
            toast.error('Please Order Valid Quantity');
            return;
        }

        const booking = {
            partsId: _id,
            parts: name,
            customerName: user.displayName,
            customer: user.email,
            orderQuantityValue
        }

        fetch('https://secure-fjord-78595.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-3xl">Booking for: {name}</h3>
                    <form onSubmit={handleOrderQuantity}
                        className='flex flex-col items-center mt-6'>
                        <h2 className='text-center text-5xl text-red-500 mb-5 font-sans font-bold'>Please Order</h2>
                        <input type="text" disabled value={user?.displayName} className="input input-bordered input-primary w-2/6 block mt-2" />
                        <input type="text" disabled value={user?.email} className="input input-bordered input-primary w-2/6 block mt-2" /> <br />

                        <p className='text-primary mb-2 font-sans font-bold'>Available Quantity:</p>
                        <input type="text" id='available' disabled value={available_quantity} className="input input-bordered input-primary w-2/6 block mt-2" />

                        <p className='text-primary mb-2 font-sans font-bold'>Minimum Order Quantity:</p>
                        <input type="text" id='minimum-quantity' disabled value={minimum_order_quantity} className="input input-bordered input-primary w-2/6 block mt-2" /> <br />

                        <p className='text-primary mb-2 font-sans font-bold'>Order Quantity:</p>
                        <input type="number" id='order-quantity' className="input input-bordered input-primary w-2/6 block mt-2" />
                        <button className='btn btn-primary mt-3'>Order Now</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;