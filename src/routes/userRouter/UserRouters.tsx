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



       </Routes>
    
  )
}

export default UserRouters
