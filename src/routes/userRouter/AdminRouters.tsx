import { Route, Routes } from 'react-router'
import Login from '../../components/Admin/Auth/Login'
import adminEndpoints from '../../constraints/endpoints/adminEndpoints'
import Dashboard from '../../pages/admin/AdminDashboard'

const AdminRouters = () => {
  return (
   <Routes>
      <Route Component={Login} path={adminEndpoints.login}/>
      <Route Component={Dashboard} path={adminEndpoints.dashboard}></Route>

   </Routes>
  )
}

export default AdminRouters