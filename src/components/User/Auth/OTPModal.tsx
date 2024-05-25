import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { userAxios } from "../../../constraints/axiosInterceptors/userAxiosInterceptors";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/Store";
import userEndpoints from "../../../constraints/endpoints/userEndpoints";
import { userLogin } from "../../../redux/userSlices/authSlice";
import { setUserId } from "../../../redux/userSlices/userDataSlice";

interface OTPModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const OTPModal: React.FC<OTPModalProps> = ({ isVisible, onClose }) => {
  const [timer, setTimer] = useState(60); // Initial timer value (in seconds)
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [resendClicked, setResendClicked] = useState(false);
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
    try {
      const response = await userAxios.post(userEndpoints.register, {
        formData,
      });
      if (response.status === 200) {
        toast.success("OTP resent successfully");
      } else {
        toast.error("OTP resend failed");
      }
      setTimer(60); // Reset timer
      setIsTimerRunning(true);
      setResendClicked(true);
    } catch (error) {
      toast.error("Failed to resend OTP. Please try again.");
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (values: { otp: string }, { setSubmitting }: any) => {
    try {
      const userData = await userAxios.post(userEndpoints.otp, { otp: values.otp });
      if (userData.status === 200) {
        dispatch(setUserId(userData.data.userId))
        dispatch(userLogin());
        toast.success("OTP verified successfully");
        onClose(); // Close the modal after successful OTP verification
      } else {
        toast.error("Invalid OTP");
      }
    } catch (error) {
      toast.error("Incorrect OTP");
    } finally {
      setSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative w-full max-w-md px-4 h-full md:h-auto flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg relative w-full mx-4 sm:mx-6 md:mx-0 md:max-w-lg lg:max-w-xl">
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

          <div className="p-8">
            <h5 className="text-2xl font-medium mb-7 text-center">Enter your OTP</h5>
            <Formik
              initialValues={{ otp: "" }}
              validationSchema={Yup.object({
                otp: Yup.string()
                  .length(4, "OTP must be 6 digits")
                  .required("OTP is required"),
              })}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="mb-4">
                    <label className="block font-semibold mb-2" htmlFor="otp">
                      OTP
                    </label>
                    <Field
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      type="text"
                      name="otp"
                      placeholder="Enter OTP"
                    />
                    <ErrorMessage
                      className="text-red-500 text-sm"
                      name="otp"
                      component="div"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center mb-4">
                    <button
                      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Verifying..." : "Verify"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
            <div className="flex justify-between items-center mt-4 text-gray-600 text-sm">
              {!resendClicked && (
                <p>
                  Didn't receive OTP?{" "}
                  <span
                    className="text-blue-600 font-semibold cursor-pointer hover:underline"
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
      </div>
    </div>
  );
};

export default OTPModal;
