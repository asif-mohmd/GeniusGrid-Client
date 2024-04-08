import React, { useState, useEffect } from "react";
import { userAxios } from "../../../constraints/axiosInterceptors/userAxiosInterceptors";
import userEndpoints from "../../../constraints/endpoints/userEndpoints";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/Store";
import { clearRegisterData } from "../../../redux/registerData/registerData";

const OTPPage: React.FC = () => {
  const [otp, setOTP] = useState("");
  const [timer, setTimer] = useState(60); // Initial timer value (in seconds)
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [resendClicked, setResendClicked] = useState(false);

  const navigate = useNavigate();
  const { formData } = useSelector((store: RootState) => store.registerData);
  const dispatch = useDispatch();

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isTimerRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      setIsTimerRunning(false);
    }

    return () => clearInterval(interval);
  }, [isTimerRunning, timer]);

  const handleResendOTP = async () => {
    // Implement logic to resend OTP
    try {
      // Code to resend OTP
      const response = await userAxios.post(userEndpoints.register, {
        formData,
      });
      if (response) {
        toast.success("OTP resent successfully");
        setTimer(60); // Reset timer
        setIsTimerRunning(true);
        setResendClicked(true);
      } else {
        toast.success("OTP resent failed");
        setTimer(60); // Reset timer
        setIsTimerRunning(true);
        setResendClicked(true);
      }
    } catch (error) {
      toast.error("Failed to resend OTP. Please try again.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle OTP submission logic here
    console.log("OTP submitted:", otp);
    try {
      const userData = await userAxios.post(userEndpoints.otp, { otp });
      console.log("after axios", userData);
      if (userData.status === 200) {
        dispatch(clearRegisterData());
        navigate("/login");
      } else {
        toast.error("Invalid OTP");
      }
    } catch (error) {
      console.error("Error submitting OTP:", error);
      toast.error("Failed to submit OTP. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <ToastContainer />
      <div className="bg-white p-8 rounded shadow-xl w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Enter OTP</h2>
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
            className="w-full bg-blue-500 text-white rounded-xl px-4 py-2 font-semibold hover:bg-blue-600 transition-colors duration-300"
          >
            Submit
          </button>
        </form>
        <div className="flex justify-between items-center mt-4">
          {!resendClicked && (
            <p>
              Didn't receive OTP?{" "}
              <span
                className="text-blue-500 cursor-pointer hover:underline"
                onClick={handleResendOTP}
              >
                Resend OTP
              </span>
            </p>
          )}
          {resendClicked && <p>Resend OTP in {timer} seconds</p>}
        </div>
      </div>
    </div>
  );
};

export default OTPPage;
