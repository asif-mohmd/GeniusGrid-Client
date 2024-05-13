import React, { ChangeEvent, FormEvent, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import userEndpoints from "../../../constraints/endpoints/userEndpoints";
import { FormDataLogin } from "../../../interfaces/AuthInterfaces/IAuthInterface";
import { userAxios } from "../../../constraints/axiosInterceptors/userAxiosInterceptors";






const ForgotPassword: React.FC = () => {

  const [forgotData,setforgotData] = useState<FormDataLogin>({
    email: "",
    password: "",
  })

  const navigate = useNavigate()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e,"targettttttttttttttttttttttttt")
    const { id, value } = e.target;
    setforgotData({ ...forgotData, [id]: value });
  };

  const handleSubmit = async(e:FormEvent) =>{
    e.preventDefault();

    console.log(forgotData,"login data")
    const userData = await userAxios.post(userEndpoints.forgotPassword,{forgotData})
   console.log(userData,"after login")
   navigate("/forgototp")
    

  }

   return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-gray-100">
      <div className="bg-white p-14 rounded-xl shadow-lg">
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
  );
};

export default ForgotPassword;
