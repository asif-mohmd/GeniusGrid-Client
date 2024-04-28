import React, { useEffect, useState } from "react";
import LessonComponent from "./LessonComponent";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/Store";
import { instructoraxios } from "../../../../constraints/axiosInterceptors/instructorAxiosInterceptors";
import courseEndspoints from "../../../../constraints/endpoints/courseEndspoints";
import { useNavigate } from "react-router-dom";
import instructorEndpoints from "../../../../constraints/endpoints/instructorEndpoints";
import { confirmAlert } from "react-confirm-alert"; // Import the library
import "react-confirm-alert/src/react-confirm-alert.css"; // Import its CSS
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { setCourseData1Empty } from "../../../../redux/instructorSlices/courseData";

interface LessonContent {
  videoTitle: string;
  videoURL: string;
  subtitleURL: string;
  videoDescription: string;
  links: string[];
}

const LessonContentManagement: React.FC = () => {
  const [lessons, setLessons] = useState<LessonContent[][]>([]);

  const courseLessonsDetails = useSelector((store: RootState) => store.courseData.courseData3)

  const courseDetails = useSelector((store: RootState) => store.courseData.courseData1)

  const editCourseDetails = useSelector((store: RootState) => store.courseData.courseData2)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchCourseData() {
      try {
        const lessonsData = courseLessonsDetails?.courseLessons || [];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const formattedLessons: LessonContent[][] = lessonsData.map((lesson: any) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          return lesson.map((content: any) => ({
            videoTitle: content.videoTitle || '',
            videoURL: content.videoURL || '',
            subtitleURL: content.subtitleURL || '',
            videoDescription: content.videoDescription || '',
            links: content.links || [],
          }));
        });
        setLessons(formattedLessons);
      } catch (error) {
        console.error("Error fetching course details:", error);
      }
    }

    fetchCourseData();
  }, [courseLessonsDetails?.courseLessons]);




  const handleAddContent = (
    lessonIndex: number,
    formData: LessonContent
  ) => {
    const updatedLessons = [...lessons];
    if (lessonIndex >= 0 && lessonIndex < lessons.length) {
      updatedLessons[lessonIndex].push(formData);
    }
    setLessons(updatedLessons);
  };

  const handleNewLesson = () => {
    if (
      lessons.length === 0 ||
      lessons[lessons.length - 1].some(
        (content) => Object.values(content).some((value) => value !== "")
      )
    ) {
      setLessons((prevLessons) => [...prevLessons, []]);
    } else {
      toast.error("Please add content to the current lesson before creating a new one.");
    }
  };


  const handleGlobalSubmit = async () => {

    if (lessons.some((lesson) => lesson.length > 0)) {
      confirmAlert({
        title: "Confirm Submission",
        message: "Are you sure you want to submit all lessons?",
        buttons: [
          {
            label: "Yes",
            onClick: async () => {
              let response
              if (courseLessonsDetails == null) {
                response = await instructoraxios.post(courseEndspoints.createOrEditCourse, { courseDetails, lessons });

              } else {
                const courseDetails = editCourseDetails
                response = await instructoraxios.post(courseEndspoints.createOrEditCourse, { courseDetails, lessons });
              }

              if (response.status == 200) {
                dispatch(setCourseData1Empty())
                navigate(instructorEndpoints.myCourses);
              } else {
                toast.error("Something went wrong");
              }
            }
          },
          {
            label: "No",
            onClick: () => { }
          }
        ]
      });
    } else {
      toast.error("There is no content to submit.");
    }
  };

  const handleDeleteLesson = (lessonIndex: number) => {
    const updatedLessons = lessons.filter((_, index) => index !== lessonIndex);
    setLessons(updatedLessons);
  };

  const HandleBackPage = () => {
    navigate(instructorEndpoints.createCourse);
  }


  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <ToastContainer />
      <div className="flex justify-end">
        <IoArrowBackCircleOutline
          onClick={HandleBackPage}
          className="text-3xl cursor-pointer hover:text-gray-500 transition-colors duration-300 mt-2 mr-4"
        />
      </div>

      <div className="container mx-auto p-8 flex-grow">
        <div className="bg-slate-50">
          {lessons.map((lesson, lessonIndex) => (
            <div key={lessonIndex} className="lesson-container bg-white rounded-lg p-4 mb-4">
              <LessonComponent
                lesson={lesson}
                lessonIndex={lessonIndex}
                onAddContent={handleAddContent}
                onDeleteContent={() => handleDeleteLesson(lessonIndex)}
              />
              <button
                type="button"
                onClick={() => handleDeleteLesson(lessonIndex)}
                className="delete-lesson-btn bg-red-500 text-white px-4 py-2 rounded-lg ml-2 hover:bg-red-600 focus:outline-none"
              >
                Delete Lesson
              </button>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={handleNewLesson}
          className="action-btn bg-blue-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-blue-600 focus:outline-none"
        >
          New Lesson
        </button>
        <button
          type="button"
          onClick={handleGlobalSubmit}
          className="action-btn bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Submit All Lessons
        </button>
      </div>
    </div>
  );

};

export default LessonContentManagement;
