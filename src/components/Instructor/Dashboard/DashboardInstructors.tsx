

function DashboardInstructors() {
  return (
    <div>DashboardInstructors</div>
  )
}

export default DashboardInstructors

// import React, { useState, useEffect } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { AiOutlineConsoleSql } from "react-icons/ai";

// interface CreateCourse2Props {
//   onNext: () => void;
//   onPrev: () => void;
// }

// const CreateCourse2: React.FC<CreateCourse2Props> = ({ onNext, onPrev }) => {
//   const [benefits, setBenefits] = useState<string[]>([""]);
//   const [prerequisites, setPrerequisites] = useState<string[]>([""]);

//   // Validation schema using Yup
//   const validationSchema = Yup.object().shape({
//     benefits: Yup.array().of(Yup.string()).required("Benefits are required"),
//     prerequisites: Yup.array()
//       .of(Yup.string())
//       .required("Prerequisites are required"),
//   });

//   // Initial form values
//   const initialValues = {
//     benefits: [],
//     prerequisites: [],
//   };

//   useEffect(() => {
//     setBenefits([""]);
//     setPrerequisites([""]);
//   }, []);

//   // Handle form submission
//   const handleSubmit = (values: any) => {
//     // Handle form submission logic here
//     console.log("Form submitted with values:", values);
//   };

//   // Function to add new input for benefits
//   const addBenefitInput = () => {
//     // Check if any existing input is null
//     if (benefits.some((benefit) => benefit.trim() === "")) {
//       toast.error("Please fill all existing benefit inputs");
//     } else {
//       setBenefits([...benefits, ""]);
//     }
//   };

//   // Function to add new input for prerequisites
//   const addPrerequisiteInput = () => {
//     // Check if any existing input is null
//     if (prerequisites.some((prerequisite) => prerequisite.trim() === "")) {
//       toast.error("Please fill all existing prerequisite inputs");
//     } else {
//       setPrerequisites([...prerequisites, ""]);
//     }
//   };

//   // Function to handle input change for benefits
//   const handleBenefitInputChange = (index: number, value: string) => {
//     const updatedBenefits = [...benefits];
//     updatedBenefits[index] = value;
//     setBenefits(updatedBenefits);
//   };

//   // Function to handle input change for prerequisites
//   const handlePrerequisiteInputChange = (index: number, value: string) => {
//     const updatedPrerequisites = [...prerequisites];
//     updatedPrerequisites[index] = value;
//     setPrerequisites(updatedPrerequisites);
//   };

//   // Function to handle form submission
//   const handleFormSubmit = (values: any) => {
//     // Check if any input is empty or null
//     if (benefits.some((benefit) => !benefit.trim()) || prerequisites.some((prerequisite) => !prerequisite.trim())) {
//       toast.error("Please fill all inputs");
//     } else {
//       console.log(values,"------------------------------------")
//       // Proceed with form submission
//       handleSubmit(values);
//     }
//   };

//   // Function to handle deletion of input
//   const handleDeleteInput = (index: number, type: string) => {
//     if (type === "benefits") {
//       const updatedBenefits = [...benefits];
//       updatedBenefits.splice(index, 1);
//       setBenefits(updatedBenefits);
//     } else if (type === "prerequisites") {
//       const updatedPrerequisites = [...prerequisites];
//       updatedPrerequisites.splice(index, 1);
//       setPrerequisites(updatedPrerequisites);
//     }
//   };

//   return (
//     <div className="text-gray-900 bg-slate-50 h-screen w-full pl-10">
//       <div className="p-4 flex">
//         <h1 className="text-3xl font-bold">Pre-requisites of course</h1>
//       </div>
//       <ToastContainer />
//       <div className="px-3 py-4 flex flex-col bg-white w-5/6 rounded-md">
//         <Formik
//           initialValues={initialValues}
//           validationSchema={validationSchema}
//           onSubmit={handleFormSubmit}
//         >
//           {({ errors, touched }) => (
//             <Form>
//               <div>
//                 <p className="text-lg font-semibold mb-2">
//                   What are the benefits for the students in the course
//                 </p>
//                 {benefits.map((benefit, index) => (
//                   <div key={index} className="mb-3 flex">
//                     <Field
//                       name={`benefits.${index}`}
//                       type="text"
//                       as="input"
//                       className="appearance-none block bg-gray-50 text-gray-700 border border-gray-300 rounded-md p-1  w-2/4 mr-2"
//                       value={benefit}
//                       onChange={(e) => handleBenefitInputChange(index, e.target.value)}
//                     />
//                     {index !== benefits.length - 1 && (
//                       <button
//                         type="button"
//                         onClick={() => handleDeleteInput(index, "benefits")}
//                         className="bg-red-500 text-white py-1 px-2 rounded"
//                       >
//                         Delete
//                       </button>
//                     )}
//                   </div>
//                 ))}
//                 <ErrorMessage name="benefits" component="div" className="text-red-500" />
//                 <button type="button" onClick={addBenefitInput} className="m-2 bg-blue-500 text-white py-1 px-2 rounded">
//                   +
//                 </button>
//               </div>

//               <div>
//                 <p className="text-lg font-semibold mb-2">
//                   What are the prerequisites for students in this course
//                 </p>
//                 {prerequisites.map((prerequisite, index) => (
//                   <div key={index} className="mb-3 flex">
//                     <Field
//                       name={`prerequisites.${index}`}
//                       type="text"
//                       as="input"
//                       className="appearance-none block bg-gray-50 text-gray-700 border border-gray-300 rounded-md p-1  w-2/4 mr-2"
//                       value={prerequisite}
//                       onChange={(e) => handlePrerequisiteInputChange(index, e.target.value)}
//                     />
//                     {index !== prerequisites.length - 1 && (
//                       <button
//                         type="button"
//                         onClick={() => handleDeleteInput(index, "prerequisites")}
//                         className="bg-red-500 text-white py-1 px-2 rounded"
//                       >
//                         Delete
//                       </button>
//                     )}
//                   </div>
//                 ))}
//                 <ErrorMessage name="prerequisites" component="div" className="text-red-500" />
//                 <button type="button" onClick={addPrerequisiteInput} className="m-2 bg-blue-500 text-white py-1 px-2 rounded">
//                   +
//                 </button>
//               </div>

//               <button type="submit" className="m-2 bg-blue-500 text-white py-1 px-2 rounded">
//                 Submit
//               </button>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </div>
//   );
// };

// export default CreateCourse2;