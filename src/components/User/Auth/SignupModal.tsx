import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { userAxios } from "../../../constraints/axiosInterceptors/userAxiosInterceptors";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { setRegisterData } from "../../../redux/registerData/registerData";
import userEndpoints from "../../../constraints/endpoints/userEndpoints";


interface SignupModalProps {
  onClose: () => void;
  onShowLogin: () => void
}



const SignupModal = ({ onClose }:SignupModalProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

 
  const handleLoginClick = () => {
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="relative w-full max-w-md px-4 h-full md:h-auto flex items-center justify-center">
        
        <div className="bg-white rounded-lg shadow relative dark:bg-gray-700 w-full mx-4 sm:mx-6 md:mx-0 md:max-w-lg lg:max-w-xl">
        <div className="flex justify-end p-2">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                onClick={onClose}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          
          <div className="p-8">
            
            <h6 className="text-xl font-medium mb-2 text-center">
              Create an account
            </h6>
            
            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
              }}
              validationSchema={Yup.object().shape({
                name: Yup.string().required("Name is required"),
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Email is required"),
                password: Yup.string()
                  .min(8, "Password must be at least 8 characters")
                  .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                    "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
                  )
                  .required("Password is required"),
              })}
              onSubmit={async (values, { setSubmitting }) => {
                try {
                  const userData = await userAxios.post(
                    userEndpoints.register,
                    values
                  );

                  if (userData.data.status) {
                    dispatch(setRegisterData(values));
                    navigate("/otp");
                    onClose(); // Close the modal after successful registration
                  } else {
                    toast.error("Email already exists");
                  }
                } catch (error) {
                  console.error("Error:", error);
                  toast.error("An error occurred");
                }
                setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="mb-6">
                    <label
                      className="block text-gray-600 font-semibold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <Field
                      className="input-field"
                      type="text"
                      name="name"
                    />
                    <ErrorMessage
                      className="text-red-500 text-sm"
                      name="name"
                      component="div"
                    />
                  </div>
              <div className="mb-6 ">
                <label
                  className="block text-gray-600 font-semibold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <Field
                  className="bg-white appearance-none border-2 border-gray-100 rounded-lg w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-300"
                  type="email"
                  name="email"
                />
                <ErrorMessage
                  className="text-red-500 text-sm"
                  name="email"
                  component="div"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-600 font-semibold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <Field
                  className="bg-white appearance-none border-2 border-gray-100 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-300"
                  type="password"
                  name="password"
                />
                <ErrorMessage
                  className="text-red-500 text-sm"
                  name="password"
                  component="div"
                />
              </div>
              <div className="flex flex-col items-center justify-center mb-4">
                    <button
                      className="btn-primary mb-2"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Creating account..." : "Create account"}
                    </button>
                    <div className="m-3">
                      <span className="text-gray-600 text-sm">
                        Already have an account?{" "}
                        <button
  onClick={handleLoginClick}
  className="text-blue-700 hover:underline dark:text-blue-500"
>
  Login
</button>
                      </span>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;