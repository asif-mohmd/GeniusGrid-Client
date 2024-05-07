import CourseDetailsPage from '../../components/User/Course/CourseDetailsPage';
import VideoPlayer from '../../components/User/Course/VideoPlayer';
import Header from '../../components/User/Layout/Header';
import { useEffect, useState } from 'react';
import { instructoraxios } from '../../constraints/axiosInterceptors/instructorAxiosInterceptors';
import courseEndspoints from '../../constraints/endpoints/courseEndspoints';

interface Lesson {
  videoTitle: string;
  videoURL: string;
  subtitleURL: string;
  videoDescription: string;
  links: string[]; // Assuming links are strings
  // Add other properties here if needed
}

interface CourseData {
  courseName: string;
  coursePrice: string;
  courseDescription: string;
  courseLevel: string;
  courseTags: string;
  demoURL: string;
  estimatedPrice: string;
  instructorId: string;
  totalVideos: string;
  prerequisites: string[];
  benefits: string[];
  courseLessons: Lesson[]; // Array of Lesson, not Lesson[][]
}


function UserCourseDetails() {
  const [videoUrl, setVideoUrl] = useState<string | null>(null); // Define type for courseData

  const courseId = "663a247d09414d806be152d9"

  useEffect(() => {
    async function fetchCourseData() {
      try {
        const response = await instructoraxios.get(
          `${courseEndspoints.courseDetails}/${courseId}`
        );

        const courseData: CourseData = response.data.response;
        console.log(courseData.demoURL, "============");

        setVideoUrl(courseData.demoURL);
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    }
    fetchCourseData();
  }, []);
  
  return (
    <div>
      <Header />
      <div className="flex bg-gray-50">
        <div className="w-1/2 p-6 bg-gray-50">
        {videoUrl}
        <VideoPlayer videoUrl={videoUrl || ''} subtitleUrl='dfsdafasd'/>
        </div>
        <div className="w-1/2 p-6 ">
          <CourseDetailsPage/>
        </div>
      </div>
    </div>
  );
}

export default UserCourseDetails;
