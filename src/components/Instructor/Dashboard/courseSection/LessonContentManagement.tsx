import React, { useState } from "react";
import LessonComponent from "./LessonComponent";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/Store";
import { instructoraxios } from "../../../../constraints/axiosInterceptors/instructorAxiosInterceptors";
import courseEndspoints from "../../../../constraints/endpoints/courseEndspoints";
import { useNavigate } from "react-router-dom";
import instructorEndpoints from "../../../../constraints/endpoints/instructorEndpoints";
import { confirmAlert } from "react-confirm-alert"; // Import the library
import "react-confirm-alert/src/react-confirm-alert.css"; // Import its CSS
interface LessonContent {
  videoTitle: string;
  videoURL: string;
  subtitleURL: string;
  videoDescription: string;
  links: string[];
}

const LessonContentManagement: React.FC = () => {
  const [lessons, setLessons] = useState<LessonContent[][]>([]);

  const navigate = useNavigate()

  const courseId = useSelector((store:RootState)=>store.courseData.privateIdStore)
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
              console.log(courseId);
              console.log(lessons, ";;;;;;;;;;;;;;");
              const response = await instructoraxios.post(courseEndspoints.addLessonContent,{courseId,lessons});
              console.log(response,";;;;;;;;;;;;")
              if(response.status==200){
                navigate(instructorEndpoints.myCourses);
              }else{
                toast.error("Something went wrong");
              }
            }
          },
          {
            label: "No",
            onClick: () => {}
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

  return (
    <div className="min-h-screen bg-slate-50">
      <ToastContainer/>
      <div className="container mx-auto p-8 ">
        <div className="bg-slate-50">
          {lessons.map((lesson, lessonIndex) => (
            <div key={lessonIndex} className="lesson-container   bg-white rounded-lg p-4 mb-4">
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
