// import { useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";


//   const AddLessons= () => {
//   const [benefits, setBenefits] = useState<string[]>([""]);
//   const [prerequisites, setPrerequisites] = useState<string[]>([""]);

//   const handleAddInput = (type: "benefits" | "prerequisites") => {
//     if (type === "benefits") {
//       if (benefits.some(benefit => benefit.trim() === "")) {
//         toast.error("Please fill all the blank inputs");
//         return;
//       }
//       setBenefits([...benefits, ""]);
//     } else if (type === "prerequisites") {
//       if (prerequisites.some(prerequisite => prerequisite.trim() === "")) {
//         toast.error("Please fill all the blank inputs");
//         return;
//       }
//       setPrerequisites([...prerequisites, ""]);
//     }
//   };

//   const handleInputChange = (
//     index: number,
//     type: "benefits" | "prerequisites",
//     value: string
//   ) => {
//     if (type === "benefits") {
//       const updatedBenefits = [...benefits];
//       updatedBenefits[index] = value;
//       setBenefits(updatedBenefits);
//     } else if (type === "prerequisites") {
//       const updatedPrerequisites = [...prerequisites];
//       updatedPrerequisites[index] = value;
//       setPrerequisites(updatedPrerequisites);
//     }
//   };

//   const handleDeleteInput = (
//     index: number,
//     type: "benefits" | "prerequisites"
//   ) => {
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

//   const handleSubmit = () => {
//     // Handle form submission here, you can access benefits and prerequisites arrays
//     console.log("Form submitted with benefits:", benefits);
//     console.log("Form submitted with prerequisites:", prerequisites);
//   };

//   return (
//     <div className="text-gray-900 bg-slate-50 h-screen w-full pl-10">
//       <div className="p-4 flex">
//         <h1 className="text-3xl font-bold">Pre-requisites of course</h1>
//       </div>
//       <div className="px-3 py-4 flex flex-col bg-white w-5/6 rounded-md">
//         <p className="text-lg font-semibold mb-2">
//           What are the benefits for the students in the course
//         </p>
//         {benefits.map((benefit, index) => (
//           <div key={`benefit-${index}`} className="mb-4">
//             <input
//               type="text"
//               className="appearance-none block bg-gray-50 text-gray-700 border border-gray-300 rounded-md p-1  w-2/4"
//               value={benefit}
//               onChange={(e) =>
//                 handleInputChange(index, "benefits", e.target.value)
//               }
//             />
//             {index !== benefits.length - 1 && (
//               <button
//                 onClick={() => handleDeleteInput(index, "benefits")}
//                 className="m-2 bg-red-500 text-white py-1 px-2 rounded"
//               >
//                 Delete
//               </button>
//             )}
//             {index === benefits.length - 1 && (
//               <button
//                 onClick={() => handleAddInput("benefits")}
//                 className="m-2 bg-blue-500 text-white py-1 px-2 rounded"
//               >
//                 +
//               </button>
//             )}
//           </div>
//         ))}
//         <p className="text-lg font-semibold mb-2">
//           What are the prerequisites for students in this course
//         </p>
//         {prerequisites.map((prerequisite, index) => (
//           <div key={`prerequisite-${index}`} className="mb-4">
//             <input
//               type="text"
//               className="appearance-none block bg-gray-50 text-gray-700 border border-gray-300 rounded-md p-1 w-2/4"
//               value={prerequisite}
//               onChange={(e) =>
//                 handleInputChange(index, "prerequisites", e.target.value)
//               }
//             />
//             {index !== prerequisites.length - 1 && (
//               <button
//                 onClick={() => handleDeleteInput(index, "prerequisites")}
//                 className="m-2 bg-red-500 text-white py-1 px-2 rounded"
//               >
//                 Delete
//               </button>
//             )}
//             {index === prerequisites.length - 1 && (
//               <button
//                 onClick={() => handleAddInput("prerequisites")}
//                 className="m-2 bg-blue-500 text-white py-1 px-2 rounded"
//               >
//                 +
//               </button>
//             )}
//           </div>
//         ))}
//         <button onClick={handleSubmit} className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
//           Next
//         </button>
//         <button onClick={onNext}>Next</button>
//         <button onClick={onPrev}>Prev</button>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// }

// export default AddLessons;
