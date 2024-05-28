import DashboardViewCategory from '../../components/Admin/Dashboard/DashboardViewCategory'
import DashboardHeader from '../../components/Admin/Dashboard/DashBoardHeader'
import DashboardSidebar from '../../components/Admin/Dashboard/DashboardSidebar'

function AdminViewCategory() {
    return (

        <div className="flex bg-[#171f3c]">
        <DashboardSidebar />
        <div className=" flex-1">
          <DashboardHeader />
        <DashboardViewCategory/>
        </div>
        </div>
      )
}

export default AdminViewCategory