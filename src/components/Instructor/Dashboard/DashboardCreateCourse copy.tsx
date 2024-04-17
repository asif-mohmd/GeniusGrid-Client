// import React from 'react';
// import { Formik, Form, Field, FormikHelpers } from 'formik';
// import * as Yup from 'yup';
// import { createCourse3 } from '../../../interfaces/IInstructorInterface';

// interface CreateCourse1Props {
//     data: createCourse3;
//     onNext: () => void;
// }

// const CreateCourse1: React.FC<CreateCourse1Props> = ({ data, onNext }) => {
//     const initialValues: createCourse3 = data || {
//         courseName: '',
//         courseDescription: '',
//         coursePrice: '',
//         estimatedPrice: '',
//         courseTags: '',
//         courseCategory: '',
//         courseLevel: '',
//         introURL: ''
//     };

//     const validationSchema = Yup.object().shape({
//         courseName: Yup.string().required('Course name is required'),
//         courseDescription: Yup.string().required('Course description is required'),
//         coursePrice: Yup.number().required('Course price is required'),
//         estimatedPrice: Yup.number().required('Estimated price is required'),
//         courseTags: Yup.string().required('Course tags are required'),
//         courseLevel: Yup.string().required('Course level is required'),
//         courseCategory: Yup.string().required('Course category is required'),
//         introURL: Yup.string().required('Introduction URL is required')
//     });

//     const handleSubmit = async (values: createCourse3, { setSubmitting }: FormikHelpers<createCourse3>) => {
//         try {
//             // Make API call to store data in the database
//             console.log(values);
//             const response = await fetch('YOUR_API_ENDPOINT', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(values)
//             });

//             // Handle response
//             if (response.ok) {
//                 // Data successfully saved
//                 console.log('Data saved successfully');
//                 // Optionally, you can redirect the user or perform other actions
//             } else {
//                 // Error handling
//                 console.error('Error saving data');
//             }
//         } catch (error) {
//             console.error('Error:', error);
//         } finally {
//             setSubmitting(false);
//         }
//     };

//     return (
//         <div className="text-gray-900 bg-slate-50 h-screen w-full ">
//             <div className="p-4 flex">
//                 <h1 className="text-3xl">Create Course</h1>
//             </div>
//             <div className="px-3 py-4 flex justify-center">
//                 <Formik
//                     initialValues={initialValues}
//                     validationSchema={validationSchema}
//                     onSubmit={handleSubmit}
//                 >
//                     {({ errors, touched, isSubmitting }) => (
//                         <Form className="sm:w-3/4 bg-white p-4 rounded-xl">
//                             <div className="flex flex-wrap -mx-3 mb-6">
//                                 <div className="w-full px-3 mb-6 md:mb-0">
//                                     <label htmlFor="courseName" className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">Course Name</label>
//                                     <Field
//                                         type="text"
//                                         id="courseName"
//                                         name="courseName"
//                                         className={`appearance-none block w-full bg-slate-50 text-gray-700 border ${errors.courseName && touched.courseName && !isSubmitting ? 'border-red-500' : 'border-gray-200'} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
//                                         placeholder="Enter course name"
//                                     />
//                                     {errors.courseName && touched.courseName && !isSubmitting && <div className="text-red-500 border-red-500 text-xs italic">{errors.courseName}</div>}
//                                 </div>
//                                 {/* Add similar Field components for other inputs */}
//                             </div>
//                             <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Next</button>
//                         </Form>
//                     )}
//                 </Formik>
//             </div>
//         </div>
//     );
// };

// export default CreateCourse1;
