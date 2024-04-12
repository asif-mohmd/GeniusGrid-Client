// OTPPage.tsx
import React, { useState } from 'react';
import { userAxios } from '../../../constraints/axiosInterceptors/userAxiosInterceptors';
import userEndpoints from '../../../constraints/endpoints/userEndpoints';
import { useNavigate } from 'react-router';

const ForgotOTP: React.FC = () => {
  const [otp, setOTP] = useState('');

  const navigate = useNavigate()

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    // Handle OTP submission logic here
    const userData =  await userAxios.post(userEndpoints.forgotOTP,{otp})
    if(userData.status){
      navigate("/login")
    }

  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Enter OTP</h2>
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

export default ForgotOTP;
