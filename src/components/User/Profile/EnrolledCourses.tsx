/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EnrolledCourses: React.FC<any> = ({ response: courses }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        if (currentIndex < courses.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="relative w-full flex justify-center items-center p-6">
            <button 
                onClick={prev} 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10"
                disabled={currentIndex === 0}
            >
                Prev
            </button>

            <div className="w-72">
                {courses.slice(currentIndex, currentIndex + 1).map((course: any) => (
                    <Link  to={`/course-details/${course._id}`} key={course._id} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
                        <img 
                            src={typeof course.thumbnail === 'string' ? course.thumbnail : URL.createObjectURL(course.thumbnail)} 
                            alt={course.courseName} 
                            className="w-full h-48 object-cover" 
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold mb-2">{course.courseName}</h2>
                        </div>
                    </Link>
                ))}
            </div>

            <button 
                onClick={next} 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10"
                disabled={currentIndex >= courses.length - 1}
            >
                Next
            </button>
        </div>
    );
}

export default EnrolledCourses;
