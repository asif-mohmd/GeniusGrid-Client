// OTPPage.tsx
import React, { useState } from 'react';
import { userAxios } from '../../../constraints/axiosInterceptors/userAxiosInterceptors';
import userEndpoints from '../../../constraints/endpoints/userEndpoints';
import { toast } from 'react-toastify';

interface ForgotOTPModalProps {
    onClose: () => void;
  }

const ForgotOTPModal: React.FC<ForgotOTPModalProps> = ({onClose}) => {
  const [otp, setOTP] = useState('');


  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    // Handle OTP submission logic here
    const userData =  await userAxios.post(userEndpoints.forgotOTP,{otp})
    if(userData.status){
      toast.success("Password changed successfully");
      onClose()
    }else{
      toast.error("Something went wrong");
    }

  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
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

export default ForgotOTPModal;
