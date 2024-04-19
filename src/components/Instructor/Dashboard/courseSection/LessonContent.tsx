import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddContent from "./AddContent";

const AddLessons = () => {
  const [lessons, setLessons] = useState([{ id: 1 }]);
  const [contents, setContents] = useState([]);

  const addLesson = () => {
    // Check if all content inputs for the current lesson are filled
    const isContentFilled = lessons.every((lesson) =>
      contents.some((content) => content.lessonId === lesson.id)
    );

    // If all content inputs are filled, allow adding a new lesson
    if (isContentFilled) {
      setLessons([...lessons, { id: lessons.length + 1 }]);
      setContents([]); // Reset contents after adding a new lesson
      toast.success("Lesson added successfully!");
    } else {
      toast.error("Please fill in all content inputs for each lesson before adding a new lesson!");
    }
  };

  const handleSubmitLesson = () => {
    // Check if all lessons have at least one content entry
    const isLessonsFilled = lessons.every((lesson) =>
      contents.some((content) => content.lessonId === lesson.id)
    );

    // Check if all content inputs for each lesson are filled
    const isContentFilled = contents.every(
      (content) => content.videoTitle.trim() !== "" && content.videoURL.trim() !== ""
    );

    if (isLessonsFilled && isContentFilled) {
      // Get all content grouped by lesson
      const lessonContentData = lessons.map((lesson) =>
        contents.filter((content) => content.lessonId === lesson.id)
      );
      // Handle lesson and content submission
      console.log("Lesson and content submitted:", lessonContentData);
      toast.success("Lesson and content submitted successfully!");
    } else {
      toast.error("Please fill in all content inputs for each lesson before submitting!");
    }
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
            <AddContent
              lessonId={index + 1}
              setContents={setContents}
              contents={contents}
            />
          </div>
        </div>
      ))}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
        onClick={addLesson}
      >
        Add Lesson
      </button>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded-md mt-4 ml-4"
        onClick={handleSubmitLesson}
      >
        Submit Lesson and Content
      </button>
      <ToastContainer />
    </div>
  );
};

export default AddLessons;
