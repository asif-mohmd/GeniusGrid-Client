import CourseDetailsPage from "../../components/User/Course/CourseDetailsPage";
import VideoPlayer from "../../components/User/Course/VideoPlayer";
import Header from "../../components/User/Layout/Header";
import { useEffect, useState } from "react";
import { instructoraxios } from "../../constraints/axiosInterceptors/instructorAxiosInterceptors";
import courseEndspoints from "../../constraints/endpoints/courseEndspoints";
import { Link, useParams } from "react-router-dom";
import { CourseData } from "../../interfaces/UserInterfaces/ICourseDetails";

function UserCourseDetails() {
  const { courseId } = useParams<{ courseId: string }>();
  const [courseData, setCourseData] = useState<CourseData | null>(null);
  
  // Function to calculate offer price
  const calculateOfferPrice = (estimatedPrice: number | undefined, coursePrice: number | undefined): number => {
    if (estimatedPrice !== undefined && coursePrice !== undefined) {
      return coursePrice - estimatedPrice;
    }
    return 0;
  };

  

const calculateOfferPercentage = (offerPrice: number, coursePrice: number): string => {
  const offerPercentage = Math.round((offerPrice / coursePrice) * 100).toString();
  return offerPercentage;
};


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
      <div className="flex flex-wrap bg-gray-50">
        <div className="w-full md:w-2/5 md:p-8 sm:p-6 bg-gray-50">
          <VideoPlayer
            videoUrl={courseData?.demoURL || ""}
            subtitleUrl="dfsdafasd"
          />

          <div className="m-4">
            <div className="flex m-1 items-center ">
              <p className="class text-xl font-bold">₹ {courseData?.estimatedPrice}</p>
              <p className="pl-3 line-through text-sm">₹ {courseData?.coursePrice}</p>
              <p className="pl-2 font-semibold"><span className=" text-green-500 ">{calculateOfferPercentage(calculateOfferPrice(Number(courseData?.estimatedPrice), Number(courseData?.coursePrice)), Number(courseData?.coursePrice))}% </span>off</p>            </div>
            
            <Link to={`/purchased/course/${courseData?._id}`}>
              <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                Enroll now
              </button>
            </Link>
            <ul className="list-disc text-[#6a6f73] text-xs p-1 ">
              <li className="pb-1">30-Day Money-Back Guarantee</li>
              <li className="pb-1">Full Lifetime Access</li>
              <li className="pb-1">Source Code Available</li>
              <li className="pb-1">Certificate of Completion</li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-3/5 p-3">
          {courseData && <CourseDetailsPage {...courseData} />}
        </div>
      </div>
    </div>
  );
}

export default UserCourseDetails;
