import { useState } from "react";
import Overview from "./Overview";
import Resources from "./Resources";
import Reviews from "./Reviews";
import QA from "./QA";



interface PurchaseContentsProps {
    
    selectedVideoDescription: string | null
    selectedVideoLinks : string[] | null
  }
  const PurchaseContents: React.FC<PurchaseContentsProps> = ({ selectedVideoDescription ,selectedVideoLinks }) => {

    const [activeComponent, setActiveComponent] = useState<string>("Overview"); // Track active component
console.log(selectedVideoLinks,"purrrrrrrrrrrrr")

    const handleComponentClick = (componentName: string) => {
        setActiveComponent(componentName === activeComponent ? "" : componentName);
      };
    
  return (
        <div>
              <div className="flex w-full items-center  justify-between rounded bg-gray-500 bg-opacity-20 p-2 px-4 shadow-inner shadow-[bg-gray-700] backdrop-blur">
              <div onClick={() => handleComponentClick("Overview")} className={`cursor-pointer ${activeComponent === "Overview" ? "text-blue-600" : "text-gray-500"} hover:text-blue-600`}>Overview</div>
              <div onClick={() => handleComponentClick("Resources")} className={`cursor-pointer ${activeComponent === "Resources" ? "text-blue-600" : "text-gray-500"} hover:text-blue-600`}>Resources</div>
              <div onClick={() => handleComponentClick("QA")} className={`cursor-pointer ${activeComponent === "QA" ? "text-blue-600" : "text-gray-500"} hover:text-blue-600`}>QA</div>
              <div onClick={() => handleComponentClick("Reviews")} className={`cursor-pointer ${activeComponent === "Reviews" ? "text-blue-600" : "text-gray-500"} hover:text-blue-600`}>Reviews</div>
            </div>

            {activeComponent === "Overview" && <Overview selectedVideoDescription={selectedVideoDescription}/>}
            {activeComponent === "Resources" && <Resources selectedVideoLinks={selectedVideoLinks} />}
            {activeComponent === "QA" && <QA />}
            {activeComponent === "Reviews" && <Reviews />}
    </div>
  )
}

export default PurchaseContents