import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    const { data: users, isLoading } = useQuery('users', () => fetch('https://secure-fjord-78595.herokuapp.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl">All Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Delete SomeOne</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow
                                index={index}
                                key={user._id}
                                user={user}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;