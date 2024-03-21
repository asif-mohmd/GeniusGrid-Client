

import React from 'react'
import { Route, Routes } from 'react-router'
import Login from '../../components/Admin/Auth/Login'
import adminEndpoints from '../../constraints/endpoints/adminEndpoints'

const AdminRouters = () => {
  return (
   <Routes>
      <Route Component={Login} path={adminEndpoints.login}/>
   </Routes>
  )
}

export default AdminRouters