// ContentComponent.tsx
import React from "react";

interface LessonContent {
  videoTitle: string;
  videoURL: string;
}

interface LessonFormProps {
  formData: LessonContent;
  onSubmit: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  buttonText: string;
}

const ContentComponent: React.FC<LessonFormProps> = ({
  formData,
  onSubmit,
  onChange,
  buttonText,
}) => {
  return (
    <>
      <input
        type="text"
        name="videoTitle"
        value={formData.videoTitle}
        onChange={onChange}
        placeholder="Enter Video Title"
        className="mb-4 py-2 px-4 border border-gray-300 rounded-lg focus:outline-none"
      />
      <input
        type="text"
        name="videoURL"
        value={formData.videoURL}
        onChange={onChange}
        placeholder="Enter Video URL"
        className="mb-4 py-2 px-4 border border-gray-300 rounded-lg focus:outline-none"
      />
      <button
        type="button"
        onClick={onSubmit}
        className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none mr-2"
      >
        {buttonText}
      </button>
    </>
  );
};

export default ContentComponent;
