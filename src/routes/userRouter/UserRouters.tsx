import { Route, Routes } from "react-router-dom"
import userEndpoints from "../../constraints/endpoints/userEndpoints"
import Home from "../../pages/user/UserHomePage"
import Login from "../../components/User/Auth/Login"
import Signup from "../../components/User/Auth/Signup"
import OTPPage from "../../components/User/Auth/OTPPage"
import ForgotPassword from "../../components/User/Auth/ForgotPassword"
import ForgotOTP from "../../components/User/Auth/ForgotOTP"
import  UserProtectorRoute  from "./UserProtectorRoute"
import UserPublicRoute from "./UserPublicRoute"
import UserCourseDetails from "../../pages/user/UserCourseDetails"
import UserCourseListPage from "../../pages/user/UserCourseListPage"
import courseEndspoints from "../../constraints/endpoints/courseEndspoints"
import PurchasedCourse from "../../pages/user/PurchasedCourse"
// import StripeForm from "../../components/User/Course/PaymentComponents/StripeForm"
import PaymentForm from "../../components/User/Course/PaymentComponents/PaymentForm"
import PaymentSuccess from "../../components/User/Course/PurchaseContents/PaymentSuccess"
import ProfileLanding from "../../pages/user/UserProfile/ProfileLanding"



const UserRouters = () => {
  return (
    // i using the userEndpoints as the path here because it same as user anywhere
    // But in instructor and admin 
       <Routes>
        <Route path={userEndpoints.home} element={<UserProtectorRoute component={Home} />} />
        <Route path={userEndpoints.login} element={<UserPublicRoute component={Login} />} />
        <Route path={userEndpoints.register} element={<UserPublicRoute component={Signup} />} />
        <Route path={userEndpoints.forgotPassword} element={<UserPublicRoute component={ForgotPassword} />}  />
        <Route path={userEndpoints.otp} element={<UserPublicRoute component={OTPPage} />} />
        <Route path={userEndpoints.forgotOTP} element={<UserPublicRoute component={ForgotOTP} />} />
        <Route path={userEndpoints.courseDetails} element={<UserProtectorRoute component={UserCourseDetails} />} />
        <Route path={courseEndspoints.allUserCourses} element={<UserProtectorRoute component={UserCourseListPage}/>} />
        <Route path={userEndpoints.purchasedCoures} element={<UserProtectorRoute component={PurchasedCourse}/>} />
        <Route path={userEndpoints.makePayment} element={<UserProtectorRoute component={PaymentForm}/>} />
        <Route path={userEndpoints.checkoutSuccess} element={<UserProtectorRoute component={PaymentSuccess}/>} />
        <Route path={userEndpoints.profilePage} element={<UserProtectorRoute component={ProfileLanding}/>} />





       </Routes>
    
  )
}

export default UserRouters
