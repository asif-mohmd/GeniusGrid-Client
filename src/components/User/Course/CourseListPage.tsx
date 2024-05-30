
import { Link } from "react-router-dom";
import { AllCourse } from "../../../interfaces/UserInterfaces/ICourseDetails";

interface CourseListPageProps {
    courses: AllCourse[];
  }
  
  const CourseListPage: React.FC<CourseListPageProps> = ({ courses }) => {

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="md:mx-24 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {courses.map((course: AllCourse) => (
                    <Link to={`/course-details/${course._id}`} key={course._id} className="w-full">
                        <div className="bg-white overflow-hidden h-full shadow-md rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                            <img
                                className="w-full max-w-xs md:max-w-xs lg:max-w-xs object-cover h-3/6"
                                src={course.thumbnail}
                                alt={course.courseName}
                            />
                            <div className="p-4">
                                <h5 className="mb-2 text-md font-semibold text-gray-800 font-roboto truncate">
                                    {course.courseName}
                                </h5>
                                <div className='flex justify-between font-roboto text-sm'>
                                    <p className="mb-2 text-gray-700">
                                        {course.courseLevel}
                                    </p>
                                    <p className="mb-2 text-gray-700">
                                        ₹ {course.coursePrice}
                                    </p>
                                </div>
                                {/* <div className="flex items-center">
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
                                </div> */}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default CourseListPage;
