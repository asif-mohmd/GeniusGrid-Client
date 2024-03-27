import { Route, Routes } from 'react-router'
import Login from '../../components/Instructor/Auth/Login'
import instructorEndpoint from '../../constraints/endpoints/instructorEndpoints'
import InstructorDashboard from '../../pages/instructor/InstructorDashboard'

export const InstructorRouter = () => {
  return (
    <Routes>
        <Route Component={Login} path={instructorEndpoint.login}></Route>
        <Route Component={InstructorDashboard} path={instructorEndpoint.dashboard}></Route>
    </Routes>
  )
}
