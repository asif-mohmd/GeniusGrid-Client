import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faClock,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { instructoraxios } from "../../../constraints/axiosInterceptors/instructorAxiosInterceptors";
import courseEndspoints from "../../../constraints/endpoints/courseEndspoints";

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

function CourseDetailsPage() {
  const { courseId } = useParams<{ courseId: string }>(); // Define type for courseId
  const [courseData, setCourseData] = useState<CourseData | null>(null); // Define type for courseData

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
    <div className="container mx-auto py-12 bg-gray-50">
      <div className="max-w-2xl mx-auto bg-gray-50 rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <div className="mb-4">
            <div className="text-3xl  font-bold mb-1 text-gray-800 ">
              {courseData?.courseName}
            </div>
            <p className="text-lg text-gray-700">
              Introduction to Web Development
            </p>
          </div>
          <div className="mb-4">
            <div className="text-lg font-semibold mb-1 text-gray-800">
              Instructor:
            </div>
            <p className="text-lg text-gray-700">John Smith</p>
          </div>
          <div className="mb-4">
            <div className="text-lg font-semibold mb-1 text-gray-800">
              Description:
            </div>
            <p className="text-lg text-gray-700">
              {courseData?.courseDescription}
            </p>
          </div>
          <div className="mb-4">
            <div className="text-lg font-semibold mb-1 text-gray-800">
              Duration:
            </div>
            <div className="flex items-center text-lg text-gray-700">
              <FontAwesomeIcon icon={faClock} className="mr-2" />
              <span>10 weeks</span>
            </div>
          </div>
          <div className="mb-4">
            <div className="text-lg font-semibold mb-1 text-gray-800">
              Price:
            </div>
            <div className="flex items-center text-lg text-gray-700">
              <FontAwesomeIcon icon={faMoneyBillWave} className="mr-2" />
              <span>{courseData?.coursePrice}</span>
            </div>
          </div>

          <div className="mb-4">
            <div className="text-lg font-semibold mb-1 text-gray-800">
              Prerequisites:
            </div>
            <ul className="list-disc list-inside text-lg text-gray-700">
              {courseData?.prerequisites.map((prerequisite, index) => (
                <li key={index}>{prerequisite}</li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <div className="text-lg font-semibold mb-1 text-gray-800">
              Benefits:
            </div>
            <ul className="list-disc list-inside text-lg text-gray-700">
              {courseData?.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <div className="text-lg font-semibold mb-1 text-gray-800">
              Rating:
            </div>
            <div className="flex items-center text-lg text-yellow-400">
              <FontAwesomeIcon icon={faStar} className="mr-2" />
              <span>4.5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetailsPage;
