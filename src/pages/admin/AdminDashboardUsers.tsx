import DashboardHeader from "../../components/Admin/Dashboard/DashBoardHeader";
import DashboardSidebar from "../../components/Admin/Dashboard/DashboardSidebar";
import DashboardUsers from "../../components/Admin/Dashboard/DashboardUsers";

function AdminDashboardUsers() {
  return (
    <div className="flex">
      <DashboardSidebar />
      <div className="h-screen flex-1">
        <DashboardHeader />
        <DashboardUsers />
      </div>
    </div>
  );
}

export default AdminDashboardUsers;
