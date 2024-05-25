// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { Link, useNavigate } from "react-router-dom";
// import { userAxios } from "../../../constraints/axiosInterceptors/userAxiosInterceptors";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useDispatch } from "react-redux";
// import { setRegisterData } from "../../../redux/registerData/registerData";
// import userEndpoints from "../../../constraints/endpoints/userEndpoints";

// const Signup: React.FC = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   return (
//     <div className="flex flex-col min-h-screen justify-center items-center bg-gray-100">
//       <ToastContainer />
//       <div className="bg-white px-14 rounded-xl shadow-lg py-8">
//         <h6 className="text-xl font-medium mb-2 text-center">
//           Create an account
//         </h6>
//         <Formik
//           initialValues={{
//             name: "",
//             email: "",
//             password: "",
//           }}
//           validationSchema={Yup.object().shape({
//             name: Yup.string().required("Name is required"),
//             email: Yup.string()
//               .email("Invalid email address")
//               .required("Email is required"),
//             password: Yup.string()
//               .min(8, "Password must be at least 8 characters")
//               .matches(
//                 /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
//                 "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
//               )
//               .required("Password is required"),
//           })}
//           onSubmit={async (values, { setSubmitting }) => {
//             try {
//               const userData = await userAxios.post(
//                 userEndpoints.register,
//                 values
//               );

//               if (userData.data.status) {
//                 dispatch(setRegisterData(values));
//                 navigate("/otp");
//               } else {
//                 toast.error("Email already exists");
//               }
//             } catch (error) {
//               console.error("Error:", error);
//               toast.error("An error occurred");
//             }
//             setSubmitting(false);
//           }}
//         >
//           {({ isSubmitting }) => (
//             <Form className="w-full max-w-md">
//               <div className="mb-6">
//                 <label
//                   className="block text-gray-600 font-semibold mb-2"
//                   htmlFor="name"
//                 >
//                   Name
//                 </label>
//                 <Field
//                   className="bg-white appearance-none border-2 border-gray-100 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-300"
//                   type="text"
//                   name="name"
//                 />
//                 <ErrorMessage
//                   className="text-red-500 text-sm"
//                   name="name"
//                   component="div"
//                 />
//               </div>
//               <div className="mb-6 ">
//                 <label
//                   className="block text-gray-600 font-semibold mb-2"
//                   htmlFor="email"
//                 >
//                   Email
//                 </label>
//                 <Field
//                   className="bg-white appearance-none border-2 border-gray-100 rounded-lg w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-300"
//                   type="email"
//                   name="email"
//                 />
//                 <ErrorMessage
//                   className="text-red-500 text-sm"
//                   name="email"
//                   component="div"
//                 />
//               </div>
//               <div className="mb-6">
//                 <label
//                   className="block text-gray-600 font-semibold mb-2"
//                   htmlFor="password"
//                 >
//                   Password
//                 </label>
//                 <Field
//                   className="bg-white appearance-none border-2 border-gray-100 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-300"
//                   type="password"
//                   name="password"
//                 />
//                 <ErrorMessage
//                   className="text-red-500 text-sm"
//                   name="password"
//                   component="div"
//                 />
//               </div>
//               <div className="flex flex-col items-center justify-center mb-4">
//                 <button
//                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-14 rounded-md mb-2"
//                   type="submit"
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? "Creating account..." : "Create account"}
//                 </button>
//                 <div className="m-3">
//                   <span className="text-gray-600 text-sm">
//                     Already have an account?{" "}
//                     <Link
//                       className="text-blue-600 font-semibold"
//                       to={userEndpoints.login}
//                     >
//                       Log In.
//                     </Link>
//                   </span>
//                 </div>
//               </div>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </div>
//   );
// };

// export default Signup;
