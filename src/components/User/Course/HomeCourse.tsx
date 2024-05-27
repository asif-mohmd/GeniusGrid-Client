import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Importing icons from react-icons
import courseEndspoints from '../../../constraints/endpoints/courseEndspoints';
import { userAxios } from '../../../constraints/axiosInterceptors/userAxiosInterceptors';
import { AllCourse } from '../../../interfaces/UserInterfaces/ICourseDetails';

function HomeCourse() {
  const [courses, setCourses] = useState<AllCourse[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function listCourses() {
      try {
        const listCoursesResponse = await userAxios.get(courseEndspoints.allUserCourses);
        const coursesData = listCoursesResponse.data.response;
        setCourses(coursesData);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    }
    listCourses();
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 400; // Adjust the value as needed
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 400; // Adjust the value as needed
    }
  };

  return (
    <div className="container mx-auto px-4 py-9 md:px-60 relative bg-slate-100">
      <div className="flex items-center justify-between">
        <button onClick={scrollLeft} className="bg-gray-200 px-3 py-3 m-2 rounded-full hover:bg-gray-200 focus:outline-none">
          <FiChevronLeft /> {/* Icon for left scroll */}
        </button>
        <div className="overflow-x-auto flex-grow" ref={containerRef} style={{ scrollBehavior: 'smooth', overflowX: 'hidden' ,overflowY: "hidden"}}>
          <div className="flex space-x-6 p-3">
            {/* Map through courses */}
            {courses.map(course => (
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
                    <div className='flex justify-between font-roboto text-sm'>
                    <p className="mb-2 text-gray-700 ">
                      {course.courseLevel}
                    </p>
                    <p className="mb-2 text-gray-700">
                      ₹ {course.coursePrice}
                    </p>
                    </div>
               
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 text-yellow-500 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 11l7-7 7 7M5 19l7-7 7 7"
                        ></path>
                      </svg>
                      <span className="text-gray-700">4.5</span>
                    </div>
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
    </div>
  );
}

export default HomeCourse;
