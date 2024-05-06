import { useState, ChangeEvent, useRef } from "react";
import axios, { AxiosResponse } from "axios";
import { FiUpload } from "react-icons/fi"; // Importing upload icon from react-icons library

interface TranscodeResponse {
  message: string;
  // Add other fields if present in the response
}

function DashboardTranscodeVideo() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null); // Ref for file input element

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedFile(null); // Clear selected file
      const fileSizeInMB = file.size / (1024 * 1024);
      if (fileSizeInMB > 500) {
        setErrorMessage("File size exceeds 500 MB limit.");
        if (inputRef.current) {
          inputRef.current.value = ""; // Clear input
        }
      } else if (!file.name.endsWith(".mp4")) {
        setErrorMessage("Only MP4 files are supported.");
        if (inputRef.current) {
          inputRef.current.value = ""; // Clear input
        }
      } else {
        setSelectedFile(file);
        setErrorMessage(null);
      }
    }
  };

  const clearFile = () => {
    setSelectedFile(null);
    if (inputRef.current) {
      inputRef.current.value = ""; // Clear input
    }
  };

  const handleSubmit = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        const response: AxiosResponse<TranscodeResponse> = await axios.post(
          "http://localhost:4000/transcode",
          formData,
          {
            onUploadProgress: (progressEvent) => {
              if (progressEvent.total) {
                const percentCompleted = Math.round(
                  (progressEvent.loaded * 100) / progressEvent.total
                );
                setProgress(percentCompleted);
              } else {
                // Handle the case where progressEvent.total is undefined
                // For example, you might want to log a warning or set a default progress value
                console.warn("Progress event total is undefined.");
                setProgress(0); // Set a default progress value or handle as needed
              }
            },
            withCredentials: true,
          }
        );
        console.log("Response:", response.data.message);
        if (response.data) {
          clearFile();
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      console.error("No file selected.");
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-4">Upload Video</h2>
      <div className="border border-dashed border-gray-400 rounded-lg p-8">
        <label
          htmlFor="videoinput"
          className="flex items-center justify-center w-full h-32 bg-gray-100 cursor-pointer rounded-lg"
        >
          <FiUpload className="w-8 h-8 mr-2" /> {/* Upload icon */}
          <span className="text-lg">Choose a video</span>
        </label>
        <input
          type="file"
          onChange={handleFileChange}
          className="hidden"
          id="videoinput"
          accept=".mp4"
          ref={inputRef} // Assign ref to input element
        />
        {errorMessage && <p className="mt-4 text-red-500">{errorMessage}</p>}
        {selectedFile !== null && (
          <div className="mt-4 flex items-center">
            <p className="text-gray-700">Selected File: {selectedFile.name}</p>
            <button className="text-red-500 underline ml-2" onClick={clearFile}>
              Clear
            </button>
          </div>
        )}
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleSubmit}
        >
          Submit
        </button>
        {progress > 0 && <p className="mt-2">Progress: {progress}%</p>}
      </div>
    </div>
  );
}

export default DashboardTranscodeVideo;
