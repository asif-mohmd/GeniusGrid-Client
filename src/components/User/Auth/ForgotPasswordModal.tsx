import React, { ChangeEvent, FormEvent, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import userEndpoints from "../../../constraints/endpoints/userEndpoints";
import { FormDataLogin } from "../../../interfaces/AuthInterfaces/IAuthInterface";
import { userAxios } from "../../../constraints/axiosInterceptors/userAxiosInterceptors";
import { useAuth } from "../../../utils/AuthContext";
import { toast } from "react-toastify";

interface ForgotPasswordProps {
  onClose: () => void;
}

const ForgotPasswordModal: React.FC<ForgotPasswordProps> = ({ onClose }) => {
  const [forgotData, setForgotData] = useState<FormDataLogin>({
    email: "",
    password: "",
  });

  const { handleShowForgotOTP} = useAuth();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setForgotData({ ...forgotData, [id]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const response = await userAxios.post(userEndpoints.forgotPassword, { forgotData });
    console.log("am herehre forgot otp doal page",response.data)
    if(response.data){
      handleShowForgotOTP()

    }else{
      toast.error("Something went wrong")
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative w-full max-w-md px-4 h-full md:h-auto flex items-center justify-center">
        <div className="bg-white p-14 rounded-xl shadow-lg w-full mx-4 sm:mx-6 md:mx-0 md:max-w-lg lg:max-w-xl">
          <div className="flex justify-end p-2">
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
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
          <h6 className="text-xl font-medium m-7">Reset your password here</h6>
          <form className="w-full max-w-md" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                className="block text-gray-600 font-semibold mb-2"
                htmlFor="email"
              >
                Enter your email
              </label>
              <input
                className="bg-white appearance-none border-2 border-gray-100 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-300"
                id="email"
                type="text"
                value={forgotData.email}
                onChange={handleChange}
                placeholder=""
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-600 font-semibold mb-2"
                htmlFor="password"
              >
                New Password
              </label>
              <input
                className="bg-white appearance-none border-2 border-gray-100 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-300"
                id="password"
                value={forgotData.password}
                onChange={handleChange}
                type="password"
                placeholder=""
              />
            </div>
            <div className="flex flex-col items-center justify-center mb-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mb-2">
                Reset password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
