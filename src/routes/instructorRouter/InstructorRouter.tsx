import { Route, Routes } from "react-router";

import InstructorDashboard from "../../pages/instructor/InstructorDashboard";

import InstructorLoginPage from "../../pages/instructor/InstructorLoginPage";
import InstructorSignupPage from "../../pages/instructor/InstructorSignupPage";
import InstructorOTPPage from "../../components/Instructor/Auth/OTPPage";
import InstructorUserPage from "../../pages/instructor/InstructorUserPage";
import InstructorCreateCourse from "../../pages/instructor/InstructorCreateCourse";
import InstructorProtectorRoute from "./InstructorProtectorRoute";
import InstructorPublicRoute from "./InstructorPublicRoute";

export const InstructorRouter = () => {
  return (

    <Routes>
      <Route path="/login" element={<InstructorPublicRoute component={InstructorLoginPage} />}> </Route>
      <Route path="/register" element={<InstructorPublicRoute component={InstructorSignupPage} />}></Route>
      <Route path="/" element={<InstructorProtectorRoute component={InstructorDashboard} />} ></Route>
      <Route path="/otp" element={<InstructorPublicRoute component={InstructorOTPPage} />}></Route>
      <Route path="/users" element={<InstructorProtectorRoute component={InstructorUserPage} />} ></Route>
      <Route path="/create/course" element={<InstructorProtectorRoute component={InstructorCreateCourse} />}></Route>
    </Routes>
  );
};
