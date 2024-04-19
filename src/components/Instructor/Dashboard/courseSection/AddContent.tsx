import { useState } from "react";
import { toast } from "react-toastify";

const AddContent = ({ lessonId, setLessons, lessons }) => {
  const [contents, setContents] = useState([]);
  const [videoTitle, setVideoTitle] = useState("");
  const [videoURL, setVideoURL] = useState("");

  const handleSubmitContent = (e) => {
    e.preventDefault();
    if (videoTitle.trim() === "" || videoURL.trim() === "") {
      toast.error("Please fill in all fields!");
      return;
    }

    // Add the new content to the current lesson
    const updatedLessons = lessons.map((lesson) => {
      if (lesson.id === lessonId) {
        return {
          ...lesson,
          contents: [
            ...(lesson.contents || []),
            {
              videoTitle: videoTitle,
              videoURL: videoURL,
            },
          ],
        };
      }
      return lesson;
    });

    setLessons(updatedLessons);
    toast.success("Content added successfully!");

    // Clear the input fields
    setVideoTitle("");
    setVideoURL("");
  };

  const handleAddNewContent = () => {
    if (videoTitle.trim() === "" || videoURL.trim() === "") {
      toast.error("Please fill in all fields!");
      return;
    }

    // Add the new content to the current lesson without submitting
    setContents([
      ...contents,
      {
        videoTitle: videoTitle,
        videoURL: videoURL,
      },
    ]);

    // Clear the input fields
    setVideoTitle("");
    setVideoURL("");
  };

  return (
    <div>
      <div className="sm:w-3/4 bg-white p-4 rounded-xl">
        <div className="p-3 flex">
          <h1 className="text-xl font-bold">Contents for Lesson {lessonId}</h1>
        </div>
        {contents.map((content, index) => (
          <div key={index} className="mb-4">
            <p className="text-sm font-medium text-gray-700">Content {index + 1}</p>
            <p className="text-base font-semibold">{content.videoTitle}</p>
            <p className="text-base">{content.videoURL}</p>
          </div>
        ))}
        <form onSubmit={handleSubmitContent}>
          <div className="mb-4">
            <label
              htmlFor={`videoTitle_${lessonId}`}
              className="block text-sm font-medium text-gray-700"
            >
              Video Title
            </label>
            <input
              type="text"
              id={`videoTitle_${lessonId}`}
              value={videoTitle}
              onChange={(e) => setVideoTitle(e.target.value)}
              className="appearance-none block w-full bg-slate-50 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor={`videoURL_${lessonId}`}
              className="block text-sm font-medium text-gray-700"
            >
              Video URL
            </label>
            <input
              type="text"
              id={`videoURL_${lessonId}`}
              value={videoURL}
              onChange={(e) => setVideoURL(e.target.value)}
              className="appearance-none block w-full bg-slate-50 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md mr-4"
          >
            Submit Content
          </button>
          <button
            type="button"
            onClick={handleAddNewContent}
            className="px-4 py-2 bg-green-500 text-white rounded-md"
          >
            Add New Content
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContent;
