import DashboardHeader from '../../components/Admin/Dashboard/DashBoardHeader'
import DashboardAddCategory from '../../components/Admin/Dashboard/DashboardAddCategory'
import DashboardSidebar from '../../components/Admin/Dashboard/DashboardSidebar'

function AdminAddCategory() {
  return (

    <div className="flex bg-[#171f3c]">
    <DashboardSidebar />
    <div className=" flex-1">
      <DashboardHeader />
    <DashboardAddCategory/>
    </div>
    </div>
  )
}

export default AdminAddCategory