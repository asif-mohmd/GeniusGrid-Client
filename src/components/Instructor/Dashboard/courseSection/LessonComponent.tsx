// LessonComponent.tsx
import React, { useState } from "react";

interface LessonContent {
  videoTitle: string;
  videoURL: string;
}

interface LessonProps {
  lesson: LessonContent[];
  lessonIndex: number;
  onDeleteContent: (lessonIndex: number, contentIndex: number) => void;
  onAddContent: (lessonIndex: number, formData: LessonContent) => void;
  
}

const LessonComponent: React.FC<LessonProps> = ({
  lesson,
  lessonIndex,
  onDeleteContent,
  onAddContent,
}) => {
  const [formData, setFormData] = useState<LessonContent>({
    videoTitle: "",
    videoURL: "",
  });
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleFormDataSubmit = () => {
    if (formData.videoTitle.trim() === "" || formData.videoURL.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }

    if (editingIndex !== null) {
      lesson[editingIndex] = formData; // Update existing content
      setEditingIndex(null);
    } else {
      onAddContent(lessonIndex, formData); // Add new content
    }

    setFormData({ videoTitle: "", videoURL: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleEdit = (contentIndex: number) => {
    setFormData(lesson[contentIndex]);
    setEditingIndex(contentIndex);
  };

  const handleDeleteContent = (contentIndex: number) => {
    onDeleteContent(lessonIndex, contentIndex); // Delete content
  };

  return (
    <div key={lessonIndex} className="mb-8 border border-gray-300 rounded-lg p-4">
      <p className="text-lg font-semibold mb-2">Lesson {lessonIndex + 1}</p>
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
              onClick={() => handleEdit(contentIndex)}
              className="py-1 px-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none mr-2"
            >
              Edit
            </button>
            <button
              type="button"
              onClick={() => handleDeleteContent(contentIndex)}
              className="py-1 px-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
            >
              Delete Content
            </button>
          </div>
        </div>
      ))}
      <div className="border border-gray-300 rounded-lg p-4 mt-4">
        <p className="font-semibold">Add New Content</p>
        <input
          type="text"
          name="videoTitle"
          value={formData.videoTitle}
          onChange={handleInputChange}
          placeholder="Enter Video Title"
          className="mb-2 py-2 px-4 border border-gray-300 rounded-lg focus:outline-none"
        />
        <input
          type="text"
          name="videoURL"
          value={formData.videoURL}
          onChange={handleInputChange}
          placeholder="Enter Video URL"
          className="mb-2 py-2 px-4 border border-gray-300 rounded-lg focus:outline-none"
        />
        <button
          type="button"
          onClick={handleFormDataSubmit}
          className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          {editingIndex !== null ? "Update Content" : "Add Content"}
        </button>
      </div>
    </div>
  );
};

export default LessonComponent;
