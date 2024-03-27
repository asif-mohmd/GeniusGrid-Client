import { Route, Routes } from 'react-router'

import adminEndpoints from '../../constraints/endpoints/adminEndpoints'
import Dashboard from '../../pages/admin/AdminDashboard'
import AdminLoginPage from '../../pages/admin/AdminLoginPage'

const AdminRouters = () => {
  return (
   <Routes>
      <Route Component={AdminLoginPage} path={adminEndpoints.login}/>
      <Route Component={Dashboard} path={adminEndpoints.dashboard}></Route>

   </Routes>
  )
}

export default AdminRouters