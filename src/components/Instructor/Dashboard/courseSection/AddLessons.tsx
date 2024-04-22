import React, { useState } from 'react';

function YourComponent() {
  const [formData, setFormData] = useState({
    videoTitle: '',
    videoURL: '',
  });
  const [lessons, setLessons] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [activeLessonIndex, setActiveLessonIndex] = useState(null);

  const handleFormDataSubmit = () => {
    if (formData.videoTitle.trim() !== '' && formData.videoURL.trim() !== '') {
      let updatedLessons = [...lessons];
      if (activeLessonIndex === null) {
        updatedLessons.push([{ ...formData }]);
      } else {
        if (editIndex !== null) {
          updatedLessons[activeLessonIndex][editIndex] = { ...formData };
          setEditIndex(null);
        } else {
          updatedLessons[activeLessonIndex].push({ ...formData });
        }
      }
      setLessons(updatedLessons);
      setFormData({ videoTitle: '', videoURL: '' });
    }
  };

  const handleNewLesson = () => {
    if (lessons.length === 0 || lessons[lessons.length - 1].length > 0) {
      setLessons((prevLessons) => [...prevLessons, []]);
      setActiveLessonIndex(lessons.length);
    } else {
      alert('Please add content to the current lesson before creating a new one.');
    }
  };

  const handleEdit = (lessonIndex, contentIndex) => {
    setActiveLessonIndex(lessonIndex);
    setEditIndex(contentIndex);
    setFormData({ ...lessons[lessonIndex][contentIndex] });
  };

  const handleDeleteLesson = (lessonIndex) => {
    const updatedLessons = [...lessons];
    updatedLessons.splice(lessonIndex, 1);
    setLessons(updatedLessons);
    if (activeLessonIndex === lessonIndex) {
      setActiveLessonIndex(null);
    }
  };

  const handleDeleteContent = (lessonIndex, contentIndex) => {
    const updatedLessons = [...lessons];
    updatedLessons[lessonIndex].splice(contentIndex, 1);
    setLessons(updatedLessons);
  };

  const handleGlobalSubmit = () => {
    if (lessons.some((lesson) => lesson.length > 0)) {
      console.log(lessons);
    } else {
      alert('There is no content to submit.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="container mx-auto p-8">
      <button
        type="button"
        onClick={handleNewLesson}
        className="py-2 px-4 bg-blue-500 text-white rounded-lg mb-4 hover:bg-blue-600 focus:outline-none"
      >
        New Lesson
      </button>

      <div>
        {lessons.map((lesson, lessonIndex) => (
          <div key={lessonIndex} className="mb-8 border border-gray-300 rounded-lg p-4">
            <p className="text-lg font-semibold mb-2">Lesson {lessonIndex + 1}</p>
            {activeLessonIndex === lessonIndex && (
              <>
                <input
                  type="text"
                  name="videoTitle"
                  value={formData.videoTitle}
                  onChange={handleInputChange}
                  placeholder="Enter Video Title"
                  className="mb-4 py-2 px-4 border border-gray-300 rounded-lg focus:outline-none"
                />
                <input
                  type="text"
                  name="videoURL"
                  value={formData.videoURL}
                  onChange={handleInputChange}
                  placeholder="Enter Video URL"
                  className="mb-4 py-2 px-4 border border-gray-300 rounded-lg focus:outline-none"
                />
                <button
                  type="button"
                  onClick={handleFormDataSubmit}
                  className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none mr-2"
                >
                  {editIndex !== null ? 'Save Edit' : 'Add Content'}
                </button>
              </>
            )}
            <button
              type="button"
              onClick={() => handleDeleteLesson(lessonIndex)}
              className="py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
            >
              Delete Lesson
            </button>

            {lesson.map((content, contentIndex) => (
              <div key={contentIndex} className="border border-gray-300 rounded-lg p-4 mt-4">
                <p className="font-semibold">Content {contentIndex + 1}</p>
                <p className="mb-2">
                  <strong>Title:</strong> {content.videoTitle}
                </p>
                <p>
                  <strong>URL:</strong> {content.videoURL}
                </p>
                <div className="mt-4">
                  <button
                    type="button"
                    onClick={() => handleEdit(lessonIndex, contentIndex)}
                    className="py-1 px-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none mr-2"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeleteContent(lessonIndex, contentIndex)}
                    className="py-1 px-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
                  >
                    Delete Content
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={handleGlobalSubmit}
        className="block w-full py-3 bg-blue-500 text-white rounded-lg mt-8 hover:bg-blue-600 focus:outline-none"
      >
        Submit All Lessons
      </button>
    </div>
  );
}

export default YourComponent;
