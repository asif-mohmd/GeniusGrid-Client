import  { useState } from 'react';
import CreateCourse1 from './CreateCourse1';
import CreateCourse2 from './CreateCourse2';
import CreateCourse3 from './CreateCourse3';

function DashboardCreateCourse() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div>
      {currentStep === 1 && (
        <CreateCourse1 onNext={handleNext} />
      )}
      {currentStep === 2 && (
        
        <CreateCourse2  onNext={handleNext} onPrev={handlePrev} />
      )}
        {currentStep === 3 && (
        <CreateCourse3 onNext={handleNext} onPrev={handlePrev} />
      )}
    </div>
  );
}

export default DashboardCreateCourse;
