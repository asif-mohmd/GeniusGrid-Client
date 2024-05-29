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
        if (window.innerWidth < 768) {
          containerRef.current.scrollLeft -= 280; 
        } else {
          containerRef.current.scrollLeft -= 300; 
        }
      }
    };
  
    const scrollRight = () => {
      if (containerRef.current) {
        if (window.innerWidth < 768) {
          containerRef.current.scrollLeft += 250; 
        } else {
          containerRef.current.scrollLeft += 300; 
        }
      }
    };

    return (
        <div className="relative w-full flex justify-center items-center ">
           <button onClick={scrollLeft} className="bg-gray-200 px-1 py-1 mr-1 rounded-full hover:bg-gray-200 focus:outline-none">
          <FiChevronLeft /> {/* Icon for left scroll */}
        </button>
        <div className="overflow-x-auto flex-grow" ref={containerRef} style={{ scrollBehavior: 'smooth', overflowX: 'hidden' ,overflowY: "hidden"}}>
          <div className="flex space-x-6 m-5">
            {/* Map through courses */}
            {courses.map((course: EnrolledCourse) => (
              <Link to={`/course-details/${course._id}`} key={course._id} className="block">
                <div className={`bg-white rounded-lg overflow-hidden   ${window.innerWidth < 768 ? 'object-cover  w-56' : 'md:w-64'} transition duration-300 ease-in-out transform hover:scale-105`}>
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
        <button onClick={scrollRight} className="bg-gray-200 px-1 py-1 ml-1 rounded-full hover:bg-gray-200 focus:outline-none">
          <FiChevronRight /> {/* Icon for right scroll */}
        </button>
        </div>
    );
}

export default EnrolledCourses;
