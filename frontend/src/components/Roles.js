import React, { useEffect, useState } from 'react';
import { fetchRoles } from '../services/api';
import '../assets/styles/Roles.css';

const Roles = () => {
    const [roles, setRoles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getRoles = async () => {
            try {
                const data = await fetchRoles();
                if (Array.isArray(data)) {
                    setRoles(data);
                } else {
                    console.error('Unexpected response format:', data);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getRoles();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Roles</h1>
            <ul>
                {roles.map(role => (
                    <li key={role._id}>{role.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Roles;










// import React, { useEffect, useState } from 'react';
// import { fetchRoles } from '../services/api';

// const Roles = () => {
//     const [roles, setRoles] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const getRoles = async () => {
//             try {
//                 const data = await fetchRoles();
//                 setRoles(data);
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         getRoles();
//     }, []);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     return (
//         <div>
//             <h1>Roles</h1>
//             <ul>
//                 {roles.map(role => (
//                     <li key={role._id}>{role.name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Roles;