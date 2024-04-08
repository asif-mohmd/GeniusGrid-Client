import { Route, Routes } from 'react-router'

import adminEndpoints from '../../constraints/endpoints/adminEndpoints'
import AdminLoginPage from '../../pages/admin/AdminLoginPage'
import AdminDashboardUsers from '../../pages/admin/AdminDashboardUsers'
import AdminDashboard from '../../pages/admin/AdminDashboard'
import AdminDashboardInstructors from '../../pages/admin/AdminInstructors'

const AdminRouters = () => {
  return (
   <Routes>
      <Route Component={AdminLoginPage} path="/login" />
      <Route Component={AdminDashboard} path="/"></Route>
      <Route Component={AdminDashboardUsers} path={adminEndpoints.users}></Route>
      <Route Component={AdminDashboardInstructors} path={adminEndpoints.instructors}></Route>



   </Routes>
  )
}

export default AdminRouters