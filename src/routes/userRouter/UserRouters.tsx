import { Route, Routes } from "react-router-dom"
import userEndpoints from "../../constraints/endpoints/userEndpoints"
import Home from "../../pages/user/UserHomePage"
import Login from "../../components/User/Auth/Login"



const UserRouters = () => {
  return (
       <Routes>
        <Route Component={Home}  path={userEndpoints.home} />
        <Route Component={Login}  path={userEndpoints.login} />

       </Routes>
    
  )
}

export default UserRouters