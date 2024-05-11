import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import courseEndspoints from '../../../constraints/endpoints/courseEndspoints';
import { userAxios } from '../../../constraints/axiosInterceptors/userAxiosInterceptors';
import { Course } from '../../../interfaces/ICourseDetails';


function HomeCourse() {

  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    async function listCourses() {
      try {
        const listCoursesResponse = await userAxios.get(courseEndspoints.listCourse);

        console.log(listCoursesResponse.data.courseData.courses,"ithhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
        const coursesData = listCoursesResponse.data.courseData.courses;
        console.log(coursesData,"[[[[[[[[[[[[[[[[[[[[[[")
        setCourses(coursesData);
        
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    }
    listCourses();
  }, []);

    return (
      <div className="container mx-auto px-4 py-9 lg:px-64">

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First Card */}
          {courses.map(course=>(
          <Link to={`/course-details/${course.id}`} key={course.id} className="block">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full">
              <img
                className="w-full h-40 object-cover"
                src={course.thumbnail}
                alt=""
              />
              <div className="p-4">
                <h5 className="mb-2 text-md font-semibold text-gray-800">
                 {course.courseName}
                </h5>
                <p className="mb-2 text-gray-700">
                 {course.courseLevel}
                </p>
                <p className="mb-2 text-gray-700">
                ₹ {course.coursePrice}
                </p>
                <div className="flex items-center justify-between">
                  <Link to="#" className="text-blue-600 hover:underline">
                    Read more
                  </Link>
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
            </div>
          </Link>
   ))}
        </div>
     
      </div>
    );
}

export default HomeCourse;
