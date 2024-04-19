// import { useState } from "react";
// import ListCourses from "./ListCourses"
// import EditCourse from "./EditCourse";

// // function CoursePreview() {
// //   return (
// //     <div>
// //         <ListCourses/>
// //     </div>
// //   )
// // }

// export default CoursePreview

// function CoursePreview() {

// const [currentStep, setCurrentStep] = useState(1);

// const handleNext = () => {
//   setCurrentStep(currentStep + 1);
// };

// const handlePrev = () => {
//   setCurrentStep(currentStep - 1);
// };



// return (
//   <div className="container mx-auto py-4 bg-slate-50">
    
//     {currentStep === 1 && <ListCourses onNext={handleNext} onPrev={handlePrev} />}
//     {currentStep === 2 && <EditCourse onNext={handleNext} onPrev={handlePrev} />}
//     {/* {currentStep === 3 && <CreateCourse3 onNext={handleNext} onPrev={handlePrev} data={"UNTITLED SECTION"}/>}
//     {currentStep === 4 && <CreateCourse4 onPrev={handlePrev} data={"Course Preview"}/>} */}
//   </div>
// );
// }