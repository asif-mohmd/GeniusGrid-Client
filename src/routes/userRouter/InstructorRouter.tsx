import { Route, Routes } from 'react-router'
import Login from '../../components/Instructor/Auth/Login'
import instructorEndpoint from '../../constraints/endpoints/instructorEndpoint'

export const InstructorRouter = () => {
  return (
    <Routes>
        <Route Component={Login} path={instructorEndpoint.login}></Route>
    </Routes>
  )
}
