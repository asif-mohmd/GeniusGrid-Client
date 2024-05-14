import { useState } from "react";
import { CourseData } from "../../../interfaces/UserInterfaces/ICourseDetails"; // Assuming "ICourseDetails" is correct
import { LuMonitorPlay } from "react-icons/lu";



function PurchasedCoursePage({ courseData, onVideoTitleClick, onSelectedVideo }: { courseData: CourseData, onVideoTitleClick: (title: string) => void, onSelectedVideo: string | null }) {
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
        <div className="mt-5 mb-3">
            <div className="p-3 bg-gray-100 rounded-lg md:w-5/6">
                {lessons.map((lesson, lessonIndex) => (
                    <div key={lessonIndex} className="mb-4 border-b pb-3 border-gray-200">
                        <button
                            className="flex items-center justify-between w-full focus:outline-none"
                            onClick={() => toggleLesson(lessonIndex)}
                        >
                            <span className="text-md font-Poppins font-[500] text-black ">Chapter {lessonIndex + 1}</span>
                            <svg
                                className={`w-6 h-6 transition-transform transform ${openLessonIndex === lessonIndex ? 'rotate-180' : ''}`}
                                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        {openLessonIndex === lessonIndex && (
                            <div className="mt-2">
                                {lesson.map((video, videoIndex) => (

                                    <div key={videoIndex} className={`flex items-center mb-2 p-1 cursor-pointer ${video.videoURL.toLowerCase() === onSelectedVideo?.toLowerCase() ? "bg-gray-800 text-white" : ""
                                        }`}
                                        onClick={() => onVideoTitleClick(video.videoURL)} >
                                        <LuMonitorPlay size={18} className="text mr-4 text-[#1cdada] " />
                                        <span className="flex-1 ">{video.videoTitle}</span>

                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            
        </div>
    );
}

export default PurchasedCoursePage;

