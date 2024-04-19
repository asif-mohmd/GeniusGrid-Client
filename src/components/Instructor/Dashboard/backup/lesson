import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddContent from "./AddContent";

const AddLessons = () => {
  const [lessons, setLessons] = useState([]);

  const addLesson = () => {
    setLessons([...lessons, { id: lessons.length + 1 }]);
    toast.success("Lesson added successfully!");
  };

  const deleteLesson = (id) => {
    setLessons(lessons.filter((lesson) => lesson.id !== id));
    toast.success("Lesson deleted successfully!");
  };

  return (
    <div className="text-gray-900 bg-slate-50 h-screen w-full pl-10">
      {lessons.map((lesson, index) => (
        <div key={index}>
          <div className="p-4 flex">
            <h1 className="text-3xl font-bold">Lesson {index + 1}</h1>
            {index !== lessons.length - 1 && (
              <button
                onClick={() => deleteLesson(lesson.id)}
                className="ml-4 px-3 py-1 bg-red-500 text-white rounded-md"
              >
                Delete
              </button>
            )}
          </div>
          <div className="px-3 py-4 flex flex-col bg-white w-5/6 rounded-md">
            <AddContent lessonId={index + 1} />
          </div>
        </div>
      ))}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
        onClick={addLesson}
      >
        Add Lesson
      </button>
      <ToastContainer />
    </div>
  );
};

export default AddLessons;
