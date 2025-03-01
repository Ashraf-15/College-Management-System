// filepath: /c:/Users/Lenovo/OneDrive/Desktop/intellicampus/College-Management-System/frontend/src/components/Users.js
import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../services/api';
import '../assets/styles/Users.css';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const data = await fetchUsers();
                if (Array.isArray(data)) {
                    setUsers(data);
                } else {
                    console.error('Unexpected response format:', data);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getUsers();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="users">
            <h1>User List</h1>
            <ul>
                {users.map(user => (
                    <li key={user._id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;