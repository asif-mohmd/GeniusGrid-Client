import DashboardViewCategory from '../../components/Admin/Dashboard/DashboardViewCategory'
import DashboardHeader from '../../components/Admin/Dashboard/DashBoardHeader'
import DashboardSidebar from '../../components/Admin/Dashboard/DashboardSidebar'

function AdminViewCategory() {
    return (

        <div className="flex">
        <DashboardSidebar />
        <div className="h-screen flex-1">
          <DashboardHeader />
        <DashboardViewCategory/>
        </div>
        </div>
      )
}

export default AdminViewCategory