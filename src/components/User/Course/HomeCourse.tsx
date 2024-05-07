import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { instructoraxios } from '../../../constraints/axiosInterceptors/instructorAxiosInterceptors';
import courseEndspoints from '../../../constraints/endpoints/courseEndspoints';

interface Course {
  id: number;
  courseName: string;
  coursePrice: number;
  courseLevel: string;
  totalVideos: number;
  // Add any other properties here
}

function HomeCourse() {

  const [courses, setCourses] = useState<Course[]>([]);

  // const navigate = useNavigate()




  useEffect(() => {
    async function listCourses() {
      try {
        console.log("lsisttttttttttttttttt")
        const listCoursesResponse = await instructoraxios.get(courseEndspoints.listCourse);

        console.log(listCoursesResponse.data.courseData.courses);
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
      <div className="container mx-auto px-4 py-8 lg:px-64">

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First Card */}
          {courses.map(course=>(
          
          <Link to={`/course-details/${course.id}`} key={course.id} className="block">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                className="w-full h-40 object-cover"
                src="https://via.placeholder.com/350x200"
                alt=""
              />
          {course.id}
              <div className="p-4">
                <h5 className="mb-2 text-lg font-semibold text-gray-800">
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
