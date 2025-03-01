
import React, { useState, useEffect } from 'react';
import { fetchDepartments } from '../services/api';
import '../assets/styles/Departments.css';

const Departments = () => {
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        const getDepartments = async () => {
            try {
                const response = await fetchDepartments();
                if (Array.isArray(response)) {
                    setDepartments(response);
                } else {
                    console.error('Unexpected response format:', response);
                }
            } catch (error) {
                console.error('Error fetching departments:', error);
            }
        };

        getDepartments();
    }, []);

    return (
        <div>
            <h1>Departments</h1>
            <ul>
                {departments.map((department) => (
                    <li key={department.id}>{department.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Departments;











// import React, { useEffect, useState } from 'react';
// import { fetchDepartments } from '../services/api';

// const Departments = () => {
//     const [departments, setDepartments] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const getDepartments = async () => {
//             try {
//                 const data = await fetchDepartments();
//                 setDepartments(data);
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         getDepartments();
//     }, []);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     return (
//         <div>
//             <h1>Departments</h1>
//             <ul>
//                 {departments.map(department => (
//                     <li key={department._id}>{department.name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Departments;