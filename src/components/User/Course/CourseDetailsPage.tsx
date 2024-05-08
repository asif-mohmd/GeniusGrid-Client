import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faClock,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";
import { CourseData } from "../../../interfaces/ICourseDeatails";



function CourseDetailsPage(courseData:CourseData) {


 
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
