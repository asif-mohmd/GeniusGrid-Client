import { Route, Routes } from "react-router-dom"
import userEndpoints from "../../constraints/endpoints/userEndpoints"
import Home from "../../pages/user/UserHomePage"
import Login from "../../components/User/Auth/Login"
import Signup from "../../components/User/Auth/Signup"
import OTPPage from "../../components/User/Auth/OTPPage"
import ForgotPassword from "../../components/User/Auth/ForgotPassword"
import ForgotOTP from "../../components/User/Auth/ForgotOTP"



const UserRouters = () => {
  return (
       <Routes>
        <Route Component={Home}  path={userEndpoints.home} />
        <Route Component={Login}  path={userEndpoints.login} />
        <Route Component={Signup}  path={userEndpoints.register} />
        <Route Component={ForgotPassword}  path={userEndpoints.forgotPassword} />
        <Route Component={OTPPage}  path={userEndpoints.otp} />
        <Route Component={ForgotOTP}  path={userEndpoints.forgotOTP} />



       </Routes>
    
  )
}

export default UserRouters