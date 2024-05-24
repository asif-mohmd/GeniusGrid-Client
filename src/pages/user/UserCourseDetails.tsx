import CourseDetailsPage from "../../components/User/Course/CourseDetailsPage";
import VideoPlayer from "../../components/User/Course/VideoPlayer";
import Header from "../../components/User/Layout/Header";
import { useEffect, useState } from "react";
import courseEndspoints from "../../constraints/endpoints/courseEndspoints";
import { Link, useParams } from "react-router-dom";
import { CourseData } from "../../interfaces/UserInterfaces/ICourseDetails";
import { userAxios } from "../../constraints/axiosInterceptors/userAxiosInterceptors";
import userEndpoints from "../../constraints/endpoints/userEndpoints";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { User } from "../../interfaces/UserInterfaces/IUserDetails";
import { setPurchasedCourseId } from "../../redux/userSlices/userDataSlice";
import { useAuth } from "../../utils/AuthContext";
import AuthModalManager from "../../components/User/Auth/AuthModalManager";

// interface User{
//   id:string;
//   name:string;
//   email:string;
//   courses: string[];
// }

function UserCourseDetails() {
  const { courseId } = useParams<{ courseId: string }>();
  const [courseData, setCourseData] = useState<CourseData | null>(null);
  const [enrolled, setEntrolled] = useState<boolean>(false);
  const [userDetails, setUserDetails] = useState<User | null>(null);

  const userAuth = useSelector((store: RootState) => store.userAuth);

  const { handleShowLogin } = useAuth();
  const dispatch = useDispatch();

  // Function to calculate offer price
  const calculateOfferPrice = (
    estimatedPrice: number | undefined,
    coursePrice: number | undefined
  ): number => {
    if (estimatedPrice !== undefined && coursePrice !== undefined) {
      return coursePrice - estimatedPrice;
    }
    return 0;
  };

  const calculateOfferPercentage = (
    offerPrice: number,
    coursePrice: number
  ): string => {
    const offerPercentage = Math.round(
      (offerPrice / coursePrice) * 100
    ).toString();
    return offerPercentage;
  };

  useEffect(() => {
    async function fetchCourseData() {
      try {
        const response = await userAxios.get(
          `${courseEndspoints.courseDetails}/${courseId}`
        );
        console.log(response, "-----------", userAuth);
        const courseData: CourseData = response.data.response;
        setCourseData(courseData);

        if (userAuth.isLogin) {
          const userData = await userAxios.get(userEndpoints.userDetails);
          const courses = userData.data.courses;
          console.log(courses, "hhhhhhhhhhhhhhhhhhhhhh", userData.data);

          // Assuming courseData._id contains the ID of the course you are checking for
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const enrolled = courses.find(
            (courseId: string) => courseId === courseData._id
          );
          console.log(enrolled, "000000000000");

          setUserDetails(userData.data);
          if (enrolled) {
            setEntrolled(true);
          }
        }

        console.log(courseData, "jyjyjyjyjyjy");
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    }

    fetchCourseData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAuth]);

  const makePayment = async () => {
    try {
      console.log(courseData, "ccccccccccccccccccc");
      if (userAuth.isLogin ) {
        console.log("XXXXXXXXXXXXxxxxxxxxxxxxxxxxxXXXXXXXXXXXXXXXXXXXXXXXX");

        const enroll = await userAxios.post(userEndpoints.makePayment, {
          courseData,
          userDetails,
        });
        console.log(enroll);
        if (enroll.status === 200) {
          dispatch(setPurchasedCourseId(courseData?._id));
          window.location.href = enroll.data.response.url;
        } else {

          toast.error("Payment Failed. Try Again");
        }
      } else {
        handleShowLogin();
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="flex flex-wrap bg-gray-50">
        
        <div className="w-full md:w-2/5 md:p-8 sm:p-6 bg-gray-50">
          <VideoPlayer
            videoUrl={courseData?.demoURL || ""}
            subtitleUrl="dfsdafasd"
          />

          <div className="m-1 ">
          <AuthModalManager/>

            <div className="flex m-1 items-center ">
              <p className="class text-xl font-bold">
                ₹ {courseData?.estimatedPrice}
              </p>
              <p className="pl-3 line-through text-sm">
                ₹ {courseData?.coursePrice}
              </p>
              <p className="pl-2 font-semibold">
                <span className=" text-green-500 ">
                  {calculateOfferPercentage(
                    calculateOfferPrice(
                      Number(courseData?.estimatedPrice),
                      Number(courseData?.coursePrice)
                    ),
                    Number(courseData?.coursePrice)
                  )}
                  %{" "}
                </span>
                off
              </p>{" "}
            </div>
            {enrolled ? (
              <div className="m-3">
                <Link to={`/purchased/course/${courseData?._id}`}>
                  <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    Enroll now
                  </button>
                </Link>
              </div>
            ) : (
              <div className="m-1">
                <button
                  onClick={() => makePayment()}
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Buy now
                </button>
              </div>
            )}

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
