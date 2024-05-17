import Header from "../../components/User/Layout/Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { instructoraxios } from "../../constraints/axiosInterceptors/instructorAxiosInterceptors";
import courseEndspoints from "../../constraints/endpoints/courseEndspoints";
import { CourseData } from "../../interfaces/UserInterfaces/ICourseDetails";
import VideoPlayer from "../../components/User/Course/VideoPlayer";
import PurchasedCoursePage from "../../components/User/Course/PurchesedCoursePage";
import PurchaseContents from "../../components/User/Course/PurchaseContents/PurchaseContents";


const PurchasedCourse = () => {
  const { _id } = useParams<{ _id: string }>();

  const [courseData, setCourseData] = useState<CourseData | null>(null);
  const [selectedVideoTitle, setSelectedVideoTitle] = useState<string | null>(null);
  const [currentLessonIndex, setCurrentLessonIndex] = useState<number>(0); 
  const [openLessonIndex, setOpenLessonIndex] = useState<number | null>(null);
  const [selectedVideoDescription,setSelectedVideoDescription] = useState<string | null>(null)
  const [selectedVideoLinks, setSelectedVideoLinks] = useState<string[] | null>(null);

  const handleVideoTitleClick = (title: string,description:string,links:string[]) => {
    setSelectedVideoTitle(title);
    console.log(links,"descriiiiiiiiiiidddddddddddddddddddddddddddd")
    setSelectedVideoDescription(description)
    setSelectedVideoLinks(links)
  };

  const handleNextVideo = () => {
    // Check if there are more videos in the current lesson
    const currentLesson = courseData?.lessons[currentLessonIndex];
    if (currentLesson && selectedVideoTitle) {
      const currentIndex = currentLesson.findIndex(video => video.videoURL === selectedVideoTitle);
      if (currentIndex < currentLesson.length - 1) {
        setSelectedVideoTitle(currentLesson[currentIndex + 1].videoURL);
      } else {
        // Check if there are more lessons
        if (currentLessonIndex < courseData!.lessons.length - 1) {
          setCurrentLessonIndex(currentLessonIndex + 1);
          setSelectedVideoTitle(courseData!.lessons[currentLessonIndex + 1][0].videoURL);
          setSelectedVideoDescription(courseData!.lessons[currentLessonIndex + 1][0].videoDescription);
          setSelectedVideoLinks(courseData!.lessons[currentLessonIndex + 1][0].links);
          setOpenLessonIndex(currentLessonIndex + 1); // Set openLessonIndex to the index of the next lesson
        }
      }
    }
  };

  const handlePreviousVideo = () => {
    // Check if there are previous videos in the current lesson
    const currentLesson = courseData?.lessons[currentLessonIndex];
    if (currentLesson && selectedVideoTitle) {
      const currentIndex = currentLesson.findIndex(video => video.videoURL === selectedVideoTitle);
      if (currentIndex > 0) {
        setSelectedVideoTitle(currentLesson[currentIndex - 1].videoURL);
      } else {
        // Check if there are previous lessons
        if (currentLessonIndex > 0) {
          setCurrentLessonIndex(currentLessonIndex - 1);
          const previousLesson = courseData!.lessons[currentLessonIndex - 1];
          setSelectedVideoTitle(previousLesson[previousLesson.length - 1].videoURL);
          setSelectedVideoDescription(previousLesson[previousLesson.length - 1].videoDescription);
          setSelectedVideoLinks(previousLesson[previousLesson.length - 1].links);
          setOpenLessonIndex(currentLessonIndex - 1); // Set openLessonIndex to the index of the previous lesson
        }
      }
    }
  };


  useEffect(() => {
    async function fetchCourseData() {
      try {
        const response = await instructoraxios.get(
          `${courseEndspoints.courseDetails}/${_id}`
        );

        const courseData: CourseData = response.data.response;
        setCourseData(courseData);
        setSelectedVideoTitle(courseData.lessons[0][0].videoURL);
        setSelectedVideoDescription(courseData.lessons[0][0].videoDescription)
        setOpenLessonIndex(0); 
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    }
    fetchCourseData();
  }, [_id]);


  return (
    <div>
      <Header />
      <div className="flex flex-wrap bg-gray-50">
        <div className="w-full md:w-3/5 p-6 bg-gray-50">
          <div className="">
            <VideoPlayer
              videoUrl={selectedVideoTitle || ""}
              subtitleUrl="dfsdafasd"
            />
            <div className="flex justify-between m-2">
              <button
                type="button"
                onClick={handlePreviousVideo}
                className="flex justify-start text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={handleNextVideo}
                className="justify-end text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Next 
              </button>
            </div>
            
            <PurchaseContents  selectedVideoDescription={selectedVideoDescription} selectedVideoLinks={selectedVideoLinks} />

          </div>
          <div></div>
        </div>
        <div className="w-full md:w-2/5 p-6">
          {courseData && (
            <PurchasedCoursePage
              courseData={courseData}
              onVideoTitleClick={handleVideoTitleClick}
              onSelectedVideo={selectedVideoTitle}
              openLessonIndex={openLessonIndex} // Pass openLessonIndex to PurchasedCoursePage
              setOpenLessonIndex={setOpenLessonIndex} // Pass setOpenLessonIndex function to allow opening and closing lessons manually
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PurchasedCourse;
