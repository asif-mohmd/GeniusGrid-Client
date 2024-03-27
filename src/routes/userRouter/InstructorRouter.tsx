import { Route, Routes } from 'react-router'
import Login from '../../components/Instructor/Auth/Login'
import instructorEndpoint from '../../constraints/endpoints/instructorEndpoints'

export const InstructorRouter = () => {
  return (
    <Routes>
        <Route Component={Login} path={instructorEndpoint.login}></Route>
        {/* <Route Component={Dashboard} path={instructorEndpoint.dashboard}></Route> */}
    </Routes>
  )
}
