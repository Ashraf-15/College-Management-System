import React, { useEffect, useState } from 'react';
import { fetchCourses } from '../services/api';
import '../assets/styles/Courses.css';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getCourses = async () => {
            try {
                const data = await fetchCourses();
                if (Array.isArray(data)) {
                    setCourses(data);
                } else {
                    console.error('Unexpected response format:', data);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getCourses();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Courses</h1>
            <ul>
                {courses.map(course => (
                    <li key={course._id}>
                        <h2>{course.name}</h2>
                        <p>{course.details}</p>
                        <p>Credits: {course.credits}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Courses;
















// import React, { useEffect, useState } from 'react';
// import { fetchCourses } from '../services/api';

// const Courses = () => {
//     const [courses, setCourses] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const getCourses = async () => {
//             try {
//                 const data = await fetchCourses();
//                 setCourses(data);
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         getCourses();
//     }, []);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     return (
//         <div>
//             <h1>Courses</h1>
//             <ul>
//                 {courses.map(course => (
//                     <li key={course._id}>
//                         <h2>{course.name}</h2>
//                         <p>{course.details}</p>
//                         <p>Credits: {course.credits}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Courses;