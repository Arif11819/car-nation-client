import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const MyOrders = () => {
    const [parts, setParts] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`https://car-nation-server.up.railway.app/booking?customer=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {
                    setParts(data);
                });
        }
    }, [user])
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Parts</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Order Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        parts.map((p, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{p.parts}</td>
                            <td>{p.customerName}</td>
                            <td>{p.customer}</td>
                            <td>{p.orderQuantityValue}</td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;