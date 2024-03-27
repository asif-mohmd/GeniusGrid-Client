import React, { ChangeEvent, FormEvent, useState } from "react";
import { FormDataLogin } from "../../../interfaces/authInterface";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { instructoraxios } from "../../../constraints/axiosInterceptors/instructorAxiosInterceptors";
import instructorEndpoints from "../../../constraints/endpoints/instructorEndpoints";
const AdminLogin: React.FC = () => {

  const [instructorLoginData,setInstructorLoginData] = useState<FormDataLogin>({
    email:"",
    password:""
  })

  const navigate = useNavigate()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e,"targettttttttttttttttttttttttt")
    const { id, value } = e.target;
    setInstructorLoginData({ ...instructorLoginData, [id]: value });
  };

  
  const handleSubmit = async(e:FormEvent) =>{
    e.preventDefault();

    console.log(instructorLoginData,"login data")
    const userData = await instructoraxios.post(instructorEndpoints.login,{instructorLoginData})

    if(userData.data.loginStatus){
        navigate(instructorEndpoints.dashboard)
    }else{
        toast.error('Invalid email or password');
    }
  }


  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-gray-100">
      <div className="bg-white p-14 rounded-xl shadow-lg">
        <h6 className="text-xl font-medium text-center m-7">Instructor Login</h6>
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              className="block text-gray-600 font-semibold mb-2"
              htmlFor="full-name"
            >
              Email
            </label>
            <input
              className="bg-white appearance-none border-2 border-gray-100 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-300"
              id="email"
              value={instructorLoginData.email}
              onChange={handleChange}
              type="text"
              defaultValue=""
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
              value={instructorLoginData.password}
              onChange={handleChange}
              type="password"
              placeholder=""
            />
          </div>
          <div className="flex flex-col items-center justify-center mb-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mb-2 ">
              Login now
            </button>
            <div className="m-3">
        
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
