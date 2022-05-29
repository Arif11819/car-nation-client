import React from 'react';

const UserRow = ({ user }) => {
    const { email } = user;
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td><button class="btn btn-xs">Make Admin</button></td>
            <td><button class="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default UserRow;