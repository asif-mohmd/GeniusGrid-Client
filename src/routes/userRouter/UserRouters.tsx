import { Route, Routes } from "react-router-dom"
import userEndpoints from "../../constraints/endpoints/userEndpoints"
import Home from "../../pages/user/UserHomePage"



const UserRouters = () => {
  return (
       <Routes>
        <Route Component={Home}  path={userEndpoints.home} />
       </Routes>
    
  )
}

export default UserRouters