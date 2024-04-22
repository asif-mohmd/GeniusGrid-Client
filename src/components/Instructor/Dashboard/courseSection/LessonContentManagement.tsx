// LessonContentManagement.tsx
import React, { useState } from "react";
import LessonComponent from "./LessonComponent";

interface LessonContent {
  videoTitle: string;
  videoURL: string;
}

const LessonContentManagement: React.FC = () => {
  const [lessons, setLessons] = useState<LessonContent[][]>([]);

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
      alert("Please add content to the current lesson before creating a new one.");
    }
  };

  const handleGlobalSubmit = () => {
    if (lessons.some((lesson) => lesson.length > 0)) {
      console.log(lessons);
    } else {
      alert("There is no content to submit.");
    }
  };

  const handleDeleteLesson = (lessonIndex: number) => {
    const updatedLessons = lessons.filter((_, index) => index !== lessonIndex);
    setLessons(updatedLessons);
  };

  return (
    <div className="container mx-auto p-8">
      <div>
        {lessons.map((lesson, lessonIndex) => (
          <div key={lessonIndex}>
            <LessonComponent
              lesson={lesson}
              lessonIndex={lessonIndex}
              onAddContent={handleAddContent}
              onDeleteContent={() => handleDeleteLesson(lessonIndex)}
            />
            <button
              type="button"
              onClick={() => handleDeleteLesson(lessonIndex)}
              className="py-2 px-4 bg-red-500 text-white rounded-lg ml-2 hover:bg-red-600 focus:outline-none"
            >
              Delete Lesson
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={handleNewLesson}
        className="py-2 px-4 bg-blue-500 text-white rounded-lg mb-4 ml-2 hover:bg-blue-600 focus:outline-none"
      >
        New Lesson
      </button>
      <button
        type="button"
        onClick={handleGlobalSubmit}
        className="block w-full py-3 bg-blue-500 text-white rounded-lg mt-8 hover:bg-blue-600 focus:outline-none"
      >
        Submit All Lessons
      </button>
    </div>
  );
};

export default LessonContentManagement;
