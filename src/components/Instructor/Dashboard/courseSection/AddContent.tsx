import React, { useState } from "react";

interface AddContentProps {
  lessonIndex: number; // Define lessonIndex prop
  onContentSubmit: (lessonIndex: number, lessonContent: Array<object>) => void; // Adjust the function signature
}

const AddContent: React.FC<AddContentProps> = ({ lessonIndex, onContentSubmit }) => {
  const [inputs, setInputs] = useState<string[]>([""]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lessonContent = inputs
      .filter((input) => input.trim() !== "")
      .map((input) => ({ videoTitle: input }));
    if (lessonContent.length > 0) {
      onContentSubmit(lessonIndex, lessonContent);
      setInputs([""]); // Reset input after submission
    }
  };
  
  
  
  // Function to add a new input field
  const handleAddInput = () => {
    if (inputs[inputs.length - 1].trim() !== "") {
      setInputs([...inputs, ""]);
    }
  };

  // Function to handle input change
  const handleInputChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  return (
    <div>
      <div className="sm:w-3/4 bg-white p-4 rounded-xl">
        <div className="p-3 flex">
          <h1 className="text-xl font-bold">Contents for Lesson</h1>
        </div>
        <form onSubmit={handleSubmit}>
          {inputs.map((input, index) => (
            <div className="mb-4" key={index}>
              <label className="block text-sm font-medium text-gray-700">
                Video Title
              </label>
              <input
                type="text"
                value={input}
                onChange={(e) => handleInputChange(index, e.target.value)}
                className="appearance-none block w-full bg-slate-50 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
            </div>
          ))}
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md mr-4"
          >
            Submit Content
          </button>
          <button
            type="button"
            onClick={handleAddInput}
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
