import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/Store";
import { instructoraxios } from "../../../constraints/axiosInterceptors/instructorAxiosInterceptors";
import courseEndspoints from "../../../constraints/endpoints/courseEndspoints";
import { useNavigate } from "react-router-dom";
import instructorEndpoints from "../../../constraints/endpoints/instructorEndpoints";
import { confirmAlert } from "react-confirm-alert"; // Import the library
import "react-confirm-alert/src/react-confirm-alert.css"; // Import its CSS
// import { IoArrowBackCircleOutline } from "react-icons/io5";
import LessonComponent from "./LessonContent";
import { setEditCourseDataEmpty } from "../../../redux/instructorSlices/couseSlice/editCourseData";

interface LessonContent {
  videoTitle: string;
  videoURL: string;
  subtitleURL: string;
  videoDescription: string;
  links: string[];
}

interface videoData {
  fileName: string;
  videoUrl: string;
}



const EditLessonComponent: React.FC = () => {
  const [lessons, setLessons] = useState<LessonContent[][]>([]);

  const courseLessonsDetails = useSelector((store: RootState) => store.editCourseData.FullCourseData)


  const editCourseDetails = useSelector((store: RootState) => store.editCourseData.EditCourseData)

  const [videoDetails, setvideoDetails] = useState<videoData[]>([]);

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchCourseData() {
      try {


        const lessonsData = courseLessonsDetails?.lessons || [];
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

        const response = await instructoraxios.get("https://geniusgrid.online/transcode/videoURL");
        if (response && response.data) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const urls = response.data
          setvideoDetails(urls); // Set video URLs in state
        }
        setLessons(formattedLessons);
      } catch (error) {
        console.error("Error fetching course details:", error);
      }
    }

    fetchCourseData();
  }, [courseLessonsDetails?.lessons]);




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

              const formData = new FormData();

              if (editCourseDetails && lessons) {
                formData.append("_id", editCourseDetails?._id)
                formData.append("thumbnail", editCourseDetails?.thumbnail);
                formData.append("courseName", editCourseDetails?.courseName);
                formData.append("courseDescription", editCourseDetails.courseDescription);
                formData.append("coursePrice", editCourseDetails.coursePrice);
                formData.append("estimatedPrice", editCourseDetails.estimatedPrice);
                formData.append("courseCategory", editCourseDetails.courseCategory);
                formData.append("totalVideos", editCourseDetails.totalVideos);
                formData.append("courseLevel", editCourseDetails.courseLevel);
                formData.append("demoURL", editCourseDetails.demoURL);

                editCourseDetails.benefits.forEach((benefit, index) => {
                  formData.append(`benefits[${index}]`, benefit);
                });

                editCourseDetails.prerequisites.forEach((prerequisite, index) => {
                  formData.append(`prerequisites[${index}]`, prerequisite);
                });

                lessons.forEach((lessonRow, rowIndex) => {
                  lessonRow.forEach((lesson, lessonIndex) => {
                    const lessonPrefix = `lessons[${rowIndex}][${lessonIndex}]`;
                    formData.append(`${lessonPrefix}[videoTitle]`, lesson.videoTitle);
                    formData.append(`${lessonPrefix}[videoURL]`, lesson.videoURL);
                    formData.append(`${lessonPrefix}[subtitleURL]`, lesson.subtitleURL);
                    formData.append(`${lessonPrefix}[videoDescription]`, lesson.videoDescription);

                    lesson.links.forEach((link, linkIndex) => {
                      formData.append(`${lessonPrefix}[links][${linkIndex}]`, link);
                    });
                  });
                });

                // Create a Promise to ensure all data is appended before making the API call
                const formDataPromise = new Promise<void>((resolve) => {
                  // Resolve the promise after appending all data
                  resolve();
                });

                // Wait for the promise to be resolved
                await formDataPromise;

                // Once all data is appended, make the API call
   
                response = await instructoraxios.post(courseEndspoints.createOrEditCourse, formData, {
                  headers: {
                    'Content-Type': 'multipart/form-data',
                  }
                });
              } else {
                toast.error("Something went wrong. Try again")
              }


              if (response && response.status == 200) {
                dispatch(setEditCourseDataEmpty())
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

  // const HandleBackPage = () => {
  //   navigate(instructorEndpoints.editCourse);
  // }


  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <ToastContainer />
      {/* <div className="flex justify-end">
       <IoArrowBackCircleOutline
          onClick={HandleBackPage}
          className="text-3xl cursor-pointer hover:text-gray-500 transition-colors duration-300 mt-2 mr-4"
        />
           </div> */}

      <div className="container mx-auto p-8 flex-grow ">
        <div className="bg-slate-50">

          {lessons.map((lesson, lessonIndex) => (
            <div key={lessonIndex} className="lesson-container bg-white rounded-lg p-4 mb-4 overflow-x-hidden w-10/12">

              <LessonComponent
                lesson={lesson}
                lessonIndex={lessonIndex}
                onAddContent={handleAddContent}
                onDeleteContent={() => handleDeleteLesson(lessonIndex)}
                videoDetails={videoDetails}
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

export default EditLessonComponent;
