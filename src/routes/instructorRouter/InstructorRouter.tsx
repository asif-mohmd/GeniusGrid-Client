import { Route, Routes } from 'react-router'

import InstructorDashboard from '../../pages/instructor/InstructorDashboard'

import InstructorLoginPage from '../../pages/instructor/InstructorLoginPage'
import InstructorSignupPage from '../../pages/instructor/InstructorSignupPage'
import InstructorOTPPage from '../../components/Instructor/Auth/OTPPage'
import InstructorUserPage from '../../pages/instructor/InstructorUserPage'


export const InstructorRouter = () => {
  return (
    <Routes>
        <Route Component={InstructorLoginPage} path="/login"></Route>
        <Route Component={InstructorSignupPage} path="/register"></Route>
        <Route Component={InstructorDashboard} path="/"></Route>
        <Route Component={InstructorOTPPage} path="/otp"></Route>
        <Route Component={InstructorUserPage} path="/users"></Route>


    </Routes>
  )
}
