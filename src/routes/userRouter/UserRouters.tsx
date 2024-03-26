import { Route, Routes } from "react-router-dom"
import userEndpoints from "../../constraints/endpoints/userEndpoints"
import Home from "../../pages/user/UserHomePage"
import Login from "../../components/User/Auth/Login"
import Signup from "../../components/User/Auth/Signup"



const UserRouters = () => {
  return (
       <Routes>
        <Route Component={Home}  path={userEndpoints.home} />
        <Route Component={Login}  path={userEndpoints.login} />
        <Route Component={Signup}  path={userEndpoints.register} />

       </Routes>
    
  )
}

export default UserRouters