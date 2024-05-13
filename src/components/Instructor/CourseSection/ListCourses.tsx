import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import courseEndspoints from "../../../constraints/endpoints/courseEndspoints";
import { instructoraxios } from "../../../constraints/axiosInterceptors/instructorAxiosInterceptors";
import { setPrivateId } from "../../../redux/instructorSlices/couseSlice/editCourseData";
import instructorEndpoints from "../../../constraints/endpoints/instructorEndpoints";


interface Course {
  id: number;
  courseName: string;
  coursePrice: number;
  courseLevel: string;
  totalVideos: number;
  // Add any other properties here
}

const ListCourses = () => {

  const [courses, setCourses] = useState<Course[]>([]);

  const dispatach = useDispatch()
  const navigate = useNavigate()


  useEffect(() => {
    async function listCourses() {
      try {
        const listCoursesResponse = await instructoraxios.get(courseEndspoints.listCourse);
        const coursesData = listCoursesResponse.data.courseData.courses;
        setCourses(coursesData);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    }
    listCourses();
  }, []);

  const handleEdit = (id: number) => {
    console.log(id);
    dispatach(setPrivateId(id))

    navigate(instructorEndpoints.editCourse)

  }

  const handleDelete = async (courseId: number) => {
    try {
      confirmAlert({
        title: "Confirm Submission",
        message: "Are you sure you want to delete the course?",
        buttons: [
          {
            label: "Yes",
            onClick: async () => {
        const response = await instructoraxios.post(courseEndspoints.deleteCourse, { courseId });
        if (response && response.status === 200) {
            // Remove the deleted course from the state
            setCourses(courses.filter(course => course.id !== courseId));
            toast.success("Course deleted successfully");
            navigate(instructorEndpoints.myCourses);
        } else {
            toast.error("Something went wrong. Try again");
        }

      }
    },
    {
      label: "No",
      onClick: () => { }
    }
  ]
});
    } catch (error) {
        console.error("Error deleting course:", error);
        toast.error("Something went wrong. Try again");
    }
};



  return (
    <div className="overflow-x-auto">
            <ToastContainer />

      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <p className="text-2xl font-medium my-7">My Courses</p>
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider"
                >
                  Course Name
                </th>
                <th
                  scope="col"
                  className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider"
                >
                  Level
                </th>
                <th
                  scope="col"
                  className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider"
                >
                  Total Videos
                </th>
                <th
                  scope="col"
                  className="px-3 py-2 sm:px-6 sm:py-3 text-right text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {courses.map(course => (
                <tr key={course.id}>
                  <td className="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap">
                    {course.courseName}
                  </td>
                  <td className="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap">
                    {course.coursePrice}
                  </td>
                  <td className="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap">
                    {course.courseLevel}
                  </td>
                  <td className="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap">
                    {course.totalVideos}
                  </td>
                  <td className="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-right text-sm font-medium flex justify-end">
                    <button
                      type="button"
                      onClick={() => handleEdit(course.id)}
                      className="mr-2 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDelete(course.id)}
                      className="text-sm  bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>


          </table>
        </div>
      </div>
    </div>
  );
}

export default ListCourses;
