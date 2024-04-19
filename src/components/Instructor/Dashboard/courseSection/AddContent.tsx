import { useState } from "react";
import { toast } from "react-toastify";

const AddContent = ({ lessonId }) => {
  const [contents, setContents] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation here
    const formData = new FormData(e.target);
    const videoTitle = formData.get("videoTitle");
    const videoURL = formData.get("videoURL");

    if (!videoTitle || !videoURL) {
      toast.error("Please fill in all fields!");
      return;
    }

    // Add new content to the list
    setContents([
      ...contents,
      {
        id: contents.length + 1,
        videoTitle,
        videoURL,
      },
    ]);

    // Clear form fields after submission
    e.target.reset();
    toast.success("Content added successfully!");
  };

  const handleDelete = (id) => {
    setContents(contents.filter((content) => content.id !== id));
    toast.success("Content deleted successfully!");
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
            <button
              onClick={() => handleDelete(content.id)}
              className="px-3 py-1 bg-red-500 text-white rounded-md mt-2"
            >
              Delete
            </button>
          </div>
        ))}
        <form onSubmit={handleSubmit}>
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
              name="videoTitle"
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
              name="videoURL"
              className="appearance-none block w-full bg-slate-50 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Add Content
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContent;
