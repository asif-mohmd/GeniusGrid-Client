import CourseDetailsPage from "../../components/User/Course/CourseDetailsPage";
import VideoPlayer from "../../components/User/Course/VideoPlayer";
import Header from "../../components/User/Layout/Header";
import { useEffect, useState } from "react";
import { instructoraxios } from "../../constraints/axiosInterceptors/instructorAxiosInterceptors";
import courseEndspoints from "../../constraints/endpoints/courseEndspoints";
import { Link, useParams } from "react-router-dom";
import { CourseData } from "../../interfaces/ICourseDeatails";

function UserCourseDetails() {
  const { courseId } = useParams<{ courseId: string }>();
  const [courseData, setCourseData] = useState<CourseData | null>(null);

  useEffect(() => {
    async function fetchCourseData() {
      try {
        const response = await instructoraxios.get(
          `${courseEndspoints.courseDetails}/${courseId}`
        );

        const courseData: CourseData = response.data.response;
        setCourseData(courseData);
        console.log(courseData, "============");
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    }
    fetchCourseData();
  }, [courseId]);



  return (
    <div>
      <Header />
      <div className="flex bg-gray-50">
        <div className="w-1/2 p-6 bg-gray-50">
          <VideoPlayer
            videoUrl={courseData?.demoURL || ""}
            subtitleUrl="dfsdafasd"
          />

          <div className="m-5">
            <Link to={`/purchased/course/${courseData?._id}`}  >
              <button  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
              Enroll now
              </button>
            
            </Link>
          </div>
        </div>
        <div className="w-1/2 p-6 ">
          {courseData && <CourseDetailsPage {...courseData} />}
        </div>
      </div>
    </div>
  );
}

export default UserCourseDetails;
