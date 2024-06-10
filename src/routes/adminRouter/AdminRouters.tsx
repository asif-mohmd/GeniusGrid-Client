import { Route, Routes } from 'react-router'

import AdminLoginPage from '../../pages/admin/AdminLoginPage'
import AdminDashboardUsers from '../../pages/admin/AdminDashboardUsers'
import AdminDashboard from '../../pages/admin/AdminDashboard'
import AdminDashboardInstructors from '../../pages/admin/AdminInstructors'
import AdminAddCategory from '../../pages/admin/AdminAddCategory'
import AdminPublicRoute from './AdminPublicRoute'
import AdminProtectorRoute from './AdminProtectorRoute'

const AdminRouters = () => {
  return (
   <Routes>
      <Route  path="/login" element={<AdminPublicRoute component={AdminLoginPage} />} />
      <Route  path="/" element={<AdminProtectorRoute component={AdminDashboard} /> } />
      <Route  path="users" element={<AdminProtectorRoute component={AdminDashboardUsers} /> } />
      <Route  path="/instructors" element={<AdminProtectorRoute component={AdminDashboardInstructors} /> } />
      <Route  path='/add/category' element={<AdminProtectorRoute component={AdminAddCategory} /> } />



   </Routes>
  )
}

export default AdminRouters