/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Importing icons from react-icons


interface EnrolledCourse{
    _id: string;
    thumbnail: string;
    courseName:string
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EnrolledCourses: React.FC<any> = ({ response: courses }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (containerRef.current) {
          containerRef.current.scrollLeft -= 100; // Adjust the value as needed
        }
      };
    
      const scrollRight = () => {
        if (containerRef.current) {
          containerRef.current.scrollLeft += 100; // Adjust the value as needed
        }
      };


    return (
        <div className="relative w-full flex justify-center items-center p-6">
           <button onClick={scrollLeft} className="bg-gray-200 px-3 py-3 m-2 rounded-full hover:bg-gray-200 focus:outline-none">
          <FiChevronLeft /> {/* Icon for left scroll */}
        </button>
        <div className="overflow-x-auto flex-grow" ref={containerRef} style={{ scrollBehavior: 'smooth', overflowX: 'hidden' ,overflowY: "hidden"}}>
          <div className="flex space-x-6 p-3">
            {/* Map through courses */}
            {courses.map((course: EnrolledCourse) => (
              <Link to={`/course-details/${course._id}`} key={course._id} className="block">
                <div className="bg-white rounded-lg overflow-hidden h- w-64 transition duration-300 ease-in-out transform hover:scale-105">
                  <img
                    className="w-full h-40 object-cover rounded-t-lg"
                    src={course.thumbnail}
                    alt=""
                  />
                  <div className="p-4">
                    <h5 className="mb-2 text-md font-semibold text-gray-800 font-roboto">
                      {course.courseName}
                    </h5>
                 

                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <button onClick={scrollRight} className="bg-gray-200 px-3 py-3 m-2 rounded-full hover:bg-gray-200 focus:outline-none">
          <FiChevronRight /> {/* Icon for right scroll */}
        </button>
        </div>
    );
}

export default EnrolledCourses;
