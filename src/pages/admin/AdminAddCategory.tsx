import DashboardHeader from '../../components/Admin/Dashboard/DashBoardHeader'
import DashboardAddCategory from '../../components/Admin/Dashboard/DashboardAddCategory'
import DashboardSidebar from '../../components/Admin/Dashboard/DashboardSidebar'

function AdminAddCategory() {
  return (

    <div className="flex">
    <DashboardSidebar />
    <div className="h-screen flex-1">
      <DashboardHeader />
    <DashboardAddCategory/>
    </div>
    </div>
  )
}

export default AdminAddCategory