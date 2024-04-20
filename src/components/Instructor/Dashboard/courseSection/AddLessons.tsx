import  { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import AddContent from "./AddContent";

const AddLessons = () => {
  const [lessons, setLessons] = useState<Array<Array<object>>>([[]]);

  const handleContentSubmit = (lessonIndex: number, lessonContent: Array<object>) => {
    setLessons(prevLessons => {
      const newLessons = [...prevLessons];
      newLessons[lessonIndex] = lessonContent;
      return newLessons;
    });
  };
  

const handleGlobalSubmit = () => {
  console.log("All Lessons:", lessons);
  // Add your logic for submitting all lessons here
  // For demonstration, you can log both lessons and content
  lessons.forEach((lessonContent, index) => {
    console.log(`Lesson ${index + 1} Content:`, lessonContent);
    // Add your logic to submit lessonContent here
  });
};


  // Function to add a new lesson
  const handleAddLesson = () => {
    setLessons([...lessons, []]);
  };

  return (
    <div className="text-gray-900 bg-slate-50 h-screen w-full pl-10">
      {lessons.map((lessonContent, index) => (
        <div key={index}>
   <AddContent
  lessonIndex={index} // Make sure lessonIndex is correctly assigned
  onContentSubmit={handleContentSubmit}
/>


          {index !== lessons.length - 1 && <hr className="my-6" />}
        </div>
      ))}
      <button
        onClick={handleAddLesson}
        className="px-4 py-2 bg-green-500 text-white rounded-md mt-4 mr-4"
      >
        Add New Lesson
      </button>
      <button
        onClick={handleGlobalSubmit}
        className="px-4 py-2 bg-blue-500 text-white rounded-md mt-4"
      >
        Submit All
      </button>
    </div>
  );
};

export default AddLessons;
