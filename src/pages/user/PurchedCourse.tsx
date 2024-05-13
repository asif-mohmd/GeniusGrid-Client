
import Header from "../../components/User/Layout/Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { instructoraxios } from "../../constraints/axiosInterceptors/instructorAxiosInterceptors";
import courseEndspoints from "../../constraints/endpoints/courseEndspoints";
import { CourseData } from "../../interfaces/UserInterfaces/ICourseDetails";
import VideoPlayer from "../../components/User/Course/VideoPlayer";
import PurchesedCoursePage from "../../components/User/Course/PurchesedCoursePage";



const PurchasedCourse = () => {
    const { _id } = useParams<{_id: string}>();   
    
    console.log(_id,"kkkkkkkkkkkkkk")
    const [courseData, setCourseData] = useState<CourseData | null>(null);

    const [selectedVideoTitle, setSelectedVideoTitle] = useState<string | null>(null);

    const handleVideoTitleClick = (title: string) => {
        setSelectedVideoTitle(title);
    };
    
    useEffect(() => {
        async function fetchCourseData() {
          try {
            const response = await instructoraxios.get(
              `${courseEndspoints.courseDetails}/${_id}`
            );
    
            const courseData: CourseData = response.data.response;
            setCourseData(courseData);
            console.log(courseData,"yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy")
            setSelectedVideoTitle(courseData.lessons[0][0].videoURL)
          } catch (error) {
            console.error("Error fetching course data:", error);
          }
        }
        fetchCourseData();
      }, [_id]);

      console.log(_id)
      console.log(selectedVideoTitle,"iam setttt")
  return (
    <div>
    <div>
      <Header />
      <div className="flex bg-gray-50">
        <div className="w-1/2 p-6 bg-gray-50">
          <VideoPlayer
            videoUrl={selectedVideoTitle || ""}
            subtitleUrl="dfsdafasd"
          />

          <div className="m-5">
           
          </div>
        </div>
        <div className="w-1/2 p-6 ">
          {courseData && <PurchesedCoursePage courseData={courseData}
                        onVideoTitleClick={handleVideoTitleClick} />}
        </div>
      </div>
    </div>
    </div>
  );
};

export default PurchasedCourse;
