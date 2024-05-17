import React, { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import userEndpoints from "../../../constraints/endpoints/userEndpoints";
import { FormDataLogin } from "../../../interfaces/AuthInterfaces/IAuthInterface";
import { userAxios } from "../../../constraints/axiosInterceptors/userAxiosInterceptors";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../../../redux/userSlices/authSlice";
import { setUserId } from "../../../redux/userSlices/userDataSlice";




const Login: React.FC = () => {

  const [loginData,setLoginData] = useState<FormDataLogin>({
    email: "",
    password: "",
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e,"targettttttttttttttttttttttttt")
    const { id, value } = e.target;
    setLoginData({ ...loginData, [id]: value });
  };

  const handleSubmit = async(e:FormEvent) =>{
    e.preventDefault();

    console.log(loginData,"login data")
    const userData = await userAxios.post(userEndpoints.login,{loginData})
   console.log(userData,"after login")
    if(userData.data.loginStatus){
      console.log(userData.data,"--------------------------")
      dispatch(setUserId(userData.data.userId))
      dispatch(userLogin())
        navigate(userEndpoints.home)
    }else{
      console.log("else login")
        toast.error('Invalid email or password');
    }

  }

   return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="bg-gray-100 absolute inset-0 opacity-50"></div>
      <ToastContainer />
      <div className="bg-white p-14 rounded-xl shadow-lg relative z-10">
        <button></button>
        <h6 className="text-xl font-medium m-7">Login to your account</h6>
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              className="block text-gray-600 font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="bg-white appearance-none border-2 border-gray-100 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-300"
              id="email"
              type="text"
              value={loginData.email}
              onChange={handleChange}
              placeholder=""
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-600 font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="bg-white appearance-none border-2 border-gray-100 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-300"
              id="password"
              value={loginData.password}
              onChange={handleChange}
              type="password"
              placeholder=""
            />
          </div>
          <div className="flex flex-col items-center justify-center mb-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mb-2">
              Login now
            </button>
            <div className="m-3">
              <span className="text-gray-600 text-sm">
                Don't have an account?{' '}
                <Link className="text-blue-600 font-semibold" to={userEndpoints.register}>
                  Sign Up
                </Link>
              </span>
            </div>
            <div className="m-3">
              <span className="text-gray-600 text-sm">
                Forgot your password?{' '}
                <Link className="text-blue-600 font-semibold" to={userEndpoints.forgotPassword}>
                  Reset it here
                </Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
