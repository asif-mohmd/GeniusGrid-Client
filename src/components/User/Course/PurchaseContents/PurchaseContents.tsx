import { useState } from "react";
import Overview from "./Overview";
import Resources from "./Resources";
import Reviews from "./Reviews";
import Comments from "./Comments";

interface PurchaseContentsProps {
  selectedVideoDescription: string | null;
  selectedVideoLinks: string[] | null;
  courseId:string,
  videoId:string
}
const PurchaseContents: React.FC<PurchaseContentsProps> = ({
  selectedVideoDescription,
  selectedVideoLinks,
  courseId,
  videoId
}) => {
  const [activeComponent, setActiveComponent] = useState<string>("Overview"); // Track active component

  const handleComponentClick = (componentName: string) => {
    setActiveComponent(componentName === activeComponent ? "" : componentName);
  };

  console.log(courseId,"---------")
  console.log(videoId,"00000000000000")

  return (
    <div>
      <div className="flex w-full items-center  justify-between rounded bg-gray-500 bg-opacity-20 p-2 px-4 shadow-inner shadow-[bg-gray-700] backdrop-blur">
        <div
          onClick={() => handleComponentClick("Overview")}
          className={`cursor-pointer ${
            activeComponent === "Overview" ? "text-blue-600" : "text-gray-500"
          } hover:text-blue-600`}
        >
          Overview
        </div>
        <div
          onClick={() => handleComponentClick("Resources")}
          className={`cursor-pointer ${
            activeComponent === "Resources" ? "text-blue-600" : "text-gray-500"
          } hover:text-blue-600`}
        >
          Resources
        </div>
        <div
          onClick={() => handleComponentClick("Comments")}
          className={`cursor-pointer ${
            activeComponent === "Comments" ? "text-blue-600" : "text-gray-500"
          } hover:text-blue-600`}
        >
          QA
        </div>
        <div
          onClick={() => handleComponentClick("Reviews")}
          className={`cursor-pointer ${
            activeComponent === "Reviews" ? "text-blue-600" : "text-gray-500"
          } hover:text-blue-600`}
        >
          Reviews
        </div>
      </div>
      <div className="bg-gray-100 p-3">
        {activeComponent === "Overview" && (
          <Overview selectedVideoDescription={selectedVideoDescription} />
        )}
        {activeComponent === "Resources" && (
          <Resources selectedVideoLinks={selectedVideoLinks} />
        )}
        {activeComponent === "Comments" && <Comments 
        courseId={courseId} videoId={videoId}

        />}
        {activeComponent === "Reviews" && <Reviews />}
      </div>
    </div>
  );
};

export default PurchaseContents;
