import { Route, Routes } from "react-router";

import InstructorDashboard from "../../pages/instructor/InstructorDashboard";

import InstructorLoginPage from "../../pages/instructor/InstructorLoginPage";
import InstructorSignupPage from "../../pages/instructor/InstructorSignupPage";
import InstructorOTPPage from "../../components/Instructor/Auth/OTPPage";
import InstructorUserPage from "../../pages/instructor/InstructorUserPage";
import InstructorCreateCourse from "../../pages/instructor/InstructorCreateCourse";
import InstructorProtectorRoute from "./InstructorProtectorRoute";
import InstructorPublicRoute from "./InstructorPublicRoute";
import InstructorListCourse from "../../pages/instructor/InstructorListCourses";
import EditCourse from "../../components/Instructor/Dashboard/courseSection/EditCourse";
import InstructorProfilePage from "../../pages/instructor/InstructorProfilePage";
import InstructorUserAnalysis from "../../pages/instructor/InstructorUserAnalysis";
import InstructorOrderAnalysis from "../../pages/instructor/InstructorOrderAnalysis";
import LessonContentManage from "../../pages/instructor/LessonContentManage"
import InstructorTranscodeVideo from "../../pages/instructor/InstructorTranscodeVideo";

export const InstructorRouter = () => {
  return (

    <Routes>
      <Route path="/login" element={<InstructorPublicRoute component={InstructorLoginPage} />}> </Route>
      <Route path="/register" element={<InstructorPublicRoute component={InstructorSignupPage} />}></Route>
      <Route path="/" element={<InstructorProtectorRoute component={InstructorDashboard} />} ></Route>
      <Route path="/otp" element={<InstructorPublicRoute component={InstructorOTPPage} />}></Route>
      <Route path="/users" element={<InstructorProtectorRoute component={InstructorUserPage} />} ></Route>
      <Route path="/create/course" element={<InstructorProtectorRoute component={InstructorCreateCourse} />}></Route>
      <Route path="/my/courses" element={<InstructorProtectorRoute component={InstructorListCourse} />}></Route>
      <Route path="/edit/course" element={<InstructorProtectorRoute component={EditCourse} />}></Route>
      <Route path="/add/lesson/page" element={<InstructorProtectorRoute component={LessonContentManage} />}></Route>

      <Route path="/profile/page" element={<InstructorProtectorRoute component={InstructorProfilePage} />}></Route>
      <Route path="/user/analysis" element={<InstructorProtectorRoute component={InstructorUserAnalysis} />}></Route>
      <Route path="/order/analysis" element={<InstructorProtectorRoute component={InstructorOrderAnalysis} />}></Route>
      <Route path="/transcode/video" element={<InstructorProtectorRoute component={InstructorTranscodeVideo}/>}></Route>




    </Routes>
  );
};
