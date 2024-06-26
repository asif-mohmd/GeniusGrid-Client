import DashboardHeader from '../../components/Admin/Dashboard/DashBoardHeader'
import DashboardAddCategory from '../../components/Admin/Dashboard/DashboardAddCategory'
import DashboardSidebar from '../../components/Admin/Dashboard/DashboardSidebar'
import DashboardViewCategory from '../../components/Admin/Dashboard/DashboardViewCategory'

function AdminAddCategory() {
  return (

    <div className="flex min-h-screen h-screen">
    <DashboardSidebar />
    <div className="flex-1 overflow-auto bg-gray-50">
      <DashboardHeader />
    <DashboardAddCategory/>
    <DashboardViewCategory/>
    </div>
    </div>
  )
}

export default AdminAddCategory