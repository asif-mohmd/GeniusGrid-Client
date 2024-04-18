import React, { useState } from 'react';
import CreateCourse1 from '../CreateCourse/CreateCourse1';
import CreateCourse2 from '../CreateCourse2';
import CreateCourse3 from './CreateCourse3';
import CreateCourse4 from './CreateCourse4';

function DashboardCreateCourse() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];

  return (
    <div className="container mx-auto py-4 bg-slate-50">
      <div className="flex items-center justify-center mt-4">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${
                currentStep >= index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'
              }`}
            >
              {index + 1}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`w-4 h-1 mx-1 ${
                  currentStep >= index + 2 ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>
      {currentStep === 1 && <CreateCourse1 onNext={handleNext} data={"CREATE COURSE"} />}
      {currentStep === 2 && <CreateCourse2 onNext={handleNext} onPrev={handlePrev} data={"COURSE OPTIONS"} />}
      {currentStep === 3 && <CreateCourse3 onNext={handleNext} onPrev={handlePrev} data={"UNTITLED SECTION"}/>}
      {currentStep === 4 && <CreateCourse4 onPrev={handlePrev} data={"Course Preview"}/>}
    </div>
  );
}

export default DashboardCreateCourse;
