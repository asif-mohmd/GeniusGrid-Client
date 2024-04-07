// OTPPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import instructorEndpoints from '../../../constraints/endpoints/instructorEndpoints';
import { instructoraxios } from '../../../constraints/axiosInterceptors/instructorAxiosInterceptors';

const InstructorOTPPage: React.FC = () => {
  const [otp, setOTP] = useState('');

  const navigate = useNavigate()

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    // Handle OTP submission logic here
    console.log('OTP submitted:', otp);
    const instructorData =  await instructoraxios.post(instructorEndpoints.otp,{otp})
   console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkk")
    console.log("after axios",instructorData)
    if(instructorData.status == 200){
      navigate(instructorEndpoints.login)
    }else{
      toast.error('Invalid email or password');
      navigate(instructorEndpoints.otp)
    }

  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <ToastContainer />
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Enter Instructor OTP</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded px-4 py-2 font-semibold hover:bg-blue-600 transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default InstructorOTPPage;
