import { useState } from "react";
import { CourseData } from "../../../interfaces/ICourseDetails"; // Assuming "ICourseDetails" is correct
import { FaPlayCircle } from 'react-icons/fa'; // Importing play circle icon from react-icons library



function PurchasedCoursePage({ courseData, onVideoTitleClick }: { courseData: CourseData, onVideoTitleClick: (title: string) => void }) {
    const { lessons } = courseData;
    const [openLessonIndex, setOpenLessonIndex] = useState<number | null>(null);

    const toggleLesson = (lessonIndex: number) => {
        if (openLessonIndex === lessonIndex) {
            setOpenLessonIndex(null);
        } else {
            setOpenLessonIndex(lessonIndex);
        }
    };


    return (
        <div>
            {lessons.map((lesson, lessonIndex) => (
                <div key={lessonIndex} className="mb-4">
                    <button
                        className="flex items-center justify-between w-full p-4 bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-200"
                        onClick={() => toggleLesson(lessonIndex)}
                    >
                        <span className="text-lg font-semibold">Lesson {lessonIndex + 1}</span>
                        <svg
                            className={`w-6 h-6 transition-transform transform ${openLessonIndex === lessonIndex ? 'rotate-180' : ''}`}
                            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    {openLessonIndex === lessonIndex && (
                        <div>
                            {lesson.map((video, videoIndex) => ( // Here, use 'lesson' instead of 'lessons'
                                <div key={videoIndex} className="flex items-center p-4 bg-gray-200 rounded-lg mt-1">
                                    <FaPlayCircle size={24} className="text-blue-500 mr-4 cursor-pointer" /> {/* Play circle icon */}
                                    <span className="flex-1">{video.videoTitle}</span> {/* Video title */}
                                    <button onClick={() => onVideoTitleClick(video.videoURL)} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Watch</button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default PurchasedCoursePage;

