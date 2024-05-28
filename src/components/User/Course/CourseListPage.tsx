import { useEffect, useState } from "react"
import { userAxios } from "../../../constraints/axiosInterceptors/userAxiosInterceptors"
import courseEndspoints from "../../../constraints/endpoints/courseEndspoints"
import { Link } from "react-router-dom";
import { AllCourse } from "../../../interfaces/UserInterfaces/ICourseDetails";

function CourseListPage() {
    const [courses, setCourses] = useState<AllCourse[]>([]);

    useEffect(()=>{

        async function  fetchAllCourses(){
            const response = await userAxios.get(courseEndspoints.allUserCourses)
            const allCourses = response.data.response
            setCourses(allCourses);
        } 

        fetchAllCourses()
    },[])


  return (
    <>

<div className="container mx-auto px-4 py-8 lg:px-64">

        
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* First Card */}
  {courses.map(course=>(
  <Link to={`/course-details/${course._id}`} key={course._id} className="block">
  <div className="bg-gray-50 rounded-lg overflow-hidden h-72 w-72 transition duration-300 ease-in-out transform hover:scale-105">
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
    </>
   
  )
}

export default CourseListPage